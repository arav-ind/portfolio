'use client'

import Image from 'next/image'
import { CardType } from '@/types/types'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Card({id, background, icon, title, tag}: CardType) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selected = searchParams.get('view')
  
  const showModal = (id: string) => {
    console.log('Aravind tag', id)
    
    document.body.style.overflowY = 'hidden'
    if (!selected) {
      router.push(`?showmodal=true&content=${id}`)
    } else {
      router.push(`${location.href}&showmodal=true&content=${id}`)
    }
  }
  
  return (
    <div 
      key={id}
      className={`relative w-64 h-44 bg-slate-900 rounded-3xl flex justify-center items-center 
      hover:scale-105 transition-all duration-300 drop-shadow-lg opacity-100 cursor-pointer
      ${selected === null || tag === selected ? '' : 'disabled'}`}
      style={{background: background}}
      onClick={() => showModal(id)}
    >
      <p className='absolute left-8 top-8 font-semibold text-shadow-sm shadow-black'>{title}</p>
      <Image className='absolute right-8 bottom-8' src={icon} alt='icon'/>
    </div>
  )
}