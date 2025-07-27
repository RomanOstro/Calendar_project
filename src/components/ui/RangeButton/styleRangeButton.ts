import styled from "styled-components";
import { BaseButton } from "../BaseButton/BaseButton";
import { spacing } from "../../../styles/tokens/spacing";
import { fontSizes } from "../../../styles/tokens/fontSizes";

export const ButtonRangeContainer = styled.div`
  flex: 1 1 0%;
  overflow: hidden;
  height: 100%;
`;
export const ButtonRange = styled(BaseButton)`
  inline-size: 100%;
  min-width: 0;   
  block-size: 100%;
  padding-inline: ${spacing.s}px;
  font-size: ${fontSizes.md}px;
`;

export const ButtonRangeText = styled.span`
  flex: 1 1 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
 
`;


