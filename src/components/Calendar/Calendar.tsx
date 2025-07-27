import { useContext, useState } from "react"
import { NavButton, NavButtonText, NavCalendar, PopoverBlock, PopoverWrapper } from "./styleCalendar"
import { AbcoluteCalendar } from "../AbcoluteCalendar/AbcoluteCalendar"
import type { TCalendarDays } from "../hooks/types"
import { CalendarContext } from "../../utils/providers/calendarProvider"


const navCalendarState = {
  ABSOLUTE: 'absolute',
  RELATIVE: 'relative',
  NOW: 'now'
} as const

type TCalendarState = typeof navCalendarState[keyof typeof navCalendarState]

interface ICalendarProps {
  anchorEl: HTMLElement | null;
  setDate: (date: Date) => void;
  startDate?: Date;
  endDate?: Date;
}

export const Calendar = (props: ICalendarProps) => {
  const { anchorEl, setDate, startDate } = props;

  const calendar = useContext(CalendarContext);
  if (!calendar) throw Error('Can not fined CalendarContext')
  const { calendar: { state, functions }, setCurrentDate, type } = calendar;
  const [navState, setNavState] = useState<TCalendarState>(navCalendarState.ABSOLUTE)

  const hendlerNav = (type: TCalendarState) => {
    setNavState((prev) => prev === type ? prev : type);
  }

  const hendlerSelectDay = (day: TCalendarDays) => {
    if (type === 'start') {
      setCurrentDate(day.date)
      setDate(day.date)
    } else {
      if (startDate && day.date < startDate) {
        setCurrentDate(startDate)
        setDate(startDate)
      } else {
        setCurrentDate(day.date)
        setDate(day.date)
      }
    }
  }


  const selectMonthName = state.monthNames[state.selectedMonth.monthIndex].month // название выбранного месяца
  const selectYear = state.selectedYear // выбранный год

  const getPosition = (anchor: HTMLElement | null) => {
    if (!anchor) return { top: 0, left: 0 };

    const rect = anchor.getBoundingClientRect();

    return {
      top: rect.top,
      left: rect.left - rect.width / 2,
    }
  }

  const position = getPosition(anchorEl);

  return (
    <PopoverWrapper $left={`${position.left}`} $top={`${position.top}`}>
      <PopoverBlock>
        <NavCalendar>
          {[navCalendarState.ABSOLUTE, navCalendarState.RELATIVE, navCalendarState.NOW].map(
            (button) => (
              <NavButton
                key={button}
                $isActive={navState === button}
                onClick={() => hendlerNav(button)}
              >
                <NavButtonText>{button}</NavButtonText>
              </NavButton>))}
        </NavCalendar>

        {navState === navCalendarState.ABSOLUTE &&
          <AbcoluteCalendar
            selectedDay={state.selectedDate}
            onClick={hendlerSelectDay}
            currentMonthIndex={state.selectedMonth.monthIndex}
            calendarDays={state.calendarDays}
            weekDaysNames={state.weekNames}
            title={`${selectMonthName} ${selectYear}`}
            handlerNextMonth={functions.arrowNextMonth}
            handlerPrevMonth={functions.arrowPrevMonth}
          />}

      </PopoverBlock>
    </PopoverWrapper>
  )
}

