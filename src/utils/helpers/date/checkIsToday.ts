//сравниваем даты без учета времени
export const checkDateIsEqual = (dateOne: Date, dateTwo: Date): boolean => {
  const firstDate = new Date(dateOne);
  const SecondDate = new Date(dateTwo);

  firstDate.setHours(0, 0, 0, 0);
  SecondDate.setHours(0, 0, 0, 0);
  return firstDate.getTime() === SecondDate.getTime();
};

// проверка на сегоднешнюю дату
export const checkIsToday = (date: Date | null | undefined): boolean => {
  if (!date) return false;

  const today = new Date();

  const isToday = checkDateIsEqual(today, date);

  return isToday;
};
