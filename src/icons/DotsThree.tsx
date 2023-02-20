/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, IconBase } from "../lib";

const weights = new Map<IconWeight, ReactElement>([
  [
    "bold",
    <>
      <path d="M80,128a16,16,0,1,1-16-16A16,16,0,0,1,80,128Zm112-16a16,16,0,1,0,16,16A16,16,0,0,0,192,112Zm-64,0a16,16,0,1,0,16,16A16,16,0,0,0,128,112Z" />
    </>,
  ],
  [
    "duotone",
    <>
      <circle cx="64" cy="128" r="12" />
      <circle cx="192" cy="128" r="12" />
      <circle cx="128" cy="128" r="12" />
    </>,
  ],
  [
    "fill",
    <>
      <path d="M76,128a12,12,0,1,1-12-12A12,12,0,0,1,76,128Zm52-12a12,12,0,1,0,12,12A12,12,0,0,0,128,116Zm64,0a12,12,0,1,0,12,12A12,12,0,0,0,192,116Z" />
    </>,
  ],
  [
    "light",
    <>
      <path d="M74,128a10,10,0,1,1-10-10A10,10,0,0,1,74,128Zm118-10a10,10,0,1,0,10,10A10,10,0,0,0,192,118Zm-64,0a10,10,0,1,0,10,10A10,10,0,0,0,128,118Z" />
    </>,
  ],
  [
    "regular",
    <>
      <path d="M76,128a12,12,0,1,1-12-12A12,12,0,0,1,76,128Zm116-12a12,12,0,1,0,12,12A12,12,0,0,0,192,116Zm-64,0a12,12,0,1,0,12,12A12,12,0,0,0,128,116Z" />
    </>,
  ],
  [
    "thin",
    <>
      <path d="M72,128a8,8,0,1,1-8-8A8,8,0,0,1,72,128Zm120-8a8,8,0,1,0,8,8A8,8,0,0,0,192,120Zm-64,0a8,8,0,1,0,8,8A8,8,0,0,0,128,120Z" />
    </>,
  ],
]);

const DotsThree: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

DotsThree.displayName = "DotsThree";

export default DotsThree;
