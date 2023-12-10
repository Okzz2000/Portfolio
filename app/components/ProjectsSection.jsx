"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from "framer-motion"

const projectsData = [
    {
        id: 1,
        title: "Monster AD",
        description: "Portrait with energy drink Monster Advertisement",
        image: "/images/projects/Monster.png",
        tag: ["All", "Photo"],
        previewUrl: "/images/projects/Monster.png"
    },
    {
        id: 2,
        title: "E.Wedel AD",
        description: "Orange chocolate Advertisement",
        image: "/images/projects/Toode.png",
        tag: ["All", "Photo"],
        previewUrl: "/images/projects/Toode.png"
    },
    {
        id: 3,
        title: "MySushi AD",
        description: "Tempura Sushi Advertisement",
        image: "/images/projects/MySushi.png",
        tag: ["All", "Photo"],
        previewUrl: "/images/projects/MySushi.png"
    },
    {
        id: 4,
        title: "Technological Takeover",
        description: "Staged Portrait",
        image: "/images/projects/Becca.png",
        tag: ["All", "Photo"],
        previewUrl: "/images/projects/Becca.png"
    },
    {
        id: 5,
        title: "Comics style Me",
        description: "Monocolor comic style portrait of me",
        image: "/images/projects/illustration.png",
        tag: ["All", "Illustration"],
        previewUrl: "/images/projects/illustration.png"
    },
    {
        id: 6,
        title: "Words Shark",
        description: "Poster with a Shark made of words",
        image: "/images/projects/Shark.png",
        tag: ["All", "Illustration"],
        previewUrl: "/images/projects/Shark.png"
    }
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All")
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    )

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    }

  return (
    <section>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag
                onClick={handleTagChange}
                name="All"
                isSelected={tag === "All"}
            />
            <ProjectTag
                onClick={handleTagChange}
                name="Photo"
                isSelected={tag === "Photo"}
            />
            <ProjectTag
                onClick={handleTagChange}
                name="Illustration"
                isSelected={tag === "Illustration"}
            />
        </div>
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project, index) => (
            <motion.li
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4}}
            >
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    previewUrl={project. previewUrl}
                />
            </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default ProjectsSection