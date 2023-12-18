'use client'

import Link from 'next/link'
import HamMenu from './HamMenu'
import { NAVBAR } from '@/constants/constants'
import person from '@/icons/person.svg'
import work from '@/icons/work.svg'
import about from '@/icons/about.svg'
import extras from '@/icons/extras.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/?view=works')
  }

    return (
      <nav className='flex relative md:justify-between justify-center h-16 items-center md:px-32 px-0 font-semibold text-lg z-10'>
        <Link shallow className='flex whitespace-nowrap mr-20' href='/'>
          <span className='absolute lg:hidden flex'><Image src={person} alt='logo'/></span>
          <span className='lg:flex hidden'>{NAVBAR.NAME}</span>
        </Link>
        <div className='flex md:gap-36 gap-20 cursor-pointer'>
            <div onClick={handleClick} className='flex'>
              <span className='absolute lg:hidden flex'><Image src={work} alt='logo'/></span>
              <span className='lg:flex hidden'>{NAVBAR.ITEM1}</span>
            </div>
            <Link shallow href='/?view=about' className='flex'>
              <span className='absolute lg:hidden flex'><Image src={about} alt='logo'/></span>
              <span className='lg:flex hidden'>{NAVBAR.ITEM2}</span>
            </Link>
            <Link shallow href='/?view=extras' className='flex'>
              <span className='absolute lg:hidden flex'><Image src={extras} alt='logo'/></span>
              <span className='lg:flex hidden'>{NAVBAR.ITEM3}</span>
            </Link>
        </div>
        {/* <HamMenu /> */}
      </nav>
    )
  }