import React, { forwardRef } from "react";
import { IconProps } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "thin":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            fillRule="nonzero"
            d="M1.75,3.9999 C1.75,3.58582881 2.08592881,3.2499 2.5,3.2499 L2.5,3.2499 L5.833,3.2499 C5.99512728,3.2499 6.15357708,3.30245706 6.28403429,3.39992572 L6.28403429,3.39992572 L8.083,4.7499 L13.5,4.7499 C13.8795653,4.7499 14.1934692,5.03217352 14.2431507,5.39815935 L14.25,5.4999 L14.25,12.4999 C14.25,12.8794653 13.9677265,13.1933692 13.6017406,13.2430507 L13.5,13.2499 L2.5,13.2499 C2.12135141,13.2499 1.80668357,12.9667862 1.75686843,12.6014306 L1.75,12.4999 Z M6.28363142,6.6001759 C6.15357708,6.69734294 5.99512728,6.7499 5.833,6.7499 L5.833,6.7499 L2.25,6.7499 L2.25,12.4999 C2.25,12.6172676 2.33307271,12.7171071 2.44303699,12.7432374 L2.5,12.7499 L13.5,12.7499 C13.6182247,12.7499 13.717452,12.667562 13.7433899,12.5571779 L13.75,12.4999 L13.75,5.4999 C13.75,5.3816753 13.667662,5.28244805 13.5572779,5.25651015 L13.5,5.2499 L8.082,5.2499 Z M5.833,3.7499 L2.5,3.7499 C2.36207119,3.7499 2.25,3.86197119 2.25,3.9999 L2.25,3.9999 L2.25,6.249 L5.833,6.2499 C5.86923613,6.2499 5.9050718,6.24201993 5.93772367,6.22721273 L5.93772367,6.22721273 L5.98396571,6.19992572 L7.582,4.999 L5.98436858,3.8001759 C5.95532776,3.77847874 5.92189053,3.76336628 5.88672086,3.75570211 L5.88672086,3.75570211 L5.833,3.7499 Z"
          />
        </g>
      );
    case "light":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            fillRule="nonzero"
            d="M1.625,3.9999 C1.625,3.51679322 2.01689322,3.1249 2.5,3.1249 L2.5,3.1249 L5.833,3.1249 C6.02207055,3.1249 6.20676951,3.18616378 6.35905144,3.29993858 L6.35905144,3.29993858 L8.125,4.6249 L13.5,4.6249 C13.9459447,4.6249 14.314169,4.95882085 14.3681802,5.39016985 L14.375,5.4999 L14.375,12.4999 C14.375,12.9458447 14.0410792,13.314069 13.6097301,13.3680802 L13.5,13.3749 L2.5,13.3749 C2.05497836,13.3749 1.685973,13.0401271 1.63183621,12.6094335 L1.625,12.4999 Z M6.35844713,6.70031386 C6.20676951,6.81363622 6.02207055,6.8749 5.833,6.8749 L5.833,6.8749 L2.375,6.8749 L2.375,12.4999 C2.375,12.5542146 2.41154834,12.6016258 2.460929,12.6184177 L2.5,12.6249 L13.5,12.6249 C13.5551146,12.6249 13.6020458,12.5889917 13.6186137,12.539355 L13.625,12.4999 L13.625,5.4999 C13.625,5.44478542 13.5890917,5.39785417 13.539455,5.38128625 L13.5,5.3749 L8.124,5.3749 Z M5.833,3.8749 L2.5,3.8749 C2.43110678,3.8749 2.375,3.93100678 2.375,3.9999 L2.375,3.9999 L2.375,6.124 L5.8534309,6.12324106 L5.87325327,6.11839603 L5.90894856,6.09993858 L7.374,4.999 L5.89219107,3.88942823 L5.8733288,3.88146052 L5.833,3.8749 Z"
          />
        </g>
      );
    case "regular":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            fillRule="nonzero"
            d="M1.5005,4 C1.5005,3.44766643 1.94754811,3 2.5005,3 L2.5005,3 L5.8335,3 C6.04953206,3 6.25947673,3.06998156 6.43346572,3.19997429 L6.43346572,3.19997429 L8.168,4.5 L13.5,4.5 C14.0127036,4.5 14.4354883,4.88616295 14.4932702,5.38340518 L14.5,5.5 L14.5,12.5 C14.5,13.0127036 14.113837,13.4354883 13.6165948,13.4932702 L13.5,13.5 L2.5,13.5 C1.98822494,13.5 1.56464438,13.1129748 1.50674397,12.6164101 L1.5,12.5 Z M6.43276284,6.80055181 C6.25947673,6.93001844 6.04953206,7 5.8335,7 L5.8335,7 L2.5,7 L2.5,12.5 L13.5,12.5 L13.5,5.5 L8.167,5.5 Z M5.83423716,4.00055181 L2.5005,4 L2.5,6 L5.8335,6 L7.166,4.999 L5.83423716,4.00055181 Z"
          />
        </g>
      );
    case "bold":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            fillRule="nonzero"
            d="M1.25,3.9999 C1.25,3.30968644 1.80978644,2.7499 2.5,2.7499 L2.5,2.7499 L5.833,2.7499 C6.10290037,2.7499 6.3663468,2.83728395 6.58410287,2.99997717 L6.58410287,2.99997717 L8.25,4.2499 L13.5,4.2499 C14.1470752,4.2499 14.6795172,4.7418998 14.7435448,5.37211822 L14.75,5.4999 L14.75,12.4999 C14.75,13.1469752 14.2580002,13.6794172 13.6277818,13.7434448 L13.5,13.7499 L2.5,13.7499 C1.85386229,13.7499 1.32059997,13.2570213 1.25646616,12.627517 L1.25,12.4999 Z M13.25,5.749 L8.249,5.7499 L6.58289427,7.00072771 C6.40243804,7.13555133 6.1894131,7.21870523 5.96722511,7.24267809 L5.833,7.2499 L2.75,7.2499 L2.75,12.249 L13.25,12.249 L13.25,5.749 Z M5.75,4.249 L2.75,4.249 L2.75,5.749 L5.75,5.749 L6.749,4.999 L5.75,4.249 Z"
          />
        </g>
      );
    case "fill":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            d="M2.4997,3.9999 L5.8337,3.9999 L7.1667,4.9999 L5.8327,5.9999 L2.4997,5.9999 L2.4997,3.9999 Z M13.4997,4.4999 L8.1657,4.4999 L6.4327,3.1999 C6.2607,3.0709 6.0477,2.9999 5.8337,2.9999 L2.4997,2.9999 C1.9477,2.9999 1.4997,3.4489 1.4997,3.9999 L1.4997,6.4999 L1.4997,12.4999 C1.4997,13.0509 1.9477,13.4999 2.4997,13.4999 L13.4997,13.4999 C14.0517,13.4999 14.4997,13.0509 14.4997,12.4999 L14.4997,5.4999 C14.4997,4.9489 14.0517,4.4999 13.4997,4.4999 L13.4997,4.4999 Z"
          />
        </g>
      );
    case "duotone":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            d="M5.8336,6.4999 L1.9996,6.4999 L1.9996,3.9999 C1.9996,3.7239 2.2246,3.4999 2.4996,3.4999 L5.8336,3.4999 C5.9406,3.4999 6.0466,3.5349 6.1336,3.5999 L7.9996,4.9999 L6.1336,6.3999 C6.0466,6.4649 5.9406,6.4999 5.8336,6.4999"
            opacity=".2"
          />
          <path
            fill={color}
            fillRule="nonzero"
            d="M1.4996,3.9999 C1.4996,3.44794784 1.94826669,2.9999 2.4996,2.9999 L2.4996,2.9999 L5.8336,2.9999 C6.04887237,2.9999 6.25977026,3.07002614 6.43366858,3.19995145 L6.43366858,3.19995145 L8.1666,4.4999 L13.4996,4.4999 C14.0123036,4.4999 14.4350883,4.88606295 14.4928702,5.38330518 L14.4996,5.4999 L14.4996,12.4999 C14.4996,13.0126036 14.113437,13.4353883 13.6161948,13.4931702 L13.4996,13.4999 L2.4996,13.4999 C1.98857646,13.4999 1.56435174,13.112711 1.50635547,12.616275 L1.4996,12.4999 Z M6.43286284,6.80045181 C6.25977026,6.92977386 6.04887237,6.9999 5.8336,6.9999 L5.8336,6.9999 L2.4996,6.9999 L2.4996,12.4999 L13.4996,12.4999 L13.4996,5.4999 L8.1646,5.4999 Z M5.83433716,4.00045181 L2.4996,3.9999 L2.499,5.999 L5.8336,5.9999 L7.166,4.999 L5.83433716,4.00045181 Z"
          />
        </g>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const FolderDip = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      color = "currentColor",
      size = "1.25em",
      weight = "regular",
      mirrored = false,
      ...rest
    },
    ref
  ) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        stroke={color}
        transform={mirrored ? "scale(-1, 1)" : undefined}
        {...rest}
      >
        {renderPathFor(weight, color)}
      </svg>
    );
  }
);

FolderDip.displayName = "FolderDip";

export default FolderDip;
