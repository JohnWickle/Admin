/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M128,20A108,108,0,1,0,236,128,108.1,108.1,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.1,84.1,0,0,1,128,212ZM164.5,91.5a12,12,0,0,1,0,17L129,144h19a12,12,0,0,1,0,24H100a12,12,0,0,1-12-12V108a12,12,0,0,1,24,0v19l35.5-35.5A12,12,0,0,1,164.5,91.5Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <circle cx="128" cy="128" r="96" />
    </g>
    <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z" />
    <path d="M150.3,94.3,108,136.7V108a8,8,0,0,0-16,0v48a8,8,0,0,0,8,8h48a8,8,0,0,0,0-16H119.3l42.4-42.3a8.1,8.1,0,0,0-11.4-11.4Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm33.7,81.7L119.3,148H148a8,8,0,0,1,0,16H100a8.5,8.5,0,0,1-3.1-.6,8.2,8.2,0,0,1-4.3-4.3A8.5,8.5,0,0,1,92,156V108a8,8,0,0,1,16,0v28.7l42.3-42.4a8.1,8.1,0,0,1,11.4,11.4Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M128,26A102,102,0,1,0,230,128,102.2,102.2,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM160.2,95.8a5.8,5.8,0,0,1,0,8.4L114.5,150H148a6,6,0,0,1,0,12H100a6,6,0,0,1-6-6V108a6,6,0,0,1,12,0v33.5l45.8-45.7A5.8,5.8,0,0,1,160.2,95.8Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM161.7,94.3a8.1,8.1,0,0,1,0,11.4L119.3,148H148a8,8,0,0,1,0,16H100a8,8,0,0,1-8-8V108a8,8,0,0,1,16,0v28.7l42.3-42.4A8.1,8.1,0,0,1,161.7,94.3Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M128,28A100,100,0,1,0,228,128,100.2,100.2,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM158.8,97.2a3.9,3.9,0,0,1,0,5.6L109.7,152H148a4,4,0,0,1,0,8H100a4,4,0,0,1-4-4V108a4,4,0,0,1,8,0v38.3l49.2-49.1A3.9,3.9,0,0,1,158.8,97.2Z" />
  </>
);

const ArrowCircleDownLeft = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} weightsMap={weightsMap} />
);

ArrowCircleDownLeft.displayName = "ArrowCircleDownLeft";

export default ArrowCircleDownLeft;
