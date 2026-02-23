import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Palette, Monitor, Rocket, Star } from 'lucide-react'

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">
              Jane Designer
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#portfolio" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link href="#process" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Process
              </Link>
              <Link href="#testimonials" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Testimonials
              </Link>
              <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="mailto:jane@janedesigner.com">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 relative w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden ring-4 ring-accent/20">
              <Image
                src="https://images.unsplash.com/photo-1764737740462-2a310c7b2c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmZW1hbGUlMjBkZXNpZ25lciUyMHdvcmtzcGFjZSUyMGNyZWF0aXZlJTIwc3R1ZGlvJTIwYnJhbmRpbmclMjBtYXRlcmlhbHN8ZW58MHwwfHx8MTc3MTgyNjg0Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Jane Designer workspace"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 font-[family-name:var(--font-heading)] text-balance">
              Brand Identity That Drives Startup Success
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto text-balance leading-relaxed">
              Creative designer helping startups build memorable brands and high-converting websites that attract customers and investors.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link href="#portfolio">View My Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1514916726007-68847f06dd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGRlc2lnbmVyJTIwcG9ydHJhaXQlMjBzdHVkaW8lMjBsaWdodGluZ3xlbnwwfDB8fHwxNzcxODI2ODQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional designer portrait"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-heading)] text-balance">
                Transforming Startup Visions Into Powerful Brands
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                {'I\'m Jane Designer, a creative professional specializing in brand identity and web design for ambitious startups. With a focus on strategic design that drives business results, I help founders create compelling visual identities that resonate with their target audience and support their growth objectives.'}
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2 font-[family-name:var(--font-heading)]">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground">Startups Launched</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2 font-[family-name:var(--font-heading)]">
                    5 Years
                  </div>
                  <div className="text-sm text-muted-foreground">Design Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2 font-[family-name:var(--font-heading)]">
                    95%
                  </div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-heading)] text-balance">
              Design Services That Accelerate Growth
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Palette className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-[family-name:var(--font-heading)]">
                  Brand Identity Design
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Complete visual identity systems including logos, color palettes, typography, and brand guidelines that establish market credibility.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Logo Design
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Brand Guidelines
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Color Systems
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Typography Selection
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Monitor className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-[family-name:var(--font-heading)]">
                  Web Design & Development
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  High-converting websites optimized for user experience and business goals, from landing pages to full corporate sites.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Responsive Design
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    UX/UI Optimization
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Mobile-First Approach
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Performance Optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Rocket className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-[family-name:var(--font-heading)]">
                  Startup Brand Strategy
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Strategic brand positioning and visual storytelling that helps startups stand out in competitive markets.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Market Research
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Competitor Analysis
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Brand Positioning
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Visual Strategy
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-heading)] text-balance">
              Recent Projects That Delivered Results
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1763705857736-2b4f16a33758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwb3J0Zm9saW8lMjBtb2NrdXBzJTIwYnJhbmQlMjBpZGVudGl0eSUyMHdlYiUyMGRlc2lnbiUyMHN0YXJ0dXAlMjBwcm9qZWN0c3xlbnwwfDB8fHwxNzcxODI2ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Portfolio project mockup"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-secondary text-secondary-foreground">Brand Identity & Web Design</Badge>
                <CardTitle className="text-2xl font-[family-name:var(--font-heading)]">TechFlow SaaS Platform</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Complete rebrand and website redesign that increased conversion rates by 40% and secured Series A funding.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Brand Strategy</Badge>
                  <Badge variant="outline">Logo Design</Badge>
                  <Badge variant="outline">Web Design</Badge>
                  <Badge variant="outline">UX/UI</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1763705857736-2b4f16a33758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwb3J0Zm9saW8lMjBtb2NrdXBzJTIwYnJhbmQlMjBpZGVudGl0eSUyMHdlYiUyMGRlc2lnbiUyMHN0YXJ0dXAlMjBwcm9qZWN0c3xlbnwwfDB8fHwxNzcxODI2ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Portfolio project mockup"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-secondary text-secondary-foreground">Brand Identity</Badge>
                <CardTitle className="text-2xl font-[family-name:var(--font-heading)]">GreenStart Sustainability App</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Eco-friendly brand identity that helped secure 10K+ users in first month and partnership with major retailers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Visual Identity</Badge>
                  <Badge variant="outline">Brand Guidelines</Badge>
                  <Badge variant="outline">Marketing Materials</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1763705857736-2b4f16a33758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwb3J0Zm9saW8lMjBtb2NrdXBzJTIwYnJhbmQlMjBpZGVudGl0eSUyMHdlYiUyMGRlc2lnbiUyMHN0YXJ0dXAlMjBwcm9qZWN0c3xlbnwwfDB8fHwxNzcxODI2ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Portfolio project mockup"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-secondary text-secondary-foreground">Web Design</Badge>
                <CardTitle className="text-2xl font-[family-name:var(--font-heading)]">FinanceForward Startup</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Modern website design that improved user engagement by 60% and attracted key investor interest.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Responsive Design</Badge>
                  <Badge variant="outline">User Experience</Badge>
                  <Badge variant="outline">Performance Optimization</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1763705857736-2b4f16a33758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwb3J0Zm9saW8lMjBtb2NrdXBzJTIwYnJhbmQlMjBpZGVudGl0eSUyMHdlYiUyMGRlc2lnbiUyMHN0YXJ0dXAlMjBwcm9qZWN0c3xlbnwwfDB8fHwxNzcxODI2ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Portfolio project mockup"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-secondary text-secondary-foreground">Complete Brand Package</Badge>
                <CardTitle className="text-2xl font-[family-name:var(--font-heading)]">HealthTech Innovation</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Full brand and web solution that supported successful product launch and $2M funding round.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Brand Strategy</Badge>
                  <Badge variant="outline">Web Development</Badge>
                  <Badge variant="outline">Marketing Design</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-heading)] text-balance">
              Strategic Design Process That Works
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="text-6xl font-bold text-accent/20 mb-4 font-[family-name:var(--font-heading)]">01</div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-heading)]">
                Discovery & Strategy
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {'Understanding your startup\'s vision, target market, and competitive landscape to inform design decisions.'}
              </p>
            </div>
            <div className="relative">
              <div className="text-6xl font-bold text-accent/20 mb-4 font-[family-name:var(--font-heading)]">02</div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-heading)]">
                Concept Development
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Creating initial design concepts and brand directions based on strategic insights and market research.
              </p>
            </div>
            <div className="relative">
              <div className="text-6xl font-bold text-accent/20 mb-4 font-[family-name:var(--font-heading)]">03</div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-heading)]">
                Design & Refinement
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Developing comprehensive design solutions with iterative feedback and refinement cycles.
              </p>
            </div>
            <div className="relative">
              <div className="text-6xl font-bold text-accent/20 mb-4 font-[family-name:var(--font-heading)]">04</div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-heading)]">
                Implementation & Launch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Delivering final assets and supporting successful launch with ongoing guidance and optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-heading)] text-balance">
              What Startup Founders Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardHeader>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <CardDescription className="text-base text-foreground leading-relaxed">
                  {'"Jane\'s brand identity work was instrumental in our Series A success. The professional, cohesive visual identity she created helped us gain investor confidence and stand out in a crowded market."'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-foreground">Sarah Chen</div>
                <div className="text-sm text-muted-foreground">CEO, TechFlow</div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <CardDescription className="text-base text-foreground leading-relaxed">
                  {'The website Jane designed converted 40% better than our previous site. Her understanding of startup needs and user psychology made all the difference in our growth trajectory.'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-foreground">Mike Rodriguez</div>
                <div className="text-sm text-muted-foreground">Founder, GreenStart</div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <CardDescription className="text-base text-foreground leading-relaxed">
                  Working with Jane felt like having a strategic partner, not just a designer. Her insights into our target market helped shape not just our brand, but our entire go-to-market strategy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-foreground">Emily Watson</div>
                <div className="text-sm text-muted-foreground">Co-founder, FinanceForward</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWV0aW5nJTIwc3RhcnR1cCUyMGNvbGxhYm9yYXRpb24lMjBkZXNpZ24lMjBjb25zdWx0YXRpb258ZW58MHwwfHx8MTc3MTgyNjg0NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Professional meeting collaboration"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 font-[family-name:var(--font-heading)] text-balance">
              {'Ready to Build Your Startup\'s Brand?'}
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto text-balance leading-relaxed">
              {'Let\'s create a visual identity and website that drives growth, attracts investors, and sets you apart from the competition.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link href="mailto:jane@janedesigner.com">Start Your Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground">
                <Link href="#portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-primary mb-2 font-[family-name:var(--font-heading)]">
                Jane Designer
              </div>
              <p className="text-sm text-muted-foreground">
                Creative designer specializing in brand identity and web design
              </p>
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
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 Jane Designer. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
