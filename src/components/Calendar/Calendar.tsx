import { memo, useContext, useEffect, useMemo, useState } from "react";
import {
  NavButton,
  NavButtonText,
  NavCalendar,
  PopoverBlock,
  PopoverWrapper,
} from "./styleCalendar";
import { AbcoluteCalendar } from "../AbcoluteCalendar/AbcoluteCalendar";
import type { TCalendarDays } from "../hooks/types";
import { CalendarContext } from "../../utils/providers/calendarProvider";

const navCalendarState = {
  ABSOLUTE: "absolute",
  RELATIVE: "relative",
  NOW: "now",
} as const;

type TCalendarState = (typeof navCalendarState)[keyof typeof navCalendarState];

interface ICalendarProps {
  anchorEl: HTMLElement | null;
  setDate: (date: Date) => void;
  startDate?: Date;
  endDate?: Date;
  onClose?(): void;
}

//Лейаут для отображения календарей
export const Calendar = memo((props: ICalendarProps) => {
  const { anchorEl, setDate, startDate, onClose } = props;

  //проверка на отсутствие контекста
  const calendar = useContext(CalendarContext);
  if (!calendar) throw Error("Can not find CalendarContext");
  const {
    calendar: { state, functions },
    setCurrentDate,
    type,
  } = calendar;
  const [navState, setNavState] = useState<TCalendarState>(
    navCalendarState.ABSOLUTE
  );

  //обработчик закрытия при клике вне окна
  useEffect(() => {
    const calendar = document.querySelector(".popover-calendar");
    const anchor = anchorEl;
    if (!calendar || !onClose || !anchor) return;

    const closeCalendar = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!calendar.contains(target) && !anchor.contains(target)) {
        onClose();
      }
    };

    document.addEventListener("click", closeCalendar);

    return () => {
      document.removeEventListener("click", closeCalendar);
    };
  }, [anchorEl, onClose]);

  //хэндлер переключения календарей в лейауте Calendar
  const handlerNav = (type: TCalendarState) => {
    setNavState((prev) => (prev === type ? prev : type));
  };

  //хэндлер выбора дат с проверкой: если начальная дата больше конечной -> установим в конечную дату, начальную
  const handlerSelectDay = (day: TCalendarDays) => {
    if (type === "start") {
      setCurrentDate(day.date);
      setDate(day.date);
    } else {
      if (startDate && day.date < startDate) {
        setCurrentDate(startDate);
        setDate(startDate);
      } else {
        setCurrentDate(day.date);
        setDate(day.date);
      }
    }
  };

  const selectMonthName =
    state.monthNames[state.selectedMonth.monthIndex].month; // название выбранного месяца
  const selectYear = state.selectedYear; // выбранный год

  //определяем позицию элемента к которому привязываем компонент календаря
  const position = useMemo(() => {
    if (!anchorEl) return { top: 0, left: 0 };
    const rect = anchorEl.getBoundingClientRect();

    return {
      top: rect.top,
      left: rect.left,
    };
  }, [anchorEl]);

  return (
    <PopoverWrapper $left={`${position.left}`} $top={`${position.top}`}>
      <PopoverBlock $type={type}>
        <NavCalendar>
          {[
            navCalendarState.ABSOLUTE,
            navCalendarState.RELATIVE,
            navCalendarState.NOW,
          ].map((button) => (
            <NavButton
              key={button}
              $isActive={navState === button}
              onClick={() => handlerNav(button)}
            >
              <NavButtonText>{button}</NavButtonText>
            </NavButton>
          ))}
        </NavCalendar>

        {navState === navCalendarState.ABSOLUTE && (
          <AbcoluteCalendar
            selectedDay={state.selectedDate}
            onClick={handlerSelectDay}
            currentMonthIndex={state.selectedMonth.monthIndex}
            calendarDays={state.calendarDays}
            weekDaysNames={state.weekNames}
            title={`${selectMonthName} ${selectYear}`}
            handlerNextMonth={functions.arrowNextMonth}
            handlerPrevMonth={functions.arrowPrevMonth}
          />
        )}
      </PopoverBlock>
    </PopoverWrapper>
  );
});
