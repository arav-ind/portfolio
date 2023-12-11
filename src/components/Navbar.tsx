import Link from 'next/link'

export default function Navbar() {
    return (
      <nav className='flex justify-between h-16 items-center sm:px-32 px-12 font-semibold text-lg'>
        <Link className='flex whitespace-nowrap mr-20' href='/'>Aravind D</Link>
        <div className='sm:flex hidden md:gap-36 gap-20'>
            <Link href='/?view=works' className=''>Works</Link>
            <Link href='/?view=about'>About</Link>
            <Link href='/?view=extras'>Extras</Link>
            {/* <div className='flex'>Works</div>
            <div className='flex'>About</div>
            <div className='flex'>Extras</div> */}
        </div>
      </nav>
    )
  }