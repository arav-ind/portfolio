import mail from '@/icons/mail.svg'
import call from '@/icons/call.svg'
import Image from 'next/image'

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
                <Image src={call} alt='mail'/>
                <p>+91-8012544554</p>
            </div>
        </div>
    </div>
  )
}