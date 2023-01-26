/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M192,20H64A28.1,28.1,0,0,0,36,48V208a28.1,28.1,0,0,0,28,28H192a28.1,28.1,0,0,0,28-28V48A28.1,28.1,0,0,0,192,20ZM60,84H196v88H60Zm4-40H192a4,4,0,0,1,4,4V60H60V48A4,4,0,0,1,64,44ZM192,212H64a4,4,0,0,1-4-4V196H196v12A4,4,0,0,1,192,212Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <rect x="48" y="64" width="160" height="128" />
    </g>
    <path d="M192,24H64A24.1,24.1,0,0,0,40,48V208a24.1,24.1,0,0,0,24,24H192a24.1,24.1,0,0,0,24-24V48A24.1,24.1,0,0,0,192,24ZM56,72H200V184H56Zm8-32H192a8,8,0,0,1,8,8v8H56V48A8,8,0,0,1,64,40ZM192,216H64a8,8,0,0,1-8-8v-8H200v8A8,8,0,0,1,192,216Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M192,24H64A24.1,24.1,0,0,0,40,48V208a24.1,24.1,0,0,0,24,24H192a24.1,24.1,0,0,0,24-24V48A24.1,24.1,0,0,0,192,24ZM64,40H192a8,8,0,0,1,8,8v8H56V48A8,8,0,0,1,64,40ZM192,216H64a8,8,0,0,1-8-8v-8H200v8A8,8,0,0,1,192,216Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M192,26H64A22.1,22.1,0,0,0,42,48V208a22.1,22.1,0,0,0,22,22H192a22.1,22.1,0,0,0,22-22V48A22.1,22.1,0,0,0,192,26ZM54,70H202V186H54ZM64,38H192a10,10,0,0,1,10,10V58H54V48A10,10,0,0,1,64,38ZM192,218H64a10,10,0,0,1-10-10V198H202v10A10,10,0,0,1,192,218Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M192,24H64A24.1,24.1,0,0,0,40,48V208a24.1,24.1,0,0,0,24,24H192a24.1,24.1,0,0,0,24-24V48A24.1,24.1,0,0,0,192,24ZM56,72H200V184H56Zm8-32H192a8,8,0,0,1,8,8v8H56V48A8,8,0,0,1,64,40ZM192,216H64a8,8,0,0,1-8-8v-8H200v8A8,8,0,0,1,192,216Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M192,28H64A20.1,20.1,0,0,0,44,48V208a20.1,20.1,0,0,0,20,20H192a20.1,20.1,0,0,0,20-20V48A20.1,20.1,0,0,0,192,28ZM52,68H204V188H52ZM64,36H192a12,12,0,0,1,12,12V60H52V48A12,12,0,0,1,64,36ZM192,220H64a12,12,0,0,1-12-12V196H204v12A12,12,0,0,1,192,220Z" />
  </>
);

const DeviceTablet = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

DeviceTablet.displayName = "DeviceTablet";

export default DeviceTablet;
