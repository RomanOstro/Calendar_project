import { getWeekNumber } from "./getWeekNumber";

interface ICreateDateProps {
  locale?: string;
  date?: Date;
}

export const createDate = (arg: ICreateDateProps) => {
  if (!arg) arg = {};
  const locale = arg.locale ?? "default";

  const date = arg.date ?? new Date();

  const dayNumber = date.getDate();
  const day = date.toLocaleDateString(locale, { weekday: "long" });
  
  // Система нумерации дней:
  // Вс = 1, Пн = 2, ..., Сб = 7
  const dayNumberInWeek = date.getDay() + 1;

  const dayShort = date.toLocaleDateString(locale, { weekday: "short" });
  const year = date.getFullYear();
  const shortYear = date.toLocaleDateString(locale, { year: "2-digit" });
  const month = date.toLocaleDateString(locale, { month: "long" });
  const monthShort = date.toLocaleDateString(locale, { month: "short" });
  const monthNumber = date.getMonth() + 1;
  const monthIndex = date.getMonth();
  const timeStamp = date.getTime();
  const weekNumber = getWeekNumber(date);

  return {
    date,
    dayNumber,
    day,
    dayNumberInWeek,
    dayShort,
    year,
    shortYear,
    month,
    monthShort,
    monthNumber,
    monthIndex,
    timeStamp,
    weekNumber,
  };
};
