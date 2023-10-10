"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
    
const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <hi className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 ">
                        Hello, I'm{" "}
                    </span>
                    <br />
                    <TypeAnimation
                     sequence={[
                      'Eku',
                      1500,
                      'a Student',
                      1000,
                      'a Designer',
                      1000,
                      'an Animator',
                      1000,
                      'all You need',
                      1200,
                     ]}
                      wrapper="span"
                     speed={50}
                     repeat={Infinity}
                     />
                </hi>
                <p className="text-[#ADB7BE] text-base sm:text-lg mg-6 lg:text-xl">
                    I'm a Visual Media student at Tallinn Polytechnic School.
                </p>
                <div>
                    <button className='font-semibold px-6 py-3 sm:fit rounded-full mr-4 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 hover:bg-slate-800 text-white'>
                        Contact
                    </button>
                    <button className='px-1 py-1 sm:fit rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 text-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                    </button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className="rounded-full bg-[#2f2f2f] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                    src="/images/Hero-Image.png"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={300}
                    height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection