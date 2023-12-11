'use client'

import Image from 'next/image'
import { CardType } from '@/types/types'
import { useSearchParams } from 'next/navigation'

export default function Card({key, background, icon, title, tag}: CardType) {
  const searchParams = useSearchParams()
  const selected = searchParams.get('view')
  
  return (
    <div 
      key={key}
      className={`relative w-64 h-44 bg-slate-900 rounded-3xl flex justify-center items-center 
      hover:scale-105 transition-all duration-300 drop-shadow-lg opacity-100
      ${selected === null || tag === selected ? '' : 'disabled'}`}
      style={{background: background}}
    >
      <p className='absolute left-8 top-8 font-semibold text-shadow-sm shadow-black'>{title}</p>
      <Image className='absolute right-8 bottom-8' src={icon} alt='icon'/>
    </div>
  )
}