
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
  <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
    <polygon points="0 16 15.999 16 15.999 0 0 0"/>
    <path fill={color} fillRule="nonzero" d="M11.0244,0.7507 C11.6900971,0.7507 12.2203519,1.27186478 12.264715,1.9274546 C12.3546408,3.2667366 12.8691436,4.52013108 13.723725,5.5311729 C14.0715757,5.94362444 14.1255421,6.53005969 13.8381069,6.9924529 L13.8381069,6.9924529 L8.63710695,15.3944529 C8.63688746,15.3948075 8.63666776,15.3951618 8.63644783,15.3955158 C8.62013614,15.4223065 8.60207901,15.4476229 8.5825597,15.4717059 C8.57182639,15.4850805 8.56068061,15.4980362 8.54920052,15.5105044 C8.53937491,15.5207202 8.52908623,15.5311737 8.51850065,15.5413198 C8.50334888,15.5565793 8.48726277,15.570807 8.47071155,15.5842195 C8.46351335,15.5892158 8.45645572,15.5947109 8.44929892,15.600081 C8.42868832,15.6164287 8.40688865,15.6310416 8.38451186,15.6443863 C8.37973162,15.6464903 8.37506068,15.6492192 8.37035794,15.6518988 C8.35026403,15.6640004 8.32972473,15.6743879 8.30882462,15.6837734 C8.29570388,15.6892417 8.28204216,15.6949587 8.26818252,15.7002762 C8.2524244,15.7065737 8.23676673,15.7119218 8.22097449,15.7167413 C8.2032901,15.7220595 8.18492426,15.7269809 8.16629501,15.7312089 C8.15472469,15.7338076 8.14304385,15.7361452 8.13132134,15.7382058 C8.11090133,15.7418804 8.09049627,15.7446354 8.06984839,15.7465534 C8.05636396,15.7476964 8.04262288,15.7485996 8.02886933,15.7491309 C8.01918374,15.7496115 8.00941388,15.7498 7.9996,15.7498 L7.97078169,15.7491639 C7.95702755,15.7486482 7.94328545,15.7477606 7.92957282,15.7465009 L7.9996,15.7498 C7.95451553,15.7498 7.91036018,15.745822 7.86746581,15.7381978 C7.85693811,15.7363532 7.84659049,15.7343092 7.83628332,15.7320478 C7.81586865,15.727441 7.7955308,15.7220087 7.77555218,15.7157632 C7.76123228,15.7116298 7.74689111,15.7067277 7.73268656,15.7013819 C7.71769718,15.6951943 7.7033466,15.6891937 7.68923022,15.6827684 C7.67130669,15.6753853 7.65312999,15.6663072 7.63528785,15.6564471 C7.62644809,15.6506121 7.61748267,15.6453771 7.60863812,15.639964 C7.58912515,15.62908 7.57067293,15.6166551 7.55270922,15.6033188 C7.54456002,15.5961455 7.53552518,15.5891313 7.5266583,15.5819187 C7.51070509,15.570021 7.49599955,15.5570042 7.48172809,15.5433054 C7.46945233,15.5305794 7.45763529,15.5185093 7.44623327,15.506053 C7.41552936,15.4730035 7.38737654,15.4358393 7.36214172,15.3951768 L7.41580106,15.4706686 C7.4036452,15.4556162 7.39205962,15.4400842 7.38107717,15.4241054 L7.36214172,15.3951768 L2.15443601,7.00365059 C1.86559973,6.53900093 1.91963218,5.95112794 2.27015477,5.5388955 C3.127639,4.52675297 3.6453495,3.26929116 3.735927,1.92986526 C3.77791102,1.27293879 4.30925862,0.7507 4.9764,0.7507 L4.9764,0.7507 Z M10.787,2.25 L5.213,2.25 L5.20314167,2.3597968 C5.04474441,3.78977717 4.49362655,5.13179402 3.62085609,6.25442194 L3.62085609,6.25442194 L3.526,6.37 L7.24932403,12.3697 L7.24949103,9.12174233 C6.42190548,8.82921059 5.81647917,8.06625766 5.75479161,7.15388382 L5.7496,6.9998 C5.7496,5.75758644 6.75738644,4.7498 7.9996,4.7498 C9.24254559,4.7498 10.2496,5.75731827 10.2496,6.9998 C10.2496,7.97985157 9.6239323,8.81297544 8.74999778,9.12177073 L8.74932403,12.3597 L12.465,6.36 L12.3714486,6.24429952 C11.5026423,5.12417818 10.9546134,3.78574716 10.7974175,2.35907526 L10.7974175,2.35907526 L10.787,2.25 Z M7.9996,6.2498 C7.58581356,6.2498 7.2496,6.58601356 7.2496,6.9998 C7.2496,7.4141638 7.5853908,7.7498 7.9996,7.7498 C8.41438644,7.7498 8.7496,7.41458644 8.7496,6.9998 C8.7496,6.5855908 8.4139638,6.2498 7.9996,6.2498 Z"/>
  </g>

)
    case "duotone":
      return (
  <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
    <polygon points="0 16 15.999 16 15.999 0 0 0"/>
    <path fill={color} d="M7.9996,8.9998 C6.8966,8.9998 5.9996,8.1028 5.9996,6.9998 C5.9996,5.8968 6.8966,4.9998 7.9996,4.9998 C9.1026,4.9998 9.9996,5.8968 9.9996,6.9998 C9.9996,8.1028 9.1026,8.9998 7.9996,8.9998 M13.1496,6.0148 C12.2166,4.9098 11.6196,3.5118 11.5166,1.9778 C11.4986,1.7118 11.2906,1.4998 11.0236,1.4998 L4.9766,1.4998 C4.7096,1.4998 4.5016,1.7118 4.4836,1.9778 C4.3806,3.5158 3.7796,4.9168 2.8426,6.0238 C2.7006,6.1898 2.6766,6.4228 2.7916,6.6078 L7.9996,14.9998 L13.2006,6.5978 C13.3146,6.4128 13.2906,6.1808 13.1496,6.0148" opacity=".2"/>
    <path fill={color} fillRule="nonzero" d="M11.0244,1.0007 C11.5557513,1.0007 11.979622,1.41730427 12.0152767,1.94420306 C12.1088063,3.33715916 12.6440649,4.64111724 13.5326167,5.6923486 C13.8118667,6.02345935 13.8549648,6.4917923 13.625538,6.8608686 L13.625538,6.8608686 L8.42453797,15.2628686 C8.41685096,15.2752866 8.40875575,15.2872164 8.40028445,15.2986579 C8.39345883,15.3081081 8.38559554,15.3178843 8.37738251,15.3273487 C8.36702325,15.3393948 8.35662501,15.3503998 8.34585157,15.3608186 C8.33584463,15.3701271 8.3252273,15.3795044 8.31422367,15.3884238 C8.30116645,15.3995199 8.28722729,15.4096858 8.27289141,15.4190384 C8.26442655,15.4241036 8.25589237,15.4293243 8.24719464,15.4342914 C8.22882976,15.4451377 8.20981292,15.4543616 8.19037454,15.4623161 C8.18389042,15.4647991 8.17706988,15.4674471 8.17017876,15.4699479 C8.1553511,15.4753943 8.14042243,15.4799708 8.12534067,15.4838395 C8.11109672,15.4875494 8.09649823,15.4906482 8.08167994,15.4930954 C8.07753048,15.4936859 8.07285833,15.4943904 8.06817848,15.4950293 C8.04559616,15.4982223 8.02278232,15.4998 7.9996,15.4998 L7.93597707,15.4957327 C7.92934582,15.4948993 7.92272876,15.4939345 7.91613036,15.4928384 L7.9996,15.4998 C7.95628355,15.4998 7.91425361,15.4942918 7.87417242,15.4839376 C7.85992093,15.4803995 7.84552002,15.4760439 7.83131015,15.4710307 C7.82015032,15.4667994 7.80863576,15.4622038 7.79734111,15.457202 C7.78204194,15.4509072 7.76744479,15.4436257 7.753176,15.4355884 C7.74626308,15.4310512 7.73873108,15.4265268 7.7313314,15.4218131 C7.67018145,15.3836735 7.61636532,15.3307131 7.57456115,15.2633512 L7.62543134,15.3314676 C7.61051152,15.3146483 7.59670843,15.2968159 7.58413828,15.2780867 L7.57456115,15.2633512 L2.36675734,6.87166706 C2.13625511,6.50085912 2.17938798,6.03157349 2.46090318,5.700497 C3.35260346,4.64796711 3.89114526,3.33990839 3.985418,1.94581017 C4.01914864,1.4180249 4.44375245,1.0007 4.9764,1.0007 L4.9764,1.0007 Z M11.0244,2.00062844 L4.98214268,2.00116764 L4.98326078,2.01143311 C4.87432827,3.6223773 4.25246131,5.13282367 3.219,6.349 L3.219,6.349 L7.49938368,13.2477 L7.49962523,8.93680357 C6.68354263,8.72679079 6.06894214,8.01467739 6.00508652,7.14909703 L5.9996,6.9998 C5.9996,5.89565763 6.89545763,4.9998 7.9996,4.9998 C9.10444863,4.9998 9.9996,5.89536369 9.9996,6.9998 C9.9996,7.93199477 9.36290593,8.71457127 8.50036939,8.93667789 L8.49938368,13.2387 L12.771,6.339 C11.8805643,5.28682559 11.2975831,4.0152907 11.0876856,2.64856192 L11.0459004,2.33152966 L11.0175409,2.01145739 C11.0167021,1.99906223 11.0183684,2.00062844 11.0244,2.00062844 L11.0244,2.00062844 Z M7.9996,5.9998 C7.44774237,5.9998 6.9996,6.44794237 6.9996,6.9998 C6.9996,7.55226076 7.44734538,7.9998 7.9996,7.9998 C8.55245763,7.9998 8.9996,7.55265763 8.9996,6.9998 C8.9996,6.44754538 8.55206076,5.9998 7.9996,5.9998 Z"/>
  </g>

)
    case "fill":
      return (
  <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
    <polygon points="0 16 15.999 16 15.999 0 0 0"/>
    <path fill={color} d="M11.0243,0.9999 C11.5533,0.9999 11.9793,1.4069 12.0153,1.9449 C12.1103,3.3459 12.6433,4.6529 13.5573,5.7219 C13.8293,6.0399 13.8473,6.5049 13.6263,6.8609 L13.6263,6.8609 L8.9623,14.3939 C8.8293,14.6079 8.4993,14.5139 8.4993,14.2629 L8.4993,14.2629 L8.4993,8.9289 C9.3603,8.7049 9.9993,7.9289 9.9993,6.9999 C9.9993,5.7529 8.8523,4.7689 7.5583,5.0469 C6.8393,5.2019 6.2403,5.7779 6.0633,6.4919 C5.7793,7.6359 6.4873,8.6649 7.4993,8.9289 L7.4993,8.9289 L7.4993,14.2649 C7.4993,14.5169 7.1693,14.6109 7.0363,14.3969 L7.0363,14.3969 L2.3673,6.8719 C2.1473,6.5179 2.1583,6.0529 2.4293,5.7369 C3.3563,4.6599 3.8943,3.3419 3.9863,1.9299 C4.0203,1.4069 4.4523,0.9999 4.9763,0.9999 L4.9763,0.9999 Z M7.9996,5.9998 C8.5516,5.9998 8.9996,6.4488 8.9996,6.9998 C8.9996,7.5508 8.5516,7.9998 7.9996,7.9998 C7.4476,7.9998 6.9996,7.5508 6.9996,6.9998 C6.9996,6.4488 7.4476,5.9998 7.9996,5.9998 Z"/>
  </g>

)
    case "light":
      return (
  <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
    <polygon points="0 16 15.999 16 15.999 0 0 0"/>
    <path fill={color} fillRule="nonzero" d="M11.0244,1.1257 C11.4885785,1.1257 11.859257,1.49002401 11.8905575,1.9525773 C11.9858891,3.37237045 12.5315256,4.70161033 13.4370625,5.77293645 C13.6820122,6.0633768 13.7196762,6.4726586 13.5192535,6.79507645 L13.5192535,6.79507645 L8.31825347,15.1970764 C8.31778838,15.1978278 8.31732129,15.1985768 8.31685222,15.1993233 C8.28800892,15.2454709 8.2496226,15.284432 8.20449034,15.3139295 C8.19283756,15.3218034 8.18122503,15.3284745 8.16934554,15.3344744 C8.15845328,15.3398249 8.14690283,15.3449979 8.13506131,15.3495869 C8.12278314,15.3543738 8.11038094,15.3583961 8.09783061,15.3617618 C8.08422975,15.3655176 8.06949569,15.3686112 8.05447213,15.370814 C8.04497308,15.3720707 8.03625862,15.3730171 8.02752491,15.3736624 C8.01884457,15.3744344 8.00926498,15.3748 7.9996,15.3748 L7.97070446,15.3736204 C7.96264326,15.3730127 7.95459873,15.3721485 7.94658501,15.3710279 L7.9996,15.3748 C7.96483565,15.3748 7.93117618,15.3700694 7.89923019,15.3612169 C7.88751874,15.3580974 7.87577636,15.3542677 7.86421809,15.3498486 C7.85145777,15.344679 7.83896713,15.3390269 7.82686293,15.332734 C7.81674892,15.3279448 7.80683072,15.3222448 7.79714767,15.3160548 C7.75211286,15.2866374 7.71342357,15.2480486 7.68422101,15.2027657 L7.68077086,15.1974384 L2.472918,6.8056753 C2.27158279,6.48178822 2.30926588,6.07179626 2.55627739,5.78129775 C3.46508569,4.70857418 4.01404313,3.375217 4.1101635,1.95378263 C4.13976744,1.49056795 4.51099937,1.1257 4.9764,1.1257 L4.9764,1.1257 Z M11.0244,1.8757 L4.9764,1.8757 C4.91448086,1.8757 4.86348029,1.92582627 4.85854558,2.00299983 C4.7514304,3.58706869 4.13997908,5.0722166 3.12808503,6.26661781 C3.08853328,6.3131329 3.08354892,6.36736279 3.11002914,6.40996161 L3.11002914,6.40996161 L7.62441314,13.6837 L7.62424805,8.83722553 C6.81517583,8.67284789 6.19525881,7.98753222 6.13024196,7.14636464 L6.1246,6.9998 C6.1246,5.96469322 6.96449322,5.1248 7.9996,5.1248 C9.03540015,5.1248 9.8746,5.9643864 9.8746,6.9998 C9.8746,7.90727448 9.23107342,8.6634637 8.37515,8.83723795 L8.37441314,13.6797 L12.881918,6.3997247 C12.8949311,6.37879056 12.9001729,6.35457976 12.8973011,6.32983948 L12.8868653,6.29267531 L12.8640024,6.25677727 C11.8562895,5.06456883 11.2483859,3.58363814 11.1422556,2.00301804 C11.1370671,1.92634248 11.0855413,1.8757 11.0244,1.8757 L11.0244,1.8757 Z M7.9996,5.8748 C7.37870678,5.8748 6.8746,6.37890678 6.8746,6.9998 C6.8746,7.62130925 7.37832267,8.1248 7.9996,8.1248 C8.62149322,8.1248 9.1246,7.62169322 9.1246,6.9998 C9.1246,6.37852267 8.62110925,5.8748 7.9996,5.8748 Z"/>
  </g>

)
    case "thin":
      return (
  <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
    <polygon points="0 16 15.999 16 15.999 0 0 0"/>
    <path fill={color} fillRule="nonzero" d="M7.9996,15.2498 L7.96642992,15.247555 C7.95711063,15.2463363 7.9478497,15.2445983 7.93869686,15.2423411 L7.9996,15.2498 C7.96739417,15.2498 7.93661069,15.2437102 7.90833828,15.2326192 C7.89708173,15.2284089 7.88618626,15.2232598 7.87565175,15.2172845 C7.86796934,15.2125757 7.86033369,15.2076455 7.8529983,15.2023264 C7.827713,15.1844879 7.80509211,15.1607099 7.78698057,15.1315256 L7.82168644,15.1754325 C7.81612734,15.1698017 7.81083359,15.1639082 7.80582548,15.1577725 L7.78698057,15.1315256 L2.57907867,6.73968353 C2.40691048,6.46271731 2.43914378,6.11201903 2.65165159,5.8620985 C3.57756792,4.76918125 4.13694101,3.41052562 4.234909,1.96175509 C4.26038625,1.563111 4.57824629,1.2507 4.9764,1.2507 L4.9764,1.2507 L11.0244,1.2507 C11.4214056,1.2507 11.738892,1.56274376 11.7658383,1.96095153 C11.8629719,3.40758173 12.4189863,4.76210341 13.3415083,5.8535243 C13.5521577,6.10329426 13.5843875,6.4535249 13.412969,6.7292843 L13.412969,6.7292843 L8.21196898,15.1312843 C8.21032549,15.1339393 8.20864469,15.1365496 8.20692782,15.1391153 C8.1992163,15.1510478 8.18997924,15.1625007 8.17982256,15.1730628 C8.17426247,15.1788244 8.16882481,15.1840117 8.16321033,15.1889037 C8.15354242,15.1972367 8.14286849,15.205132 8.13159458,15.2121544 C8.1272497,15.2149707 8.12271704,15.2175918 8.11811998,15.2200589 C8.07636375,15.240663 8.03904891,15.2498 7.9996,15.2498 Z M11.0244,1.7507 L4.9764,1.7507 C4.84723395,1.7507 4.74286149,1.85328322 4.73383039,1.99456655 C4.62853252,3.55176008 4.02749685,5.01160953 3.03285669,6.18564521 C2.95865538,6.27291013 2.94822123,6.3864337 3.00381943,6.47587441 L3.00381943,6.47587441 L7.74944219,14.1237 L7.74952704,8.73206933 C6.94804817,8.61740557 6.32166527,7.95972627 6.25540196,7.14336151 L6.2496,6.9998 C6.2496,6.03372881 7.03352881,5.2498 7.9996,5.2498 C8.96635166,5.2498 9.7496,6.03340912 9.7496,6.9998 C9.7496,7.88182379 9.09832263,8.61066921 8.25006244,8.73204171 L8.24944219,14.1197 L12.9880787,6.46571647 C13.0211712,6.41248065 13.0306307,6.35013696 13.0170768,6.29001381 L12.9958748,6.23105043 L12.9594683,6.17608484 C11.9688289,5.00407575 11.3713031,3.54842685 11.2669704,1.99457869 C11.2574321,1.85362274 11.1527142,1.7507 11.0244,1.7507 L11.0244,1.7507 Z M7.9996,5.7498 C7.30967119,5.7498 6.7496,6.30987119 6.7496,6.9998 C6.7496,7.69035773 7.30929996,8.2498 7.9996,8.2498 C8.69052881,8.2498 9.2496,7.69072881 9.2496,6.9998 C9.2496,6.30949996 8.69015773,5.7498 7.9996,5.7498 Z"/>
  </g>

)
    case "regular":
      return (
  <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
    <polygon points="0 16 16 16 16 0 0 0"/>
    <path fill={color} fillRule="nonzero" d="M7.91861348,15.4938801 C7.91625391,15.4934982 7.91389666,15.4930996 7.91154193,15.4926842 L8,15.5 C7.96566484,15.5 7.932138,15.4965391 7.8997493,15.4899472 C7.87548927,15.4855679 7.85182376,15.4789844 7.8286766,15.4706496 C7.82433225,15.4682902 7.82024183,15.4667344 7.81617752,15.4651268 C7.76812848,15.4472191 7.72226236,15.4206046 7.68089808,15.386225 C7.67531367,15.3803347 7.6691557,15.3749855 7.66313257,15.369491 C7.63041552,15.3408512 7.60046846,15.305145 7.57498383,15.2640877 L7.57498383,15.2640877 L2.36552131,6.87134113 C2.13618473,6.50041414 2.17970873,6.03253118 2.46047328,5.69999633 C3.35227252,4.64847186 3.89047445,3.34065557 3.98494086,1.94364261 C4.02059849,1.41670207 4.44476673,1.0004 4.9768,1.0004 L4.9768,1.0004 L11.0238,1.0004 C11.5551513,1.0004 11.979022,1.41700427 12.0146767,1.94390306 C12.1081575,3.33613212 12.643939,4.64019507 13.5330167,5.6920486 C13.8123813,6.02329527 13.8555682,6.49316893 13.625952,6.86054595 L13.625952,6.86054595 L8.42495198,15.263546 C8.41862217,15.2737727 8.41201551,15.2836684 8.40514993,15.2932329 C8.39614835,15.305476 8.38679429,15.3172196 8.3769407,15.3285162 C8.36548095,15.3423522 8.35294174,15.3553828 8.33987718,15.3675743 C8.33263408,15.3734419 8.32510875,15.380017 8.31738984,15.3863652 C8.30186222,15.4001202 8.28582547,15.4117624 8.26927373,15.4223316 C8.26219618,15.4259044 8.25495395,15.4302887 8.24759464,15.4344914 C8.22925751,15.4458233 8.21024154,15.4550483 8.19080398,15.4630039 C8.18430537,15.4649929 8.17750012,15.4676354 8.17062458,15.4701312 C8.1415399,15.4811979 8.11176927,15.488857 8.08161555,15.4937762 L8,15.5 L8,15.5 Z M11.0238,2.00032844 L4.98192712,2.00112392 L4.98266078,2.01113311 C4.87365555,3.62315271 4.25208353,5.13355609 3.21859559,6.3495883 L3.21859559,6.3495883 L7.4991962,13.2464 L7.4991206,8.93670137 C6.68364225,8.7262284 6.06933759,8.01397048 6.00548826,7.14920928 L6,7 C6,5.89585763 6.89585763,5 8,5 C9.10414237,5 10,5.89585763 10,7 C10,7.93155243 9.36231905,8.71484557 8.49987666,8.93695989 L8.4991962,13.2414 L12.772,6.339 C11.8806111,5.28607842 11.2970985,4.01440647 11.0871009,2.64805272 L11.0453002,2.33111604 L11.0169409,2.01115739 C11.0161021,1.99876223 11.0177684,2.00032844 11.0238,2.00032844 L11.0238,2.00032844 Z M8,6 C7.44814237,6 7,6.44814237 7,7 C7,7.55185763 7.44814237,8 8,8 C8.55185763,8 9,7.55185763 9,7 C9,6.44814237 8.55185763,6 8,6 Z"/>
  </g>

)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const PenNib = forwardRef<SVGSVGElement, IconProps>(
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

PenNib.displayName = "PenNib";

export default PenNib;
