/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="96 128 48 176 96 224" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
    <polyline points="192 32 192 176 48 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  </g>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="96 128 48 176 96 224" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <polyline points="192 32 192 176 48 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M192,16a15.99985,15.99985,0,0,0-16,16V160H86.62695l20.68653-20.68652a15.99968,15.99968,0,0,0-22.627-22.627L36.69214,164.68091c-.37525.37475-.73071.76977-1.06738,1.18017-.14649.17847-.27344.3667-.41114.54956-.17553.23389-.3562.4629-.51928.7063-.15137.22632-.28247.46119-.42115.69336-.1289.21558-.26416.42652-.383.64844-.12793.239-.23633.48462-.35108.72852-.10815.229-.22241.45434-.31982.6892-.09912.239-.17871.48292-.26563.72559-.08984.24976-.18554.49634-.26318.75171-.07422.24536-.12866.49463-.19092.74268-.0647.25781-.137.5122-.189.7749-.05762.2893-.092.5813-.1333.8728-.03174.22534-.0752.44678-.09742.675a16.09494,16.09494,0,0,0,0,3.16162c.02246.22827.06568.4502.09742.67554.0415.2915.07592.58325.1333.87231.052.2627.12451.51734.18921.77539.06225.24781.11645.49683.19067.74219.07764.25537.17334.50195.26318.75171.08692.24268.16651.48657.26563.72559.09741.23486.21167.4602.31982.6892.11475.2439.22315.48951.35083.72852.11914.22241.25489.43384.384.64966.13842.23144.26928.46606.42041.69189.16308.2439.34448.47364.5205.70777.13721.18261.26368.37036.40992.54834.33667.4104.69213.80542,1.06738,1.18017l47.99438,47.99439a15.99968,15.99968,0,0,0,22.627-22.627L86.62695,192H192a15.99985,15.99985,0,0,0,16-16V32A15.99985,15.99985,0,0,0,192,16Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="96 128 48 176 96 224" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
    <polyline points="192 32 192 176 48 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  </g>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="96 128 48 176 96 224" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
    <polyline points="192 32 192 176 48 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  </g>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="96 128 48 176 96 224" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <polyline points="192 32 192 176 48 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ArrowDownLeftElbow = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
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
  }
);

ArrowDownLeftElbow.displayName = "ArrowDownLeftElbow";

export default ArrowDownLeftElbow;
