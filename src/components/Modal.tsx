'use client'

import close from '@/icons/close.svg'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Modal() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const showModal = searchParams.get('showmodal')

    const hideModal = () => {
        document.body.style.overflowY = 'scroll'
        router.back()
    }

    return (
        <div 
            className={`fixed top-0 w-full h-full z-50 bg-transparent transform transition-transform ease-in-out duration-300
            ${showModal ? 'show-modal' : 'hide-modal'}`}
        >
            <Image className='absolute w-6 h-6 top-9 right-2 z-50 cursor-pointer' onClick={hideModal} src={close} alt='close' />
            <div className='relative mt-16 w-full h-full bg-white text-black overflow-y-scroll rounded-lg'>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
                <div className='relative mt-4'>This is a modal</div>
            </div>
        </div>
    )
  }