import styled from "styled-components";
import { gaps } from "../../styles/tokens/gaps";
import {
  ButtonRange,
  ButtonRangeText,
} from "../ui/RangeButton/styleRangeButton";
import ArrowIcon from "../../assets/icons/arrow-button-icon.svg?react";
import { spacing } from "../../styles/tokens/spacing";

interface IPopoverProps {
  $left: string;
  $top: string;
}

export const PopoverWrapper = styled.div<IPopoverProps>`
  position: absolute;
  left: ${({ $left }) => ($left ? `${$left}px` : "50%")};
  top: ${({ $top }) => ($top ? `${$top}px` : "50%")};
  max-block-size: 100%;
`;
export const PopoverBlock = styled.div.attrs({
  className: "popover-calendar",
})<{ $type: "start" | "end" | undefined }>`
  position: absolute;
  inline-size: 400px;
  min-block-size: 300px;
  max-block-size: 100%;
  background: var(--background-color);
  inset: 0;
  border-radius: 5px;
  transform: translate(0, -105%);

  &::before {
    content: "";
    background: var(--background-color);
    position: absolute;
    top: calc(100% - (${spacing.m}px / 2));
    inline-size: ${spacing.m}px;
    block-size: ${spacing.m}px;
    left: 45%;
    transform: rotate(45deg);
    z-index: -1;
  }
  @media (width <= 700px) {
    inline-size: 300px;
    min-block-size: 250px;
    ${({ $type }) =>
      $type === "start"
        ? "transform:translate(-10%, -105%);"
        : $type === "end"
        ? "transform: translate(-35%, -105%);"
        : ""}
  }

  @media (width <= 480px) {
    inline-size: 250px;
    min-block-size: 250px;
  }
`;

export const NavCalendar = styled.div`
  display: flex;
  min-inline-size: 100%;
  gap: ${gaps.m}px;
  padding-block: ${spacing.s}px;
`;

export const NavButton = styled(ButtonRange)<{ $isActive?: boolean }>`
  justify-content: center;
  font-weight: 600;

  ${({ $isActive }) => $isActive && `border-block-end: 2px solid blue`}
`;

export const NavButtonText = styled(ButtonRangeText)`
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const IconArrow_prev = styled(ArrowIcon)`
  block-size: 16px;
  inline-size: 16px;
  fill: var(--main-color);
  cursor: pointer;
`;

export const IconArrow_next = styled(IconArrow_prev)`
  transform: rotate(180deg);
`;
