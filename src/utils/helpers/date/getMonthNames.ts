import { createDate } from "./createDate";

export interface ImonthesNames {
  month: string;
  monthShort: string;
  monthIndex: number;
  date: Date;
}

export const getMonthNames = (locale: string = "default"): ImonthesNames[] => {
  const monthesNames: Array<ImonthesNames> = [];

  const currentYear = new Date().getFullYear();

  for (let i = 0; i < 12; i++) {
    const { month, monthShort, monthIndex, date } = createDate({
      locale,
      date: new Date(currentYear, i, 1),
    });

    monthesNames[i] = {
      month,
      monthShort,
      monthIndex,
      date,
    };
  }

  return monthesNames;
};
