
import { CustomElement, InputElement, LabelElement, TrackElement } from "./styleSwitch"
import { forwardRef, type ChangeEvent, type ReactNode } from "react"

interface IProps {
  chacked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
}

export const Switch = forwardRef<HTMLInputElement, IProps>(({ chacked, onChange ,children}, ref) => {


  return (
    <>
      <LabelElement >
        <InputElement type="checkbox" ref={ref} checked={chacked} onChange={onChange} />
        <TrackElement $checked={chacked}>
          <CustomElement $checked={chacked}>{children}</CustomElement>
        </TrackElement>
      </LabelElement>
    </>
  )
})