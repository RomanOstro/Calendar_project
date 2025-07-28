//функция форматирования даты
export const formatDate = (locale: string, date?: Date): string | undefined => {
  if (!date) return;
  return date.toLocaleDateString(locale, {
    day: "2-digit",
    month: "long",
    year: "2-digit",
  });
};
