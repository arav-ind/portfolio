'use client'

import { TypeAnimation } from 'react-type-animation'
import { INTRO } from '@/constants/constants'

export default function TypeAnimationComponent() {
    return (
        <TypeAnimation
        sequence={[
          INTRO.TEXT1,
          2000,
          INTRO.TEXT2,
          1000,
          INTRO.TEXT3,
          2000,
        ]}
        wrapper='span'
        speed={10}
        repeat={Infinity}
        className='whitespace-nowrap font-bold text-xl'
      />
    )
  }