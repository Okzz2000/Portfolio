import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#000000] via-[#170808] to-orange-700">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
      </div>
    </main>
  )
}
