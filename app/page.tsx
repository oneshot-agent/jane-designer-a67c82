import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { AboutSection } from '@/components/about-section'
import { ProcessSection } from '@/components/process-section'
import { CtaSection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <AboutSection />
        <ProcessSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
