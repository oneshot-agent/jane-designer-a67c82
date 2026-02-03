import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Palette, Monitor, Briefcase, Search, Lightbulb, Rocket, Star } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-heading text-xl font-bold text-[var(--brand-secondary)]">
            Jane Designer
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <Link href="#about" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
              Services
            </Link>
            <Link href="#portfolio" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
              Portfolio
            </Link>
            <Link href="#process" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
              Process
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
              Testimonials
            </Link>
            <Button asChild className="bg-[var(--brand-accent)] text-[var(--brand-text)] hover:bg-[var(--brand-accent)]/90">
              <Link href="mailto:jane@janedesigner.com">Get in Touch</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b bg-gradient-to-b from-background to-muted/20 py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl font-bold tracking-tight text-[var(--brand-secondary)] sm:text-5xl lg:text-6xl text-balance">
                Transform Your Startup with Memorable Brand Design
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-foreground/80 text-pretty">
                Creative designer helping startups build powerful brand identities and websites that convert visitors into customers.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-[var(--brand-primary)] text-primary-foreground hover:bg-[var(--brand-primary)]/90">
                  <Link href="#portfolio">View My Work</Link>
                </Button>
              </div>
              <div className="mt-16 overflow-hidden rounded-xl border bg-card shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1622465911894-1e73cbdc293a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwd29ya3NwYWNlJTIwYnJhbmQlMjBpZGVudGl0eSUyMG1vY2t1cHN8ZW58MHwwfHx8MTc3MDExOTA2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Creative designer workspace with brand identity mockups"
                  width={1080}
                  height={720}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="border-b py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center">
                <h2 className="font-heading text-3xl font-bold tracking-tight text-[var(--brand-secondary)] sm:text-4xl text-balance">
                  Design That Drives Business Growth
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                  {"I'm Jane Designer, a creative professional specializing in brand identity and web design for startups. With a focus on strategic design thinking, I help emerging businesses establish strong visual foundations that resonate with their target audience and drive meaningful engagement. My approach combines creative excellence with business acumen to deliver designs that not only look exceptional but also perform."}
                </p>
                <div className="mt-10 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="font-heading text-3xl font-bold text-[var(--brand-primary)]">50+</div>
                    <div className="mt-1 text-sm text-foreground/70">Startups Launched</div>
                  </div>
                  <div className="text-center">
                    <div className="font-heading text-3xl font-bold text-[var(--brand-primary)]">95%</div>
                    <div className="mt-1 text-sm text-foreground/70">Client Retention Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="font-heading text-3xl font-bold text-[var(--brand-primary)]">3x</div>
                    <div className="mt-1 text-sm text-foreground/70">Average Conversion Boost</div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border bg-card shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0JTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MHwwfHx8MTc3MDExOTA2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional designer portrait in creative workspace"
                  width={1080}
                  height={1080}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="border-b bg-muted/20 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-[var(--brand-secondary)] sm:text-4xl text-balance">
                Comprehensive Design Solutions for Startups
              </h2>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Service 1 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--brand-primary)]/10">
                    <Palette className="h-6 w-6 text-[var(--brand-primary)]" />
                  </div>
                  <CardTitle className="font-heading text-xl">Brand Identity Design</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Complete brand packages including logo design, color palettes, typography, and brand guidelines that establish your unique market presence.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {['Logo Design', 'Brand Guidelines', 'Color Systems', 'Typography Selection'].map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground/70">
                        <div className="h-1.5 w-1.5 rounded-full bg-[var(--brand-accent)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Service 2 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--brand-primary)]/10">
                    <Monitor className="h-6 w-6 text-[var(--brand-primary)]" />
                  </div>
                  <CardTitle className="font-heading text-xl">Web Design & Development</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Responsive websites that convert visitors into customers, built with modern design principles and optimized for performance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {['Responsive Design', 'User Experience', 'Conversion Optimization', 'CMS Integration'].map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground/70">
                        <div className="h-1.5 w-1.5 rounded-full bg-[var(--brand-accent)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Service 3 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--brand-primary)]/10">
                    <Briefcase className="h-6 w-6 text-[var(--brand-primary)]" />
                  </div>
                  <CardTitle className="font-heading text-xl">Startup Brand Strategy</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Strategic brand positioning and visual identity development tailored specifically for emerging businesses and their growth goals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {['Market Research', 'Competitor Analysis', 'Brand Positioning', 'Growth Planning'].map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground/70">
                        <div className="h-1.5 w-1.5 rounded-full bg-[var(--brand-accent)]" />
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
        <section id="portfolio" className="border-b py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-[var(--brand-secondary)] sm:text-4xl text-balance">
                Recent Projects That Delivered Results
              </h2>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2">
              {/* Project 1 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-accent)]/10">
                  <Image
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
                    alt="TechFlow Startup project"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="mb-2 text-sm font-medium text-[var(--brand-primary)]">Brand Identity & Website</div>
                  <CardTitle className="font-heading text-2xl">TechFlow Startup</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Complete rebrand and website redesign that increased user engagement by 240% and conversion rates by 85%.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['Branding', 'Web Design', 'SaaS'].map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Project 2 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-accent)]/10">
                  <Image
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
                    alt="GreenSpace Co. project"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="mb-2 text-sm font-medium text-[var(--brand-primary)]">Brand Identity</div>
                  <CardTitle className="font-heading text-2xl">GreenSpace Co.</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Sustainable brand identity for eco-friendly startup, helping them secure $2M in Series A funding.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['Branding', 'Sustainability', 'Identity'].map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Project 3 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-accent)]/10">
                  <Image
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
                    alt="DataSync Platform project"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="mb-2 text-sm font-medium text-[var(--brand-primary)]">Web Design</div>
                  <CardTitle className="font-heading text-2xl">DataSync Platform</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Modern web platform design that improved user onboarding completion rates by 150%.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['Web Design', 'UX/UI', 'Platform'].map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Project 4 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-accent)]/10">
                  <Image
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
                    alt="HealthTech Innovations project"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="mb-2 text-sm font-medium text-[var(--brand-primary)]">Complete Brand Package</div>
                  <CardTitle className="font-heading text-2xl">HealthTech Innovations</CardTitle>
                  <CardDescription className="leading-relaxed">
                    End-to-end branding and digital presence for healthcare startup, leading to 300% increase in qualified leads.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['Branding', 'Healthcare', 'Digital'].map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">
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
        <section id="process" className="border-b bg-muted/20 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-[var(--brand-secondary)] sm:text-4xl text-balance">
                A Proven Process That Delivers Results
              </h2>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {/* Step 1 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand-primary)] text-primary-foreground shadow-lg">
                    <Search className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[var(--brand-secondary)]">Discovery & Strategy</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    Deep dive into your business goals, target audience, and competitive landscape to inform design decisions.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand-primary)] text-primary-foreground shadow-lg">
                    <Lightbulb className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[var(--brand-secondary)]">Concept Development</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    Create initial design concepts and strategic direction based on research insights and brand objectives.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand-primary)] text-primary-foreground shadow-lg">
                    <Palette className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[var(--brand-secondary)]">Design & Refinement</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    Develop comprehensive design solutions with iterative feedback cycles to ensure perfect alignment.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand-primary)] text-primary-foreground shadow-lg">
                    <Rocket className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[var(--brand-secondary)]">Launch & Support</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    Deliver final assets and provide ongoing support to ensure successful implementation and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="border-b py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-[var(--brand-secondary)] sm:text-4xl text-balance">
                What Startup Founders Say
              </h2>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Testimonial 1 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[var(--brand-accent)] text-[var(--brand-accent)]" />
                    ))}
                  </div>
                  <CardDescription className="leading-relaxed">
                    {"\"Jane's brand design completely transformed how our customers perceive us. We saw immediate improvements in engagement and our conversion rates doubled within the first month.\""}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-[var(--brand-secondary)]">Sarah Chen</div>
                  <div className="text-sm text-foreground/70">CEO, TechFlow Startup</div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[var(--brand-accent)] text-[var(--brand-accent)]" />
                    ))}
                  </div>
                  <CardDescription className="leading-relaxed">
                    {'"The brand identity Jane created helped us stand out in a crowded market. Her strategic approach to design thinking made all the difference in our Series A pitch."'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-[var(--brand-secondary)]">Marcus Rodriguez</div>
                  <div className="text-sm text-foreground/70">Founder, GreenSpace Co.</div>
                </CardContent>
              </Card>

              {/* Testimonial 3 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[var(--brand-accent)] text-[var(--brand-accent)]" />
                    ))}
                  </div>
                  <CardDescription className="leading-relaxed">
                    {'"Working with Jane was seamless. She understood our vision immediately and delivered designs that exceeded our expectations. Our user feedback has been incredible."'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-[var(--brand-secondary)]">Emily Watson</div>
                  <div className="text-sm text-foreground/70">CTO, DataSync Platform</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-b from-muted/20 to-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-[var(--brand-secondary)] sm:text-4xl text-balance">
                Ready to Transform Your Brand?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/80 text-pretty">
                {"Let's discuss how strategic design can accelerate your startup's growth and market presence."}
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-[var(--brand-accent)] text-[var(--brand-text)] hover:bg-[var(--brand-accent)]/90">
                  <Link href="mailto:jane@janedesigner.com">Start Your Project</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/10 bg-transparent">
                  <Link href="#portfolio">View Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="font-heading text-xl font-bold text-[var(--brand-secondary)]">Jane Designer</div>
            <div className="flex gap-6">
              <Link href="#about" className="text-sm text-foreground/70 transition-colors hover:text-foreground">
                About
              </Link>
              <Link href="#services" className="text-sm text-foreground/70 transition-colors hover:text-foreground">
                Services
              </Link>
              <Link href="#portfolio" className="text-sm text-foreground/70 transition-colors hover:text-foreground">
                Portfolio
              </Link>
              <Link href="mailto:jane@janedesigner.com" className="text-sm text-foreground/70 transition-colors hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-foreground/50">
            © {new Date().getFullYear()} Jane Designer. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
