import { useRef, useState } from "react";
import { QuickSelect } from "../ui/Quick select/QuickSelect"
import { RangeButton } from "../ui/RangeButton/RangeButton"
import { ButtonText, Container, PickerRangeBlock, RefreshButton, RefreshIcon, SeparatorBlock, SeparatorIcon } from "./styleDatePickerRange"
import { Calendar } from "../Calendar/Calendar";
import { CalenparProvider } from "../../utils/providers/calendarProvider";
import { getDeysDifference } from "../../utils/helpers/date";



export const DatePickerRange = () => {
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
  const [isEndCalendarOpen, setIsEndCalendarOpen] = useState(false);
  const startButtonRef = useRef<HTMLDivElement | null>(null)
  const endButtonRef = useRef<HTMLDivElement | null>(null)
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  const startDateHandler = (date: Date) => {
    setStartDate(date)
    setIsStartCalendarOpen(false);
  }

  const endDateHandler = (date: Date) => {
    setEndDate(date)
    setIsEndCalendarOpen(false)
  }

  if (startDate && endDate) {
    const differense = getDeysDifference({
      start: startDate,
      end: endDate
    })
    console.log(differense)
  }

  return (
    <>
      <Container>
        <PickerRangeBlock>
          <QuickSelect />
          <RangeButton
            onClick={() => {
              setIsStartCalendarOpen(prev => !prev)
              setIsEndCalendarOpen(false)
            }}
            ref={startButtonRef}
            type="button">{`${startDate ? startDate : 'startDate'}`}</RangeButton>
          <SeparatorBlock>
            <SeparatorIcon />
          </SeparatorBlock>
          <RangeButton
            onClick={() => {
              setIsEndCalendarOpen(prev => !prev)
              setIsStartCalendarOpen(false)
            }}
            ref={endButtonRef}
            type="button">{`${endDate ? endDate : 'endDate'}`}</RangeButton>
        </PickerRangeBlock>
        <RefreshButton type="button">
          <RefreshIcon />
          <ButtonText>Refresh</ButtonText>
        </RefreshButton>
      </Container>

      {isStartCalendarOpen &&
        <CalenparProvider type="start">
          <Calendar startDate={startDate} setDate={startDateHandler} anchorEl={startButtonRef.current} />
        </CalenparProvider>}
      {isEndCalendarOpen &&
        <CalenparProvider type="end">
          <Calendar startDate={startDate} setDate={endDateHandler} anchorEl={endButtonRef.current} />
        </CalenparProvider>}

    </>
  )
}


