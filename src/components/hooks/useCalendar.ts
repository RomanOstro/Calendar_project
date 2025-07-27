import { useMemo, useState } from "react";
import {
  createDate,
  createMonth,
  getMonthNames,
  getMonthNumberOfDays,
  getWeekDaysNames,
} from "../../utils/helpers/date";

interface IUseCalendarProps {
  locale?: string;
  selectedDate: Date;
  firstWeekDay: number;
}

export const useCalendar = ({
  locale = "default",
  selectedDate: date,
  firstWeekDay = 2,
}: IUseCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState(createDate({ date }));
  const [selectedMonth, setSelectedMonth] = useState(
    createMonth({
      date: new Date(selectedDate.year, selectedDate.monthIndex),
      locale,
    })
  );
  const [selectedYear, setSelectedYear] = useState(selectedDate.year);

  const monthNames = getMonthNames(locale); // массив с названием мес
  const weekNames = getWeekDaysNames(firstWeekDay, locale); // указываем первый день недели

  const days = useMemo(() => selectedMonth.createMonthDays(), [selectedMonth]);

  //---calendarDays---START
  const calendarDays = useMemo(() => {
    const daysOfMonth = getMonthNumberOfDays({
      monthIndex: selectedMonth.monthIndex,
      yearNumber: selectedYear,
    });

    const prevMonthDays = createMonth({
      date: new Date(selectedYear, selectedMonth.monthIndex - 1),
      locale,
    }).createMonthDays();

    const nextMonthDays = createMonth({
      date: new Date(selectedYear, selectedMonth.monthIndex + 1),
      locale,
    }).createMonthDays();

    const firstDay = days[0];
    const lastDay = days[daysOfMonth - 1];

    const shiftIndex = firstWeekDay - 1; //индекс первого дня недели

    //сколько дней нужно дорисовать до начала мес - логика завязана с dayNumberInWeek в createDate!
    const numberOfPrevDays =
      firstDay.dayNumberInWeek - 1 - shiftIndex < 0
        ? 7 - (firstWeekDay - firstDay.dayNumberInWeek)
        : firstDay.dayNumberInWeek - 1 - shiftIndex;

    //сколько дней нужно дорисовать после начала мес - логика завязана с dayNumberInWeek в createDate!
    const numberOfNextDays =
      7 - lastDay.dayNumberInWeek + shiftIndex > 6
        ? 7 - lastDay.dayNumberInWeek - (7 - shiftIndex)
        : 7 - lastDay.dayNumberInWeek + shiftIndex;

    const totalCalendarDays = days.length + numberOfPrevDays + numberOfNextDays;

    const result = [];

    for (let i = 0; i < numberOfPrevDays; i++) {
      const inverted = numberOfPrevDays - i;
      result[i] = prevMonthDays[prevMonthDays.length - inverted];
    }

    for (
      let i = numberOfPrevDays;
      i < totalCalendarDays - numberOfNextDays;
      i++
    ) {
      result[i] = days[i - numberOfPrevDays];
    }

    for (
      let i = totalCalendarDays - numberOfNextDays;
      i < totalCalendarDays;
      i++
    ) {
      result[i] = nextMonthDays[i - totalCalendarDays + numberOfNextDays];
    }
    return result;
  }, [selectedMonth.monthIndex, selectedYear, locale]);
  //---calendarDays---END

  const updateCalendarStates = (date: Date) => {
    const newDateObj = createDate({ date });
    setSelectedDate(newDateObj);
    setSelectedMonth(
      createMonth({
        date: new Date(newDateObj.year, newDateObj.monthIndex),
        locale,
      })
    );
    setSelectedYear(newDateObj.year);
  };
  
  const arrowNextMonth = () => {
    const nextMonthIndex = selectedDate.monthIndex + 1;
    const newDate = new Date(selectedDate.year, nextMonthIndex);
    updateCalendarStates(newDate);
  };

  const arrowPrevMonth = () => {
    const nextMonthIndex = selectedDate.monthIndex - 1;
    const newDate = new Date(selectedDate.year, nextMonthIndex);
    updateCalendarStates(newDate);
  };

  return {
    state: {
      selectedDate,
      selectedMonth,
      selectedYear,
      weekNames,
      monthNames,
      calendarDays,
    },
    functions: {
      setSelectedDate,
      setSelectedMonth,
      setSelectedYear,
      arrowNextMonth,
      arrowPrevMonth,
    },
  };
};
