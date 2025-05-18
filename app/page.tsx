"use client"

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
import { useSearchParams } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { useEffect } from "react"

export default function Home() {
  const searchParams = useSearchParams()
  const { toast } = useToast()

  useEffect(() => {
    // Check for success parameter in URL
    const success = searchParams.get("success")
    if (success === "true") {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      })
    }

    // Check for error parameters
    const error = searchParams.get("error")
    if (error === "validation") {
      toast({
        title: "Form Error",
        description: "Please check your inputs and try again.",
        variant: "destructive",
      })
    } else if (error === "sending") {
      toast({
        title: "Email Error",
        description: "Failed to send email. Please try again later.",
        variant: "destructive",
      })
    }
  }, [searchParams, toast])

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
