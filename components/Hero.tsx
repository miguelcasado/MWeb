import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { HoverBorderGradient } from './ui/hover-border'
import { FlipWords } from './ui/flip-words';
import Image from 'next/image';

const Hero = () => {
    const words = ["finanzas", "inversiones", "ahorros", "planes"];
  return (
    
    <div className='p-0'>
        
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='-top-20 -right-80 h-[80vh] w-[80vw]' fill='purple'/>
            <Spotlight className='-top-60 -right-100 h-[80vh] w-[90vw]' fill='blue'/>
        </div>

        
        <div className="h-screen w-full dark:bg-black-100  bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className='absolute top-0 left-0 m-2 ml-44'>
            <Image
                src={"/img/logoMW.png"}
                width={75}
                height={75}
                alt='logo'/>
        </div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
            <div className='flex flex-col justify-between items-center relative my-20 z-10 mt-64'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <div className="flex justify-center text-center">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                        >
                        
                            <span>Descubre más</span>
                        </HoverBorderGradient>
                        </div>
                        <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-[3rem] text-center">
                            Descubre la nueva manera de gestionar tus
                            <FlipWords words={words} />
                            con MW
                        </div>
                        <div className='mt-3 text-gray-400'>
                            <p>Haz más con tu dinero y no te quedes estancado en aplicaciones que ya no son útiles en este mundo</p>
                        </div>

                        
                        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6  text-white inline-block mt-6">
                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            </span>
                                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                                    <span>
                                        Entra ya
                                    </span>
                                    <svg
                                    fill="none"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M10.75 8.75L14.25 12L10.75 15.25"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                    />
                                    </svg>
                                </div>
                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                    </button>
                </div>

                <Image
                    src={"/img/iphone.png"}
                    width={400}
                    height={200}
                    alt="logo"
                    className='mt-16'/>
            </div>


        </div>

    </div>
    
  )
}

export default Hero