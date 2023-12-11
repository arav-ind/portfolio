import Link from 'next/link'
import HamMenu from './HamMenu'

export default function Navbar() {
    return (
      <nav className='flex relative justify-between h-16 items-center sm:px-32 px-12 font-semibold text-lg z-10'>
        <Link className='flex whitespace-nowrap mr-20' href='/'>Aravind D</Link>
        <div className='md:flex hidden md:gap-36 gap-20'>
            <Link href='/?view=works' className=''>Works</Link>
            <Link href='/?view=about'>About</Link>
            <Link href='/?view=extras'>Extras</Link>
        </div>
        <HamMenu />
      </nav>
    )
  }