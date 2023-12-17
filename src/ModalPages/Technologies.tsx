import Image from 'next/image'
import reactIcon from '@/icons/react.svg'
import javascript from '@/icons/technologies/javascript.svg'
import typescript from '@/icons/technologies/typescript.svg'
import html5 from '@/icons/technologies/html5.svg'
import aws from '@/icons/technologies/aws.svg'
import git from '@/icons/technologies/git.svg'
import java from '@/icons/technologies/java.svg'
import nextjs from '@/icons/technologies/nextjs.svg'
import nodejs from '@/icons/technologies/nodejs.svg'
import springboot from '@/icons/technologies/springboot.svg'
import angular from '@/icons/technologies/angular.svg'
import tailwind from '@/icons/technologies/tailwind.svg'
import docker from '@/icons/technologies/docker.svg'
import css from '@/icons/technologies/css.svg'

export default function Technologies() {
    const tier1 = [
        {
            name: 'HTML5',
            logo: html5,
        },
        {
            name: 'CSS',
            logo: css,
        },
        {
            name: 'JavaScript',
            logo: javascript,
        },
        {
            name: 'ReactJS',
            logo: reactIcon,
        },
        {
            name: 'NextJS',
            logo: nextjs,
        },
        {
            name: 'Git',
            logo: git,
        },
        {
            name: 'Tailwind',
            logo: tailwind,
        },
    ]
    const tier2 = [
        {
            name: 'Java',
            logo: java,
        },
        {
            name: 'TypeScript',
            logo: typescript,
        },
        {
            name: 'Spring',
            logo: springboot,
        },
        {
            name: 'NodeJS',
            logo: nodejs,
        },
    ]
    const tier3 = [
        {
            name: 'AWS',
            logo: aws,
        },
        {
            name: 'Docker',
            logo: docker,
        },
        {
            name: 'Angular',
            logo: angular,
        },
    ]
    return (
        <div id='technologies' className='absolute w-full h-full flex flex-col items-center'>
            <div className='flex'>
                <div className='font-semibold text-3xl pt-5'>Technologies</div>
            </div>
            <div id='opensource-content' className='lg:w-[40%] w-[80%] h-full flex flex-col 
            items-center mt-5 gap-4 text-justify overflow-y-scroll no-scrollbar'>
                <div className='flex flex-col items-center mt-5 gap-4'>
                    <div className='flex flex-col gap-14 font-bold text-xl items-center justify-center'>
                        <p className='font-bold text-xl'>⭐⭐⭐⭐½</p>
                        <div className='flex items-center justify-center gap-14 flex-wrap'>
                            {
                                tier1.map(item => (
                                    <div key={item.name} className='flex flex-col items-center justify-center gap-2'>
                                        <Image src={item.logo} alt='logo' width={50} height={50} />
                                        <p className='text-xs font-light'>{item.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <hr className='border-t-2 border-gray-300 my-4 w-full opacity-50' />
                <div className='flex flex-col items-center mt-5 gap-4'>
                    <div className='flex flex-col gap-14 font-bold text-xl items-center justify-center'>
                        <p className='font-bold text-xl'>⭐⭐⭐½</p>
                        <div className='flex items-center justify-center gap-14 flex-wrap'>
                            {
                                tier2.map(item => (
                                    <div key={item.name} className='flex flex-col items-center justify-center gap-2'>
                                        <Image src={item.logo} alt='logo' width={50} height={50} />
                                        <p className='text-xs font-light'>{item.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <hr className='border-t-2 border-gray-300 my-4 w-full opacity-50' />
                <div className='flex flex-col items-start mt-5 gap-4'>
                    <div className='flex flex-col gap-14 font-bold text-xl items-center justify-center'>
                        <p className='font-bold text-xl'>⭐⭐⭐</p>
                        <div className='flex items-center justify-center gap-14 flex-wrap'>
                            {
                                tier3.map(item => (
                                    <div key={item.name} className='flex flex-col items-center justify-center gap-2'>
                                        <Image src={item.logo} alt='logo' width={50} height={50} />
                                        <p className='text-xs font-light'>{item.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-5 gap-4'>
                <div className='w-2 h-2' />
                <div className='w-2 h-2' />
                <div className='w-2 h-2' />
            </div>
        </div>
    )
}