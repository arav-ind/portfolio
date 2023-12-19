import { shows } from '@/data/data'

export default function Shows() {
    return (
        <div id='shows' className='absolute w-full h-full flex flex-col items-center'>
            <div className='flex'>
                <div className='font-semibold text-3xl pt-5'>Shows</div>
            </div>
            <div id='shows-content' className='sm:w-[40%] w-full sm:px-2 px-8 h-full flex flex-col items-center mt-5 gap-4 overflow-y-scroll no-scrollbar'>
                <div className='flex flex-col items-start mt-5 gap-4'>
                    {shows.map((show, i) => (
                        <p className='text-sm' key={show.name}>
                            {i + 1}. {show.name}
                            <span className='text-xs font-extralight italic'> ({show.language})</span>
                        </p>
                    ))}
                </div>
                <hr className='border-t-2 border-gray-300 my-4 w-full opacity-40 rounded-lg' />
                <p className='text-xs font-light'>
                    <i>
                        These are the shows I love, listed without any particular order.
                    </i>
                </p>
                <div className='flex flex-col mt-5 gap-4'>
                    <div className='w-2 h-2' />
                    <div className='w-2 h-2' />
                    <div className='w-2 h-2' />
                </div>
            </div>
        </div>
    )
}
