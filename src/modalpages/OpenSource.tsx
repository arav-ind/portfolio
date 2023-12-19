import Image from 'next/image'
import reactIcon from '@/icons/technologies/react.svg'
import Link from 'next/link'
import terminal from '@/icons/terminal.svg'

export default function OpenSource() {
    return (
        <div id='opensource' className='absolute w-full h-full flex flex-col items-center'>
            <div className='flex items-center justify-center pt-5 gap-4'>
                <Image className='opacity-80' src={terminal} alt='logo' />
                <p className='flex font-semibold text-3xl'>Open Source</p>
            </div>
            <div id='opensource-content' className='sm:w-[40%] w-full sm:px-2 px-8 h-full flex flex-col items-start mt-5 gap-4 text-justify overflow-y-scroll no-scrollbar'>
                <div className='flex flex-col items-start mt-5 gap-4'>
                    <div className='flex items-center justify-start gap-4'>
                        <Image src={reactIcon} alt='logo' width={35} height={35} />
                        <p className='font-bold text-xl'>facebook/react</p>
                    </div>
                    <p className='text-sm'>
                        Contributed in resolving an issue in the React UI library where the <i>transformOrigin </i>
                        attribute of <i>svg element</i> was not being recognized.
                    </p>
                    <p className='text-sm'>
                        Through debugging, identified the root cause and implemented the necessary fix.
                        After making a few requested modifications, the fix was accepted and integrated into the library.
                    </p>
                    <p className='text-sm'>
                        Checkout the initial github discussions describing the issue and its fix
                        <Link href='https://github.com/facebook/react/pull/26115'
                            className='italic text-blue-500' target='_blank'> here!</Link>
                    </p>
                    <p className='text-sm'>
                        Subsequently, implemented some requested modifications and submitted a pull request.
                        <Link href='https://github.com/facebook/react/pull/26130'
                            className='italic text-blue-500' target='_blank'> Click here to checkout!</Link>
                    </p>
                </div>
                <hr className='border-t-2 border-gray-300 my-4 w-full opacity-10 rounded-lg' />
                <div className='flex flex-col items-start gap-4'>
                    <p className='text-sm'>
                        <i>Further, getting updated on new releases and trying to go through and
                            debug the reported issues whenever possible.
                            Will update more soon...</i>😉
                    </p>
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
