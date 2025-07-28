interface getDeysDifferenceArg {
  start: Date;
  end: Date;
}

// функция для расчета количества дней между выбранными датами
export const getDeysDifference = ({
  start,
  end,
}: getDeysDifferenceArg): number => {
  const differense = Math.floor(
    (end.getTime() - start.getTime()) / (24 * 60 * 60 * 1000)
  );
  return differense;
};
