import styled from "styled-components";
import { BaseButton } from "../BaseButton/BaseButton";
import { spacing } from "../../../styles/tokens/spacing";
import { borderRadius } from "../../../styles/tokens/borderRadius";
import { gaps } from "../../../styles/tokens/gaps";
import IconCalendar from "../../../assets/icons/calendar-icon.svg?react";
import IconArrow from "../../../assets/icons/arrow-icon.svg?react";

export const DateSelectContainer = styled.div`
  position: relative;
  border-radius: ${borderRadius.xs}px;
  block-size: 100%;

  &::after {
    position: absolute;
    content: "";
    inset: 0;
    border-inline-end: 1px solid var(--border);
    z-index:1;
    pointer-events: none;
  }
`;

export const DateSelect = styled(BaseButton)`
  block-size: 100%;
  position: relative;
  gap: ${gaps.xs}px;
  background: var(--background-color);
  border-radius: ${borderRadius.xs}px;
  border-start-end-radius: 0px;
  border-end-end-radius: 0px;
  padding-inline: ${spacing.s}px;
`;

export const CalendarIcon = styled(IconCalendar)`
  fill: var(--blue);
  inline-size: 16px;
  block-size: 16px;
`;

export const ArrowIcon = styled(IconArrow)`
  fill: var(--blue);
  inline-size: 16px;
  block-size: 14px;
`;
