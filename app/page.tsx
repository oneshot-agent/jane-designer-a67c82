import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Palette, Monitor, Briefcase, Star, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-indigo-50/50 to-white">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[rgb(var(--brand-primary))]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[rgb(var(--brand-accent))]/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[rgb(var(--brand-primary))]/10 rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgb(var(--brand-primary))]/10 rounded-full text-sm font-medium text-[rgb(var(--brand-primary))] mb-4">
              <CheckCircle2 className="w-4 h-4" />
              <span>Available for new projects</span>
            </div>
            
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[rgb(var(--brand-text))] tracking-tight text-balance leading-[1.1]">
              Brand Identity That{' '}
              <span className="text-[rgb(var(--brand-primary))]">Converts</span>{' '}
              Customers
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-[rgb(var(--brand-secondary))]/80 max-w-3xl mx-auto text-pretty leading-relaxed">
              Professional design solutions that help startups build memorable brands and engaging websites that drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button 
                asChild 
                size="lg" 
                className="group bg-[rgb(var(--brand-accent))] hover:bg-[rgb(var(--brand-accent))]/90 text-white text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105"
              >
                <Link href="#portfolio" className="flex items-center gap-2">
                  View Portfolio
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-2 border-[rgb(var(--brand-primary))] text-[rgb(var(--brand-primary))] hover:bg-[rgb(var(--brand-primary))]/5 text-base px-8 py-6 rounded-xl transition-all hover:scale-105"
              >
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[rgb(var(--brand-primary))]/30 rounded-full p-1">
            <div className="w-1.5 h-3 bg-[rgb(var(--brand-primary))] rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 bg-[rgb(var(--brand-primary))]/10 rounded-full text-sm font-semibold text-[rgb(var(--brand-primary))] mb-2">
                About Me
              </div>
              
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[rgb(var(--brand-text))] tracking-tight text-balance leading-tight">
                Transforming Startup Visions Into{' '}
                <span className="text-[rgb(var(--brand-primary))]">Market-Ready</span>{' '}
                Brands
              </h2>
              
              <p className="text-lg text-[rgb(var(--brand-secondary))]/70 leading-relaxed text-pretty">
                I'm Jane Designer, a creative professional specializing in brand identity and web design for ambitious startups. With a focus on strategic design that drives business results, I help emerging companies establish their market presence through cohesive visual identity and user-centered web experiences.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="space-y-2 group cursor-default">
                  <div className="font-heading text-4xl sm:text-5xl font-bold text-[rgb(var(--brand-primary))] group-hover:scale-110 transition-transform">
                    50+
                  </div>
                  <div className="text-sm text-[rgb(var(--brand-secondary))]/70 font-medium leading-tight">
                    Startups Launched
                  </div>
                </div>
                <div className="space-y-2 group cursor-default">
                  <div className="font-heading text-4xl sm:text-5xl font-bold text-[rgb(var(--brand-primary))] group-hover:scale-110 transition-transform">
                    3x
                  </div>
                  <div className="text-sm text-[rgb(var(--brand-secondary))]/70 font-medium leading-tight">
                    Average Brand Recognition Increase
                  </div>
                </div>
                <div className="space-y-2 group cursor-default">
                  <div className="font-heading text-4xl sm:text-5xl font-bold text-[rgb(var(--brand-primary))] group-hover:scale-110 transition-transform">
                    48hr
                  </div>
                  <div className="text-sm text-[rgb(var(--brand-secondary))]/70 font-medium leading-tight">
                    Average Project Turnaround
                  </div>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-[rgb(var(--brand-primary))]/20 to-[rgb(var(--brand-accent))]/20 rounded-3xl blur-2xl" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0JTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MHwwfHx8MTc3MTg4MTU0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Jane Designer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-white via-indigo-50/30 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[rgb(var(--brand-primary))]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[rgb(var(--brand-accent))]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-[rgb(var(--brand-primary))]/10 rounded-full text-sm font-semibold text-[rgb(var(--brand-primary))] mb-6">
              Services
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[rgb(var(--brand-text))] mb-6 tracking-tight text-balance leading-tight">
              Design Services That Drive{' '}
              <span className="text-[rgb(var(--brand-primary))]">Business Growth</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="group border-2 border-transparent hover:border-[rgb(var(--brand-primary))]/30 transition-all duration-500 hover:shadow-2xl bg-white overflow-hidden relative hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-primary))]/0 to-[rgb(var(--brand-primary))]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-8 space-y-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[rgb(var(--brand-primary))]/10 to-[rgb(var(--brand-primary))]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Palette className="w-8 h-8 text-[rgb(var(--brand-primary))]" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[rgb(var(--brand-text))]">
                  Brand Identity Design
                </h3>
                <p className="text-[rgb(var(--brand-secondary))]/70 leading-relaxed">
                  Complete visual identity systems including logos, color palettes, typography, and brand guidelines that establish market credibility.
                </p>
                <ul className="space-y-3 pt-2">
                  {['Logo Design', 'Brand Guidelines', 'Color Systems', 'Typography Selection'].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-[rgb(var(--brand-secondary))]/80">
                      <div className="w-5 h-5 rounded-full bg-[rgb(var(--brand-primary))]/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-[rgb(var(--brand-primary))]" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="group border-2 border-transparent hover:border-[rgb(var(--brand-primary))]/30 transition-all duration-500 hover:shadow-2xl bg-white overflow-hidden relative hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-primary))]/0 to-[rgb(var(--brand-primary))]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-8 space-y-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[rgb(var(--brand-primary))]/10 to-[rgb(var(--brand-primary))]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Monitor className="w-8 h-8 text-[rgb(var(--brand-primary))]" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[rgb(var(--brand-text))]">
                  Web Design & Development
                </h3>
                <p className="text-[rgb(var(--brand-secondary))]/70 leading-relaxed">
                  Responsive, conversion-focused websites that showcase your brand and engage customers across all devices.
                </p>
                <ul className="space-y-3 pt-2">
                  {['Responsive Design', 'User Experience', 'Mobile Optimization', 'Performance Focus'].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-[rgb(var(--brand-secondary))]/80">
                      <div className="w-5 h-5 rounded-full bg-[rgb(var(--brand-primary))]/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-[rgb(var(--brand-primary))]" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="group border-2 border-transparent hover:border-[rgb(var(--brand-primary))]/30 transition-all duration-500 hover:shadow-2xl bg-white overflow-hidden relative hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-primary))]/0 to-[rgb(var(--brand-primary))]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-8 space-y-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[rgb(var(--brand-primary))]/10 to-[rgb(var(--brand-primary))]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Briefcase className="w-8 h-8 text-[rgb(var(--brand-primary))]" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[rgb(var(--brand-text))]">
                  Startup Brand Packages
                </h3>
                <p className="text-[rgb(var(--brand-secondary))]/70 leading-relaxed">
                  Comprehensive branding solutions designed specifically for startups ready to make their market debut.
                </p>
                <ul className="space-y-3 pt-2">
                  {['Complete Brand Kit', 'Website Design', 'Marketing Materials', 'Launch Support'].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-[rgb(var(--brand-secondary))]/80">
                      <div className="w-5 h-5 rounded-full bg-[rgb(var(--brand-primary))]/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-[rgb(var(--brand-primary))]" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-[rgb(var(--brand-primary))]/10 rounded-full text-sm font-semibold text-[rgb(var(--brand-primary))] mb-6">
              Portfolio
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[rgb(var(--brand-text))] mb-6 tracking-tight text-balance leading-tight">
              Recent Projects That Delivered{' '}
              <span className="text-[rgb(var(--brand-primary))]">Results</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <Card className="group border-2 border-transparent hover:border-[rgb(var(--brand-primary))]/30 transition-all duration-500 hover:shadow-2xl overflow-hidden bg-white hover:-translate-y-1">
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl transform group-hover:scale-95 transition-transform duration-500" />
                </div>
              </div>
              <CardContent className="p-8 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-bold text-[rgb(var(--brand-text))] group-hover:text-[rgb(var(--brand-primary))] transition-colors">
                    TechFlow Startup
                  </h3>
                  <p className="text-sm text-[rgb(var(--brand-primary))] font-semibold">
                    Brand Identity & Web Design
                  </p>
                </div>
                <p className="text-[rgb(var(--brand-secondary))]/70 leading-relaxed">
                  Complete rebrand and website redesign that increased user engagement by 240% and improved conversion rates.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Branding', 'Web Design', 'UX/UI'].map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-[rgb(var(--brand-primary))]/10 text-[rgb(var(--brand-primary))] hover:bg-[rgb(var(--brand-primary))]/20 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="group border-2 border-transparent hover:border-[rgb(var(--brand-primary))]/30 transition-all duration-500 hover:shadow-2xl overflow-hidden bg-white hover:-translate-y-1">
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl transform group-hover:scale-95 transition-transform duration-500" />
                </div>
              </div>
              <CardContent className="p-8 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-bold text-[rgb(var(--brand-text))] group-hover:text-[rgb(var(--brand-primary))] transition-colors">
                    GreenSpace Co.
                  </h3>
                  <p className="text-sm text-[rgb(var(--brand-primary))] font-semibold">
                    Brand Identity
                  </p>
                </div>
                <p className="text-[rgb(var(--brand-secondary))]/70 leading-relaxed">
                  Sustainable brand identity that helped secure $2M in Series A funding within 6 months of launch.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Logo Design', 'Brand Guidelines', 'Sustainability'].map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-[rgb(var(--brand-primary))]/10 text-[rgb(var(--brand-primary))] hover:bg-[rgb(var(--brand-primary))]/20 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="group border-2 border-transparent hover:border-[rgb(var(--brand-primary))]/30 transition-all duration-500 hover:shadow-2xl overflow-hidden bg-white hover:-translate-y-1">
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl transform group-hover:scale-95 transition-transform duration-500" />
                </div>
              </div>
              <CardContent className="p-8 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-bold text-[rgb(var(--brand-text))] group-hover:text-[rgb(var(--brand-primary))] transition-colors">
                    DataSync Solutions
                  </h3>
                  <p className="text-sm text-[rgb(var(--brand-primary))] font-semibold">
                    Web Design
                  </p>
                </div>
                <p className="text-[rgb(var(--brand-secondary))]/70 leading-relaxed">
                  B2B SaaS website redesign that generated 180% more qualified leads in the first quarter.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Web Design', 'B2B', 'Lead Generation'].map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-[rgb(var(--brand-primary))]/10 text-[rgb(var(--brand-primary))] hover:bg-[rgb(var(--brand-primary))]/20 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="group border-2 border-transparent hover:border-[rgb(var(--brand-primary))]/30 transition-all duration-500 hover:shadow-2xl overflow-hidden bg-white hover:-translate-y-1">
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-pink-500 via-rose-500 to-red-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl transform group-hover:scale-95 transition-transform duration-500" />
                </div>
              </div>
              <CardContent className="p-8 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-bold text-[rgb(var(--brand-text))] group-hover:text-[rgb(var(--brand-primary))] transition-colors">
                    Wellness Hub
                  </h3>
                  <p className="text-sm text-[rgb(var(--brand-primary))] font-semibold">
                    Complete Brand Package
                  </p>
                </div>
                <p className="text-[rgb(var(--brand-secondary))]/70 leading-relaxed">
                  End-to-end branding and digital presence for health tech startup, from concept to market launch.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Full Branding', 'Health Tech', 'Digital Strategy'].map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-[rgb(var(--brand-primary))]/10 text-[rgb(var(--brand-primary))] hover:bg-[rgb(var(--brand-primary))]/20 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-indigo-50/30 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[rgb(var(--brand-primary))]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[rgb(var(--brand-accent))]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-[rgb(var(--brand-primary))]/10 rounded-full text-sm font-semibold text-[rgb(var(--brand-primary))] mb-6">
              Process
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[rgb(var(--brand-text))] mb-6 tracking-tight text-balance leading-tight">
              Proven Design Process for{' '}
              <span className="text-[rgb(var(--brand-primary))]">Startup Success</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {[
              {
                number: '01',
                title: 'Discovery & Strategy',
                description: 'Deep dive into your business goals, target audience, and competitive landscape to inform design decisions.'
              },
              {
                number: '02',
                title: 'Concept Development',
                description: 'Create initial design concepts and prototypes that align with your brand strategy and business objectives.'
              },
              {
                number: '03',
                title: 'Design & Refinement',
                description: 'Develop comprehensive design solutions with iterative feedback and refinement for optimal results.'
              },
              {
                number: '04',
                title: 'Launch & Support',
                description: 'Deliver final assets and provide ongoing support to ensure successful implementation and market launch.'
              }
            ].map((step, index) => (
              <div key={step.number} className="relative space-y-4 group">
                {/* Connection Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[rgb(var(--brand-primary))]/30 to-transparent" />
                )}
                
                <div className="relative">
                  <div className="font-heading text-7xl font-bold text-[rgb(var(--brand-primary))]/10 group-hover:text-[rgb(var(--brand-primary))]/20 transition-colors">
                    {step.number}
                  </div>
                  <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-[rgb(var(--brand-primary))]/10 flex items-center justify-center font-heading font-bold text-[rgb(var(--brand-primary))] group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="font-heading text-xl font-bold text-[rgb(var(--brand-text))] pt-2">
                  {step.title}
                </h3>
                <p className="text-[rgb(var(--brand-secondary))]/70 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-[rgb(var(--brand-primary))]/10 rounded-full text-sm font-semibold text-[rgb(var(--brand-primary))] mb-6">
              Testimonials
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[rgb(var(--brand-text))] mb-6 tracking-tight text-balance leading-tight">
              What Startup{' '}
              <span className="text-[rgb(var(--brand-primary))]">Founders</span>{' '}
              Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Jane's brand design was instrumental in our successful Series A funding. The professional identity she created gave investors confidence in our vision.",
                author: 'Sarah Chen',
                title: 'CEO, TechFlow Startup',
                rating: 5
              },
              {
                quote: 'The website Jane designed increased our conversion rate by 180%. Her understanding of user experience is exceptional.',
                author: 'Michael Rodriguez',
                title: 'Founder, DataSync Solutions',
                rating: 5
              },
              {
                quote: 'Working with Jane was seamless. She delivered exactly what we needed to launch with confidence and has been a trusted design partner since.',
                author: 'Emily Thompson',
                title: 'Co-founder, GreenSpace Co.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="group border-2 border-transparent hover:border-[rgb(var(--brand-primary))]/30 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <CardContent className="p-8 space-y-6">
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[rgb(var(--brand-accent))] text-[rgb(var(--brand-accent))]" />
                    ))}
                  </div>
                  <p className="text-[rgb(var(--brand-secondary))]/80 leading-relaxed text-pretty text-base">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="font-semibold text-[rgb(var(--brand-text))]">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-[rgb(var(--brand-secondary))]/60">
                      {testimonial.title}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[rgb(var(--brand-primary))] via-indigo-600 to-[rgb(var(--brand-primary))] relative overflow-hidden">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 border-2 border-white rounded-full" />
            <div className="absolute bottom-20 right-20 w-96 h-96 border-2 border-white rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white rounded-full" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight text-balance leading-tight">
              Ready to Build Your Brand?
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto text-pretty leading-relaxed">
              Let's discuss how professional design can accelerate your startup's growth and market success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button 
                asChild 
                size="lg" 
                className="group bg-[rgb(var(--brand-accent))] hover:bg-[rgb(var(--brand-accent))]/90 text-white text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105"
              >
                <Link href="mailto:jane@janedesigner.com" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 text-base px-8 py-6 rounded-xl transition-all hover:scale-105"
              >
                <Link href="#portfolio">View More Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[rgb(var(--brand-secondary))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="font-heading text-3xl font-bold text-white">
              Jane Designer
            </div>
            <p className="text-white/70 max-w-md mx-auto">
              Creative designer specializing in brand identity and web design for startups.
            </p>
            <div className="flex justify-center gap-6 pt-4">
              <Link 
                href="mailto:jane@janedesigner.com" 
                className="text-white/70 hover:text-white transition-colors text-sm font-medium"
              >
                Email
              </Link>
              <Link 
                href="#portfolio" 
                className="text-white/70 hover:text-white transition-colors text-sm font-medium"
              >
                Portfolio
              </Link>
              <Link 
                href="#services" 
                className="text-white/70 hover:text-white transition-colors text-sm font-medium"
              >
                Services
              </Link>
            </div>
            <div className="text-white/50 text-sm pt-8 border-t border-white/10">
              © {new Date().getFullYear()} Jane Designer. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
