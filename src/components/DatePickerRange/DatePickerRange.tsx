import { useEffect, useRef, useState } from "react";
import { QuickSelect } from "../ui/Quick select/QuickSelect";
import { RangeButton } from "../ui/RangeButton/RangeButton";
import {
  ButtonText,
  Container,
  PickerRangeBlock,
  RefreshButton,
  RefreshIcon,
  SeparatorBlock,
  SeparatorIcon,
} from "./styleDatePickerRange";
import { Calendar } from "../Calendar/Calendar";
import { CalendarProvider } from "../../utils/providers/calendarProvider";
import { getDeysDifference } from "../../utils/helpers/date";
import { formatDate } from "../../utils/helpers/date/formatDate";

//панель с кнопками для выбора начальной и конечной даты
export const DatePickerRange = () => {
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
  const [isEndCalendarOpen, setIsEndCalendarOpen] = useState(false);
  const startButtonRef = useRef<HTMLDivElement | null>(null); //-реф для привязки календаря к кнопке стартовой даты
  const endButtonRef = useRef<HTMLDivElement | null>(null); //-реф для привязки календаря к кнопке конечной даты
  const [startDate, setStartDate] = useState<Date>(); //-стейт для отображения даты в кнопке начального календаря
  const [endDate, setEndDate] = useState<Date>(); //-стейт для отображения даты в кнопке конечного календаря

  const closeStartCalendar = () => setIsStartCalendarOpen(false);
  const closeEndCalendar = () => setIsEndCalendarOpen(false);
  //установка даты в стейт начального календаря и текст стартовой кнопки
  const startDateHandler = (date: Date) => {
    setStartDate(date);
    setIsStartCalendarOpen(false);
  };

  //установка даты в стейт начального календаря и текст конечной кнопки
  const endDateHandler = (date: Date) => {
    setEndDate(date);
    setIsEndCalendarOpen(false);
  };

  //проверка если есть начальная и конечная дата => можно посчитать разницу в днях между датами
  useEffect(() => {
    if (startDate && endDate) {
      const differense = getDeysDifference({
        start: startDate,
        end: endDate,
      });
      console.log(differense);
    }
  }, [startDate, endDate]);

  return (
    <>
      <Container>
        <PickerRangeBlock>
          <QuickSelect />
          <RangeButton
            onClick={() => {
              setIsStartCalendarOpen((prev) => !prev);
              setIsEndCalendarOpen(false);
            }}
            ref={startButtonRef}
            type="button"
          >{`${
            startDate ? formatDate("ru-Ru", startDate) : "startDate"
          }`}</RangeButton>
          <SeparatorBlock>
            <SeparatorIcon />
          </SeparatorBlock>
          <RangeButton
            onClick={() => {
              setIsEndCalendarOpen((prev) => !prev);
              setIsStartCalendarOpen(false);
            }}
            ref={endButtonRef}
            type="button"
          >{`${
            endDate ? formatDate("ru-Ru", endDate) : "endDate"
          }`}</RangeButton>
        </PickerRangeBlock>
        <RefreshButton type="button">
          <RefreshIcon />
          <ButtonText>Refresh</ButtonText>
        </RefreshButton>
      </Container>

      {isStartCalendarOpen && (
        <CalendarProvider type="start">
          <Calendar
            onClose={closeStartCalendar}
            startDate={startDate}
            setDate={startDateHandler}
            anchorEl={startButtonRef.current}
          />
        </CalendarProvider>
      )}
      {isEndCalendarOpen && (
        <CalendarProvider type="end">
          <Calendar
            onClose={closeEndCalendar}
            startDate={startDate}
            setDate={endDateHandler}
            anchorEl={endButtonRef.current}
          />
        </CalendarProvider>
      )}
    </>
  );
};
