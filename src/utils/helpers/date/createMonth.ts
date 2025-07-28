import { createDate } from "./createDate";
import { getMonthNumberOfDays } from "./getMonthNumberDays";

interface ICreateMonthProps {
  locale?: string;
  date?: Date;
}

// функция для работы с месяцами
export const createMonth = (arg: ICreateMonthProps) => {
  if (!arg) arg = {};
  const locale = arg.locale ?? "default";
  const date = arg.date ?? new Date();

  const data = createDate({ date, locale });

  const { month: monthName, year, monthNumber, monthIndex } = data;

  const getDay = (dayNumber: number) => {
    return createDate({ date: new Date(year, monthIndex, dayNumber), locale });
  };

    //генерируем массив объектов для каждого дня в месяце
  const createMonthDays = () => {
    const days = [];
    const daysIsMonth = getMonthNumberOfDays({ monthIndex, yearNumber: year });
    for (let i = 1; i <= daysIsMonth; i++) {
      days[i - 1] = getDay(i);
    }
    return days;
  };

  return {
    getDay,
    monthName,
    monthIndex,
    monthNumber,
    year,
    createMonthDays,
  };
};
