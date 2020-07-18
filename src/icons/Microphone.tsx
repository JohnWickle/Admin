import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const Microphone = forwardRef<SVGSVGElement, IconProps>(
  (
    { color = 'currentColor', size = '1em', weight = 'regular', ...rest },
    ref
  ) => {
    switch (weight) {
      case 'thin':
      case 'light':
      case 'regular':
        return (
          <svg
            ref={ref}
            xmlns='http://www.w3.org/2000/svg'
            width={size}
            height={size}
            viewBox='0 0 16 16'
            fill='none'
            stroke={color}
            {...rest}
          >
            {' '}
            <title>ph-microphone</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-140.000000, -772.000000)'
              >
                <g id='ph-mic' transform='translate(140.000000, 772.000000)'>
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M12.4374812,8.00115484 L12.5276976,8.00303394 C12.8021644,8.03340826 13.0000404,8.2805308 12.9696661,8.55499758 C12.7092118,10.9085002 10.8290393,12.7430121 8.50030064,12.9751702 L8.5,14.5 C8.5,14.7761424 8.27614237,15 8,15 C7.75454011,15 7.55039163,14.8231248 7.50805567,14.5898756 L7.5,14.5 L7.50025967,12.9752682 C5.17175165,12.7435192 3.29120853,10.9086837 3.03073394,8.55499758 C3.00035961,8.2805308 3.19823565,8.03340826 3.47270242,8.00303394 C3.7471692,7.97265961 3.99429174,8.17053565 4.02466606,8.44500242 C4.24761847,10.4596326 5.95648864,12 7.9997,12 C10.0437761,12 11.7527668,10.4597654 11.9757339,8.44500242 C12.0027333,8.20103195 12.2009906,8.01757763 12.4374812,8.00115484 Z M8,1 C9.65714237,1 11,2.34285763 11,4 L11,4 L11,8 C11,9.58377242 9.76969928,10.8915855 8.18056732,10.9944224 L8.18056732,10.9944224 L8,11 C6.34285763,11 5,9.65714237 5,8 L5,8 L5,4 C5,2.34285763 6.34285763,1 8,1 Z M8,2 C6.89514237,2 6,2.89514237 6,4 L6,4 L6,8 C6,9.10485763 6.89514237,10 7.98384024,10.0002612 L7.98384024,10.0002612 L8.13203621,9.99573265 C9.17972483,9.92775987 10,9.05580512 10,8 L10,8 L10,4 C10,2.89514237 9.10485763,2 8,2 Z'
                    id='Combined-Shape'
                    fill={color}
                    fillRule='nonzero'
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        )
      case 'bold':
      case 'fill':
      case 'duotone':
      default:
        throw new Error(
          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
        )
    }
  }
)

Microphone.displayName = 'Microphone'

export default Microphone
