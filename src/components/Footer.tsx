import mailIcon from '@/icons/mail.svg'
import Image from 'next/image'
import linkedinIcon from '@/icons/linkedin.svg'
import githubIcon from '@/icons/github.svg'
import Link from 'next/link'
import { FOOTER } from '@/constants/constants'

export default function Footer() {
  return (
    <div className='flex flex-col sm:px-32 px-12 flex-wrap gap-4'>
        <h2 className='font-semibold text-xl'>{FOOTER.CONTACT}</h2>
        <div className='flex sm:flex-row flex-col sm:gap-10 gap-5 mb-6 whitespace-nowrap text-md'>
            <div className='flex gap-1'>
                <Image src={mailIcon} alt='mail'/>
                <span>{FOOTER.EMAIL}</span>
            </div>
            <Link className='flex gap-1' href={FOOTER.LINK} target='_blank'>
                <Image src={linkedinIcon} alt='linkedin'/>
                {FOOTER.LINKEDIN}
            </Link>  
            <Link className='flex gap-1' href={FOOTER.GITHUB_LINK} target='_blank'>
                <Image src={githubIcon} alt='github'/>
                {FOOTER.GITHUB}
            </Link>
        </div>
    </div>
  )
}