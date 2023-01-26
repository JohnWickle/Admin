/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M204,100V200a12,12,0,0,1-12,12H92a12,12,0,0,1,0-24h71L71.5,96.5a12,12,0,0,1,17-17L180,171V100a12,12,0,0,1,24,0Zm12-72H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M200,100V200a8,8,0,0,1-8,8H92a8,8,0,0,1,0-16h80.7L74.3,93.7A8.1,8.1,0,0,1,85.7,82.3L184,180.7V100a8,8,0,0,1,16,0Zm16-68H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M200,100V200a8,8,0,0,1-8,8H92a8,8,0,0,1-7.4-4.9,8.4,8.4,0,0,1,1.7-8.8L130.7,150,74.3,93.7A8.1,8.1,0,0,1,85.7,82.3L142,138.7l44.3-44.4a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,200,100Zm16-68H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M198,100V200a6,6,0,0,1-6,6H92a6,6,0,0,1,0-12h85.5L75.8,92.2a5.9,5.9,0,0,1,8.4-8.4L186,185.5V100a6,6,0,0,1,12,0Zm18-66H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M200,100V200a8,8,0,0,1-8,8H92a8,8,0,0,1,0-16h80.7L74.3,93.7A8.1,8.1,0,0,1,85.7,82.3L184,180.7V100a8,8,0,0,1,16,0Zm16-68H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M196,100V200a4,4,0,0,1-4,4H92a4,4,0,0,1,0-8h90.3L77.2,90.8a4,4,0,0,1,5.6-5.6L188,190.3V100a4,4,0,0,1,8,0Zm20-64H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z" />
  </>
);

const ArrowLineDownRight = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} weightsMap={weightsMap} />
);

ArrowLineDownRight.displayName = "ArrowLineDownRight";

export default ArrowLineDownRight;
