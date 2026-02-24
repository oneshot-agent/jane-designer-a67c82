import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import FeaturesSection from '@/components/features-section'
import PortfolioSection from '@/components/portfolio-section'
import TestimonialsSection from '@/components/testimonials-section'
import ProcessSection from '@/components/process-section'
import StatsSection from '@/components/stats-section'
import CtaSection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ProcessSection />
        <StatsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
