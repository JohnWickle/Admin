/* GENERATED FILE */
"use client";
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, IconBase } from "../lib";

const weights = new Map<IconWeight, ReactElement>([
  [
    "bold",
    <>
      <path d="M192,20a12,12,0,0,0-12,12V60H76V32a12,12,0,0,0-24,0V224a12,12,0,0,0,24,0V196H180v28a12,12,0,0,0,24,0V32A12,12,0,0,0,192,20ZM180,84v32H76V84ZM76,172V140H180v32Z" />
    </>,
  ],
  [
    "duotone",
    <>
      <path d="M192,32V224H64V32Z" opacity="0.2" />
      <path d="M192,24a8,8,0,0,0-8,8V64H72V32a8,8,0,0,0-16,0V224a8,8,0,0,0,16,0V192H184v32a8,8,0,0,0,16,0V32A8,8,0,0,0,192,24Zm-8,56v40H72V80ZM72,176V136H184v40Z" />
    </>,
  ],
  [
    "fill",
    <>
      <path d="M192,24a8,8,0,0,0-8,8v8H72V32a8,8,0,0,0-16,0V224a8,8,0,0,0,16,0v-8H184v8a8,8,0,0,0,16,0V32A8,8,0,0,0,192,24ZM176,184H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-48H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-48H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z" />
    </>,
  ],
  [
    "light",
    <>
      <path d="M192,26a6,6,0,0,0-6,6V66H70V32a6,6,0,0,0-12,0V224a6,6,0,0,0,12,0V190H186v34a6,6,0,0,0,12,0V32A6,6,0,0,0,192,26Zm-6,52v44H70V78ZM70,178V134H186v44Z" />
    </>,
  ],
  [
    "regular",
    <>
      <path d="M192,24a8,8,0,0,0-8,8V64H72V32a8,8,0,0,0-16,0V224a8,8,0,0,0,16,0V192H184v32a8,8,0,0,0,16,0V32A8,8,0,0,0,192,24Zm-8,56v40H72V80ZM72,176V136H184v40Z" />
    </>,
  ],
  [
    "thin",
    <>
      <path d="M192,28a4,4,0,0,0-4,4V68H68V32a4,4,0,0,0-8,0V224a4,4,0,0,0,8,0V188H188v36a4,4,0,0,0,8,0V32A4,4,0,0,0,192,28Zm-4,48v48H68V76ZM68,180V132H188v48Z" />
    </>,
  ],
]);

const LadderSimple: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

LadderSimple.displayName = "LadderSimple";

export default LadderSimple;
