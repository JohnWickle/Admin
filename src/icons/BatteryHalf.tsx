import React, { forwardRef } from "react";
import { IconProps } from "../lib";

const BatteryHalf = forwardRef<SVGSVGElement, IconProps>(
  (
    { color = "currentColor", size = "1.25em", weight = "regular", ...rest },
    ref
  ) => {
    switch (weight) {
      case "thin":
        return (
          <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            stroke={color}
            {...rest}
          >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <polygon points="0 16 16 16 16 0 0 0" />
              <path
                fill={color}
                fillRule="nonzero"
                d="M2,12.2499 C1.58592881,12.2499 1.25,11.9139712 1.25,11.4999 L1.25,11.4999 L1.25,4.4999 C1.25,4.08582881 1.58592881,3.7499 2,3.7499 L2,3.7499 L12.5,3.7499 C12.9140712,3.7499 13.25,4.08582881 13.25,4.4999 L13.25,4.4999 L13.25,11.4999 C13.25,11.9139712 12.9140712,12.2499 12.5,12.2499 L12.5,12.2499 Z M7.25,5.6029 L1.75,11.1029 L1.75,11.4999 C1.75,11.6181247 1.83233802,11.717352 1.94272212,11.7432899 L2,11.7499 L3.396,11.7499 L7.25,7.8959 L7.25,5.6029 Z M12.5,4.2499 L7.75,4.2499 L7.75,11.7499 L12.5,11.7499 C12.6182247,11.7499 12.717452,11.667562 12.7433899,11.5571779 L12.75,11.4999 L12.75,4.4999 C12.75,4.36197119 12.6379288,4.2499 12.5,4.2499 L12.5,4.2499 Z M7.25,8.6029 L4.103,11.7499 L7.25,11.7499 L7.25,8.6029 Z M7.25,4.2499 L5.602,4.2499 L1.75,8.1019 L1.75,10.3959 L7.25,4.8959 L7.25,4.2499 Z M15,5.7499 C15.1183467,5.7499 15.2174868,5.83213341 15.2433973,5.94257729 L15.25,5.9999 L15.25,9.9999 C15.25,10.1379712 15.1380712,10.2499 15,10.2499 C14.8816533,10.2499 14.7825132,10.1676666 14.7566027,10.0572227 L14.75,9.9999 L14.75,5.9999 C14.75,5.86182881 14.8619288,5.7499 15,5.7499 Z M4.896,4.2499 L2,4.2499 C1.86207119,4.2499 1.75,4.36197119 1.75,4.4999 L1.75,4.4999 L1.75,7.3959 L4.896,4.2499 Z"
              />
            </g>
          </svg>
        );

      case "light":
        return (
          <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            stroke={color}
            {...rest}
          >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <polygon points="0 16 16 16 16 0 0 0" />
              <path
                fill={color}
                fillRule="nonzero"
                d="M12.5,3.6249 C12.9831068,3.6249 13.375,4.01679322 13.375,4.4999 L13.375,4.4999 L13.375,11.4999 C13.375,11.9830068 12.9831068,12.3749 12.5,12.3749 L12.5,12.3749 L2,12.3749 C1.51689322,12.3749 1.125,11.9830068 1.125,11.4999 L1.125,11.4999 L1.125,4.4999 C1.125,4.01679322 1.51689322,3.6249 2,3.6249 L2,3.6249 Z M7.125,5.9049 L1.875,11.1549 L1.875,11.4999 C1.875,11.5550146 1.91090834,11.6019458 1.960545,11.6185137 L2,11.6249 L3.344,11.6249 L7.125,7.8439 L7.125,5.9049 Z M12.5,4.3749 L7.875,4.3749 L7.875,11.6249 L12.5,11.6249 C12.5551146,11.6249 12.6020458,11.5889917 12.6186137,11.539355 L12.625,11.4999 L12.625,4.4999 C12.625,4.43100678 12.5688932,4.3749 12.5,4.3749 L12.5,4.3749 Z M7.125,8.9049 L4.405,11.6249 L7.125,11.6249 L7.125,8.9049 Z M15,5.6249 C15.1812184,5.6249 15.332414,5.75344325 15.3673813,5.92432442 L15.375,5.9999 L15.375,9.9999 C15.375,10.2070068 15.2071068,10.3749 15,10.3749 C14.8187816,10.3749 14.667586,10.2463568 14.6326187,10.0754756 L14.625,9.9999 L14.625,5.9999 C14.625,5.79279322 14.7928932,5.6249 15,5.6249 Z M7.125,4.3749 L5.655,4.3749 L1.875,8.1549 L1.875,10.0939 L7.125,4.8439 L7.125,4.3749 Z M4.593,4.3749 L2,4.3749 C1.93110678,4.3749 1.875,4.43100678 1.875,4.4999 L1.875,4.4999 L1.875,7.0929 L4.593,4.3749 Z"
              />
            </g>
          </svg>
        );

      case "regular":
        return (
          <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            stroke={color}
            {...rest}
          >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <polygon points="0 16 16 16 16 0 0 0" />
              <path
                fill={color}
                fillRule="nonzero"
                d="M12.5,3.5 C13.0521424,3.5 13.5,3.94785763 13.5,4.5 L13.5,4.5 L13.5,11.5 C13.5,12.0521424 13.0521424,12.5 12.5,12.5 L12.5,12.5 L2,12.5 C1.44785763,12.5 1,12.0521424 1,11.5 L1,11.5 L1,4.5 C1,3.94785763 1.44785763,3.5 2,3.5 L2,3.5 Z M7,6.206 L2,11.206 L2,11.5 L3.292,11.5 L7,7.792 L7,6.206 Z M12.5,4.5 L8,4.5 L8,11.5 L12.5,11.5 L12.5,4.5 Z M7,9.206 L4.706,11.5 L7,11.5 L7,9.206 Z M15,5.5 C15.2454599,5.5 15.4496084,5.67687516 15.4919443,5.91012437 L15.5,6 L15.5,10 C15.5,10.2761424 15.2761424,10.5 15,10.5 C14.7545401,10.5 14.5503916,10.3231248 14.5080557,10.0898756 L14.5,10 L14.5,6 C14.5,5.72385763 14.7238576,5.5 15,5.5 Z M7,4.5 L5.706,4.5 L2,8.206 L2,9.792 L7,4.792 L7,4.5 Z M4.292,4.5 L2,4.5 L2,6.792 L4.292,4.5 Z"
              />
            </g>
          </svg>
        );
      case "bold":
        return (
          <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            stroke={color}
            {...rest}
          >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <polygon points="0 16 16 16 16 0 0 0" />
              <path
                fill={color}
                fillRule="nonzero"
                d="M12.5,3.2499 C13.1902136,3.2499 13.75,3.80968644 13.75,4.4999 L13.75,4.4999 L13.75,11.4999 C13.75,12.1901136 13.1902136,12.7499 12.5,12.7499 L12.5,12.7499 L2,12.7499 C1.30978644,12.7499 0.75,12.1901136 0.75,11.4999 L0.75,11.4999 L0.75,4.4999 C0.75,3.80968644 1.30978644,3.2499 2,3.2499 L2,3.2499 Z M12.25,4.749 L8.25,4.7489 L8.25,11.2489 L12.25,11.249 L12.25,4.749 Z M6.75,6.8099 L2.311,11.2489 L3.19,11.2489 L6.75,7.6889 L6.75,6.8099 Z M6.75,9.8099 L5.311,11.2489 L6.75,11.2489 L6.75,9.8099 Z M15,5.2499 C15.3796958,5.2499 15.693491,5.53205388 15.7431534,5.89812944 L15.75,5.9999 L15.75,9.9999 C15.75,10.4141136 15.4142136,10.7499 15,10.7499 C14.6203042,10.7499 14.306509,10.4677461 14.2568466,10.1016706 L14.25,9.9999 L14.25,5.9999 C14.25,5.58568644 14.5857864,5.2499 15,5.2499 Z M6.69,4.7489 L5.811,4.7489 L2.25,8.3099 L2.25,9.1889 L6.69,4.7489 Z M3.689,4.7489 L2.25,4.749 L2.25,6.1879 L3.689,4.7489 Z"
              />
            </g>
          </svg>
        );

      case "fill":
        return (
          <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            stroke={color}
            {...rest}
          >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <polygon points="0 16 16 16 16 0 0 0" />
              <path
                fill={color}
                fillRule="nonzero"
                d="M12.5,3.5 C13.0521424,3.5 13.5,3.94785763 13.5,4.5 L13.5,4.5 L13.5,11.5 C13.5,12.0521424 13.0521424,12.5 12.5,12.5 L12.5,12.5 L2,12.5 C1.44785763,12.5 1,12.0521424 1,11.5 L1,11.5 L1,4.5 C1,3.94785763 1.44785763,3.5 2,3.5 L2,3.5 Z M12.5,4.5 L8,4.5 L8,11.5 L12.5,11.5 L12.5,4.5 Z M15,5.5 C15.2454599,5.5 15.4496084,5.67687516 15.4919443,5.91012437 L15.5,6 L15.5,10 C15.5,10.2761424 15.2761424,10.5 15,10.5 C14.7545401,10.5 14.5503916,10.3231248 14.5080557,10.0898756 L14.5,10 L14.5,6 C14.5,5.72385763 14.7238576,5.5 15,5.5 Z"
              />
            </g>
          </svg>
        );

      case "duotone":
        return (
          <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            stroke={color}
            {...rest}
          >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <polygon points="0 16 16 16 16 0 0 0" />
              <path
                fill={color}
                d="M7.4996,11.9999 L7.4996,3.9999 L1.9996,3.9999 C1.7246,3.9999 1.4996,4.2239 1.4996,4.4999 L1.4996,11.4999 C1.4996,11.7759 1.7246,11.9999 1.9996,11.9999 L7.4996,11.9999 Z"
                opacity=".2"
              />
              <path
                fill={color}
                fillRule="nonzero"
                d="M1.9996,12.4999 C1.44826669,12.4999 0.9996,12.0518522 0.9996,11.4999 L0.9996,11.4999 L0.9996,4.4999 C0.9996,3.94794784 1.44826669,3.4999 1.9996,3.4999 L1.9996,3.4999 L12.4996,3.4999 C13.0517424,3.4999 13.4996,3.94775763 13.4996,4.4999 L13.4996,4.4999 L13.4996,11.4999 C13.4996,12.0520424 13.0517424,12.4999 12.4996,12.4999 L12.4996,12.4999 Z M6.9996,4.4999 L1.9996,4.4999 L1.9996,11.4999 L6.9996,11.4999 L6.9996,4.4999 Z M12.4996,4.4999 L7.9996,4.4999 L7.9996,11.4999 L12.4996,11.4999 L12.4996,4.4999 Z M14.9996,5.4999 C15.2450599,5.4999 15.4492084,5.67677516 15.4915443,5.91002437 L15.4996,5.9999 L15.4996,9.9999 C15.4996,10.2760424 15.2757424,10.4999 14.9996,10.4999 C14.7541401,10.4999 14.5499916,10.3230248 14.5076557,10.0897756 L14.4996,9.9999 L14.4996,5.9999 C14.4996,5.72375763 14.7234576,5.4999 14.9996,5.4999 Z"
              />
            </g>
          </svg>
        );

      default:
        throw new Error(
          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
        );
    }
  }
);

BatteryHalf.displayName = "BatteryHalf";

export default BatteryHalf;
