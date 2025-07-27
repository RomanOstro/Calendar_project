import { ArrowIcon, CalendarIcon, DateSelect, DateSelectContainer } from "./styleQuickSelect"


interface IQuickSelectProp {
  onClick?(): void;
}

export const QuickSelect = ({ onClick }: IQuickSelectProp) => {
  return (

    <DateSelectContainer>
      <DateSelect onClick={onClick}>
        <CalendarIcon />
        <ArrowIcon />
      </DateSelect>
    </DateSelectContainer>
  )
}