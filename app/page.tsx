import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Palette, Monitor, Target, ArrowRight, Star } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--brand-background)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/10 via-transparent to-[var(--brand-secondary)]/10" />
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-8 inline-block rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] p-1">
              <div className="rounded-full bg-[var(--brand-background)] px-6 py-2">
                <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-sm font-bold text-transparent">
                  Jane Designer
                </span>
              </div>
            </div>
            <h1 className="mb-6 text-balance font-heading text-4xl font-bold leading-tight text-[var(--brand-text)] md:text-5xl lg:text-7xl">
              Brands That Demand Attention Start Here
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-pretty text-lg leading-relaxed text-[var(--brand-text)]/80 md:text-xl">
              Bold visual identities and cutting-edge web design that make startups impossible to ignore in crowded markets.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                asChild 
                size="lg" 
                className="group h-auto rounded-full bg-[var(--brand-accent)] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[var(--brand-accent)]/90 hover:shadow-lg hover:shadow-[var(--brand-accent)]/25"
              >
                <Link href="#portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="mt-16 overflow-hidden rounded-2xl border border-[var(--brand-primary)]/20 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1717079556888-c23cb91b450f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwd29ya3NwYWNlJTIwYm9sZCUyMGNvbG9yZnVsJTIwYnJhbmRpbmclMjBtYXRlcmlhbHN8ZW58MHwwfHx8MTc3MTgyNjUyMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Creative designer workspace with colorful branding materials"
                width={1080}
                height={720}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance font-heading text-3xl font-bold text-[var(--brand-text)] md:text-4xl lg:text-5xl">
              Design That Drives Results
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group border-2 border-[var(--brand-primary)]/10 bg-gradient-to-br from-[var(--brand-primary)]/5 to-transparent transition-all hover:border-[var(--brand-primary)]/30 hover:shadow-xl">
              <CardHeader>
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary)]/70 text-white transition-transform group-hover:scale-110">
                  <Palette className="h-8 w-8" />
                </div>
                <CardTitle className="font-heading text-2xl text-[var(--brand-text)]">Brand Identity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-[var(--brand-text)]/70">
                  Logo design, color systems, and brand guidelines that position your startup as an industry leader from day one.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group border-2 border-[var(--brand-secondary)]/10 bg-gradient-to-br from-[var(--brand-secondary)]/5 to-transparent transition-all hover:border-[var(--brand-secondary)]/30 hover:shadow-xl">
              <CardHeader>
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--brand-secondary)] to-[var(--brand-secondary)]/70 text-white transition-transform group-hover:scale-110">
                  <Monitor className="h-8 w-8" />
                </div>
                <CardTitle className="font-heading text-2xl text-[var(--brand-text)]">Web Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-[var(--brand-text)]/70">
                  High-converting websites that turn visitors into customers with bold visuals and seamless user experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group border-2 border-[var(--brand-accent)]/10 bg-gradient-to-br from-[var(--brand-accent)]/5 to-transparent transition-all hover:border-[var(--brand-accent)]/30 hover:shadow-xl md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--brand-accent)] to-[var(--brand-accent)]/70 text-white transition-transform group-hover:scale-110">
                  <Target className="h-8 w-8" />
                </div>
                <CardTitle className="font-heading text-2xl text-[var(--brand-text)]">Startup Positioning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-[var(--brand-text)]/70">
                  Strategic visual storytelling that helps new companies stand out and compete with established players.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-gradient-to-br from-[var(--brand-primary)]/5 via-transparent to-[var(--brand-secondary)]/5 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance font-heading text-3xl font-bold text-[var(--brand-text)] md:text-4xl lg:text-5xl">
              Startups I&apos;ve Transformed
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'TechFlow', category: 'SaaS Brand Identity', description: 'Complete rebrand increased user signups by 340% in 6 months', gradient: 'from-[var(--brand-primary)]' },
              { title: 'GreenStart', category: 'E-commerce Website', description: 'Bold redesign boosted conversion rates from 1.2% to 4.8%', gradient: 'from-[var(--brand-secondary)]' },
              { title: 'DataPulse', category: 'Brand & Web Package', description: 'New identity helped secure $2M Series A funding round', gradient: 'from-[var(--brand-accent)]' },
              { title: 'FitTech', category: 'Mobile App Design', description: 'App downloads increased 500% after visual overhaul', gradient: 'from-[var(--brand-primary)]' },
              { title: 'CloudSync', category: 'Website Redesign', description: 'Page views up 280%, bounce rate down 45%', gradient: 'from-[var(--brand-secondary)]' },
              { title: 'StartupLab', category: 'Complete Brand System', description: 'Brand recognition improved 65% in target market', gradient: 'from-[var(--brand-accent)]' },
            ].map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden border-2 border-transparent bg-white transition-all hover:border-[var(--brand-accent)]/30 hover:shadow-2xl"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} to-${project.gradient}/50 transition-transform group-hover:scale-105`}>
                  <div className="flex h-full items-center justify-center">
                    <span className="font-heading text-4xl font-bold text-white">{project.title}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-[var(--brand-text)]">{project.title}</CardTitle>
                  <CardDescription className="text-sm font-semibold text-[var(--brand-accent)]">
                    {project.category}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-[var(--brand-text)]/70">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance font-heading text-3xl font-bold text-[var(--brand-text)] md:text-4xl lg:text-5xl">
              What Startup Founders Say
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                quote: "Jane's bold approach transformed our brand from invisible to industry-leading. Our investor pitch deck got 3x more meetings.", 
                author: 'Sarah Chen', 
                title: 'CEO, TechFlow' 
              },
              { 
                quote: 'The website Jane designed converts like crazy. We went from struggling to get leads to having a waitlist.', 
                author: 'Mike Rodriguez', 
                title: 'Founder, GreenStart' 
              },
              { 
                quote: "Jane doesn't just design - she thinks strategically. Her work helped us stand out in a saturated market.", 
                author: 'Lisa Park', 
                title: 'CMO, DataPulse' 
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-2 border-[var(--brand-primary)]/10 bg-white">
                <CardHeader>
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[var(--brand-accent)] text-[var(--brand-accent)]" />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed text-[var(--brand-text)]">
                    &quot;{testimonial.quote}&quot;
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-l-4 border-[var(--brand-accent)] pl-4">
                    <p className="font-semibold text-[var(--brand-text)]">{testimonial.author}</p>
                    <p className="text-sm text-[var(--brand-text)]/60">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gradient-to-br from-[var(--brand-secondary)]/5 via-transparent to-[var(--brand-primary)]/5 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <h2 className="mb-6 text-balance font-heading text-3xl font-bold text-[var(--brand-text)] md:text-4xl lg:text-5xl">
                The Designer Behind Bold Brands
              </h2>
              <p className="mb-8 text-pretty leading-relaxed text-[var(--brand-text)]/80 md:text-lg">
                I specialize in creating fearless visual identities that make startups impossible to ignore. With 8+ years designing for fast-growth companies, I understand the unique challenges of building a brand from zero to industry disruptor. My approach combines strategic thinking with bold creativity - because in today&apos;s crowded market, safe design is the riskiest choice you can make.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: '150+', label: 'Startups Transformed' },
                  { number: '89%', label: 'Client Revenue Growth' },
                  { number: '24hr', label: 'Average Response Time' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-2 font-heading text-3xl font-bold text-[var(--brand-primary)] md:text-4xl">
                      {stat.number}
                    </div>
                    <div className="text-sm leading-tight text-[var(--brand-text)]/70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-2xl border-4 border-[var(--brand-primary)]/20 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNpZ24lMjB0b29sc3xlbnwwfDB8fHwxNzcxODI2NTIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Creative designer portrait in professional workspace with design tools"
                  width={1080}
                  height={1350}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance font-heading text-3xl font-bold text-[var(--brand-text)] md:text-4xl lg:text-5xl">
              How We Build Your Bold Brand
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                number: '01', 
                title: 'Strategy Deep-Dive', 
                description: 'Uncover your unique position and competitive advantages through intensive brand discovery sessions.' 
              },
              { 
                number: '02', 
                title: 'Bold Concept Creation', 
                description: "Develop fearless visual concepts that capture attention and communicate your startup's disruptive potential." 
              },
              { 
                number: '03', 
                title: 'Design & Refine', 
                description: 'Craft pixel-perfect designs with multiple revision rounds to ensure every detail drives results.' 
              },
              { 
                number: '04', 
                title: 'Launch & Dominate', 
                description: 'Deliver complete brand systems and websites ready to convert visitors into customers from day one.' 
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] font-heading text-3xl font-bold text-white shadow-lg">
                  {step.number}
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-[var(--brand-text)]">{step.title}</h3>
                <p className="leading-relaxed text-[var(--brand-text)]/70">{step.description}</p>
                {index < 3 && (
                  <div className="absolute right-0 top-10 hidden h-0.5 w-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] opacity-20 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-secondary)] to-[var(--brand-accent)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-balance font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Ready to Build a Brand That Dominates?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-white/90 md:text-xl">
              Join 150+ startups who chose bold design over boring. Let&apos;s create something impossible to ignore.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                asChild 
                size="lg" 
                className="group h-auto rounded-full bg-white px-8 py-4 text-base font-semibold text-[var(--brand-primary)] transition-all hover:bg-white/90 hover:shadow-2xl"
              >
                <Link href="mailto:jane@janedesigner.com">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="h-auto rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white hover:text-[var(--brand-primary)]"
              >
                <Link href="#portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--brand-text)]/10 bg-[var(--brand-background)] py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div className="font-heading text-2xl font-bold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
              Jane Designer
            </div>
            <p className="text-sm text-[var(--brand-text)]/60">
              © {new Date().getFullYear()} Jane Designer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
