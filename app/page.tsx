import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Palette, Monitor, Rocket, Star } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#FEFEFE]/80 backdrop-blur-md z-50 border-b border-[#E0E7FF]/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-[#1E293B] font-[var(--font-heading)]">
              Jane Designer
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#about" className="text-[#1E293B] hover:text-[#6366F1] transition-colors">
                About
              </Link>
              <Link href="#services" className="text-[#1E293B] hover:text-[#6366F1] transition-colors">
                Services
              </Link>
              <Link href="#portfolio" className="text-[#1E293B] hover:text-[#6366F1] transition-colors">
                Portfolio
              </Link>
              <Link href="#testimonials" className="text-[#1E293B] hover:text-[#6366F1] transition-colors">
                Testimonials
              </Link>
              <Link href="#contact">
                <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-[#FEFEFE] via-[#E0E7FF]/20 to-[#FEFEFE]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1E293B] mb-6 font-[var(--font-heading)] text-balance leading-tight">
              Transform Your Startup Into a{' '}
              <span className="text-[#6366F1]">Memorable Brand</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#1E293B]/70 mb-10 max-w-3xl text-balance leading-relaxed">
              Professional brand identity and web design that helps startups stand out, attract customers, and scale faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="#portfolio">
                <Button size="lg" className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-8 py-6 text-lg">
                  View My Work
                </Button>
              </Link>
            </div>
            <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1659141170537-6e0aa70329a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwd29ya3NwYWNlJTIwYnJhbmQlMjBpZGVudGl0eSUyMG1vY2t1cHN8ZW58MHwwfHx8MTc3MTU1Njc4OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Creative designer workspace with brand identity mockups"
                width={1080}
                height={720}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-[#FEFEFE]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0JTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MHwwfHx8MTc3MTU1NzEwMXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional designer portrait in creative workspace"
                  width={1080}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#6366F1] rounded-2xl -z-10 hidden lg:block" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E293B] mb-6 font-[var(--font-heading)] text-balance">
                Building Brands That Drive Growth
              </h2>
              <p className="text-lg text-[#1E293B]/70 mb-8 leading-relaxed">
                I'm Jane Designer, a creative professional specializing in brand identity and web design for startups. With a focus on strategic design thinking, I help emerging companies create compelling visual identities and user-friendly websites that resonate with their target audience and support business objectives.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E0E7FF]">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-[#6366F1] mb-2 font-[var(--font-heading)]">
                    50+
                  </div>
                  <div className="text-sm text-[#1E293B]/70">Startups Launched</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-[#6366F1] mb-2 font-[var(--font-heading)]">
                    3x
                  </div>
                  <div className="text-sm text-[#1E293B]/70">Average Revenue Increase</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-[#6366F1] mb-2 font-[var(--font-heading)]">
                    98%
                  </div>
                  <div className="text-sm text-[#1E293B]/70">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-[#FEFEFE] to-[#E0E7FF]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E293B] mb-4 font-[var(--font-heading)] text-balance">
              Design Solutions That Deliver Results
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Brand Identity Design */}
            <Card className="border-[#E0E7FF] bg-white hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-[#6366F1]/10 flex items-center justify-center mb-4">
                  <Palette className="w-7 h-7 text-[#6366F1]" />
                </div>
                <CardTitle className="text-2xl font-bold text-[#1E293B] font-[var(--font-heading)]">
                  Brand Identity Design
                </CardTitle>
                <CardDescription className="text-[#1E293B]/70 text-base leading-relaxed">
                  Complete visual identity systems including logo design, color palettes, typography, and brand guidelines that establish market presence.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-[#1E293B]/70">
                    <span className="w-1.5 h-1.5 bg-[#6366F1] rounded-full mr-3" />
                    Logo Design
                  </li>
                  <li className="flex items-center text-[#1E293B]/70">
                    <span className="w-1.5 h-1.5 bg-[#6366F1] rounded-full mr-3" />
                    Brand Guidelines
                  </li>
                  <li className="flex items-center text-[#1E293B]/70">
                    <span className="w-1.5 h-1.5 bg-[#6366F1] rounded-full mr-3" />
                    Visual Identity
                  </li>
                  <li className="flex items-center text-[#1E293B]/70">
                    <span className="w-1.5 h-1.5 bg-[#6366F1] rounded-full mr-3" />
                    Marketing Materials
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Web Design & Development */}
            <Card className="border-[#E0E7FF] bg-white hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-[#6366F1]/10 flex items-center justify-center mb-4">
                  <Monitor className="w-7 h-7 text-[#6366F1]" />
                </div>
                <CardTitle className="text-2xl font-bold text-[#1E293B] font-[var(--font-heading)]">
                  Web Design & Development
                </CardTitle>
                <CardDescription className="text-[#1E293B]/70 text-base leading-relaxed">
                  Responsive, user-focused websites that convert visitors into customers while reflecting your brand's unique personality and values.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-[#1E293B]/70">
                    <span className="w-1.5 h-1.5 bg-[#6366F1] rounded-full mr-3" />
                    Responsive Design
                  </li>
                  <li className="flex items-center text-[#1E293B]/70">
                    <span className="w-1.5 h-1.5 bg-[#6366F1] rounded-full mr-3" />
                    User Experience
                  </li>
                  <li className="flex items-center text-[#1E293B]/70">
                    <span className="w-1.5 h-1.5 bg-[#6366F1] rounded-full mr-3" />
                    Conversion Optimization
                  </li>
                  <li className="flex items-center text-[#1E293B]/70">
                    <span className="w-1.5 h-1.5 bg-[#6366F1] rounded-full mr-3" />
                    CMS Integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Startup Package */}
            <Card className="border-[#F59E0B] bg-white hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center mb-4">
                  <Rocket className="w-7 h-7 text-[#F59E0B]" />
                </div>
                <CardTitle className="text-2xl font-bold text-[#1E293B] font-[var(--font-heading)]">
                  Startup Package
                </CardTitle>
                <CardDescription className="text-[#1E293B]/70 text-base leading-relaxed">
                  Comprehensive design solution combining brand identity and web presence, specifically tailored for new businesses ready to launch.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-[#1E293B]/70">
                    <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full mr-3" />
                    Complete Branding
                  </li>
                  <li className="flex items-center text-[#1E293B]/70">
                    <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full mr-3" />
                    Website Design
                  </li>
                  <li className="flex items-center text-[#1E293B]/70">
                    <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full mr-3" />
                    Business Cards
                  </li>
                  <li className="flex items-center text-[#1E293B]/70">
                    <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full mr-3" />
                    Launch Support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32 bg-[#FEFEFE]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E293B] mb-4 font-[var(--font-heading)] text-balance">
              Recent Projects That Made an Impact
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <Card className="border-[#E0E7FF] bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
                  alt="TechStart SaaS Platform project"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-[#E0E7FF] text-[#6366F1] hover:bg-[#E0E7FF]">SaaS</Badge>
                  <Badge className="bg-[#E0E7FF] text-[#6366F1] hover:bg-[#E0E7FF]">B2B</Badge>
                  <Badge className="bg-[#E0E7FF] text-[#6366F1] hover:bg-[#E0E7FF]">Technology</Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-[#1E293B] font-[var(--font-heading)]">
                  TechStart SaaS Platform
                </CardTitle>
                <CardDescription className="text-sm text-[#1E293B]/60 mb-2">
                  Brand Identity & Web Design
                </CardDescription>
                <p className="text-[#1E293B]/70 leading-relaxed">
                  Complete rebrand and website redesign that increased user signups by 150% in 6 months.
                </p>
              </CardHeader>
            </Card>

            {/* Project 2 */}
            <Card className="border-[#E0E7FF] bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
                  alt="EcoGreen Marketplace project"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-[#E0E7FF] text-[#6366F1] hover:bg-[#E0E7FF]">E-commerce</Badge>
                  <Badge className="bg-[#E0E7FF] text-[#6366F1] hover:bg-[#E0E7FF]">Sustainability</Badge>
                  <Badge className="bg-[#E0E7FF] text-[#6366F1] hover:bg-[#E0E7FF]">Mobile-first</Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-[#1E293B] font-[var(--font-heading)]">
                  EcoGreen Marketplace
                </CardTitle>
                <CardDescription className="text-sm text-[#1E293B]/60 mb-2">
                  E-commerce Design
                </CardDescription>
                <p className="text-[#1E293B]/70 leading-relaxed">
                  Sustainable marketplace platform with intuitive UX that boosted conversion rates by 85%.
                </p>
              </CardHeader>
            </Card>

            {/* Project 3 */}
            <Card className="border-[#E0E7FF] bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
                  alt="FinTech Innovations project"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-[#E0E7FF] text-[#6366F1] hover:bg-[#E0E7FF]">FinTech</Badge>
                  <Badge className="bg-[#E0E7FF] text-[#6366F1] hover:bg-[#E0E7FF]">Professional</Badge>
                  <Badge className="bg-[#E0E7FF] text-[#6366F1] hover:bg-[#E0E7FF]">Investment-ready</Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-[#1E293B] font-[var(--font-heading)]">
                  FinTech Innovations
                </CardTitle>
                <CardDescription className="text-sm text-[#1E293B]/60 mb-2">
                  Brand Identity
                </CardDescription>
                <p className="text-[#1E293B]/70 leading-relaxed">
                  Professional brand identity for financial startup that secured $2M in Series A funding.
                </p>
              </CardHeader>
            </Card>

            {/* Project 4 */}
            <Card className="border-[#E0E7FF] bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
                  alt="HealthTech App project"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-[#E0E7FF] text-[#6366F1] hover:bg-[#E0E7FF]">Healthcare</Badge>
                  <Badge className="bg-[#E0E7FF] text-[#6366F1] hover:bg-[#E0E7FF]">Mobile App</Badge>
                  <Badge className="bg-[#E0E7FF] text-[#6366F1] hover:bg-[#E0E7FF]">User Experience</Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-[#1E293B] font-[var(--font-heading)]">
                  HealthTech App
                </CardTitle>
                <CardDescription className="text-sm text-[#1E293B]/60 mb-2">
                  UI/UX Design
                </CardDescription>
                <p className="text-[#1E293B]/70 leading-relaxed">
                  User-centered app design that improved patient engagement by 200% and won design awards.
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#E0E7FF]/10 to-[#FEFEFE]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E293B] mb-4 font-[var(--font-heading)] text-balance">
              A Proven Process for Exceptional Results
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col items-start">
                <div className="text-6xl font-bold text-[#6366F1]/20 mb-4 font-[var(--font-heading)]">01</div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-3 font-[var(--font-heading)]">
                  Discovery & Strategy
                </h3>
                <p className="text-[#1E293B]/70 leading-relaxed">
                  Deep dive into your business goals, target audience, and competitive landscape to inform design decisions.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col items-start">
                <div className="text-6xl font-bold text-[#6366F1]/20 mb-4 font-[var(--font-heading)]">02</div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-3 font-[var(--font-heading)]">
                  Concept Development
                </h3>
                <p className="text-[#1E293B]/70 leading-relaxed">
                  Create multiple design concepts and iterate based on feedback to find the perfect visual direction.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col items-start">
                <div className="text-6xl font-bold text-[#6366F1]/20 mb-4 font-[var(--font-heading)]">03</div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-3 font-[var(--font-heading)]">
                  Design & Refinement
                </h3>
                <p className="text-[#1E293B]/70 leading-relaxed">
                  Develop comprehensive design systems and refine every detail to ensure pixel-perfect execution.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="flex flex-col items-start">
                <div className="text-6xl font-bold text-[#6366F1]/20 mb-4 font-[var(--font-heading)]">04</div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-3 font-[var(--font-heading)]">
                  Launch & Support
                </h3>
                <p className="text-[#1E293B]/70 leading-relaxed">
                  Deliver final assets with documentation and provide ongoing support to ensure successful implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-[#FEFEFE]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E293B] mb-4 font-[var(--font-heading)] text-balance">
              What Startup Founders Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="border-[#E0E7FF] bg-white">
              <CardHeader>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-[#1E293B]/80 leading-relaxed mb-6 italic">
                  "Jane's design work was instrumental in helping us secure funding. Our brand now communicates the professionalism and innovation that investors were looking for."
                </p>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-[#1E293B]">Sarah Chen</div>
                <div className="text-sm text-[#1E293B]/60">CEO, TechStart Solutions</div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-[#E0E7FF] bg-white">
              <CardHeader>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-[#1E293B]/80 leading-relaxed mb-6 italic">
                  "The website Jane designed increased our conversion rate by 85%. Her understanding of user psychology and startup needs is exceptional."
                </p>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-[#1E293B]">Michael Rodriguez</div>
                <div className="text-sm text-[#1E293B]/60">Founder, EcoGreen Marketplace</div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-[#E0E7FF] bg-white">
              <CardHeader>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-[#1E293B]/80 leading-relaxed mb-6 italic">
                  "Working with Jane was seamless. She delivered everything on time and exceeded our expectations. Our brand identity perfectly captures our vision."
                </p>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-[#1E293B]">David Kim</div>
                <div className="text-sm text-[#1E293B]/60">Co-founder, FinTech Innovations</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-[#6366F1] via-[#6366F1] to-[#4F46E5]">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1758873272540-439a105db676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjBkZXNpZ24lMjBtZWV0aW5nfGVufDB8MHx8fDE3NzE1NTcxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Startup team collaboration design meeting"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-[var(--font-heading)] text-balance">
              Ready to Build Your Brand?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl text-balance leading-relaxed">
              Let's discuss how strategic design can accelerate your startup's growth and market presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact">
                <Button size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-8 py-6 text-lg">
                  Start Your Project
                </Button>
              </Link>
              <Link href="#pricing">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm px-8 py-6 text-lg"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#1E293B] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold mb-2 font-[var(--font-heading)]">Jane Designer</div>
              <p className="text-white/70 text-sm">Creative design for ambitious startups</p>
            </div>
            <div className="flex gap-8 text-sm">
              <Link href="#about" className="text-white/70 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#services" className="text-white/70 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#portfolio" className="text-white/70 hover:text-white transition-colors">
                Portfolio
              </Link>
              <Link href="#contact" className="text-white/70 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/60">
            © 2024 Jane Designer. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
