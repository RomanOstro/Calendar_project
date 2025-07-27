import styled from "styled-components";

export const LabelElement = styled.label({
  display: "flex",
  cursor: "pointer",
});
export const InputElement = styled.input({
  visibility: "hidden",
  display: "none",
});

interface ITrackElementProps {
  $checked?: boolean;
  $width?: string;
}

export const TrackElement = styled.div<ITrackElementProps>(
  ({ $checked, $width }) => ({
    position: "relative",
    width: `${$width ? $width : "40px"}`,
    height: "20px",
    background: $checked ? "#0b64dd" : "gray",
    borderRadius: "20px",
    border: `1px solid ${$checked ? "#0b64dd" : "gray"}`,
  })
);

export const CustomElement = styled.div<{ $checked?: boolean }>(
  ({ $checked }) => ({
    boxSizing: "border-box",
    position: "absolute",
    top: "50%",
    transform: `translateY(-50%)`,
    left: $checked ? "calc(100% - 20px)" : "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "20px",
    height: "20px",
    padding: "3px",
    borderRadius: "50%",
    background: "white",
    transition: `all ${$checked ? ".3s" : ".1s"} ${
      $checked ? "linear" : "ease-out"
    }`,

    "&:hover": {
      transform: `translateY(-50%) scale(1.05) `,
    },
  })
);
