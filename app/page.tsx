'use client'

import React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Monitor, Rocket, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}

// Hero Section
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAFBFF] via-[#F0F1FF] to-[#FAFBFF] px-4 py-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6366F1]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#06FFA5]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#6366F1]/20 shadow-sm">
              <div className="w-2 h-2 bg-[#06FFA5] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#2D1B69]">{'Available for New Projects'}</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#1E1B4B] leading-tight text-balance">
              {'Brands That Stand Out, Websites That Convert'}
            </h1>
            
            <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed text-pretty max-w-2xl mx-auto lg:mx-0">
              {'Professional designer helping startups build memorable identities and high-performing websites that drive growth.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-[#06FFA5] hover:bg-[#05E094] text-[#1E1B4B] font-semibold shadow-lg shadow-[#06FFA5]/25 hover:shadow-xl hover:shadow-[#06FFA5]/30 transition-all duration-300 hover:scale-105">
                <Link href="#portfolio">{'View My Work'}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-[#2D1B69] text-[#2D1B69] hover:bg-[#2D1B69] hover:text-white font-semibold transition-all duration-300 bg-transparent">
                <Link href="mailto:jane@janedesigner.com">{'Get In Touch'}</Link>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-[#2D1B69]/20 border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHdvcmtzcGFjZSUyMGNyZWF0aXZlJTIwc3R1ZGlvfGVufDB8MHx8fDE3Njk5NjU5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional designer workspace"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2D1B69]/20 to-transparent" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#06FFA5] rounded-2xl opacity-80 blur-xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-[#2D1B69]/10">
              <Image
                src="https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0JTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MHwwfHx8MTc2OTg5OTE2OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Jane Designer portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#6366F1] rounded-full opacity-60 blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1E1B4B] text-balance">
                {'Creating Design Solutions That Drive Results'}
              </h2>
              <p className="text-lg text-[#6B7280] leading-relaxed text-pretty">
                {"I'm Jane Designer, a creative professional specializing in brand identity and web design for ambitious startups. With a focus on strategic design thinking, I help emerging businesses establish strong visual foundations that resonate with their target audiences and support sustainable growth."}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <StatCard number="50+" label="Startups Launched" />
              <StatCard number="95%" label="Client Retention Rate" />
              <StatCard number="3x" label="Average ROI Increase" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center space-y-2 p-4 rounded-xl bg-gradient-to-br from-[#FAFBFF] to-white border border-[#6366F1]/10 hover:border-[#6366F1]/30 transition-all duration-300">
      <div className="font-serif text-3xl md:text-4xl font-bold text-[#2D1B69]">{number}</div>
      <div className="text-sm text-[#6B7280] leading-tight">{label}</div>
    </div>
  )
}

// Services Section
function ServicesSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[#2D1B69] via-[#3D2879] to-[#2D1B69] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#06FFA5] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6366F1] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white text-balance">
            {'Services That Transform Your Business'}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Palette className="w-10 h-10" />}
            title="Brand Identity Design"
            description="Complete visual identity systems including logos, color palettes, typography, and brand guidelines that establish market presence."
            features={['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Marketing Collateral']}
          />
          <ServiceCard
            icon={<Monitor className="w-10 h-10" />}
            title="Web Design & Development"
            description="High-converting websites that combine stunning visuals with seamless user experience to drive engagement and sales."
            features={['Responsive Design', 'User Experience', 'Conversion Optimization', 'CMS Integration']}
          />
          <ServiceCard
            icon={<Rocket className="w-10 h-10" />}
            title="Startup Branding Packages"
            description="Comprehensive branding solutions designed specifically for startups, from concept to market-ready brand presence."
            features={['Market Research', 'Competitor Analysis', 'Brand Strategy', 'Launch Support']}
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description, features }: { icon: React.ReactNode; title: string; description: string; features: string[] }) {
  return (
    <Card className="bg-white/95 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
      <CardContent className="p-8 space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#06FFA5] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="space-y-3">
          <h3 className="font-serif text-2xl font-bold text-[#1E1B4B]">{title}</h3>
          <p className="text-[#6B7280] leading-relaxed text-pretty">{description}</p>
        </div>
        <ul className="space-y-2 pt-4 border-t border-[#E5E7EB]">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-[#1E1B4B]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#06FFA5]" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

// Portfolio Section
function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 px-4 bg-[#FAFBFF]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1E1B4B] text-balance">
            {'Recent Projects That Delivered Results'}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="TechFlow Startup"
            category="Brand Identity & Web Design"
            description="Complete rebrand and website redesign resulting in 200% increase in lead generation within 3 months."
            tags={['Branding', 'Web Design', 'SaaS']}
            featured
          />
          <ProjectCard
            title="GreenSpace Co."
            category="Brand Identity"
            description="Sustainable brand identity that helped secure $2M in Series A funding through compelling visual storytelling."
            tags={['Branding', 'Sustainability', 'Identity']}
          />
          <ProjectCard
            title="DataSync Platform"
            category="Web Design"
            description="User-focused website redesign that improved conversion rates by 150% and reduced bounce rate by 40%."
            tags={['Web Design', 'UX/UI', 'Conversion']}
          />
          <ProjectCard
            title="FinTech Innovations"
            category="Complete Package"
            description="End-to-end branding and web presence for fintech startup, supporting successful product launch."
            tags={['Branding', 'Web Design', 'FinTech']}
          />
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, category, description, tags, featured }: { title: string; category: string; description: string; tags: string[]; featured?: boolean }) {
  return (
    <Card className={`group cursor-pointer border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${featured ? 'md:col-span-2 border-[#06FFA5]' : 'border-transparent hover:border-[#6366F1]/30'}`}>
      <CardContent className="p-8 space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <Badge variant="secondary" className="bg-[#6366F1]/10 text-[#2D1B69] hover:bg-[#6366F1]/20">
              {category}
            </Badge>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1E1B4B] group-hover:text-[#6366F1] transition-colors">
              {title}
            </h3>
          </div>
          {featured && (
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#06FFA5] flex items-center justify-center">
              <Star className="w-6 h-6 text-[#1E1B4B] fill-[#1E1B4B]" />
            </div>
          )}
        </div>
        
        <p className="text-[#6B7280] leading-relaxed text-pretty">{description}</p>
        
        <div className="flex flex-wrap gap-2 pt-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="border-[#2D1B69]/20 text-[#2D1B69]">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Process Section
function ProcessSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1E1B4B] text-balance">
            {'A Proven Process That Delivers Excellence'}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProcessStep
            number="01"
            title="Discovery & Strategy"
            description="Deep dive into your business goals, target audience, and competitive landscape to inform design decisions."
          />
          <ProcessStep
            number="02"
            title="Concept Development"
            description="Create multiple design concepts and iterations, ensuring alignment with your vision and market positioning."
          />
          <ProcessStep
            number="03"
            title="Design & Refinement"
            description="Develop final designs with attention to detail, incorporating feedback and ensuring brand consistency."
          />
          <ProcessStep
            number="04"
            title="Launch & Support"
            description="Seamless implementation with ongoing support to ensure your brand performs optimally in the market."
          />
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="relative group">
      <div className="space-y-4 p-6 rounded-2xl bg-gradient-to-br from-[#FAFBFF] to-white border border-[#E5E7EB] hover:border-[#6366F1]/50 transition-all duration-300 hover:shadow-lg">
        <div className="font-serif text-6xl font-bold bg-gradient-to-br from-[#6366F1] to-[#06FFA5] bg-clip-text text-transparent">
          {number}
        </div>
        <h3 className="font-serif text-xl font-bold text-[#1E1B4B]">{title}</h3>
        <p className="text-sm text-[#6B7280] leading-relaxed text-pretty">{description}</p>
      </div>
      
      {/* Connector line for desktop */}
      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#6366F1] to-transparent group-last:hidden" />
    </div>
  )
}

// Testimonials Section
function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const testimonials = [
    {
      quote: "Jane transformed our startup's entire visual presence. Her strategic approach to branding helped us secure funding and establish credibility in our market.",
      author: "Sarah Chen",
      title: "CEO, TechFlow Startup",
      rating: 5
    },
    {
      quote: "The website Jane designed exceeded all our expectations. Our conversion rates tripled within the first month of launch. Absolutely exceptional work.",
      author: "Michael Rodriguez",
      title: "Founder, DataSync Platform",
      rating: 5
    },
    {
      quote: "Professional, creative, and results-driven. Jane doesn't just create beautiful designs—she creates solutions that drive real business growth.",
      author: "Emma Thompson",
      title: "Co-founder, GreenSpace Co.",
      rating: 5
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[#6366F1] to-[#2D1B69] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#06FFA5] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white text-balance">
            {'What Clients Say About Working Together'}
          </h2>
        </div>

        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === activeIndex 
                  ? 'opacity-100 translate-x-0 relative' 
                  : 'opacity-0 absolute inset-0 pointer-events-none'
              }`}
            >
              <Card className="bg-white/95 backdrop-blur-sm border-none shadow-2xl">
                <CardContent className="p-8 md:p-12 space-y-8">
                  <div className="flex gap-1 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-[#06FFA5] text-[#06FFA5]" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl text-[#1E1B4B] leading-relaxed text-center text-balance font-medium">
                    {`"${testimonial.quote}"`}
                  </blockquote>
                  
                  <div className="text-center space-y-1">
                    <div className="font-serif text-lg font-bold text-[#2D1B69]">{testimonial.author}</div>
                    <div className="text-sm text-[#6B7280]">{testimonial.title}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-[#06FFA5] w-8' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 px-4 bg-[#FAFBFF] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E1B4B] text-balance">
              {'Ready to Transform Your Brand?'}
            </h2>
            <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed text-pretty">
              {"Let's discuss how strategic design can accelerate your startup's growth and market presence."}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-[#06FFA5] hover:bg-[#05E094] text-[#1E1B4B] font-semibold shadow-lg shadow-[#06FFA5]/25 hover:shadow-xl hover:shadow-[#06FFA5]/30 transition-all duration-300 hover:scale-105">
                <Link href="mailto:jane@janedesigner.com">{'Start Your Project'}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-[#2D1B69] text-[#2D1B69] hover:bg-[#2D1B69] hover:text-white font-semibold transition-all duration-300 bg-transparent">
                <Link href="#portfolio">{'View Portfolio'}</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-[#2D1B69]/20 border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1605606582211-088f336964ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdWx0YXRpb24lMjBkZXNpZ24lMjBtZWV0aW5nfGVufDB8MHx8fDE3Njk5NjU5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional consultation meeting"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#6366F1] rounded-2xl opacity-60 blur-2xl animate-pulse" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-[#E5E7EB]">
        <div className="container mx-auto max-w-7xl text-center text-sm text-[#6B7280]">
          <p>{'© 2024 Jane Designer. All rights reserved.'}</p>
        </div>
      </footer>
    </section>
  )
}
