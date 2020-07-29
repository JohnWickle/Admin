import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "thin":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            fillRule="nonzero"
            d="M13.2427242,1.94106435 L13.2496,1.9998 L13.2496,10.7498 C13.2496,11.8548712 12.3546712,12.7498 11.2496,12.7498 C10.1452055,12.7498 9.2496,11.854548 9.2496,10.7498 C9.2496,9.64572881 10.1455288,8.7498 11.2496,8.7498 C11.8473145,8.7498 12.3837041,9.0119669 12.7501609,9.42752489 L12.7486,5.31967685 L5.2486,7.19467685 L5.2496,12.7436768 C5.2496,13.8046407 4.43417933,14.6680087 3.39892468,14.7443172 L3.2496,14.7498 C2.14520546,14.7498 1.2496,13.854548 1.2496,12.7498 C1.2496,11.6457288 2.14552881,10.7498 3.2496,10.7498 C3.84731448,10.7498 4.38370408,11.0119669 4.7501609,11.4275249 L4.7496,3.9998 C4.7496,3.90802647 4.79956758,3.82567447 4.87653599,3.78215926 L4.93896609,3.75726437 L12.9389661,1.75726437 C13.0770294,1.72274854 13.211311,1.80980337 13.2427242,1.94106435 Z M3.2496,11.2498 C2.42167119,11.2498 1.7496,11.9218712 1.7496,12.7498 C1.7496,13.5783614 2.42130366,14.2498 3.2496,14.2498 C4.07852881,14.2498 4.7496,13.5787288 4.7496,12.7498 C4.7496,11.9215037 4.07816141,11.2498 3.2496,11.2498 Z M11.2496,9.2498 C10.4216712,9.2498 9.7496,9.92187119 9.7496,10.7498 C9.7496,11.5783614 10.4213037,12.2498 11.2496,12.2498 C12.0785288,12.2498 12.7496,11.5787288 12.7496,10.7498 C12.7496,9.92150366 12.0781614,9.2498 11.2496,9.2498 Z M12.749,2.32 L5.249,4.195 L5.2486,6.67867685 L12.7486,4.80367685 L12.749,2.32 Z"
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
            d="M13.3664128,1.92112196 L13.3746,1.9998 L13.3746,10.7498 C13.3746,11.9239068 12.4237068,12.8748 11.2496,12.8748 C10.0761809,12.8748 9.1246,11.9235946 9.1246,10.7498 C9.1246,9.57669322 10.0764932,8.6248 11.2496,8.6248 C11.7747312,8.6248 12.2553116,8.81525708 12.6260994,9.13082858 L12.6236,5.47861527 L5.3736,7.29161527 L5.3746,12.7466153 C5.3746,13.8728587 4.50459562,14.7916917 3.40141869,14.8694672 L3.2496,14.8748 C2.07618091,14.8748 1.1246,13.9235946 1.1246,12.7498 C1.1246,11.5766932 2.07649322,10.6248 3.2496,10.6248 C3.7747312,10.6248 4.25531159,10.8152571 4.62609937,11.1308286 L4.6246,3.9998 C4.6246,3.85230683 4.71064111,3.72103695 4.84035119,3.66025961 L4.90864914,3.63599656 L12.9086491,1.63599656 C13.1190314,1.583401 13.3235595,1.71899647 13.3664128,1.92112196 Z M3.2496,11.3748 C2.49070678,11.3748 1.8746,11.9909068 1.8746,12.7498 C1.8746,13.5093148 2.49032821,14.1248 3.2496,14.1248 C4.00949322,14.1248 4.6246,13.5096932 4.6246,12.7498 C4.6246,11.9905282 4.00911477,11.3748 3.2496,11.3748 Z M11.2496,9.3748 C10.4907068,9.3748 9.8746,9.99090678 9.8746,10.7498 C9.8746,11.5093148 10.4903282,12.1248 11.2496,12.1248 C12.0094932,12.1248 12.6246,11.5096932 12.6246,10.7498 C12.6246,9.99052821 12.0091148,9.3748 11.2496,9.3748 Z M12.624,2.48 L5.374,4.292 L5.3736,6.51961527 L12.6236,4.70661527 L12.624,2.48 Z"
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
            d="M13.5,10.75 C13.5,11.9928413 12.4924436,13 11.25,13 C10.0075564,13 9,11.9928413 9,10.75 C9,9.50715874 10.0075564,8.5 11.25,8.5 C11.712946,8.5 12.1432809,8.63983159 12.5010326,8.87958459 L12.5,5.6397537 L5.5,7.3897537 L5.5,12.75 C5.5,13.9410562 4.57465745,14.9156609 3.40402619,14.9948102 L3.25,15 C2.00755635,15 1,13.9928413 1,12.75 C1,11.5071587 2.00755635,10.5 3.25,10.5 C3.71294604,10.5 4.14328088,10.6398316 4.50103263,10.8795846 L4.5,4 C4.5,3.79924541 4.61955134,3.62103255 4.79855273,3.54233774 L4.87873219,3.51492875 L12.8787322,1.51492875 C13.1656171,1.44320753 13.4443375,1.6339428 13.492643,1.91360655 L13.5,2 Z M3.25,11.5 C2.55975276,11.5 2,12.0595319 2,12.75 C2,13.4404681 2.55975276,14 3.25,14 C3.94024724,14 4.5,13.4404681 4.5,12.75 C4.5,12.0595319 3.94024724,11.5 3.25,11.5 Z M11.25,9.5 C10.5597528,9.5 10,10.0595319 10,10.75 C10,11.4404681 10.5597528,12 11.25,12 C11.9402472,12 12.5,11.4404681 12.5,10.75 C12.5,10.0595319 11.9402472,9.5 11.25,9.5 Z M12.5,2.64 L5.5,4.39 L5.5,6.3597537 L12.5,4.6097537 L12.5,2.64 Z"
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
            d="M13.7436176,1.90404911 L13.7496,1.9998 L13.7496,10.7498 C13.7496,12.1310136 12.6308136,13.2498 11.2496,13.2498 C9.86910725,13.2498 8.7496,12.1307345 8.7496,10.7498 C8.7496,9.36958644 9.86938644,8.2498 11.2496,8.2498 C11.605531,8.2498 11.9440652,8.3241725 12.2505249,8.45821709 L12.2486,5.95943055 L5.7486,7.58443055 L5.7496,12.7498 C5.7496,14.075765 4.71852642,15.1598772 3.41403117,15.2444846 L3.2496,15.2498 C1.86910725,15.2498 0.7496,14.1307345 0.7496,12.7498 C0.7496,11.3695864 1.86938644,10.2498 3.2496,10.2498 C3.60553102,10.2498 3.94406522,10.3241725 4.25052489,10.4582171 L4.2496,3.9998 C4.2496,3.69388824 4.43466511,3.42287102 4.71028195,3.30779884 L4.81769828,3.27219312 L12.8176983,1.27219312 C13.259501,1.16174245 13.6883953,1.46625298 13.7436176,1.90404911 Z M3.2496,11.7498 C2.69781356,11.7498 2.2496,12.1980136 2.2496,12.7498 C2.2496,13.3021749 2.69740187,13.7498 3.2496,13.7498 C3.80238644,13.7498 4.2496,13.3025864 4.2496,12.7498 C4.2496,12.1976019 3.80197485,11.7498 3.2496,11.7498 Z M11.2496,9.7498 C10.6978136,9.7498 10.2496,10.1980136 10.2496,10.7498 C10.2496,11.3021749 10.6974019,11.7498 11.2496,11.7498 C11.8023864,11.7498 12.2496,11.3025864 12.2496,10.7498 C12.2496,10.1976019 11.8019749,9.7498 11.2496,9.7498 Z M12.249,2.96 L5.749,4.585 L5.7486,6.03843055 L12.2486,4.41343055 L12.249,2.96 Z"
          />
        </g>
      );
    case "fill":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            d="M13.3073,1.6057 C13.1853,1.5107 13.0273,1.4757 12.8783,1.5147 L4.8783,3.5147 C4.6563,3.5707 4.4993,3.7707 4.4993,3.9997 L4.4993,10.8807 C4.1423,10.6407 3.7113,10.4997 3.2493,10.4997 C2.0093,10.4997 0.9993,11.5087 0.9993,12.7497 C0.9993,13.9907 2.0093,14.9997 3.2493,14.9997 C4.4903,14.9997 5.4993,13.9907 5.4993,12.7497 L5.4993,7.3897 L12.4993,5.6397 L12.4993,8.8807 C12.1423,8.6407 11.7113,8.4997 11.2493,8.4997 C10.0093,8.4997 8.9993,9.5087 8.9993,10.7497 C8.9993,11.9907 10.0093,12.9997 11.2493,12.9997 C12.4903,12.9997 13.4993,11.9907 13.4993,10.7497 L13.4993,1.9997 C13.4993,1.8457 13.4283,1.7007 13.3073,1.6057"
          />
        </g>
      );
    case "duotone":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            d="M3.2496,10.9998 C4.2166,10.9998 4.9996,11.7838 4.9996,12.7498 C4.9996,13.7168 4.2166,14.4998 3.2496,14.4998 C2.2836,14.4998 1.4996,13.7168 1.4996,12.7498 C1.4996,11.7838 2.2836,10.9998 3.2496,10.9998 Z M11.2496,8.9998 C12.2166,8.9998 12.9996,9.7838 12.9996,10.7498 C12.9996,11.7168 12.2166,12.4998 11.2496,12.4998 C10.2836,12.4998 9.4996,11.7168 9.4996,10.7498 C9.4996,9.7838 10.2836,8.9998 11.2496,8.9998 Z"
            opacity=".2"
          />
          <path
            fill={color}
            fillRule="nonzero"
            d="M13.4996,10.7498 C13.4996,11.9929424 12.4927424,12.9998 11.2496,12.9998 C10.0071564,12.9998 8.9996,11.9926413 8.9996,10.7498 C8.9996,9.50765763 10.0074576,8.4998 11.2496,8.4998 C11.7122973,8.4998 12.1423291,8.63944713 12.4998877,8.8788722 L12.4986,5.6395537 L5.4986,7.3895537 L5.4996,12.7498 C5.4996,13.9411448 4.57489916,14.915485 3.40370641,14.9946117 L3.2496,14.9998 C2.00715635,14.9998 0.9996,13.9926413 0.9996,12.7498 C0.9996,11.5076576 2.00745763,10.4998 3.2496,10.4998 C3.71229734,10.4998 4.14232912,10.6394471 4.4998877,10.8788722 L4.4996,3.9998 C4.4996,3.79904541 4.61915134,3.62083255 4.79815273,3.54213774 L4.87833219,3.51472875 L12.8783322,1.51472875 C13.1652171,1.44300753 13.4439375,1.6337428 13.492243,1.91340655 L13.4996,1.9998 Z M3.2496,11.4998 C2.55974237,11.4998 1.9996,12.0599424 1.9996,12.7498 C1.9996,13.4402681 2.55935276,13.9998 3.2496,13.9998 C3.94045763,13.9998 4.4996,13.4406576 4.4996,12.7498 C4.4996,12.0595528 3.94006813,11.4998 3.2496,11.4998 Z M11.2496,9.4998 C10.5597424,9.4998 9.9996,10.0599424 9.9996,10.7498 C9.9996,11.4402681 10.5593528,11.9998 11.2496,11.9998 C11.9404576,11.9998 12.4996,11.4406576 12.4996,10.7498 C12.4996,10.0595528 11.9400681,9.4998 11.2496,9.4998 Z M12.499,2.639 L5.499,4.389 L5.4986,6.3595537 L12.4986,4.6095537 L12.499,2.639 Z"
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

const MusicNotesSixteenth = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    const { color, size, weight, mirrored, ...rest } = props;
    const {
      color: contextColor,
      size: contextSize,
      weight: contextWeight,
      mirrored: contextMirrored,
      ...contextRest
    } = useContext(IconContext);

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size ?? contextSize}
        height={size ?? contextSize}
        viewBox="0 0 16 16"
        fill="none"
        stroke={color ?? contextColor}
        transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
        {...contextRest}
        {...rest}
      >
        {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
      </svg>
    );
  }
);

MusicNotesSixteenth.displayName = "MusicNotesSixteenth";

export default MusicNotesSixteenth;
