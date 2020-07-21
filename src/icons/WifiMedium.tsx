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
            d="M7.9996,12.125 C8.2066,12.125 8.3746,12.293 8.3746,12.5 C8.3746,12.708 8.2066,12.875 7.9996,12.875 C7.7926,12.875 7.6246,12.708 7.6246,12.5 C7.6246,12.293 7.7926,12.125 7.9996,12.125 Z M7.9993,9.2499 C8.89762928,9.2499 9.74085389,9.59508797 10.3660114,10.1991103 C10.4653065,10.2950484 10.4680279,10.4533163 10.3720897,10.5526114 C10.2761516,10.6519065 10.1178837,10.6546279 10.0185886,10.5586897 C9.48608943,10.0441932 8.76719047,9.7499 7.9993,9.7499 C7.23165465,9.7499 6.51370963,10.0440009 5.98101142,10.5586897 C5.8817163,10.6546279 5.72344845,10.6519065 5.62751028,10.5526114 C5.53157211,10.4533163 5.53429346,10.2950484 5.63358858,10.1991103 C6.2589154,9.59492441 7.10117251,9.2499 7.9993,9.2499 Z M7.9992,6.2503 C9.70471146,6.2503 11.3034942,6.91550095 12.488355,8.07891634 C12.5868736,8.17565178 12.5883191,8.33393642 12.4915837,8.43245499 C12.3948482,8.53097357 12.2365636,8.53241909 12.138045,8.43568366 C11.0459008,7.36330679 9.57256462,6.7503 7.9992,6.7503 C6.42635369,6.7503 4.95213888,7.36367235 3.86143571,8.43560436 C3.76296094,8.53238437 3.60467565,8.53101049 3.50789564,8.43253571 C3.41111563,8.33406094 3.41248951,8.17577565 3.51096429,8.07899564 C4.69442681,6.91590068 6.29417022,6.2503 7.9992,6.2503 Z"
          />
        </g>
      );
    case "light":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            d="M8.0001,11.938 C8.3101,11.938 8.5621,12.189 8.5621,12.5 C8.5621,12.811 8.3101,13.062 8.0001,13.062 C7.6891,13.062 7.4371,12.811 7.4371,12.5 C7.4371,12.189 7.6891,11.938 8.0001,11.938 Z M7.9993,9.1249 C8.93023898,9.1249 9.80454501,9.48281166 10.4528671,10.1092154 C10.6018098,10.2531227 10.6058918,10.4905244 10.4619846,10.6394671 C10.3180773,10.7884098 10.0806756,10.7924918 9.93173287,10.6485846 C9.42239831,10.1564695 8.73458077,9.8749 7.9993,9.8749 C7.26427518,9.8749 6.57740819,10.15627 6.06786713,10.6485846 C5.91892445,10.7924918 5.68152267,10.7884098 5.53761542,10.6394671 C5.39370817,10.4905244 5.39779019,10.2531227 5.54673287,10.1092154 C6.19521684,9.48265529 7.06855198,9.1249 7.9993,9.1249 Z M7.9992,6.1253 C9.73774818,6.1253 11.3678925,6.80354949 12.5759325,7.98972452 C12.7237103,8.13482766 12.7258786,8.37225463 12.5807755,8.52003249 C12.4356723,8.66781035 12.1982454,8.66997863 12.0504675,8.52487548 C10.9815025,7.47525826 9.5395279,6.8753 7.9992,6.8753 C6.45939956,6.8753 5.0165669,7.47561527 3.94905357,8.52475654 C3.8013414,8.66992656 3.56391348,8.66786574 3.41874346,8.52015357 C3.27357344,8.3724414 3.27563426,8.13501348 3.42334643,7.98984346 C4.62999879,6.80395776 6.26112436,6.1253 7.9992,6.1253 Z"
          />
        </g>
      );
    case "regular":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            d="M7.9996,11.75 C8.4136,11.75 8.7496,12.086 8.7496,12.5 C8.7496,12.915 8.4136,13.25 7.9996,13.25 C7.5856,13.25 7.2496,12.915 7.2496,12.5 C7.2496,12.086 7.5856,11.75 7.9996,11.75 Z M7.9993,8.9999 C8.96284869,8.9999 9.86823612,9.37053535 10.5397228,10.0193206 C10.7383131,10.2111969 10.7437558,10.5277326 10.5518794,10.7263228 C10.3600031,10.9249131 10.0434674,10.9303558 9.84487716,10.7384794 C9.35870719,10.2687458 8.70197107,9.9999 7.9993,9.9999 C7.29689572,9.9999 6.64110675,10.2685391 6.15472284,10.7384794 C5.9561326,10.9303558 5.6395969,10.9249131 5.44772056,10.7263228 C5.25584423,10.5277326 5.26128692,10.2111969 5.45987716,10.0193206 C6.13151828,9.37038617 7.03593144,8.9999 7.9993,8.9999 Z M7.9992,6.0003 C9.77078489,6.0003 11.4322908,6.69159803 12.66351,7.90053269 C12.8605471,8.09400355 12.8634382,8.41057284 12.6699673,8.60760998 C12.4764964,8.80464713 12.1599272,8.80753817 11.96289,8.61406731 C10.9171042,7.58720972 9.50649119,7.0003 7.9992,7.0003 C6.49244543,7.0003 5.08099492,7.58755819 4.03667143,8.61390872 C3.83972187,8.80746874 3.52315131,8.80472099 3.32959128,8.60777143 C3.13603126,8.41082187 3.13877901,8.09425131 3.33572857,7.90069128 C4.56557078,6.69201484 6.22807849,6.0003 7.9992,6.0003 Z"
          />
        </g>
      );
    case "bold":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            d="M7.9996,11.375 C8.6206,11.375 9.1246,11.879 9.1246,12.5 C9.1246,13.122 8.6206,13.625 7.9996,13.625 C7.3786,13.625 6.8746,13.122 6.8746,12.5 C6.8746,11.879 7.3786,11.375 7.9996,11.375 Z M7.9993,8.7499 C9.02806809,8.7499 9.99561835,9.14598274 10.7134343,9.83953084 C11.0113196,10.1273453 11.0194837,10.6021489 10.7316692,10.9000343 C10.4438547,11.1979196 9.9690511,11.2060837 9.67116574,10.9182692 C9.23132496,10.4932984 8.63675166,10.2499 7.9993,10.2499 C7.36213679,10.2499 6.76850387,10.4930773 6.32843426,10.9182692 C6.0305489,11.2060837 5.55574535,11.1979196 5.26793084,10.9000343 C4.98011634,10.6021489 4.98828038,10.1273453 5.28616574,9.83953084 C6.00412116,9.14584794 6.97069037,8.7499 7.9993,8.7499 Z M7.9992,5.7503 C9.83685831,5.7503 11.5610875,6.46769511 12.838665,7.72214903 C13.1342207,8.01235533 13.1385573,8.48720926 12.848351,8.78276498 C12.5581447,9.0783207 12.0832907,9.08265726 11.787735,8.79245097 C10.7883075,7.81111264 9.44041777,7.2503 7.9992,7.2503 C6.55853716,7.2503 5.20985095,7.81144402 4.21190714,8.79221308 C3.91648281,9.08255311 3.44162696,9.07843148 3.15128692,8.78300714 C2.86094689,8.48758281 2.86506852,8.01272696 3.16049286,7.72238692 C4.43671474,6.468129 6.16198675,5.7503 7.9992,5.7503 Z"
          />
        </g>
      );
    case "fill":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            d="M12.7799,7.0936 C12.4429,6.8426 12.0889,6.6196 11.7179,6.4256 L11.6719,6.4006 C11.3119,6.2156 10.9409,6.0566 10.5589,5.9276 C10.5279,5.9166 10.4969,5.9076 10.4649,5.8976 C10.0889,5.7756 9.7049,5.6776 9.3129,5.6126 C9.2799,5.6066 9.2469,5.6036 9.2139,5.5986 C8.8129,5.5376 8.4079,5.4996 7.9999,5.4996 C7.5919,5.4996 7.1869,5.5366 6.7879,5.5986 C6.7549,5.6036 6.7199,5.6066 6.6869,5.6126 C6.2959,5.6766 5.9129,5.7756 5.5369,5.8966 C5.5059,5.9066 5.4729,5.9166 5.4419,5.9266 C5.0599,6.0556 4.6899,6.2146 4.3319,6.3996 C4.3149,6.4076 4.2989,6.4166 4.2829,6.4256 C3.9139,6.6186 3.5579,6.8406 3.2219,7.0916 L3.2219,7.0926 L1.5689,5.1416 C5.3579,2.2846 10.6479,2.2866 14.4309,5.1476 L12.7799,7.0936 Z M15.0379,4.3466 C10.8959,1.2196 5.1069,1.2186 0.9639,4.3456 C0.7429,4.5116 0.6039,4.7546 0.5739,5.0296 C0.5429,5.3046 0.6289,5.5856 0.8089,5.7976 L7.2369,13.3736 C7.4279,13.5996 7.7069,13.7286 8.0009,13.7296 L8.0019,13.7296 C8.2939,13.7296 8.5689,13.6016 8.7589,13.3786 L8.7589,13.3786 L15.1939,5.7946 C15.3729,5.5826 15.4579,5.3036 15.4269,5.0306 C15.3959,4.7556 15.2589,4.5126 15.0379,4.3466 L15.0379,4.3466 Z"
          />
        </g>
      );
    case "duotone":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            d="M8.3776,13.055 C8.1776,13.29 7.8176,13.286 7.6186,13.051 L3.1486,7.781 C4.4556,6.67 6.1496,6 7.9996,6 C9.8506,6 11.5446,6.67 12.8526,7.781 L8.3776,13.055 Z"
            opacity=".2"
          />
          <path
            fill={color}
            fillRule="nonzero"
            d="M0.962078412,4.34681911 C5.108352,1.2172603 10.892248,1.2172603 15.0385216,4.34681911 L15.0385216,4.34681911 L15.1310067,4.42594011 C15.5055315,4.78782455 15.5379851,5.38615157 15.1933635,5.79561374 L15.1933635,5.79561374 L11.7092607,9.89965 L8.75836969,13.3790593 C8.73320009,13.4086336 8.70675474,13.4363278 8.67919468,13.4621448 C8.50208251,13.6277506 8.27946775,13.7160935 8.05339959,13.7277625 C7.75412675,13.743386 7.44946925,13.6249869 7.23729136,13.374425 L7.23702136,13.3743604 L0.809457927,5.79787425 C0.435893188,5.35873698 0.500366234,4.69460201 0.962078412,4.34681911 Z M7.9996,6.5 C6.4882302,6.5001 5.05139039,6.98065251 3.86418577,7.85212343 L7.999,12.726 L12.1360142,7.85212343 C11.1139685,7.10188783 9.90691264,6.64137036 8.62624836,6.52775935 L8.31409354,6.50694415 L7.9996,6.5 L7.9996,6.5 Z M7.9996,5.5 C9.69623657,5.5 11.3116813,6.03004811 12.6542632,6.99222832 L12.7846328,7.08813361 L12.7846328,7.08813361 L14.4297546,5.14993875 C10.646352,2.2845397 5.354248,2.2845397 1.56697443,5.14493251 L1.56697443,5.14493251 L3.21556724,7.08813361 L3.21556724,7.08813361 L3.34641326,6.99237309 C4.68815938,6.03022048 6.30356154,5.5 7.9996,5.5 Z"
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

const WifiMedium = forwardRef<SVGSVGElement, IconProps>(
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

WifiMedium.displayName = "WifiMedium";

export default WifiMedium;
