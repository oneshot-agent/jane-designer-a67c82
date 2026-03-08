import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import PortfolioSection from '@/components/portfolio-section'
import ProcessSection from '@/components/process-section'
import TestimonialsSection from '@/components/testimonials-section'
import StatsSection from '@/components/stats-section'
import CtaSection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PortfolioSection />
        <ProcessSection />
        <TestimonialsSection />
        <StatsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
