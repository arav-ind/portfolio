import { movies } from '@/data/data'

export default function Movies() {
    return (
        <div id='movies' className='absolute w-full h-full flex flex-col items-center'>
            <div className='flex'>
                <div className='font-semibold text-3xl pt-5'>Movies</div>
            </div>
            <div id='movies-content' className='sm:w-[40%] w-full sm:px-2 px-8 h-full flex flex-col items-center mt-5 gap-4 overflow-y-scroll no-scrollbar'>
                <div className='flex flex-col items-start mt-5 gap-4'>
                    {movies.map((movie, i) => (
                        <p className='text-sm' key={movie.name}>
                            {i + 1}. {movie.name}
                            <span className='text-xs font-extralight italic'> ({movie.language})</span>
                        </p>
                    ))}
                </div>
                <hr className='border-t-2 border-gray-300 my-4 w-full opacity-40 rounded-lg' />
                <p className='text-xs font-light'>
                    <i>
                        These are the movies I love, listed without any particular order.
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
