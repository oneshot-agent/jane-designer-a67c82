import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { Process } from '@/components/process'
import { Testimonials } from '@/components/testimonials'
import { CTA, Footer } from '@/components/cta-footer'

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
