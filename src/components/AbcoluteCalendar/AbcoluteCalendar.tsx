import { checkIsToday, type IweekDaysNames } from "../../utils/helpers/date";
import { IconArrow_next, IconArrow_prev } from "../Calendar/styleCalendar";

import type { TCalendarDays } from "../hooks/types";
import { CalendarBody, CalendarHeading, CalendarTitle, MontDaysNumbers, MonthDaysNumbersItem, WeekNames, WeekNamesItem } from "./styleAbcoluteCalendar";

interface IAbcoluteCalendarProps {
  weekDaysNames: IweekDaysNames[]
  title: string;
  calendarDays: TCalendarDays[];
  selectedDay: TCalendarDays;
  currentMonthIndex: number;
  onClick(day: TCalendarDays): void;
  handlerNextMonth: () => void;
  handlerPrevMonth: () => void;
}

export const AbcoluteCalendar = ({ weekDaysNames, title, calendarDays, currentMonthIndex, 
  onClick, selectedDay, handlerNextMonth, handlerPrevMonth }: IAbcoluteCalendarProps) => {

  return (

    <CalendarBody>
      <CalendarHeading>
        <IconArrow_prev onClick={handlerPrevMonth} />
        <CalendarTitle>
          {title}
        </CalendarTitle>
        <IconArrow_next onClick={handlerNextMonth} />
      </CalendarHeading>
      <WeekNames>
        {weekDaysNames.map(weekDayName => <WeekNamesItem key={weekDayName.day}>{weekDayName.dayShort}</WeekNamesItem>
        )}
      </WeekNames>
      <MontDaysNumbers>


        {calendarDays.map((day) => {
          const isToday = checkIsToday(day.date);
          const isInactiveDays = day.monthIndex === currentMonthIndex;
          const isSelected = selectedDay === day

          return <MonthDaysNumbersItem
            key={`${day.dayNumber}-${day.monthIndex}`
            }
            onClick={() => onClick(day)}
            $today={isToday}
            $inactive={isInactiveDays}
            $selected={isSelected}>
            {day.dayNumber}
          </MonthDaysNumbersItem>
        })}
      </MontDaysNumbers>

    </CalendarBody>

  )
}
