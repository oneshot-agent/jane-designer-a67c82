import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Palette, Monitor, Rocket, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-heading text-xl font-bold text-foreground">
              Jane Designer
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Portfolio
              </Link>
              <Link href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Process
              </Link>
              <Button asChild className="bg-[rgb(var(--brand-accent))] hover:bg-[rgb(var(--brand-accent))]/90 text-white">
                <Link href="mailto:jane@janedesigner.com">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-primary))]/5 via-[rgb(var(--brand-secondary))]/5 to-transparent" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              Bold Brands That{' '}
              <span className="bg-gradient-to-r from-[rgb(var(--brand-primary))] to-[rgb(var(--brand-secondary))] bg-clip-text text-transparent">
                Disrupt Markets
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              I transform startup visions into powerful brand identities and digital experiences that command attention and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-[rgb(var(--brand-accent))] hover:bg-[rgb(var(--brand-accent))]/90 text-white px-8 h-12 text-base group"
              >
                <Link href="#portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            
            {/* Hero Image */}
            <div className="mt-12 relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1590102425712-1c28a0d6b85b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwd29ya3NwYWNlJTIwYm9sZCUyMGNvbG9ycyUyMGJyYW5kJTIwaWRlbnRpdHklMjBtb2NrdXBzfGVufDB8MHx8fDE3NzAxMTkwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Creative designer workspace with bold brand identity mockups"
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
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1758613654707-8bdab92f711d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmZW1hbGUlMjBkZXNpZ25lciUyMGNyZWF0aXZlJTIwc3R1ZGlvJTIwcG9ydHJhaXQlMjBjb25maWRlbnR8ZW58MHwwfHx8MTc3MDExOTAyMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional designer portrait in creative studio"
                width={1080}
                height={1080}
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground text-balance">
                Design That Demands{' '}
                <span className="text-[rgb(var(--brand-primary))]">Attention</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm Jane Designer, and I don't believe in playing it safe. For the past 5+ years, I've helped ambitious startups break through the noise with fearless brand identities and web designs that convert visitors into customers.
                </p>
                <p>
                  My work has launched 50+ brands and generated over $2M in client revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[rgb(var(--brand-primary))] to-[rgb(var(--brand-secondary))]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Startups Launched' },
              { number: '$2M+', label: 'Client Revenue Generated' },
              { number: '340%', label: 'Average Conversion Increase' },
              { number: '5', label: 'Years of Bold Design' },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="font-heading text-4xl sm:text-5xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-white/90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground text-balance">
              Services That Scale Your{' '}
              <span className="text-[rgb(var(--brand-secondary))]">Success</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: 'Brand Identity Design',
                description: 'Complete visual identity systems that make your startup unforgettable. Logo, colors, typography, and brand guidelines that scale with your growth.',
              },
              {
                icon: Monitor,
                title: 'Web Design & Development',
                description: 'High-converting websites that turn visitors into customers. Responsive, fast-loading, and optimized for maximum impact and user engagement.',
              },
              {
                icon: Rocket,
                title: 'Startup Brand Strategy',
                description: 'Strategic positioning and visual direction that helps you stand out in crowded markets. From concept to launch-ready brand systems.',
              },
            ].map((service, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-[rgb(var(--brand-primary))] transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[rgb(var(--brand-primary))] to-[rgb(var(--brand-secondary))] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground text-balance">
              Work That Wins{' '}
              <span className="text-[rgb(var(--brand-accent))]">Markets</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'TechFlow - SaaS Platform',
                category: 'Brand Identity + Web Design',
                description: 'Complete rebrand that increased user signups by 340% in 3 months',
              },
              {
                title: 'GreenStart - Sustainability App',
                category: 'Brand Identity',
                description: 'Bold visual identity that secured $1.2M seed funding',
              },
              {
                title: 'DataPulse - Analytics Tool',
                category: 'Web Design',
                description: 'Website redesign that improved conversion rates by 250%',
              },
              {
                title: 'FoodieLink - Restaurant Tech',
                category: 'Brand Identity + Web Design',
                description: 'Full brand launch that gained 10K users in first month',
              },
            ].map((project, index) => (
              <Card 
                key={index}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="p-8 space-y-3">
                    <div className="text-sm font-medium text-[rgb(var(--brand-primary))]">
                      {project.category}
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-[rgb(var(--brand-primary))] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Portfolio Showcase Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBzaG93Y2FzZSUyMGJyYW5kJTIwaWRlbnRpdHklMjBkZXNpZ25zJTIwd2ViJTIwZGVzaWduJTIwbW9ja3VwcyUyMHN0YXJ0dXAlMjBicmFuZGluZ3xlbnwwfDB8fHwxNzcwMTE5MDIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Portfolio showcase featuring brand identity designs and web design mockups"
              width={1080}
              height={720}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground text-balance">
              My Proven Design{' '}
              <span className="text-[rgb(var(--brand-primary))]">Process</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Strategy Deep Dive',
                description: 'We uncover your unique value proposition and competitive advantages to build an unshakeable foundation.',
              },
              {
                number: '02',
                title: 'Bold Concept Creation',
                description: "I develop fearless design concepts that capture attention and communicate your startup's disruptive potential.",
              },
              {
                number: '03',
                title: 'Iterative Refinement',
                description: 'Through collaborative feedback loops, we perfect every detail until your brand demands the attention it deserves.',
              },
              {
                number: '04',
                title: 'Launch & Scale',
                description: 'Complete delivery with all assets, guidelines, and ongoing support to ensure your brand grows with your success.',
              },
            ].map((step, index) => (
              <div key={index} className="space-y-4">
                <div className="font-heading text-6xl font-bold text-[rgb(var(--brand-primary))]/20">
                  {step.number}
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground text-balance">
              Founders Who Chose{' '}
              <span className="text-[rgb(var(--brand-secondary))]">Bold</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Jane didn't just design our brand - she gave us the confidence to compete with industry giants. Our brand now commands premium pricing.",
                author: 'Sarah Chen',
                title: 'CEO, TechFlow',
                avatar: 'SC',
              },
              {
                quote: 'The website Jane designed converts 3x better than our old one. Her bold approach perfectly captured our disruptive vision.',
                author: 'Marcus Rodriguez',
                title: 'Founder, DataPulse',
                avatar: 'MR',
              },
              {
                quote: "Jane's brand strategy helped us raise our Series A. Investors immediately understood our vision through her powerful visual identity.",
                author: 'Emily Thompson',
                title: 'Co-founder, GreenStart',
                avatar: 'ET',
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8 space-y-6">
                  <p className="text-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 bg-gradient-to-br from-[rgb(var(--brand-primary))] to-[rgb(var(--brand-secondary))]">
                      <AvatarFallback className="text-white font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background with Image Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1759735548261-26f670b5ee8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxib2xkJTIwY3JlYXRpdmUlMjBkZXNpZ24lMjBlbGVtZW50cyUyMGdlb21ldHJpYyUyMHNoYXBlcyUyMHZpYnJhbnQlMjBjb2xvcnN8ZW58MHwwfHx8MTc3MDExOTAyMXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Bold creative design elements with geometric shapes"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--brand-primary))]/95 to-[rgb(var(--brand-secondary))]/95" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance">
              Ready to Disrupt Your Market?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed text-pretty">
              Let's create a brand that commands attention and drives the growth your startup deserves. Bold moves start with bold design.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-[rgb(var(--brand-accent))] hover:bg-[rgb(var(--brand-accent))]/90 text-white px-8 h-12 text-base"
              >
                <Link href="mailto:jane@janedesigner.com">Start Your Project</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-[rgb(var(--brand-primary))] px-8 h-12 text-base bg-transparent"
              >
                <Link href="#portfolio">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="font-heading text-xl font-bold text-foreground mb-2">
                Jane Designer
              </div>
              <p className="text-sm text-muted-foreground">
                Creative designer specializing in brand identity and web design for startups.
              </p>
            </div>
            <div className="flex items-center gap-8">
              <Link 
                href="#about" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link 
                href="#services" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link 
                href="#portfolio" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfolio
              </Link>
              <Link 
                href="mailto:jane@janedesigner.com" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jane Designer. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
