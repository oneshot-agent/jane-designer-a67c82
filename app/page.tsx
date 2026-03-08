import Navbar from '@/components/sections/navbar'
import HeroSection from '@/components/sections/hero-section'
import FeaturesSection from '@/components/sections/features-section'
import PortfolioSection from '@/components/sections/portfolio-section'
import ServicesSection from '@/components/sections/services-section'
import TestimonialsSection from '@/components/sections/testimonials-section'
import AboutSection from '@/components/sections/about-section'
import ProcessSection from '@/components/sections/process-section'
import CtaSection from '@/components/sections/cta-section'
import Footer from '@/components/sections/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PortfolioSection />
        <ServicesSection />
        <TestimonialsSection />
        <AboutSection />
        <ProcessSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
