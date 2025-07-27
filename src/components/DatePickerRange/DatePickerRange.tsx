import { useRef, useState } from "react";
import { QuickSelect } from "../ui/Quick select/QuickSelect"
import { RangeButton } from "../ui/RangeButton/RangeButton"
import { ButtonText, Container, PickerRangeBlock, RefreshButton, RefreshIcon, SeparatorBlock, SeparatorIcon } from "./styleDatePickerRange"
import { Calendar } from "../Calendar/Calendar";



export const DatePickerRange = () => {
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
  const [isEndCalendarOpen, setIsEndCalendarOpen] = useState(false);

  const startButtonRef = useRef<HTMLDivElement | null>(null)
  const endButtonRef = useRef<HTMLDivElement | null>(null)

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
            type="button">{'вставить выбранную дату'}</RangeButton>
          <SeparatorBlock>
            <SeparatorIcon />
          </SeparatorBlock>
          <RangeButton
            onClick={() => {
              setIsEndCalendarOpen(prev => !prev)
              setIsStartCalendarOpen(false)
            }}
            ref={endButtonRef}
            type="button">{'вставить выбранную дату'}</RangeButton>
        </PickerRangeBlock>
        <RefreshButton type="button">
          <RefreshIcon />
          <ButtonText>Refresh</ButtonText>
        </RefreshButton>
      </Container>

      {isStartCalendarOpen && <Calendar anchorEl={startButtonRef.current} />}
      {isEndCalendarOpen && <Calendar anchorEl={endButtonRef.current} />}

    </>
  )
}


