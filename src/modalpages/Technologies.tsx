import { technologiesModalSource } from '@/data/data'
import { TechnologiesModalSourceType } from '@/types/types'
import Image from 'next/image'

export default function Technologies() {
    return (
        <div id='technologies' className='absolute w-full h-full flex flex-col items-center'>
            <div className='flex'>
                <div className='font-semibold text-3xl pt-5'>Technologies</div>
            </div>
            <div id='technologies-content' className='lg:w-[40%] w-[80%] h-full flex flex-col 
            items-center mt-5 gap-4 text-justify overflow-y-scroll no-scrollbar'>
                {
                    (Object.keys(technologiesModalSource) as Array<keyof TechnologiesModalSourceType>).map((item) => (
                        <div key={item} className='flex flex-col items-center mt-5 gap-4'>
                            <div className='flex flex-col gap-14 font-bold text-xl items-center justify-center'>
                                <p className='font-bold text-xl'>{technologiesModalSource[item].title}</p>
                                <div className='flex items-center justify-center gap-14 flex-wrap'>
                                    {
                                        technologiesModalSource[item].data.map((content: any) => (
                                            <div key={content.name} className='flex flex-col items-center justify-center gap-2'>
                                                <Image src={content.logo} alt='logo' width={50} height={50} />
                                                <p className='text-xs font-light'>{content.name}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <hr className='border-t-2 border-gray-300 my-4 w-full opacity-40 rounded-lg' />
                        </div>
                    ))
                }
            </div>
            <div className='flex flex-col mt-5 gap-4'>
                <div className='w-2 h-2' />
                <div className='w-2 h-2' />
                <div className='w-2 h-2' />
            </div>
        </div>
    )
}