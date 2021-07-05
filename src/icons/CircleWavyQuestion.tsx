/* GENERATED FILE */
import React, { forwardRef } from "react";

import {
  IconWeight,
  IconProps,
  PaintFunction,
  renderPathForWeight,
} from "../lib";
import IconBase, { RenderFunction } from "../lib/IconBase";

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set("bold", (color: string) => (
  <>
    <path
      d="M54.46089,201.53911c-9.204-9.204-3.09935-28.52745-7.78412-39.85C41.82037,149.95168,24,140.50492,24,127.99963,24,115.4945,41.82047,106.048,46.67683,94.31079c4.68477-11.32253-1.41993-30.6459,7.78406-39.8499s28.52746-3.09935,39.85-7.78412C106.04832,41.82037,115.49508,24,128.00037,24c12.50513,0,21.95163,17.82047,33.68884,22.67683,11.32253,4.68477,30.6459-1.41993,39.8499,7.78406s3.09935,28.52746,7.78412,39.85C214.17963,106.04832,232,115.49508,232,128.00037c0,12.50513-17.82047,21.95163-22.67683,33.68884-4.68477,11.32253,1.41993,30.6459-7.78406,39.8499s-28.52745,3.09935-39.85,7.78412C149.95168,214.17963,140.50492,232,127.99963,232c-12.50513,0-21.95163-17.82047-33.68884-22.67683C82.98826,204.6384,63.66489,210.7431,54.46089,201.53911Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="127.99854" cy="176" r="16" />
    <path
      d="M127.9995,136.0045a28,28,0,1,0-28-28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M54.46089,201.53911c-9.204-9.204-3.09935-28.52745-7.78412-39.85C41.82037,149.95168,24,140.50492,24,127.99963,24,115.4945,41.82047,106.048,46.67683,94.31079c4.68477-11.32253-1.41993-30.6459,7.78406-39.8499s28.52746-3.09935,39.85-7.78412C106.04832,41.82037,115.49508,24,128.00037,24c12.50513,0,21.95163,17.82047,33.68884,22.67683,11.32253,4.68477,30.6459-1.41993,39.8499,7.78406s3.09935,28.52746,7.78412,39.85C214.17963,106.04832,232,115.49508,232,128.00037c0,12.50513-17.82047,21.95163-22.67683,33.68884-4.68477,11.32253,1.41993,30.6459-7.78406,39.8499s-28.52745,3.09935-39.85,7.78412C149.95168,214.17963,140.50492,232,127.99963,232c-12.50513,0-21.95163-17.82047-33.68884-22.67683C82.98826,204.6384,63.66489,210.7431,54.46089,201.53911Z"
      opacity="0.2"
    />
    <path
      d="M54.46089,201.53911c-9.204-9.204-3.09935-28.52745-7.78412-39.85C41.82037,149.95168,24,140.50492,24,127.99963,24,115.4945,41.82047,106.048,46.67683,94.31079c4.68477-11.32253-1.41993-30.6459,7.78406-39.8499s28.52746-3.09935,39.85-7.78412C106.04832,41.82037,115.49508,24,128.00037,24c12.50513,0,21.95163,17.82047,33.68884,22.67683,11.32253,4.68477,30.6459-1.41993,39.8499,7.78406s3.09935,28.52746,7.78412,39.85C214.17963,106.04832,232,115.49508,232,128.00037c0,12.50513-17.82047,21.95163-22.67683,33.68884-4.68477,11.32253,1.41993,30.6459-7.78406,39.8499s-28.52745,3.09935-39.85,7.78412C149.95168,214.17963,140.50492,232,127.99963,232c-12.50513,0-21.95163-17.82047-33.68884-22.67683C82.98826,204.6384,63.66489,210.7431,54.46089,201.53911Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="180" r="12" />
    <path
      d="M127.9995,144.0045v-8a28,28,0,1,0-28-28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M225.8623,102.81543c-3.77246-3.93359-7.67285-8-9.14648-11.56348-1.35449-3.27343-1.43652-8.69531-1.51562-13.93945-.14747-9.75879-.31446-20.81934-8.00391-28.50879s-18.75-7.85644-28.50879-8.00391c-5.24414-.0791-10.666-.16113-13.93945-1.51562-3.5625-1.47363-7.62989-5.374-11.56348-9.14648C146.27539,23.51074,138.44238,16,128,16s-18.27441,7.51074-25.18457,14.1377c-3.93359,3.77246-8,7.67285-11.56348,9.14648-3.27343,1.35449-8.69531,1.43652-13.93945,1.51562-9.75879.14747-20.81934.31446-28.50879,8.00391s-7.85644,18.75-8.00391,28.50879c-.0791,5.24414-.16113,10.666-1.51562,13.93945-1.47363,3.5625-5.374,7.62989-9.14648,11.56348C23.51074,109.72461,16,117.55762,16,128s7.51074,18.27441,14.1377,25.18457c3.77246,3.93359,7.67285,8,9.14648,11.56348,1.35449,3.27343,1.43652,8.69531,1.51562,13.93945.14747,9.75879.31446,20.81934,8.00391,28.50879s18.75,7.85644,28.50879,8.00391c5.24414.0791,10.666.16113,13.93945,1.51562,3.5625,1.47363,7.62989,5.374,11.56348,9.14648C109.72461,232.48926,117.55762,240,128,240s18.27441-7.51074,25.18457-14.1377c3.93359-3.77246,8-7.67285,11.56348-9.14648,3.27343-1.35449,8.69531-1.43652,13.93945-1.51562,9.75879-.14747,20.81934-.31446,28.50879-8.00391s7.85644-18.75,8.00391-28.50879c.0791-5.24414.16113-10.666,1.51562-13.93945,1.47363-3.5625,5.374-7.62989,9.14648-11.56348C232.48926,146.27539,240,138.44238,240,128S232.48926,109.72559,225.8623,102.81543ZM128,192a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm7.999-48.89063v.89551a8,8,0,0,1-16,0v-8a8.00039,8.00039,0,0,1,8-8,20,20,0,1,0-20-20,8,8,0,0,1-16,0,36,36,0,1,1,44,35.10449Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M54.46089,201.53911c-9.204-9.204-3.09935-28.52745-7.78412-39.85C41.82037,149.95168,24,140.50492,24,127.99963,24,115.4945,41.82047,106.048,46.67683,94.31079c4.68477-11.32253-1.41993-30.6459,7.78406-39.8499s28.52746-3.09935,39.85-7.78412C106.04832,41.82037,115.49508,24,128.00037,24c12.50513,0,21.95163,17.82047,33.68884,22.67683,11.32253,4.68477,30.6459-1.41993,39.8499,7.78406s3.09935,28.52746,7.78412,39.85C214.17963,106.04832,232,115.49508,232,128.00037c0,12.50513-17.82047,21.95163-22.67683,33.68884-4.68477,11.32253,1.41993,30.6459-7.78406,39.8499s-28.52745,3.09935-39.85,7.78412C149.95168,214.17963,140.50492,232,127.99963,232c-12.50513,0-21.95163-17.82047-33.68884-22.67683C82.98826,204.6384,63.66489,210.7431,54.46089,201.53911Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="127.99902" cy="180" r="10" />
    <path
      d="M127.9995,144.0045v-8a28,28,0,1,0-28-28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <path
      d="M54.46089,201.53911c-9.204-9.204-3.09935-28.52745-7.78412-39.85C41.82037,149.95168,24,140.50492,24,127.99963,24,115.4945,41.82047,106.048,46.67683,94.31079c4.68477-11.32253-1.41993-30.6459,7.78406-39.8499s28.52746-3.09935,39.85-7.78412C106.04832,41.82037,115.49508,24,128.00037,24c12.50513,0,21.95163,17.82047,33.68884,22.67683,11.32253,4.68477,30.6459-1.41993,39.8499,7.78406s3.09935,28.52746,7.78412,39.85C214.17963,106.04832,232,115.49508,232,128.00037c0,12.50513-17.82047,21.95163-22.67683,33.68884-4.68477,11.32253,1.41993,30.6459-7.78406,39.8499s-28.52745,3.09935-39.85,7.78412C149.95168,214.17963,140.50492,232,127.99963,232c-12.50513,0-21.95163-17.82047-33.68884-22.67683C82.98826,204.6384,63.66489,210.7431,54.46089,201.53911Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="127.99951" cy="180" r="8" />
    <path
      d="M127.9995,144.0045v-8a28,28,0,1,0-28-28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path
      d="M54.46089,201.53911c-9.204-9.204-3.09935-28.52745-7.78412-39.85C41.82037,149.95168,24,140.50492,24,127.99963,24,115.4945,41.82047,106.048,46.67683,94.31079c4.68477-11.32253-1.41993-30.6459,7.78406-39.8499s28.52746-3.09935,39.85-7.78412C106.04832,41.82037,115.49508,24,128.00037,24c12.50513,0,21.95163,17.82047,33.68884,22.67683,11.32253,4.68477,30.6459-1.41993,39.8499,7.78406s3.09935,28.52746,7.78412,39.85C214.17963,106.04832,232,115.49508,232,128.00037c0,12.50513-17.82047,21.95163-22.67683,33.68884-4.68477,11.32253,1.41993,30.6459-7.78406,39.8499s-28.52745,3.09935-39.85,7.78412C149.95168,214.17963,140.50492,232,127.99963,232c-12.50513,0-21.95163-17.82047-33.68884-22.67683C82.98826,204.6384,63.66489,210.7431,54.46089,201.53911Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="180" r="12" />
    <path
      d="M127.9995,144.0045v-8a28,28,0,1,0-28-28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const CircleWavyQuestion = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} renderPath={renderPath} />
);

CircleWavyQuestion.displayName = "CircleWavyQuestion";

export default CircleWavyQuestion;
