import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import VisionMissionSection from "@/components/vision-mission-section"
import CoreValuesSection from "@/components/core-values-section"
import ServicesSection from "@/components/services-section"
import ProcessSection from "@/components/process-section"
import ProductsSection from "@/components/products-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import GallerySection from "@/components/gallery-section"
import ClientsSection from "@/components/clients-section"
import { BackgroundDecorations } from "@/components/background-decorations"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col relative overflow-hidden">
      <BackgroundDecorations />
      <Navbar />
      <main className="flex-1 relative z-10">
        <HeroSection />
        <AboutSection />
        <VisionMissionSection />
        <CoreValuesSection />
        <ServicesSection />
        <ProcessSection />
        <ProductsSection />
        <GallerySection />
        <ProjectsSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}
