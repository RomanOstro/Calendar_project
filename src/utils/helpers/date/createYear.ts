import { createDate } from "./createDate";
import { createMonth } from "./createMonth";

interface ICreateYearProps {
  locale?: string;
  year?: number;
  monthNumber?: number;
}

export const createYear = (arg: ICreateYearProps) => {
  const locale = arg.locale ?? "default";

  const monthCount = 12;
  const today = createDate({});

  const year = arg.year ?? today.year;
  const monthNumber = arg.monthNumber ?? today.monthNumber;

  const month = createMonth({ date: new Date(year, monthNumber - 1), locale });

  const getMonthDays = (monthIndex: number) => {
    return createMonth({
      date: new Date(year, monthIndex),
      locale,
    }).createMonthDays();
  };

  const createYearMonthes = () => {
    const months = [];

    for (let i = 0; i <= monthCount - 1; i++) {
      months[i] = getMonthDays(i);
    }

    return months;
  };

  return {
    month,
    year,
    createYearMonthes,
  };
};
