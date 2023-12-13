import mail from '@/icons/mail.svg'
import Image from 'next/image'
import linkedin from '@/icons/linkedin.svg'
import Link from 'next/link'
import { FOOTER } from '@/constants/constants'

export default function Footer() {
  return (
    <div className='flex flex-col sm:px-32 px-12 flex-wrap gap-4'>
        <h2 className='font-semibold text-xl'>{FOOTER.CONTACT}</h2>
        <div className='flex sm:flex-row flex-col sm:gap-10 gap-5 mb-6 whitespace-nowrap text-md'>
            <div className='flex gap-1'>
                <Image src={mail} alt='mail'/>
                <span>{FOOTER.EMAIL}</span>
            </div>
            <div className='flex gap-1'>
                <Image src={linkedin} alt='mail'/>
                <Link href={FOOTER.LINK} target='_blank'>{FOOTER.LINKEDIN}</Link>
            </div>
        </div>
    </div>
  )
}