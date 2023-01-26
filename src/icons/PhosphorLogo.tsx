/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M220,98a78.1,78.1,0,0,0-78-78H68A12,12,0,0,0,56,32V164a78.1,78.1,0,0,0,78,78,12,12,0,0,0,12-12V175.9A78.1,78.1,0,0,0,220,98ZM80,82.8,114.6,152H80Zm42,30.4L87.4,44H122ZM81.4,176H122v40.7A53.9,53.9,0,0,1,81.4,176ZM146,151.8V44.2a53.9,53.9,0,0,1,0,107.6Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path
      d="M68,32l66,132H68Zm74,0h-8V164h8a66,66,0,0,0,0-132Z"
      opacity="0.2"
    />
    <path d="M142,24H68a8,8,0,0,0-8,8V164a74.1,74.1,0,0,0,74,74,8,8,0,0,0,8-8V172a74,74,0,0,0,0-148ZM76,65.9,121.1,156H76Zm50,64.2L80.9,40H126ZM76.6,172H126v49.5A58.1,58.1,0,0,1,76.6,172ZM142,156V40a58,58,0,0,1,0,116Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M142,24H68a8,8,0,0,0-8,8V164a74.1,74.1,0,0,0,74,74,8,8,0,0,0,8-8V172a74,74,0,0,0,0-148ZM126,221.5A58.1,58.1,0,0,1,76.6,172H126Zm0-91.4L80.9,40H126ZM142,156V40a58,58,0,0,1,0,116Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M142,26H68a6,6,0,0,0-6,6V164a72.1,72.1,0,0,0,72,72,6,6,0,0,0,6-6V170h2a72,72,0,0,0,0-144ZM74,57.4,124.3,158H74Zm54,81.2L77.7,38H128ZM74.3,170H128v53.7A60.1,60.1,0,0,1,74.3,170ZM142,158h-2V38h2a60,60,0,0,1,0,120Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M142,24H68a8,8,0,0,0-8,8V164a74.1,74.1,0,0,0,74,74,8,8,0,0,0,8-8V172a74,74,0,0,0,0-148ZM76,65.9,121.1,156H76Zm50,64.2L80.9,40H126ZM76.6,172H126v49.5A58.1,58.1,0,0,1,76.6,172ZM142,156V40a58,58,0,0,1,0,116Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M142,28H68a4,4,0,0,0-4,4V164a70.1,70.1,0,0,0,70,70,4,4,0,0,0,4-4V168h4a70,70,0,0,0,0-140ZM72,48.9,127.5,160H72Zm58,98.2L74.5,36H130ZM72.1,168H130v57.9A62.2,62.2,0,0,1,72.1,168Zm69.9-8h-4V36h4a62,62,0,0,1,0,124Z" />
  </>
);

const PhosphorLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

PhosphorLogo.displayName = "PhosphorLogo";

export default PhosphorLogo;
