export const getWeekNumber = (date: Date): number => {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  return Math.floor((pastDaysYear + firstDayOfYear.getDay()) / 7) + 1;
};
