import Link from 'next/link'
import HamMenu from './HamMenu'
import { NAVBAR } from '@/constants/constants'

export default function Navbar() {
    return (
      <nav className='flex relative justify-between h-16 items-center sm:px-32 px-12 font-semibold text-lg z-10'>
        <Link className='flex whitespace-nowrap mr-20' href='/'>{NAVBAR.NAME}</Link>
        <div className='md:flex hidden md:gap-36 gap-20'>
            <Link href='/?view=works' className=''>{NAVBAR.ITEM1}</Link>
            <Link href='/?view=about'>{NAVBAR.ITEM2}</Link>
            <Link href='/?view=extras'>{NAVBAR.ITEM3}</Link>
        </div>
        <HamMenu />
      </nav>
    )
  }