import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Palette, Monitor, Rocket, Star } from 'lucide-react'

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold font-heading text-foreground">
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
              <Link href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Testimonials
              </Link>
              <Button asChild className="bg-accent hover:bg-accent/90">
                <Link href="mailto:jane@janedesigner.com">{'Get in Touch'}</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground text-balance leading-tight">
                {'Brands That Connect, Websites That Convert'}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                {'I help startups build memorable brand identities and high-converting websites that drive growth from day one.'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#portfolio">{'View My Work'}</Link>
              </Button>
            </div>
            <div className="mt-12 relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1659141170537-6e0aa70329a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwd29ya3NwYWNlJTIwYnJhbmQlMjBpZGVudGl0eSUyMG1vY2t1cHN8ZW58MHwwfHx8MTc3MTU1Njc4OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Creative designer workspace with brand identity mockups"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground text-balance">
                {'Design That Drives Business Results'}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed">
                {"I'm Jane Designer, a creative professional who specializes in transforming startup visions into compelling brand identities and conversion-focused websites. With expertise in both visual design and user experience, I help emerging businesses establish their market presence and connect authentically with their target audience."}
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold font-heading text-primary">{'50+'}</div>
                  <div className="text-sm text-muted-foreground">{'Startups Launched'}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold font-heading text-primary">{'85%'}</div>
                  <div className="text-sm text-muted-foreground">{'Client Retention Rate'}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold font-heading text-primary">{'3x'}</div>
                  <div className="text-sm text-muted-foreground">{'Average Traffic Increase'}</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0JTIwY3JlYXRpdmUlMjBzdHVkaW98ZW58MHwwfHx8MTc3MTU1Njc5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional designer portrait in creative studio"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground text-balance">
              {'Services That Scale Your Business'}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-heading">{'Brand Identity Design'}</CardTitle>
                <CardDescription className="text-pretty">
                  {'Complete visual identity systems including logos, color palettes, typography, and brand guidelines that make your startup memorable.'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {'Logo Design'}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {'Brand Guidelines'}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {'Visual Identity'}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {'Marketing Materials'}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-heading">{'Web Design & Development'}</CardTitle>
                <CardDescription className="text-pretty">
                  {'Conversion-optimized websites that turn visitors into customers, built with modern design principles and startup growth in mind.'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {'Responsive Design'}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {'User Experience'}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {'Conversion Optimization'}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {'Content Management'}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-heading">{'Startup Brand Strategy'}</CardTitle>
                <CardDescription className="text-pretty">
                  {'Strategic brand positioning and visual communication that helps new businesses stand out in competitive markets.'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {'Market Research'}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {'Positioning Strategy'}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {'Competitive Analysis'}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {'Launch Planning'}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground text-balance">
              {'Recent Work That Delivers Results'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative aspect-[16/10] bg-gradient-to-br from-primary/20 to-accent/20">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
                  alt="TechFlow Startup project"
                  fill
                  className="object-cover opacity-50"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="font-heading">{'TechFlow Startup'}</CardTitle>
                    <CardDescription>{'Brand Identity & Web Design'}</CardDescription>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-pretty pt-2">
                  {'Complete rebrand and website redesign that increased lead generation by 240% in 6 months.'}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{'Branding'}</Badge>
                  <Badge variant="secondary">{'Web Design'}</Badge>
                  <Badge variant="secondary">{'SaaS'}</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative aspect-[16/10] bg-gradient-to-br from-accent/20 to-primary/20">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
                  alt="GreenSpace Co. project"
                  fill
                  className="object-cover opacity-50"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="font-heading">{'GreenSpace Co.'}</CardTitle>
                    <CardDescription>{'Brand Identity'}</CardDescription>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-pretty pt-2">
                  {'Sustainable brand identity for eco-friendly startup, helping secure $2M in Series A funding.'}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{'Branding'}</Badge>
                  <Badge variant="secondary">{'Sustainability'}</Badge>
                  <Badge variant="secondary">{'Identity'}</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative aspect-[16/10] bg-gradient-to-br from-primary/20 to-secondary/40">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
                  alt="DataSync Platform project"
                  fill
                  className="object-cover opacity-50"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="font-heading">{'DataSync Platform'}</CardTitle>
                    <CardDescription>{'Web Design'}</CardDescription>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-pretty pt-2">
                  {'User-centered website design that improved conversion rates by 180% and reduced bounce rate by 45%.'}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{'Web Design'}</Badge>
                  <Badge variant="secondary">{'UX/UI'}</Badge>
                  <Badge variant="secondary">{'B2B'}</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative aspect-[16/10] bg-gradient-to-br from-accent/20 to-secondary/40">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
                  alt="HealthTech Innovations project"
                  fill
                  className="object-cover opacity-50"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="font-heading">{'HealthTech Innovations'}</CardTitle>
                    <CardDescription>{'Brand Strategy & Design'}</CardDescription>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-pretty pt-2">
                  {'Strategic brand development for healthcare startup, establishing trust and credibility in regulated market.'}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{'Healthcare'}</Badge>
                  <Badge variant="secondary">{'Strategy'}</Badge>
                  <Badge variant="secondary">{'Compliance'}</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground text-balance">
              {'A Proven Process for Startup Success'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-5xl font-bold font-heading text-primary/20">{'01'}</div>
              <h3 className="text-xl font-bold font-heading text-foreground">{'Discovery & Strategy'}</h3>
              <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                {'Deep dive into your business goals, target audience, and competitive landscape to create a strategic foundation.'}
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold font-heading text-primary/20">{'02'}</div>
              <h3 className="text-xl font-bold font-heading text-foreground">{'Concept Development'}</h3>
              <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                {'Create initial design concepts and brand directions based on strategic insights and market research.'}
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold font-heading text-primary/20">{'03'}</div>
              <h3 className="text-xl font-bold font-heading text-foreground">{'Design & Refinement'}</h3>
              <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                {'Develop comprehensive design solutions with iterative feedback and refinement to ensure perfect alignment.'}
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold font-heading text-primary/20">{'04'}</div>
              <h3 className="text-xl font-bold font-heading text-foreground">{'Launch & Optimization'}</h3>
              <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                {'Deploy your new brand and website with ongoing support to ensure optimal performance and growth.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground text-balance">
              {'What Startup Founders Say'}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <CardDescription className="text-foreground text-base text-pretty leading-relaxed">
                  {"\"Jane transformed our startup's brand identity and website, helping us stand out in a crowded market. Our investor meetings became so much more compelling.\""}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">{'Sarah Chen'}</p>
                  <p className="text-sm text-muted-foreground">{'CEO, TechFlow Startup'}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <CardDescription className="text-foreground text-base text-pretty leading-relaxed">
                  {'\"The brand strategy and design work Jane delivered was instrumental in our Series A success. Professional, strategic, and absolutely beautiful work.\"'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">{'Michael Rodriguez'}</p>
                  <p className="text-sm text-muted-foreground">{'Founder, GreenSpace Co.'}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <CardDescription className="text-foreground text-base text-pretty leading-relaxed">
                  {"\"Our website conversion rate increased by 180% after Jane's redesign. She understands both design and business goals perfectly.\""}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">{'Emily Watson'}</p>
                  <p className="text-sm text-muted-foreground">{'CMO, DataSync Platform'}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground text-balance">
                {'Ready to Build Your Brand?'}
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                {"Let's create a brand identity and website that drives your startup's growth and success."}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="mailto:jane@janedesigner.com">{'Start Your Project'}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#portfolio">{'View Portfolio'}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-bold font-heading text-foreground text-lg">Jane Designer</p>
              <p className="text-sm text-muted-foreground">{'Creative Brand Identity & Web Design'}</p>
            </div>
            <div className="flex items-center gap-8">
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
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              {'© 2026 Jane Designer. All rights reserved.'}
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
