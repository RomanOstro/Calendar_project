import { forwardRef, type ReactNode } from "react";
import { ButtonRange, ButtonRangeContainer, ButtonRangeText } from "./styleRangeButton";

interface IRangeButtonProps {
  children?: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
}

export const RangeButton = forwardRef<HTMLDivElement, IRangeButtonProps>(({ children, type, onClick }, ref) => {
  return (
    <ButtonRangeContainer ref={ref} >
      <ButtonRange onClick={onClick} type={type}><ButtonRangeText>{children}</ButtonRangeText></ButtonRange>
    </ButtonRangeContainer>

  )
})