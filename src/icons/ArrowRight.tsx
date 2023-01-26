/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M224.5,136.5l-72,72a12.1,12.1,0,0,1-17,0,12,12,0,0,1,0-17L187,140H40a12,12,0,0,1,0-24H187L135.5,64.5a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.5,136.5Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M221.7,133.7l-72,72a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L196.7,136H40a8,8,0,0,1,0-16H196.7L138.3,61.7a8.1,8.1,0,0,1,11.4-11.4l72,72A8.1,8.1,0,0,1,221.7,133.7Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M220.2,132.2l-72,72a5.9,5.9,0,0,1-8.4-8.4L201.5,134H40a6,6,0,0,1,0-12H201.5L139.8,60.2a5.9,5.9,0,0,1,8.4-8.4l72,72A5.8,5.8,0,0,1,220.2,132.2Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M221.7,133.7l-72,72a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L196.7,136H40a8,8,0,0,1,0-16H196.7L138.3,61.7a8.1,8.1,0,0,1,11.4-11.4l72,72A8.1,8.1,0,0,1,221.7,133.7Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M218.8,130.8l-72,72a3.9,3.9,0,0,1-5.6,0,3.9,3.9,0,0,1,0-5.6L206.3,132H40a4,4,0,0,1,0-8H206.3L141.2,58.8a4,4,0,0,1,5.6-5.6l72,72A3.9,3.9,0,0,1,218.8,130.8Z" />
  </>
);

const ArrowRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

ArrowRight.displayName = "ArrowRight";

export default ArrowRight;
