import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Services } from '@/components/portfolio/services'
import { Portfolio } from '@/components/portfolio/portfolio-section'
import { Testimonials } from '@/components/portfolio/testimonials'
import { Process } from '@/components/portfolio/process'
import { CtaSection } from '@/components/portfolio/cta-section'
import { Footer } from '@/components/portfolio/footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  )
}
