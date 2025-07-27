import styled from "styled-components";
import { gaps } from "../../styles/tokens/gaps";
import { borderRadius } from "../../styles/tokens/borderRadius";
import ArrowIcon from "../../assets/icons/arrowLeft-icon.svg?react";
import { spacing } from "../../styles/tokens/spacing";
import { BaseButton } from "../ui/BaseButton/BaseButton";
import IconRefresh from "../../assets/icons/refresh-icon.svg?react";

export const Container = styled.div`
  max-width: 100%;
  width: 600px;
  display: flex;

  gap: ${gaps.s}px;
  block-size: 40px;
`;

export const PickerRangeBlock = styled.div`
  block-size: 100%;
  display: flex;
  align-items: center;
  outline: none;
  border-radius: ${borderRadius.xs}px;
  outline: 1px solid var(--border);
  inline-size: 100%;
  min-inline-size: 0;
`;

export const SeparatorBlock = styled.div`
  display: flex;
  flex-grow: 0;
  align-self: stretch;
  align-items: center;
  padding-inline: ${spacing.xs}px;
`;

export const SeparatorIcon = styled(ArrowIcon)`
  inline-size: ${spacing.m}px;
  block-size: ${spacing.m}px;
  fill: var(--blue);
  flex-shrink: 0;
`;

export const RefreshButton = styled(BaseButton)`
  display: flex;
  gap: ${gaps.s}px;
  white-space: nowrap;
  max-inline-size: 100%;
  padding-block: 0px;
  padding-inline: 12px;
  block-size: 100%;
  border-radius: 4px;
  background-color: var(--blue);
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: var(--hover-blue-color);
  }
`;

export const ButtonText = styled.span`
  color: var(--accent-color);
  @media screen and (width <= 600px) {
    display: none;
  }
`;

export const RefreshIcon = styled(IconRefresh)`
  inline-size: ${spacing.m}px;
  block-size: ${spacing.m}px;
  fill: var(--accent-color);
`;
