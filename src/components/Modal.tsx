'use client'

import close from '@/icons/close.svg'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import Projects from './Projects'

export default function Modal() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const showModal = searchParams.get('showmodal')
    const content = searchParams.get('content')

    const hideModal = () => {
        document.body.style.overflowY = 'scroll'
        router.back()
    }

    const renderContent = (content: string | null) => {
        switch(content) {
            case 'resume':
                return <iframe className='w-full h-full' src='aravind_resume.pdf'/>
            case 'movies':
                return <div>Movies</div>
            case 'hobbies':
                return <div>Hobbies</div>
            case 'languages':
                return <div>Languages</div>
            case 'shows':
                return <div>Shows</div>
            case 'projects':
                return <Projects />
            case 'blogs':
                return <div>Blogs</div>
            case 'contributions':
                return <div>Contributions</div>
            default:
                return null
        }
    }

    return (
        <div 
            className={`fixed top-0 w-full h-full z-50 bg-transparent transform transition-transform ease-in-out duration-300
            ${showModal ? 'show-modal' : 'hide-modal'}`}
        >
            <Image className='absolute w-6 h-6 top-9 right-2 z-50 cursor-pointer' onClick={hideModal} src={close} alt='close' />
            <div className='relative flex justify-center items-center mt-16 w-full h-full bg-[#333333] text-white overflow-y-scroll rounded-lg no-scrollbar'>
                {renderContent(content)}
            </div>
        </div>
    )
  }