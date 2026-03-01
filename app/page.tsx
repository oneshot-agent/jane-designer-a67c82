import Navbar from '@/components/portfolio/navbar'
import HeroSection from '@/components/portfolio/hero-section'
import FeaturesSection from '@/components/portfolio/features-section'
import PortfolioSection from '@/components/portfolio/portfolio-section'
import TestimonialsSection from '@/components/portfolio/testimonials-section'
import ServicesSection from '@/components/portfolio/services-section'
import StatsSection from '@/components/portfolio/stats-section'
import CtaSection from '@/components/portfolio/cta-section'
import Footer from '@/components/portfolio/footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <FeaturesSection />
        <PortfolioSection />
        <StatsSection />
        <TestimonialsSection />
        <ServicesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
