/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M244,80v72a12,12,0,0,1-24,0V109l-91.5,91.5a12.1,12.1,0,0,1-17,0l-96-96a12,12,0,0,1,17-17L120,175l83-83H160a12,12,0,0,1,0-24h72A12,12,0,0,1,244,80Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M240,80v72a8,8,0,0,1-16,0V99.3l-98.3,98.4a8.2,8.2,0,0,1-11.4,0l-96-96A8.1,8.1,0,0,1,29.7,90.3L120,180.7,212.7,88H160a8,8,0,0,1,0-16h72A8,8,0,0,1,240,80Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M240,80v72a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3L196,127.3l-70.3,70.4a8.2,8.2,0,0,1-11.4,0l-96-96A8.1,8.1,0,0,1,29.7,90.3L120,180.7,184.7,116,154.3,85.7a8.4,8.4,0,0,1-1.7-8.8A8,8,0,0,1,160,72h72A8,8,0,0,1,240,80Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M238,80v72a6,6,0,0,1-12,0V94.5L124.2,196.2a5.8,5.8,0,0,1-8.4,0l-96-96a5.9,5.9,0,1,1,8.4-8.4L120,183.5,217.5,86H160a6,6,0,0,1,0-12h72A6,6,0,0,1,238,80Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M240,80v72a8,8,0,0,1-16,0V99.3l-98.3,98.4a8.2,8.2,0,0,1-11.4,0l-96-96A8.1,8.1,0,0,1,29.7,90.3L120,180.7,212.7,88H160a8,8,0,0,1,0-16h72A8,8,0,0,1,240,80Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M236,80v72a4,4,0,0,1-8,0V89.7L122.8,194.8a3.9,3.9,0,0,1-5.6,0l-96-96a4,4,0,0,1,5.6-5.6L120,186.3,222.3,84H160a4,4,0,0,1,0-8h72A4,4,0,0,1,236,80Z" />
  </>
);

const ArrowElbowRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

ArrowElbowRight.displayName = "ArrowElbowRight";

export default ArrowElbowRight;
