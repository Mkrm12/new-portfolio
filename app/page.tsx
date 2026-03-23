"use client"

import { AuroraBackground } from "@/components/aurora-background"
import { ScrollSpyNav } from "@/components/scroll-spy-nav"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsMarquee } from "@/components/skills-marquee"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0a0f1c]">
      <AuroraBackground />
      <ScrollSpyNav />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsMarquee />
        <ExperienceSection />
        <ProjectsSection />
        <Footer />
      </div>
    </main>
  )
}
