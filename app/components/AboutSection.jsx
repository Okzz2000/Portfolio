"use client"
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills"
        ,id: "skills"
        ,content: (
            <ul className='list-disc pl-2'>
                <li>Webdesign</li>
                <li>Video montage</li>
                <li>Photoshop</li>
                <li>Animation</li>
            </ul>
        )
    },
    {
        title: "Education"
        ,id: "education"
        ,content: (
            <ul className='list-disc pl-2'>
                <li>Tallinna Saksa Gümnaasium<br></br>2012-2020</li>
                <li>Tallinna Ehituskool<br></br>2021-2022</li>
                <li>Tallinna Polütehnikum<br></br>2022-...</li>

            </ul>
        )
    },
    {
        title: "Certifications"
        ,id: "certifications"
        ,content: (
            <ul className='list-disc pl-2'>
                <li>sadly none yet</li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition (() => {
            setTab(id)
        })
    }

    return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src='/images/about-image.png' height={500} width={500}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    I'm a 19y/o boy, located in Estonia, Tallinn. I enjoy webdesign, animating and video editing.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton
                        selectTab={() => handleTabChange("skills")}
                        active={tab === "skills"}
                    >
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("education")}
                        active={tab === "education"}
                    >
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("certifications")}
                        active={tab === "certifications"}
                    >
                        {" "}
                        Certifications{" "}
                    </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection