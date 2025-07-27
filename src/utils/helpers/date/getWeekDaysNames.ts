import { createDate } from "./createDate";

export interface IweekDaysNames {
  day: string;
  dayShort: string;
  dayNumberInWeek: number;
}
//firstWeekDay -2 = неделя начнется с Пн/1 с Вс

export const getWeekDaysNames = (
  firstWeekDay: number = 2,
  locale: string = "default"
): Array<IweekDaysNames> => {
  const weekDaysName: Array<IweekDaysNames> = [];

  const currentDate = new Date();

  for (let i = 0; i < 7; i++) {
    const { day, dayShort, dayNumberInWeek } = createDate({
      locale,
      date: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + i
      ),
    });
    //dayNumberInWeek -1 - если пришел вторник под индексом 2 то в массиве weekDaysName
    // он будет с индексом 1 и так мы упорядочим дни недели по возрастанию в массиве
    weekDaysName[dayNumberInWeek - 1] = {
      day,
      dayShort,
      dayNumberInWeek,
    };
  }

  return [
    ...weekDaysName.slice(firstWeekDay - 1),
    ...weekDaysName.slice(0, firstWeekDay - 1),
  ];
};
