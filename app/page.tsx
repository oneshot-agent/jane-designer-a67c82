import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Palette, Monitor, Briefcase, ArrowRight, Check } from 'lucide-react'

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FAFBFF] via-[#F8F9FF] to-[#F0F1FF] py-20 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#6366F1]/10 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-heading text-5xl font-bold tracking-tight text-[#1E293B] sm:text-6xl lg:text-7xl text-balance">
                {'Transform Your Startup Into a '}
                <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                  {'Standout Brand'}
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#475569] sm:text-xl text-pretty">
                {'Strategic brand identity and web design that helps startups attract customers, secure funding, and scale faster.'}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center lg:justify-start">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-[#06FFA5] text-[#1E293B] hover:bg-[#05E094] font-semibold text-base h-12 px-8"
                >
                  <Link href="#portfolio">
                    {'View My Work'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="border-[#6366F1] text-[#6366F1] hover:bg-[#6366F1]/10 font-semibold text-base h-12 px-8"
                >
                  <Link href="#pricing">{'Get Started'}</Link>
                </Button>
              </div>
            </div>
            <div className="relative lg:h-[600px] h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
                alt="Creative workspace with design tools"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1758521232999-ddd90aa83765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmZW1hbGUlMjBkZXNpZ25lciUyMHBvcnRyYWl0JTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MHwwfHx8MTc3MTgzODMyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Jane Designer portrait"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                {"Hi, I'm Jane Designer"}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
                {"I'm a creative designer with 8+ years of experience helping startups build memorable brands that drive growth. I specialize in creating cohesive brand identities and conversion-focused websites that tell your story and connect with your audience. From early-stage concepts to market-ready designs, I partner with founders to bring their vision to life."}
              </p>
              <div className="mt-10 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="font-heading text-4xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                    {'150+'}
                  </div>
                  <div className="mt-2 text-sm font-medium text-muted-foreground">
                    {'Startups Launched'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-4xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                    {'2.5x'}
                  </div>
                  <div className="mt-2 text-sm font-medium text-muted-foreground">
                    {'Average Revenue Increase'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-4xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                    {'98%'}
                  </div>
                  <div className="mt-2 text-sm font-medium text-muted-foreground">
                    {'Client Satisfaction Rate'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              {'Services That Drive Startup Success'}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Brand Identity */}
            <Card className="border-2 hover:border-[#6366F1] transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="font-heading text-2xl">{'Brand Identity Design'}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {'Complete brand systems including logo, color palette, typography, and brand guidelines that differentiate your startup in the market.'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {['Logo Design', 'Brand Guidelines', 'Color Systems', 'Typography Selection'].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-[#06FFA5] flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Web Design */}
            <Card className="border-2 hover:border-[#6366F1] transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center mb-4">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="font-heading text-2xl">{'Web Design & Development'}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {'Conversion-optimized websites that showcase your product, build trust with investors, and turn visitors into customers.'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {['Responsive Design', 'User Experience', 'Landing Pages', 'E-commerce Integration'].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-[#06FFA5] flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Strategy */}
            <Card className="border-2 hover:border-[#6366F1] transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="font-heading text-2xl">{'Startup Branding Strategy'}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {'Strategic brand positioning and messaging that resonates with your target market and supports your growth goals.'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {['Market Research', 'Brand Positioning', 'Messaging Framework', 'Competitor Analysis'].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-[#06FFA5] flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              {'Recent Work That Delivered Results'}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {[
              {
                title: 'TechFlow - SaaS Platform',
                category: 'Brand Identity & Web Design',
                description: 'Complete rebrand and website redesign that increased user signups by 340% and helped secure $2M Series A funding.',
                tags: ['SaaS', 'B2B', 'Tech']
              },
              {
                title: 'GreenEats - Food Delivery App',
                category: 'Brand Identity & Mobile Design',
                description: 'Brand identity and app design for sustainable food delivery startup, leading to 50K downloads in first month.',
                tags: ['Mobile App', 'Food Tech', 'Sustainability']
              },
              {
                title: 'DataViz Pro - Analytics Tool',
                category: 'Web Design & UX',
                description: 'User-focused website redesign that improved conversion rates by 180% and reduced bounce rate by 45%.',
                tags: ['Analytics', 'B2B', 'SaaS']
              },
              {
                title: 'HealthTrack - Wellness Platform',
                category: 'Complete Brand System',
                description: 'End-to-end branding and digital presence for health tech startup, supporting successful product launch.',
                tags: ['Health Tech', 'B2C', 'Mobile']
              }
            ].map((project, index) => (
              <Card key={index} className="group overflow-hidden border-2 hover:border-[#6366F1] transition-all hover:shadow-xl">
                <div className="relative h-64 bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-heading text-3xl font-bold text-white">{project.title.split(' ')[0]}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm font-semibold text-[#6366F1]">
                    {project.category}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-muted">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              {'My Proven Design Process'}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {[
              {
                number: '01',
                title: 'Discovery & Strategy',
                description: 'Deep dive into your business goals, target audience, and competitive landscape to inform design decisions.'
              },
              {
                number: '02',
                title: 'Concept Development',
                description: 'Create multiple design concepts and directions, focusing on solutions that align with your brand strategy.'
              },
              {
                number: '03',
                title: 'Design & Refinement',
                description: 'Develop chosen concepts into polished designs with multiple revision rounds to ensure perfect execution.'
              },
              {
                number: '04',
                title: 'Launch & Support',
                description: 'Deliver final assets and provide ongoing support to ensure successful implementation and launch.'
              }
            ].map((step) => (
              <div key={step.number} className="relative">
                <div className="text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] mb-6">
                    <span className="font-heading text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              {'What Startup Founders Say'}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
            {[
              {
                quote: 'Jane transformed our startup from a great idea into a professional brand that investors take seriously. Her work directly contributed to our successful funding round.',
                author: 'Sarah Chen',
                title: 'CEO, TechFlow',
                company: 'Series A Funded'
              },
              {
                quote: 'The website Jane designed converted 3x better than our previous site. Her understanding of startup needs and user psychology is exceptional.',
                author: 'Mike Rodriguez',
                title: 'Founder, DataViz Pro',
                company: 'B2B SaaS'
              },
              {
                quote: "Working with Jane felt like having a co-founder who understood design. She didn't just make things look good—she helped us think strategically about our brand.",
                author: 'Emma Thompson',
                title: 'Co-founder, GreenEats',
                company: 'Food Tech Startup'
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-[#6366F1] transition-colors">
                <CardHeader>
                  <div className="mb-4">
                    <svg className="h-8 w-8 text-[#6366F1]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <CardDescription className="text-base leading-relaxed text-foreground">
                    {`"${testimonial.quote}"`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                      <span className="font-heading text-lg font-bold text-white">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                      <Badge variant="secondary" className="mt-1 text-xs bg-[#06FFA5]/10 text-[#059669] border-[#06FFA5]/20">
                        {testimonial.company}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              {'Investment Options for Every Stage'}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
            {[
              {
                name: 'Brand Essentials',
                price: '$3,500',
                duration: '2-3 weeks',
                description: 'Perfect for early-stage startups needing core brand identity',
                features: [
                  'Logo design & variations',
                  'Color palette & typography',
                  'Basic brand guidelines',
                  'Business card design',
                  '2 revision rounds'
                ],
                cta: 'Get Started',
                popular: false
              },
              {
                name: 'Complete Brand System',
                price: '$7,500',
                duration: '4-6 weeks',
                description: 'Comprehensive branding for startups ready to scale',
                features: [
                  'Everything in Brand Essentials',
                  'Comprehensive brand guidelines',
                  'Marketing collateral templates',
                  'Social media assets',
                  'Brand strategy consultation',
                  '3 revision rounds'
                ],
                cta: 'Most Popular',
                popular: true
              },
              {
                name: 'Brand + Website',
                price: '$12,500',
                duration: '6-8 weeks',
                description: 'Complete digital presence for market-ready startups',
                features: [
                  'Everything in Complete Brand System',
                  'Custom website design',
                  'Responsive development',
                  'SEO optimization',
                  'Analytics setup',
                  '1 month post-launch support'
                ],
                cta: 'Get Started',
                popular: false
              }
            ].map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative overflow-hidden ${plan.popular ? 'border-[#6366F1] border-2 shadow-xl scale-105' : 'border-2'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-4 py-1 text-xs font-semibold rounded-bl-lg">
                    {'MOST POPULAR'}
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="font-heading text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="font-heading text-5xl font-bold text-foreground">{plan.price}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">{plan.duration}</div>
                  <CardDescription className="text-sm leading-relaxed">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#06FFA5] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    size="lg" 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#5558E3] hover:to-[#7C4FE8] text-white' : 'bg-[#06FFA5] text-[#1E293B] hover:bg-[#05E094]'} font-semibold`}
                  >
                    <Link href="mailto:jane@janedesigner.com">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-[#6366F1] via-[#7C6CF6] to-[#8B5CF6]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#8B5CF6]/30 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
                {'Ready to Build a Brand That Stands Out?'}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl text-pretty">
                {"Let's discuss your project and create a design strategy that drives your startup's success."}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center lg:justify-start">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-[#06FFA5] text-[#1E293B] hover:bg-[#05E094] font-semibold text-base h-12 px-8"
                >
                  <Link href="mailto:jane@janedesigner.com">
                    {'Start Your Project'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 font-semibold text-base h-12 px-8"
                >
                  <Link href="#portfolio">{'View Case Studies'}</Link>
                </Button>
              </div>
            </div>
            <div className="relative lg:h-[500px] h-[350px]">
              <Image
                src="https://images.unsplash.com/photo-1758873272540-439a105db676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwc3VjY2VzcyUyMGdyb3d0aCUyMGNvbGxhYm9yYXRpb24lMjBkZXNpZ24lMjBtZWV0aW5nfGVufDB8MHx8fDE3NzE4MzgzMjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Collaboration meeting"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E293B] py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <h3 className="font-heading text-2xl font-bold text-white">{'Jane Designer'}</h3>
              <p className="mt-1 text-sm text-white/70">{'Creative Designer for Startups'}</p>
            </div>
            <div className="flex gap-6">
              <Link href="#about" className="text-sm text-white/70 hover:text-white transition-colors">
                {'About'}
              </Link>
              <Link href="#services" className="text-sm text-white/70 hover:text-white transition-colors">
                {'Services'}
              </Link>
              <Link href="#portfolio" className="text-sm text-white/70 hover:text-white transition-colors">
                {'Portfolio'}
              </Link>
              <Link href="#pricing" className="text-sm text-white/70 hover:text-white transition-colors">
                {'Pricing'}
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-white/60">
              {'© 2026 Jane Designer. All rights reserved.'}
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
