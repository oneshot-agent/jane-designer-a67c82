import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Palette, Monitor, Rocket, Star } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                  Transforming Startups Through Strategic Design
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto lg:mx-0">
                  Brand identity and web design that converts visitors into customers and builds lasting connections.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg h-12 px-8">
                  <Link href="#portfolio">View My Work</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1664638413302-d1ca29ac885b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmZW1hbGUlMjBkZXNpZ25lciUyMHdvcmtzcGFjZSUyMG1vZGVybiUyMGNsZWFuJTIwYnJhbmRpbmclMjBtYXRlcmlhbHN8ZW58MHwwfHx8MTc3MTgyNjgzOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional designer workspace with modern branding materials"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Image */}
            <div className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
                alt="Creative design process"
                fill
                className="object-cover"
              />
            </div>

            {/* About Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
                  Design That Drives Business Growth
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {"I'm Jane Designer, a creative professional who specializes in crafting compelling brand identities and conversion-focused websites for ambitious startups. With a strategic approach to design, I help emerging businesses establish credible market presence and connect authentically with their target audience."}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="space-y-1">
                  <div className="font-serif text-3xl md:text-4xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Startups Launched</div>
                </div>
                <div className="space-y-1">
                  <div className="font-serif text-3xl md:text-4xl font-bold text-primary">2.5x</div>
                  <div className="text-sm text-muted-foreground">Average Conversion Increase</div>
                </div>
                <div className="space-y-1">
                  <div className="font-serif text-3xl md:text-4xl font-bold text-primary">48hr</div>
                  <div className="text-sm text-muted-foreground">Initial Concept Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
              Services That Accelerate Your Success
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Palette className="w-7 h-7 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl font-bold">Brand Identity Design</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Complete visual identity systems including logo design, color palettes, typography, and brand guidelines that establish market credibility.
                  </p>
                </div>
                <ul className="space-y-2">
                  {['Logo & Mark Design', 'Brand Style Guide', 'Business Card Design', 'Social Media Assets'].map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Monitor className="w-7 h-7 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl font-bold">Web Design & Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Conversion-optimized websites that showcase your brand professionally and turn visitors into customers through strategic design.
                  </p>
                </div>
                <ul className="space-y-2">
                  {['Responsive Web Design', 'User Experience Optimization', 'Mobile-First Approach', 'SEO-Ready Structure'].map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Rocket className="w-7 h-7 text-accent" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl font-bold">Startup Package</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive design solution combining brand identity and web presence, perfect for new businesses launching to market.
                  </p>
                </div>
                <ul className="space-y-2">
                  {['Complete Brand System', 'Professional Website', 'Marketing Materials', '3 Months Support'].map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
              Recent Projects That Delivered Results
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
                <Image
                  src="https://images.unsplash.com/photo-1763705857736-2b4f16a33758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwb3J0Zm9saW8lMjBtb2NrdXBzJTIwYnJhbmQlMjBpZGVudGl0eSUyMHdlYiUyMGRlc2lnbiUyMHN0YXJ0dXAlMjBwcm9qZWN0c3xlbnwwfDB8fHwxNzcxODI2ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="TechFlow Startup project"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold">TechFlow Startup</h3>
                  <p className="text-sm text-muted-foreground">Brand Identity & Web Design</p>
                  <p className="text-sm leading-relaxed">
                    Complete rebrand and website redesign that increased user engagement by 180% and generated 40% more qualified leads.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Branding', 'Web Design', 'B2B'].map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-primary/20">
                <Image
                  src="https://images.unsplash.com/photo-1763705857736-2b4f16a33758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwb3J0Zm9saW8lMjBtb2NrdXBzJTIwYnJhbmQlMjBpZGVudGl0eSUyMHdlYiUyMGRlc2lnbiUyMHN0YXJ0dXAlMjBwcm9qZWN0c3xlbnwwfDB8fHwxNzcxODI2ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="GreenSpace App project"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold">GreenSpace App</h3>
                  <p className="text-sm text-muted-foreground">Brand Identity</p>
                  <p className="text-sm leading-relaxed">
                    Sustainable brand identity for eco-tech startup that helped secure $2M in Series A funding within 6 months.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Logo Design', 'Brand Guidelines', 'Sustainability'].map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/40">
                <Image
                  src="https://images.unsplash.com/photo-1763705857736-2b4f16a33758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwb3J0Zm9saW8lMjBtb2NrdXBzJTIwYnJhbmQlMjBpZGVudGl0eSUyMHdlYiUyMGRlc2lnbiUyMHN0YXJ0dXAlMjBwcm9qZWN0c3xlbnwwfDB8fHwxNzcxODI2ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="DataSync Platform project"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold">DataSync Platform</h3>
                  <p className="text-sm text-muted-foreground">Web Design</p>
                  <p className="text-sm leading-relaxed">
                    SaaS website redesign focusing on conversion optimization, resulting in 65% increase in trial signups.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Web Design', 'SaaS', 'Conversion Optimization'].map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-secondary/40">
                <Image
                  src="https://images.unsplash.com/photo-1763705857736-2b4f16a33758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwb3J0Zm9saW8lMjBtb2NrdXBzJTIwYnJhbmQlMjBpZGVudGl0eSUyMHdlYiUyMGRlc2lnbiUyMHN0YXJ0dXAlMjBwcm9qZWN0c3xlbnwwfDB8fHwxNzcxODI2ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Wellness Co. Rebrand project"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold">Wellness Co. Rebrand</h3>
                  <p className="text-sm text-muted-foreground">Brand Identity & Web Design</p>
                  <p className="text-sm leading-relaxed">
                    End-to-end brand transformation and digital presence for health startup entering competitive market.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Rebranding', 'Healthcare', 'Digital Strategy'].map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
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
      <section id="process" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
              A Proven Process That Delivers Results
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Discovery & Strategy',
                description: 'Deep dive into your business goals, target audience, and competitive landscape to create a strategic foundation.'
              },
              {
                number: '02',
                title: 'Concept Development',
                description: 'Create initial design concepts and brand directions based on strategic insights and market positioning.'
              },
              {
                number: '03',
                title: 'Design & Refinement',
                description: 'Develop comprehensive design solutions with iterative feedback cycles to ensure perfect market fit.'
              },
              {
                number: '04',
                title: 'Launch & Support',
                description: 'Deliver final assets with implementation support and ongoing guidance for successful market launch.'
              }
            ].map((step) => (
              <div key={step.number} className="space-y-4">
                <div className="font-serif text-5xl font-bold text-primary/20">
                  {step.number}
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
              What Startup Founders Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Jane's design work was instrumental in helping us secure our Series A funding. The brand identity she created perfectly captured our vision and resonated with investors.",
                author: 'Sarah Chen',
                title: 'CEO, TechFlow Startup',
                rating: 5
              },
              {
                quote: 'Working with Jane was seamless. She delivered a website that not only looks amazing but actually converts visitors into customers. Our trial signups increased by 65%.',
                author: 'Michael Rodriguez',
                title: 'Founder, DataSync Platform',
                rating: 5
              },
              {
                quote: "Jane understood our startup's unique challenges and created a brand that stands out in a crowded market. Professional, creative, and results-driven.",
                author: 'Emma Thompson',
                title: 'Co-founder, GreenSpace App',
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed italic">
                  {`"${testimonial.quote}"`}
                </p>
                <div className="pt-4 border-t">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary via-primary to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
              {"Ready to Transform Your Startup's Design?"}
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed text-pretty">
              {"Let's create a brand identity and website that drives growth and connects with your audience."}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 text-lg h-12 px-8">
              <Link href="mailto:jane@janedesigner.com">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg h-12 px-8">
              <Link href="#portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="font-serif font-bold text-foreground text-lg">Jane Designer</div>
            <div>© 2026 Jane Designer. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </main>
  )
}
