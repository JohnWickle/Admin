/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <line
            x1="40"
            y1="68"
            x2="216"
            y2="68"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="40"
            y1="108"
            x2="168"
            y2="108"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="40.00614"
            y1="148"
            x2="216"
            y2="148"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="40.00614"
            y1="188"
            x2="168"
            y2="188"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
        </>
      );
    case "duotone":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <line
            x1="40"
            y1="68"
            x2="216"
            y2="68"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="40"
            y1="108"
            x2="168"
            y2="108"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="40.00614"
            y1="148"
            x2="216"
            y2="148"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="40.00614"
            y1="188"
            x2="168"
            y2="188"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </>
      );
    case "fill":
      return (
        <>
          <rect x="0.02344" width="256" height="256" fill="none" />
          <g>
            <path d="M40.02344,76h176a8,8,0,0,0,0-16h-176a8,8,0,1,0,0,16Z" />
            <path d="M40.02344,116h128a8,8,0,0,0,0-16h-128a8,8,0,1,0,0,16Z" />
            <path d="M216.02344,140H40.0293a8,8,0,0,0,0,16H216.02344a8,8,0,0,0,0-16Z" />
            <path d="M168.02344,180H40.0293a8,8,0,0,0,0,16H168.02344a8,8,0,0,0,0-16Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <line
            x1="40"
            y1="68"
            x2="216"
            y2="68"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="40"
            y1="108"
            x2="168"
            y2="108"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="40.00614"
            y1="148"
            x2="216"
            y2="148"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="40.00614"
            y1="188"
            x2="168"
            y2="188"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
        </>
      );
    case "thin":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <line
            x1="40"
            y1="68"
            x2="216"
            y2="68"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="40"
            y1="108"
            x2="168"
            y2="108"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="40.00614"
            y1="148"
            x2="216"
            y2="148"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="40.00614"
            y1="188"
            x2="168"
            y2="188"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
        </>
      );
    case "regular":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <line
            x1="40"
            y1="68"
            x2="216"
            y2="68"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="40"
            y1="108"
            x2="168"
            y2="108"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="40.00614"
            y1="148"
            x2="216"
            y2="148"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="40.00614"
            y1="188"
            x2="168"
            y2="188"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const TextAlignLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

TextAlignLeft.displayName = "TextAlignLeft";

export default TextAlignLeft;
