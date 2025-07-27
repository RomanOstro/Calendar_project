interface IGetMonthNumberDays {
  monthIndex: number;
  yearNumber?: number;
}

// Функция возвращает кол-во дней в мес с учетом високосного года 
export const getMonthNumberOfDays = (arg:IGetMonthNumberDays) => {
  const year = arg.yearNumber ? arg.yearNumber : new Date().getFullYear();
  return new Date(year, arg.monthIndex +1, 0).getDate()
}