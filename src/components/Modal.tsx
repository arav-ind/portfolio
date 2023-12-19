'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import OpenSource from '@/modalpages/OpenSource'
import Projects from '@/modalpages/Projects'
import close from '@/icons/close.svg'
import Technologies from '@/modalpages/Technologies'
import Languages from '@/modalpages/Languages'
import Movies from '@/modalpages/Movies'
import Shows from '@/modalpages/Shows'

export default function Modal() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const content = searchParams.get('content')

    useEffect(() => {
        if (!content) {
            document.body.style.overflowY = 'scroll'
        }
    }, [content])

    const hideModal = () => {
        document.body.style.overflowY = 'scroll'
        router.back()
    }

    const renderContent = (content: string | null) => {
        switch (content) {
            case 'resume':
                return <iframe className='w-full h-full' src='aravind_resume.pdf' />
            case 'movies':
                return <Movies />
            case 'hobbies':
                return <div>To be updated soon!</div>
            case 'languages':
                return <Languages />
            case 'shows':
                return <Shows />
            case 'projects':
                return <Projects />
            case 'technologies':
                return <Technologies />
            case 'contributions':
                return <OpenSource />
            default:
                return null
        }
    }

    return (
        <div
            id='modal'
            className={`fixed top-0 w-full h-full z-50 bg-transparent transform transition-transform ease-in-out duration-300
            ${content ? 'show-modal' : 'hide-modal'}`}
        >
            <Image className='absolute w-6 h-6 top-9 right-2 z-50 cursor-pointer' onClick={hideModal} src={close} alt='close' />
            <div className='relative flex justify-center items-center mt-16 w-full h-full bg-[#333333] text-[#CCCCCC] overflow-y-scroll rounded-lg no-scrollbar'>
                {renderContent(content)}
            </div>
        </div>
    )
}