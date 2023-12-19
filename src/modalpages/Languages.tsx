import translate from '@/icons/translate.svg'
import Image from 'next/image'

export default function Languages() {
    return (
        <div id='languages' className='absolute w-full h-full flex flex-col items-center'>
            <div className='flex items-center justify-center pt-5 gap-4'>
                <Image className='opacity-80' src={translate} alt='logo' />
                <p className='flex font-semibold text-3xl'>Languages</p>
            </div>
            <div id='language-content' className='w-[50%] sm:px-2 px-8 h-full flex flex-col items-center
            mt-5 gap-4 text-justify overflow-y-scroll no-scrollbar overflow-x-hidden'>
                <div className='flex items-center justify-center mt-5 gap-4 flex-wrap flex-col'>
                    <div className='w-56 h-auto rounded-2xl flex flex-col relative items-center'>
                        <p className='font-semibold text-xl mt-4'>
                            தமிழ்
                            <span className='text-sm font-extralight'> (Native)</span>
                        </p>
                        <p className='font-medium text-sm'>Tamil 🇮🇳</p>
                        <div className='mt-4'>
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                    <hr className='border-t-2 border-gray-300 my-4 w-full opacity-10 rounded-lg' />
                    <div className='w-56 h-auto rounded-2xl flex flex-col relative items-center'>
                        <p className='font-semibold text-xl mt-4'>
                            English
                            <span className='text-sm font-extralight'> (Business)</span>
                        </p>
                        <p className='font-medium text-sm'>English 🇬🇧</p>
                        <div className='mt-4'>
                            <p>⭐⭐⭐⭐</p>
                        </div>
                    </div>
                    <hr className='border-t-2 border-gray-300 my-4 w-full opacity-10 rounded-lg' />
                    <div className='w-56 h-auto rounded-2xl flex flex-col relative items-center'>
                        <p className='font-semibold text-xl mt-4'>
                            日本語
                            <span className='text-sm font-extralight'> (Intermediate)</span>
                        </p>
                        <p className='font-medium text-sm'>Japanese 🇯🇵</p>
                        <div className='mt-4'>
                            <p>⭐⭐½</p>
                        </div>
                    </div>
                    <hr className='border-t-2 border-gray-200 my-4 w-full opacity-10 rounded-lg' />
                    <div className='w-56 h-auto rounded-2xl flex flex-col relative items-center'>
                        <p className='font-semibold text-xl mt-4'>
                            हिन्दी
                            <span className='text-sm font-extralight'> (Intermediate)</span>
                        </p>
                        <p className='font-medium text-sm'>Hindi 🇮🇳</p>
                        <div className='mt-4'>
                            <p>⭐⭐⭐</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col mt-5 gap-4'>
                    <div className='w-2 h-2' />
                    <div className='w-2 h-2' />
                    <div className='w-2 h-2' />
                </div>
            </div>
        </div>
    )
}
