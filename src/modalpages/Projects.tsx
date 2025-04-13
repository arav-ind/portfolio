import altair from '@/icons/altair.svg'
import zee5Icon from '@/icons/zee5.svg'
import Image from 'next/image'
import astroIcon from '@/icons/astro.svg'
import stingtvIcon from '@/icons/stingtv.webp'
import switchtvIcon from '@/icons/switchtv.webp'
import code from '@/icons/code.svg'
import Link from 'next/link'

export default function Projects() {
    return (
        <div id='projects' className='absolute w-full h-full flex flex-col items-center'>
            <div className='flex items-center justify-center pt-5 gap-4'>
                <Image className='opacity-80' src={code} alt='logo' />
                <p className='flex font-semibold text-3xl'>Projects</p>
            </div>

            <div id='projects-content' className='sm:w-[40%] w-full sm:px-2 px-8 h-full flex flex-col items-start mt-5 gap-4 text-justify overflow-y-scroll no-scrollbar'>
                <div className='flex flex-col items-start mt-5 gap-4'>
                    <div className='flex items-center justify-start gap-4'>
                        <Image src={altair} alt='Zee5 logo' width={50} height={50} />
                        <p className='font-bold text-xl'>Altair Rapidminer</p>
                    </div>
                    <p className='text-sm leading-5'>
                        Working in the development team of Altair Rapidminer.
                    </p>
                    <p className='text-sm leading-5'>
                        Migrated multiple frontend apps to a microfrontend architecture, enabling seamless integration across applications and enhancing the overall user experience.
                    </p>
                </div>
                <p className='text-sm leading-5'>
                    More about Altair Rapidminer can be found <Link className='text-sm italic' href='https://www.altair.com/rapidminer/' target='_blank'>here!</Link>
                </p>
                <hr className='border-t-2 border-gray-300 my-4 w-full opacity-10 rounded-lg' />

                <div className='flex flex-col items-start mt-5 gap-4'>
                    <div className='flex items-center justify-start gap-4'>
                        <Image src={zee5Icon} alt='Zee5 logo' width={50} height={50} />
                        <p className='font-bold text-xl'>Zee Entertainment</p>
                    </div>
                    <p className='text-sm leading-5'>
                        Worked extensively in the Frontend Development of the <b>Zee5 Smart-TV App</b>,
                        compatible with platforms such as <b>LGWebOS</b> and <b>Samsung TizenOS</b>.
                    </p>
                    <p className='text-sm leading-5'>
                        Involved in the implementation of interactive screens, crafted multiple <b>reusable components, </b>
                        and implemented various UI enhancements. Additionally, addressed and resolved diverse issues.
                    </p>
                    <p className='text-sm leading-5'>
                        Contributed to the implementation of client-side functionalities for <b>DRM-protected </b>
                        content using the <b>Shaka Video Player</b>.
                    </p>
                </div>
                <hr className='border-t-2 border-gray-300 my-4 w-full opacity-10 rounded-lg' />

                <div className='flex flex-col items-start mt-5 gap-4'>
                    <div className='flex items-center justify-start gap-6'>
                        <Image src={astroIcon} alt='AstroGO logo' width={50} height={50} />
                        <Image src={stingtvIcon} alt='StingTV logo' width={50} height={50} />
                        <Image src={switchtvIcon} alt='SwitchTV logo' width={50} height={50} />
                    </div>
                    <p className='text-sm leading-5'>
                        <b>AstroGO, StingTV,</b> and <b>SwitchTV</b> are widely used OTT platforms in Malaysia,
                        Israel, and UAE respectively.
                    </p>
                    <p className='text-sm leading-5'>
                        Significantly contributed to the <b>Frontend Development</b> of their Smart TV Apps using <b>ReactJS</b>.
                        Worked on UI Revamps, integrated features such as Vertical Scrolling, <b>Remote Navigation</b>, Circular Banner,
                        Enhanced Search screen with voice module, <b>Authentication,</b> localization, etc.
                    </p>
                    <p className='text-sm leading-5'>
                        Implemented the <b>DashJS</b> player and played a key role in the migration process.
                    </p>
                </div>
                <hr className='border-t-2 border-gray-300 my-4 w-full opacity-10 rounded-lg' />

                <div className='flex flex-col items-start mt-5 gap-4'>
                    <div className='flex items-center justify-start gap-6'>
                        <p className='font-bold text-xl'>
                            ffmpego
                            <span className='text-xs font-extralight italic'> (Personal Project)</span>
                        </p>
                    </div>
                    <p className='text-sm leading-5'>
                        Built a Go wrapper around ffmpeg for fast, batch video format conversion, resolution adjustments, and custom transcoding processes.
                    </p>
                    <Link className='text-sm leading-5 italic' href='https://github.com/arav-ind/ffmpego' target='_blank'>Click Here to Checkout!</Link>
                </div>
                <hr className='border-t-2 border-gray-300 my-4 w-full opacity-10 rounded-lg' />

                <div className='flex flex-col items-start mt-5 gap-4'>
                    <div className='flex items-center justify-start gap-6'>
                        <p className='font-bold text-xl'>
                            react-svgmap-x
                            <span className='text-xs font-extralight italic'> (Personal Project)</span>
                        </p>
                    </div>
                    <p className='text-sm leading-5'>
                        Developed and published multiple npm packages <b>react-svgmap-india</b>, <b>react-svgmap-usa</b>,
                        <b> react-svgmap-japan</b> etc. with click and hover funtionality.
                    </p>
                    <Link className='text-sm leading-5 italic' href='https://www.npmjs.com/~arav-ind' target='_blank'>Click Here to Checkout!</Link>
                </div>
                <hr className='border-t-2 border-gray-300 my-4 w-full opacity-10 rounded-lg' />

                <div className='flex flex-col items-start mt-5 gap-4'>
                    <div className='flex items-center justify-start gap-6'>
                        <p className='font-bold text-xl'>
                            Chat App
                            <span className='text-xs font-extralight italic'> (Personal Project)</span>
                        </p>
                    </div>
                    <p className='text-sm leading-5'>
                        Implemented Backend for a Chat based application with <b>Nodejs, Express, Websocket, AWS S3, EC2,
                            Load Balancer</b> and <b>MongoDB.</b>
                    </p>
                    <p className='text-sm leading-5 italic'>
                        Also implemented clone web apps like Youtube with <b>Redux </b>, React, TypeScript and YoutubeAPI.
                    </p>
                    <Link className='text-sm italic' href='https://github.com/arav-ind' target='_blank'>For other projects, Checkout my Github!</Link>
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
