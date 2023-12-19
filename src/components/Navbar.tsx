import Link from 'next/link'
import { NAVBAR } from '@/constants/constants'
import person from '@/icons/person.svg'
import work from '@/icons/work.svg'
import about from '@/icons/about.svg'
import extras from '@/icons/extras.svg'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className='flex justify-center'>
      <div className='flex relative md:justify-between w-full justify-center h-16 items-center md:px-32 px-0 font-semibold text-lg z-10'>
        <Link className='flex whitespace-nowrap mr-20' href='?'>
          <span className='absolute lg:hidden flex'><Image src={person} alt='logo' /></span>
          <span className='lg:flex hidden'>{NAVBAR.NAME}</span>
        </Link>
        <div className='flex md:gap-36 gap-20'>
          <Link href='?view=works' className='flex'>
            <span className='absolute lg:hidden flex'><Image src={work} alt='logo' /></span>
            <span className='lg:flex hidden'>{NAVBAR.ITEM1}</span>
          </Link>
          <Link href='?view=about' className='flex'>
            <span className='absolute lg:hidden flex'><Image src={about} alt='logo' /></span>
            <span className='lg:flex hidden'>{NAVBAR.ITEM2}</span>
          </Link>
          <Link href='?view=extras' className='flex'>
            <span className='absolute lg:hidden flex'><Image src={extras} alt='logo' /></span>
            <span className='lg:flex hidden'>{NAVBAR.ITEM3}</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}