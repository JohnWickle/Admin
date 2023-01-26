/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M184,28H72A20.1,20.1,0,0,0,52,48V224a12,12,0,0,0,18.4,10.2l57.6-36,57.6,36A12.4,12.4,0,0,0,192,236a12,12,0,0,0,12-12V48A20.1,20.1,0,0,0,184,28Zm-4,174.4-45.6-28.6a12.3,12.3,0,0,0-12.8,0L76,202.3V52H180Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <path d="M192,224l-64-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z" />
    </g>
    <path d="M184,32H72A16,16,0,0,0,56,48V224a8.1,8.1,0,0,0,4.1,7,7.8,7.8,0,0,0,3.9,1,7.6,7.6,0,0,0,4.2-1.2L128,193.4l59.8,37.4A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.6-51.8-32.4a8,8,0,0,0-8.4,0L72,209.6V48H184Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M200,48V224a8,8,0,0,1-12.2,6.8L128,193.4,68.2,230.8A7.6,7.6,0,0,1,64,232a7.8,7.8,0,0,1-3.9-1,8.1,8.1,0,0,1-4.1-7V48A16,16,0,0,1,72,32H184A16,16,0,0,1,200,48Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M184,34H72A14,14,0,0,0,58,48V224a5.9,5.9,0,0,0,3.1,5.2,5.1,5.1,0,0,0,2.9.8,6.2,6.2,0,0,0,3.2-.9l60.8-38,60.8,38a6.1,6.1,0,0,0,6.1.1A5.9,5.9,0,0,0,198,224V48A14,14,0,0,0,184,34Zm2,179.2-54.8-34.3a6.1,6.1,0,0,0-6.4,0L70,213.2V48a2,2,0,0,1,2-2H184a2,2,0,0,1,2,2Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M184,32H72A16,16,0,0,0,56,48V224a8.1,8.1,0,0,0,4.1,7,7.8,7.8,0,0,0,3.9,1,7.6,7.6,0,0,0,4.2-1.2L128,193.4l59.8,37.4A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.6-51.8-32.4a8,8,0,0,0-8.4,0L72,209.6V48H184Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M184,36H72A12,12,0,0,0,60,48V224a3.9,3.9,0,0,0,2.1,3.5,3.8,3.8,0,0,0,4-.1L128,188.7l61.9,38.7a3.9,3.9,0,0,0,2.1.6,4.1,4.1,0,0,0,1.9-.5A3.9,3.9,0,0,0,196,224V48A12,12,0,0,0,184,36Zm4,180.8-57.9-36.2a4,4,0,0,0-4.2,0L68,216.8V48a4,4,0,0,1,4-4H184a4,4,0,0,1,4,4Z" />
  </>
);

const BookmarkSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

BookmarkSimple.displayName = "BookmarkSimple";

export default BookmarkSimple;
