import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import ServicesSection from '@/components/services-section'
import PortfolioSection from '@/components/portfolio-section'
import TestimonialsSection from '@/components/testimonials-section'
import ProcessSection from '@/components/process-section'
import CtaSection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FEFEFE]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ProcessSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
