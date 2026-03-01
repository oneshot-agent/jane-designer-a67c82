import { Navbar } from '@/components/sections/navbar'
import { HeroSection } from '@/components/sections/hero-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { PortfolioSection } from '@/components/sections/portfolio-section'
import { ServicesSection } from '@/components/sections/services-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { AboutSection } from '@/components/sections/about-section'
import { CtaSection } from '@/components/sections/cta-section'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PortfolioSection />
      <ServicesSection />
      <TestimonialsSection />
      <AboutSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
