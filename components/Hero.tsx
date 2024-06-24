import React from 'react';
import Particle from './Particle';
import TextEffect from './TextEffects';
import Image from 'next/image';
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/20/solid';

const Hero = () => {
    return (
        <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[12vh] bg-cover bg-center">
            <Particle />
            <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
                <div>
                    <h1 className="text-[35px] md:text-[50px] text-white font-bold">
                        Hey I'm
                        <span className="text-yellow-400"> Karan</span>
                    </h1>
                    <TextEffect />
                    <p className="mt-[2rem] text-[16px] text-[#ffffff92]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
                        <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[10px] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-4" >
                            <p>Download Cv</p>
                            <ArrowDownTrayIcon className="w-[1.5rem] h-[1.7rem] text-black" />
                        </button>
                        <button className="flex items-center space-x-2">
                            <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]" />
                            <p className="text-[20px] font-semibold text-white">Watch The Video</p>

                        </button>

                    </div>

                </div>
                <div className="w-[300px] lg:w-[500px] flex bg-[#55e6a5] relative items-center rounded-full h-[300px] lg:h-[500px] mx-auto lg:mx-40">
                    <Image src="/images/u1.jpg" alt="user" fill className="object-cover rounded-full" />
                </div>
            </div>

        </div>
    );
};

export default Hero;
