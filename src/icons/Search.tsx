import React, { forwardRef } from "react";
import { IconProps } from "../lib";

const Search = forwardRef<SVGSVGElement, IconProps>(
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
                d="M4.87496939,2.9538536 C7.38660891,1.5048308 10.596448,2.36492223 12.0454238,4.87543019 C13.2166112,6.90317024 12.8808263,9.38731904 11.385286,11.0318037 L13.6768767,13.3234233 C13.7745078,13.4210544 13.7745078,13.5793456 13.6768767,13.6769767 C13.5955175,13.7583359 13.4720331,13.7718958 13.3766322,13.7176563 L13.3233233,13.6769767 L11.0320306,11.3846793 C10.7594813,11.632024 10.4565975,11.8543237 10.1248985,12.0459072 C7.61363837,13.495761 4.40358904,12.6352885 2.95441543,10.1244377 C1.50441292,7.61396994 2.36420779,4.40402578 4.87496939,2.9538536 Z M11.492628,4.92884855 C10.1311633,2.81007322 7.33051802,2.11443443 5.12493772,3.38688457 C2.85338901,4.69889158 2.07550442,7.60303322 3.38742378,9.87443019 C4.69858876,12.146166 7.60281612,12.9246611 9.87486228,11.6129154 C12.146411,10.3009084 12.9242956,7.39676678 11.6124154,5.12543772 L11.6124154,5.12543772 Z"
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
                d="M4.81344529,2.84561433 C7.38393396,1.36201987 10.6702234,2.24268558 12.1536857,4.81294529 C13.3317948,6.85266927 13.0205075,9.34350774 11.5569864,11.0268575 L13.765165,13.235035 C13.9116117,13.3814816 13.9116117,13.6189184 13.765165,13.765365 C13.6396394,13.8908907 13.4472637,13.9088229 13.3026381,13.8191618 L13.234835,13.765365 L11.026362,11.5568361 C10.7710273,11.7783131 10.4910021,11.9788043 10.1873978,12.1541608 C7.61634393,13.638536 4.32983911,12.7575692 2.84617315,10.1869566 C1.36152083,7.61649772 2.24211304,4.33015021 4.81344529,2.84561433 Z M11.3875214,4.99651159 C10.0619304,2.93356156 7.33507589,2.2561747 5.18839778,3.49516081 C2.97584958,4.7725559 2.21818526,7.6001397 3.49568567,9.81194529 C4.77233869,12.0238854 7.60011056,12.7818862 9.81234342,11.5046731 C12.0241157,10.227192 12.7815227,7.39950096 11.5041731,5.18795658 L11.5041731,5.18795658 Z"
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
                d="M4.75042456,2.73803086 C7.38046171,1.21896717 10.7433071,2.11971718 12.2624691,4.74992456 L12.2624691,4.74992456 L12.3744879,4.95373984 C13.4264506,6.96577653 13.1118417,9.35637505 11.7269736,11.0196952 L13.8537534,13.1466466 C14.0490155,13.3419088 14.0490155,13.6584912 13.8537534,13.8537534 C13.680187,14.0273197 13.4107626,14.0466049 13.2158945,13.9116088 L13.1466466,13.8537534 L11.0193665,11.7263416 C10.7823264,11.9232025 10.5254637,12.1027363 10.2495754,12.2619691 C7.61941114,13.7811063 4.25552725,12.8801692 2.73740721,10.2498612 C1.21940853,7.61866352 2.12046314,4.25595085 4.75042456,2.73803086 Z M11.3965309,5.25007544 C10.1535755,3.09807962 7.40233514,2.36115018 5.25043962,3.60404756 C3.09869947,4.84595529 2.3614976,7.59717377 3.60354756,9.75006038 C4.8454637,11.9018151 7.59757318,12.6389028 9.74956038,11.3959524 C11.9013005,10.1540447 12.6385024,7.40282623 11.3965309,5.25007544 Z"
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
                d="M4.62589057,2.52082866 C7.37573756,0.933714967 10.8913715,1.87584084 12.4783713,4.62549057 C13.676595,6.70003994 13.4345551,9.21089865 12.0622194,11.0008278 L14.0303301,12.9698699 C14.3232233,13.2627631 14.3232233,13.7376369 14.0303301,14.0305301 C13.7640635,14.2967966 13.3473998,14.3210027 13.0537883,14.1031482 L12.9696699,14.0305301 L11.0002871,12.0616412 C10.8036331,12.2121736 10.5950124,12.3517282 10.3747956,12.4789216 C7.62436062,14.0668609 4.10848931,13.124411 2.52134629,10.3745132 C0.933088619,7.62467674 1.87514477,4.10894737 4.62589057,2.52082866 Z M11.0651588,5.1887308 C9.84454062,3.30152744 7.3446129,2.68359041 5.37579555,3.81992162 C3.34261786,4.99375874 2.64641748,7.59196068 3.82037134,9.62449057 C4.99348849,11.6570435 7.59189388,12.3535613 9.62468684,11.1799463 C11.6571298,10.0060426 12.3531041,7.40770349 11.1793463,5.37551316 L11.1793463,5.37551316 Z"
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
                d="M4.9031,8.9996 C4.0761,7.5676 4.5681,5.7296 6.0011,4.9026 C6.4571,4.6396 6.9731,4.4996 7.4961,4.4996 C8.5661,4.4996 9.5631,5.0746 10.0971,6.0006 C10.9241,7.4326 10.4311,9.2706 9.0001,10.0976 C8.5441,10.3606 8.0261,10.4996 7.5051,10.4996 C6.4341,10.4996 5.4371,9.9246 4.9031,8.9996 M14.2071,12.7926 L12.0171,10.6026 C13.1741,8.9096 13.3541,6.6416 12.2621,4.7506 C10.7461,2.1246 7.3741,1.2216 4.7511,2.7376 C3.4781,3.4726 2.5681,4.6576 2.1881,6.0766 C1.8071,7.4956 2.0031,8.9776 2.7381,10.2496 C3.7561,12.0116 5.6071,12.9986 7.5091,12.9986 C8.4421,12.9986 9.3861,12.7616 10.2501,12.2626 C10.3771,12.1896 10.4791,12.0936 10.5981,12.0116 L12.7931,14.2076 C12.9881,14.4026 13.2441,14.4996 13.5001,14.4996 C13.7561,14.4996 14.0111,14.4026 14.2071,14.2076 C14.5971,13.8166 14.5971,13.1836 14.2071,12.7926"
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
              <polygon points="0 16 15.999 16 15.999 0 0 0" />
              <path
                fill={color}
                d="M5.0007,3.1704 C7.3917,1.7904 10.4487,2.6094 11.8297,5.0004 C13.2097,7.3914 12.3907,10.4484 9.9997,11.8294 C7.6077,13.2104 4.5517,12.3904 3.1707,9.9994 C1.7897,7.6084 2.6087,4.5514 5.0007,3.1704"
                opacity=".2"
              />
              <path
                fill={color}
                fillRule="nonzero"
                d="M4.75076038,2.73735244 C7.38095859,1.21929576 10.7436364,2.12034103 12.2626691,4.75032456 C13.4467229,6.80182641 13.1591751,9.2988173 11.7274681,11.0191617 L13.8534251,13.1467183 C14.0486476,13.3420201 14.0485834,13.6586026 13.8532817,13.8538251 C13.6796801,14.0273562 13.4102518,14.0465867 13.215411,13.9115512 L13.1461749,13.8536817 L11.0190045,11.7268868 C10.7820982,11.9236764 10.5253973,12.1031747 10.249697,12.2624144 C7.61897673,13.7812375 4.25705504,12.8799636 2.73773086,10.2494754 C1.21854343,7.61922406 2.11962362,4.25641593 4.75076038,2.73735244 Z M11.2796457,5.05876516 C9.98766526,3.0557596 7.33739476,2.39904685 5.25069703,3.60341441 C3.09793901,4.84629018 2.36076267,7.59741336 3.60366914,9.74932456 C4.84684965,11.9017102 7.59729679,12.6390582 9.74962456,11.3964309 C11.9014784,10.1535575 12.6386896,7.40230407 11.3966524,5.25033962 L11.3966524,5.25033962 Z"
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

Search.displayName = "Search";

export default Search;
