'use client'

import { TypeAnimation } from 'react-type-animation'
import { INTRO } from '@/constants/constants'
import { useState } from 'react'

export default function TypeAnimationComponent() {
  const [showAnimation, setShowAnimation] = useState(false)
  return (
    <div className='whitespace-nowrap font-bold text-xl' onClick={() => setShowAnimation(!showAnimation)}>
      {showAnimation ?
        (<TypeAnimation
          sequence={[
            INTRO.TEXT1,
            2000,
            INTRO.TEXT2,
            1000,
          ]}
          wrapper='span'
          speed={20}
          repeat={Infinity}
        />) : (
          <p>{INTRO.TEXT1}</p>
        )}
    </div>
  )
}