import { Header } from "@/src/components/header"
import { HeroSection } from "@/src/components/hero-section"
import { AboutSection } from "@/src/components/about-section"
import { TechnologiesSection } from "@/src/components/technologies-section"
import { ProjectsSection } from "@/src/components/projects-section"
import { ExperienceSection } from "@/src/components/experience-section"
import { ContactSection } from "@/src/components/contact-section"
import { Footer } from "@/src/components/footer"
import { BackToTopButton } from "@/src/components/back-to-top-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
      <BackToTopButton threshold={300} />
    </main>
  )
}
