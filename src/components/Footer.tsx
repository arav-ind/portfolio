import mail from '@/icons/mail.svg'
import Image from 'next/image'
import linkedin from '@/icons/linkedin.svg'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='flex flex-col sm:px-32 px-12 flex-wrap gap-4'>
        <h2 className='font-semibold text-xl'>Contact</h2>
        <div className='flex sm:flex-row flex-col sm:gap-10 gap-5 mb-10 whitespace-nowrap text-md'>
            <div className='flex gap-2'>
                <Image src={mail} alt='mail'/>
                <span>aravindrndv8@gmail.com</span>
            </div>
            <div className='flex gap-2'>
                <Image src={linkedin} alt='mail'/>
                <Link href='https://www.linkedin.com/in/arav-ind/' target='_blank'>LinkedIn</Link>
            </div>
        </div>
    </div>
  )
}