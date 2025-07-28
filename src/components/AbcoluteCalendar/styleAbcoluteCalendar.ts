import styled, { css } from "styled-components";
import { fontSizes } from "../../styles/tokens/fontSizes";
import { gaps } from "../../styles/tokens/gaps";
import { spacing } from "../../styles/tokens/spacing";

export const CalendarBody = styled.div`
  padding: 5px;
`;

export const CalendarHeading = styled.div`
  padding-block-end: ${spacing.s}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${gaps.s}px;
  padding-inline: ${spacing.m}px;
`;

export const CalendarTitle = styled.h2`
  font-size: ${fontSizes["2xl"]}px;
  font-weight: 400px;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const GreedBlock = styled.div`
  color: var(--main-color);
  text-align: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${gaps.xs}px;
`;

export const WeekNames = styled(GreedBlock)`
  block-size: 20px;
  font-weight: 400;
  font-size: ${fontSizes.md}px;
`;

export const MontDaysNumbers = styled(GreedBlock)`
  padding-top: ${spacing.m}px;
  grid-template-rows: 1fr;
`;

interface IMontDaysNumbersItemProp {
  $today: boolean;
  $inactive: boolean;
  $selected: boolean;
}
export const MonthDaysNumbersItem = styled.div<IMontDaysNumbersItemProp>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  block-size: 20px;
  font-weight: 400;
  font-size: ${fontSizes.sm}px;
  transition: all 0.2s;
  cursor: pointer;
  ${({ $inactive }) => `
    ${!$inactive && "color: var(--inactive-color);"}
  `};

  ${({ $today, $selected }) =>
    $selected
      ? css`
          color: var(--accent-color);
          background: var(--blue);

          &:hover {
            transform: scale(1.1);
          }
        `
      : $today &&
        css`
          background: var(--inactive-color);
          color: var(--acсent-color);
        `}

  &:hover {
    ${({ $selected }) =>
      !$selected &&
      css`
        background: var(--blue-light);
        text-decoration: underline;
        transform: scale(1.1);
        color: var(--blue);
      `}
  }
`;

export const WeekNamesItem = styled.span`
  display: block;
  text-align: center;

  &::first-letter {
    text-transform: uppercase;
  }
`;
