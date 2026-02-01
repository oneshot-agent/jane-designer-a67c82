'use client'

import React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Monitor, Zap, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-serif text-xl font-bold text-foreground">
              Jane Designer
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="#portfolio" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Portfolio
              </Link>
              <Link href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Testimonials
              </Link>
              <Button asChild className="bg-[#06D6A0] text-[#1E293B] hover:bg-[#05c292]">
                <Link href="#contact">{"Let's Talk"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
                Transform Your Startup Into a Memorable Brand
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
                Creative designer crafting distinctive brand identities and conversion-focused websites that help startups stand out and grow.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="bg-[#06D6A0] text-[#1E293B] hover:bg-[#05c292] text-base font-semibold px-8">
                  <Link href="#portfolio">View My Work</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base font-semibold px-8 bg-transparent">
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1659141170537-6e0aa70329a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwd29ya3NwYWNlJTIwYnJhbmQlMjBpZGVudGl0eSUyMG1vY2t1cHN8ZW58MHwwfHx8MTc2OTk3MDE3NXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Creative designer workspace with brand identity mockups"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0JTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MHwwfHx8MTc2OTg5OTE2OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional designer portrait in creative workspace"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                  Building Brands That Connect and Convert
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {"I'm Jane Designer, a creative professional specializing in brand identity and web design for ambitious startups. With a focus on strategic design thinking, I help emerging businesses establish their visual presence and create meaningful connections with their target audience. My approach combines aesthetic excellence with business objectives to deliver designs that not only look exceptional but drive real results."}
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="font-serif text-3xl md:text-4xl font-bold text-[#6366F1] mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Startups Launched</div>
                  </div>
                  <div>
                    <div className="font-serif text-3xl md:text-4xl font-bold text-[#8B5CF6] mb-2">5 Years</div>
                    <div className="text-sm text-muted-foreground">Design Experience</div>
                  </div>
                  <div>
                    <div className="font-serif text-3xl md:text-4xl font-bold text-[#06D6A0] mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Design Solutions That Drive Growth
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#6366F1]/30">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Palette className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Brand Identity Design
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {"Complete visual identity systems including logos, color palettes, typography, and brand guidelines that establish your startup's unique market position."}
                  </p>
                  <ul className="space-y-2">
                    {['Logo Design', 'Brand Guidelines', 'Color Systems', 'Typography Selection'].map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#8B5CF6]/30">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Monitor className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Web Design & Development
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Conversion-optimized websites that showcase your brand beautifully while driving user engagement and business growth.
                  </p>
                  <ul className="space-y-2">
                    {['Responsive Design', 'User Experience', 'Conversion Optimization', 'Content Strategy'].map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#06D6A0]/30">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-[#06D6A0] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="w-7 h-7 text-[#1E293B]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Brand Strategy Consulting
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Strategic guidance to help define your brand positioning, target audience, and visual direction for maximum market impact.
                  </p>
                  <ul className="space-y-2">
                    {['Brand Positioning', 'Competitor Analysis', 'Target Audience Research', 'Visual Strategy'].map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#06D6A0]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Recent Projects That Made an Impact
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'TechFlow Startup',
                category: 'Brand Identity & Web Design',
                description: 'Complete rebrand and website redesign that increased user engagement by 150% and conversion rates by 85%.',
                tags: ['Branding', 'Web Design', 'Strategy'],
                gradient: 'from-[#6366F1] to-[#8B5CF6]'
              },
              {
                title: 'GreenSpace App',
                category: 'Brand Identity',
                description: 'Sustainable tech startup brand identity that helped secure $2M in Series A funding within 6 months of launch.',
                tags: ['Logo Design', 'Brand Guidelines', 'Sustainability'],
                gradient: 'from-[#06D6A0] to-[#6366F1]'
              },
              {
                title: 'DataViz Platform',
                category: 'Web Design',
                description: 'SaaS platform redesign focused on user experience, resulting in 40% reduction in bounce rate and improved user retention.',
                tags: ['UX Design', 'SaaS', 'Data Visualization'],
                gradient: 'from-[#8B5CF6] to-[#06D6A0]'
              },
              {
                title: 'FinTech Startup',
                category: 'Complete Brand Package',
                description: 'End-to-end brand development and web presence for financial technology startup, from concept to market launch.',
                tags: ['FinTech', 'Complete Package', 'Market Launch'],
                gradient: 'from-[#6366F1] to-[#06D6A0]'
              }
            ].map((project, index) => (
              <FadeIn key={project.title} delay={index * 0.1}>
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-8">
                    <div className="text-sm font-medium text-[#6366F1] mb-2">{project.category}</div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                A Proven Process for Exceptional Results
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Discovery & Strategy',
                description: 'Deep dive into your business goals, target audience, and competitive landscape to inform design decisions.',
                color: '#6366F1'
              },
              {
                number: '02',
                title: 'Concept Development',
                description: 'Create initial design concepts and brand directions based on strategic insights and creative exploration.',
                color: '#8B5CF6'
              },
              {
                number: '03',
                title: 'Design & Refinement',
                description: 'Develop chosen concepts into polished designs with iterative feedback and refinement cycles.',
                color: '#06D6A0'
              },
              {
                number: '04',
                title: 'Delivery & Launch',
                description: 'Final asset delivery with comprehensive guidelines and support for successful brand implementation.',
                color: '#6366F1'
              }
            ].map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.1}>
                <div className="relative">
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent" />
                  )}
                  <div className="relative">
                    <div 
                      className="font-serif text-6xl font-bold mb-4 opacity-20"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                What Startup Founders Say
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                content: "Jane's brand design was instrumental in our successful Series A funding. Her strategic approach and creative execution helped us stand out in a crowded market.",
                author: 'Sarah Chen',
                title: 'CEO, TechFlow',
                rating: 5
              },
              {
                content: 'The website Jane designed converted 3x better than our previous site. Her understanding of user psychology and conversion optimization is exceptional.',
                author: 'Michael Rodriguez',
                title: 'Founder, DataViz Platform',
                rating: 5
              },
              {
                content: 'Professional, creative, and results-driven. Jane delivered a complete brand identity that perfectly captured our vision and resonated with our target market.',
                author: 'Emily Thompson',
                title: 'Co-founder, GreenSpace',
                rating: 5
              }
            ].map((testimonial, index) => (
              <FadeIn key={testimonial.author} delay={index * 0.1}>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#06D6A0] text-[#06D6A0]" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {testimonial.content}
                    </p>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-3xl p-12 md:p-16 shadow-2xl">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
                  Ready to Build Your Brand?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
                  {"Let's discuss how strategic design can accelerate your startup's growth and market success."}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-[#06D6A0] text-[#1E293B] hover:bg-[#05c292] text-base font-semibold px-8">
                    <a href="mailto:jane@janedesigner.com">Start Your Project</a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-base font-semibold px-8">
                    <Link href="#portfolio">View Portfolio</Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-serif text-xl font-bold text-foreground">
              Jane Designer
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Jane Designer. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Portfolio
              </Link>
              <Link href="mailto:jane@janedesigner.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Fade-in animation component
function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  )
}
