/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <circle cx="60" cy="60" r="16" />
          <circle cx="128" cy="60" r="16" />
          <circle cx="196" cy="60" r="16" />
          <circle cx="60" cy="128" r="16" />
          <circle cx="128" cy="128" r="16" />
          <circle cx="196" cy="128" r="16" />
          <circle cx="60" cy="196" r="16" />
          <circle cx="128" cy="196" r="16" />
          <circle cx="196" cy="196" r="16" />
        </>
      );
    case "duotone":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <circle cx="60" cy="60" r="12" />
          <circle cx="128" cy="60" r="12" />
          <circle cx="196" cy="60" r="12" />
          <circle cx="60" cy="128" r="12" />
          <circle cx="128" cy="128" r="12" />
          <circle cx="196" cy="128" r="12" />
          <circle cx="60" cy="196" r="12" />
          <circle cx="128" cy="196" r="12" />
          <circle cx="196" cy="196" r="12" />
        </>
      );
    case "fill":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <circle cx="60" cy="60" r="12" />
          <circle cx="128" cy="60" r="12" />
          <circle cx="196" cy="60" r="12" />
          <circle cx="60" cy="128" r="12" />
          <circle cx="128" cy="128" r="12" />
          <circle cx="196" cy="128" r="12" />
          <circle cx="60" cy="196" r="12" />
          <circle cx="128" cy="196" r="12" />
          <circle cx="196" cy="196" r="12" />
        </>
      );
    case "light":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <circle cx="60" cy="60" r="9" />
          <circle cx="128" cy="60" r="9" />
          <circle cx="196" cy="60" r="9" />
          <circle cx="60" cy="128" r="9" />
          <circle cx="128" cy="128" r="9" />
          <circle cx="196" cy="128" r="9" />
          <circle cx="60" cy="196" r="9" />
          <circle cx="128" cy="196" r="9" />
          <circle cx="196" cy="196" r="9" />
        </>
      );
    case "thin":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <circle cx="60" cy="60" r="6" />
          <circle cx="128" cy="60" r="6" />
          <circle cx="196" cy="60" r="6" />
          <circle cx="60" cy="128" r="6" />
          <circle cx="128" cy="128" r="6" />
          <circle cx="196" cy="128" r="6" />
          <circle cx="60" cy="196" r="6" />
          <circle cx="128" cy="196" r="6" />
          <circle cx="196" cy="196" r="6" />
        </>
      );
    case "regular":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <circle cx="60" cy="60" r="12" />
          <circle cx="128" cy="60" r="12" />
          <circle cx="196" cy="60" r="12" />
          <circle cx="60" cy="128" r="12" />
          <circle cx="128" cy="128" r="12" />
          <circle cx="196" cy="128" r="12" />
          <circle cx="60" cy="196" r="12" />
          <circle cx="128" cy="196" r="12" />
          <circle cx="196" cy="196" r="12" />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const DotsNine = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { color, size, weight, mirrored, ...rest } = props;
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    mirrored: contextMirrored,
    ...contextRest
  } = useContext(IconContext);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? contextSize}
      height={size ?? contextSize}
      fill={color ?? contextColor}
      viewBox="0 0 256 256"
      transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
      {...contextRest}
      {...rest}
    >
      {renderPathFor(weight ?? contextWeight)}
    </svg>
  );
});

DotsNine.displayName = "DotsNine";

export default DotsNine;
