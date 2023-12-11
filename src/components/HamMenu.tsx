'use client'

import Link from 'next/link'
import menu from '@/icons/menu.svg'
import close from '@/icons/close.svg'
import Image from 'next/image'
import { useState } from 'react'

export default function HamMenu() {
    const [isOpened, setIsOpened] = useState(false)

    const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault()
        setIsOpened(!isOpened)
    }

    return (
        <div className='md:hidden flex'>
          <Image 
            className={`${isOpened ? 'rotate-90 duration-300' : 'rotate-180 duration-300'}`} 
            onClick={(e) => handleClick(e)}
            src={isOpened ? close : menu} alt='menu' 
          />
          {isOpened ? (
                <div className='flex flex-col absolute top-16 gap-6 sm:right-[7.5rem] right-10'>
                    <Link href='/?view=works'>Works</Link>
                    <Link href='/?view=about'>About</Link>
                    <Link href='/?view=extras'>Extras</Link>
                </div>
          ): null}
        </div>
    )
  }