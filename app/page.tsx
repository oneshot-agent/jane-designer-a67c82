import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Palette, Monitor, Rocket, Star, ArrowRight, Check } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FEFEFE]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FEFEFE]/80 backdrop-blur-md border-b border-[#F1F5F9]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-heading font-bold text-xl text-[#6366F1]">
              Jane Designer
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#about" className="text-[#1E293B] hover:text-[#6366F1] transition-colors text-sm font-medium">
                About
              </Link>
              <Link href="#services" className="text-[#1E293B] hover:text-[#6366F1] transition-colors text-sm font-medium">
                Services
              </Link>
              <Link href="#portfolio" className="text-[#1E293B] hover:text-[#6366F1] transition-colors text-sm font-medium">
                Portfolio
              </Link>
              <Link href="#testimonials" className="text-[#1E293B] hover:text-[#6366F1] transition-colors text-sm font-medium">
                Testimonials
              </Link>
              <Link href="#process" className="text-[#1E293B] hover:text-[#6366F1] transition-colors text-sm font-medium">
                Process
              </Link>
              <Button asChild className="bg-[#EC4899] hover:bg-[#EC4899]/90 text-white">
                <Link href="#contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 via-transparent to-[#EC4899]/5" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-[#1E293B] mb-6 text-balance leading-tight">
              Brands That Connect, Websites That Convert
            </h1>
            <p className="text-lg md:text-xl text-[#1E293B]/70 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              Transform your startup vision into powerful brand identity and web experiences that drive growth and customer engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-[#EC4899] hover:bg-[#EC4899]/90 text-white px-8 h-12 text-base">
                <Link href="#portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 mt-16">
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
              alt="Creative workspace with design tools"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-[#1E293B] mb-6 text-balance">
                Design That Drives Business Results
              </h2>
              <p className="text-base md:text-lg text-[#1E293B]/70 mb-8 leading-relaxed">
                I&apos;m Jane Designer, a creative professional specializing in brand identity and web design for startups. With 5+ years of experience, I&apos;ve helped over 50 emerging companies establish their visual presence and create digital experiences that convert visitors into customers. My approach combines strategic thinking with creative execution to deliver designs that not only look exceptional but also drive measurable business growth.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="font-heading font-bold text-3xl md:text-4xl text-[#6366F1] mb-2">50+</div>
                  <div className="text-sm text-[#1E293B]/60">Startups Launched</div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-bold text-3xl md:text-4xl text-[#6366F1] mb-2">300%</div>
                  <div className="text-sm text-[#1E293B]/60">Avg. Conversion Increase</div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-bold text-3xl md:text-4xl text-[#6366F1] mb-2">5+</div>
                  <div className="text-sm text-[#1E293B]/60">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=80"
                alt="Jane Designer working on creative projects"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-[#F1F5F9]/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-[#1E293B] mb-4 text-balance">
              Services That Scale Your Business
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="border-[#F1F5F9] bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-[#6366F1]/10 flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-[#6366F1]" />
                </div>
                <CardTitle className="font-heading text-xl text-[#1E293B]">Brand Identity Design</CardTitle>
                <CardDescription className="text-[#1E293B]/70 leading-relaxed">
                  Complete visual identity systems including logos, color palettes, typography, and brand guidelines that establish market presence.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-[#1E293B]/70">
                    <Check className="h-4 w-4 text-[#6366F1] mt-0.5 flex-shrink-0" />
                    <span>Logo Design</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#1E293B]/70">
                    <Check className="h-4 w-4 text-[#6366F1] mt-0.5 flex-shrink-0" />
                    <span>Brand Guidelines</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#1E293B]/70">
                    <Check className="h-4 w-4 text-[#6366F1] mt-0.5 flex-shrink-0" />
                    <span>Color Systems</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#1E293B]/70">
                    <Check className="h-4 w-4 text-[#6366F1] mt-0.5 flex-shrink-0" />
                    <span>Typography Selection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="border-[#F1F5F9] bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-[#6366F1]/10 flex items-center justify-center mb-4">
                  <Monitor className="h-6 w-6 text-[#6366F1]" />
                </div>
                <CardTitle className="font-heading text-xl text-[#1E293B]">Web Design & Development</CardTitle>
                <CardDescription className="text-[#1E293B]/70 leading-relaxed">
                  Responsive websites optimized for conversions, user experience, and search engines to maximize your online impact.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-[#1E293B]/70">
                    <Check className="h-4 w-4 text-[#6366F1] mt-0.5 flex-shrink-0" />
                    <span>Responsive Design</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#1E293B]/70">
                    <Check className="h-4 w-4 text-[#6366F1] mt-0.5 flex-shrink-0" />
                    <span>UX/UI Optimization</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#1E293B]/70">
                    <Check className="h-4 w-4 text-[#6366F1] mt-0.5 flex-shrink-0" />
                    <span>SEO Ready</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#1E293B]/70">
                    <Check className="h-4 w-4 text-[#6366F1] mt-0.5 flex-shrink-0" />
                    <span>Performance Focused</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="border-[#F1F5F9] bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-[#EC4899]/10 flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-[#EC4899]" />
                </div>
                <CardTitle className="font-heading text-xl text-[#1E293B]">Startup Package</CardTitle>
                <CardDescription className="text-[#1E293B]/70 leading-relaxed">
                  Comprehensive design solution combining brand identity and website development perfect for launching new ventures.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-[#1E293B]/70">
                    <Check className="h-4 w-4 text-[#EC4899] mt-0.5 flex-shrink-0" />
                    <span>Complete Brand Kit</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#1E293B]/70">
                    <Check className="h-4 w-4 text-[#EC4899] mt-0.5 flex-shrink-0" />
                    <span>Custom Website</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#1E293B]/70">
                    <Check className="h-4 w-4 text-[#EC4899] mt-0.5 flex-shrink-0" />
                    <span>30-Day Support</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#1E293B]/70">
                    <Check className="h-4 w-4 text-[#EC4899] mt-0.5 flex-shrink-0" />
                    <span>Launch Strategy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-[#1E293B] mb-4 text-balance">
              Recent Work That Delivers Results
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <Card className="border-[#F1F5F9] bg-[#F1F5F9]/30 hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBtb2NrdXBzJTIwYnJhbmQlMjBpZGVudGl0eSUyMHdlYiUyMGRlc2lnbiUyMHByb2plY3RzfGVufDB8MHx8fDE3NzE4Mzc4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="TechFlow Startup project"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary" className="bg-[#6366F1]/10 text-[#6366F1] hover:bg-[#6366F1]/20">SaaS</Badge>
                  <Badge variant="secondary" className="bg-[#6366F1]/10 text-[#6366F1] hover:bg-[#6366F1]/20">B2B</Badge>
                  <Badge variant="secondary" className="bg-[#6366F1]/10 text-[#6366F1] hover:bg-[#6366F1]/20">Technology</Badge>
                </div>
                <CardTitle className="font-heading text-2xl text-[#1E293B]">TechFlow Startup</CardTitle>
                <CardDescription className="text-sm text-[#1E293B]/60 font-medium mb-2">Brand Identity + Web Design</CardDescription>
                <p className="text-[#1E293B]/70 leading-relaxed">
                  Complete rebrand and website redesign resulted in 250% increase in lead generation within 3 months of launch.
                </p>
              </CardHeader>
            </Card>

            {/* Project 2 */}
            <Card className="border-[#F1F5F9] bg-[#F1F5F9]/30 hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBtb2NrdXBzJTIwYnJhbmQlMjBpZGVudGl0eSUyMHdlYiUyMGRlc2lnbiUyMHByb2plY3RzfGVufDB8MHx8fDE3NzE4Mzc4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="GreenLeaf Organics project"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary" className="bg-[#6366F1]/10 text-[#6366F1] hover:bg-[#6366F1]/20">E-commerce</Badge>
                  <Badge variant="secondary" className="bg-[#6366F1]/10 text-[#6366F1] hover:bg-[#6366F1]/20">Organic</Badge>
                  <Badge variant="secondary" className="bg-[#6366F1]/10 text-[#6366F1] hover:bg-[#6366F1]/20">Retail</Badge>
                </div>
                <CardTitle className="font-heading text-2xl text-[#1E293B]">GreenLeaf Organics</CardTitle>
                <CardDescription className="text-sm text-[#1E293B]/60 font-medium mb-2">E-commerce Design</CardDescription>
                <p className="text-[#1E293B]/70 leading-relaxed">
                  Brand refresh and online store design boosted conversion rates by 180% and reduced bounce rate by 45%.
                </p>
              </CardHeader>
            </Card>

            {/* Project 3 */}
            <Card className="border-[#F1F5F9] bg-[#F1F5F9]/30 hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBtb2NrdXBzJTIwYnJhbmQlMjBpZGVudGl0eSUyMHdlYiUyMGRlc2lnbiUyMHByb2plY3RzfGVufDB8MHx8fDE3NzE4Mzc4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="FinanceForward project"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary" className="bg-[#6366F1]/10 text-[#6366F1] hover:bg-[#6366F1]/20">FinTech</Badge>
                  <Badge variant="secondary" className="bg-[#6366F1]/10 text-[#6366F1] hover:bg-[#6366F1]/20">B2B</Badge>
                  <Badge variant="secondary" className="bg-[#6366F1]/10 text-[#6366F1] hover:bg-[#6366F1]/20">Professional</Badge>
                </div>
                <CardTitle className="font-heading text-2xl text-[#1E293B]">FinanceForward</CardTitle>
                <CardDescription className="text-sm text-[#1E293B]/60 font-medium mb-2">Brand Identity</CardDescription>
                <p className="text-[#1E293B]/70 leading-relaxed">
                  Professional brand identity design helped secure $2M in Series A funding within 6 months of brand launch.
                </p>
              </CardHeader>
            </Card>

            {/* Project 4 */}
            <Card className="border-[#F1F5F9] bg-[#F1F5F9]/30 hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBtb2NrdXBzJTIwYnJhbmQlMjBpZGVudGl0eSUyMHdlYiUyMGRlc2lnbiUyMHByb2plY3RzfGVufDB8MHx8fDE3NzE4Mzc4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="CreativeSpace Co. project"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary" className="bg-[#6366F1]/10 text-[#6366F1] hover:bg-[#6366F1]/20">Creative</Badge>
                  <Badge variant="secondary" className="bg-[#6366F1]/10 text-[#6366F1] hover:bg-[#6366F1]/20">Agency</Badge>
                  <Badge variant="secondary" className="bg-[#6366F1]/10 text-[#6366F1] hover:bg-[#6366F1]/20">Portfolio</Badge>
                </div>
                <CardTitle className="font-heading text-2xl text-[#1E293B]">CreativeSpace Co.</CardTitle>
                <CardDescription className="text-sm text-[#1E293B]/60 font-medium mb-2">Web Design</CardDescription>
                <p className="text-[#1E293B]/70 leading-relaxed">
                  Modern website design increased user engagement by 320% and improved client acquisition by 150%.
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-br from-[#6366F1]/5 to-[#EC4899]/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-[#1E293B] mb-4 text-balance">
              What Clients Say About Working Together
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="border-[#F1F5F9] bg-white">
              <CardHeader>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#EC4899] text-[#EC4899]" />
                  ))}
                </div>
                <p className="text-[#1E293B]/80 leading-relaxed mb-6">
                  &quot;Jane transformed our startup&apos;s entire visual presence. The new brand identity and website helped us close 40% more deals in our first quarter.&quot;
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#6366F1]/10 flex items-center justify-center">
                    <span className="font-heading font-semibold text-[#6366F1]">SC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1E293B]">Sarah Chen</div>
                    <div className="text-sm text-[#1E293B]/60">CEO, TechFlow Startup</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-[#F1F5F9] bg-white">
              <CardHeader>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#EC4899] text-[#EC4899]" />
                  ))}
                </div>
                <p className="text-[#1E293B]/80 leading-relaxed mb-6">
                  &quot;Professional, creative, and results-driven. Jane&apos;s design work directly contributed to our successful Series A funding round.&quot;
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#6366F1]/10 flex items-center justify-center">
                    <span className="font-heading font-semibold text-[#6366F1]">MR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1E293B]">Michael Rodriguez</div>
                    <div className="text-sm text-[#1E293B]/60">Founder, FinanceForward</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-[#F1F5F9] bg-white md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#EC4899] text-[#EC4899]" />
                  ))}
                </div>
                <p className="text-[#1E293B]/80 leading-relaxed mb-6">
                  &quot;The website Jane designed exceeded all expectations. Our conversion rate tripled, and client feedback has been overwhelmingly positive.&quot;
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#6366F1]/10 flex items-center justify-center">
                    <span className="font-heading font-semibold text-[#6366F1]">ET</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1E293B]">Emma Thompson</div>
                    <div className="text-sm text-[#1E293B]/60">Marketing Director, CreativeSpace Co.</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-[#1E293B] mb-4 text-balance">
              Proven Process, Predictable Results
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#6366F1]/80 flex items-center justify-center">
                    <span className="font-heading font-bold text-2xl text-white">01</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#1E293B] mb-2">Discovery & Strategy</h3>
                  <p className="text-[#1E293B]/70 leading-relaxed">
                    Deep dive into your business goals, target audience, and competitive landscape to create a strategic foundation.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#6366F1]/80 flex items-center justify-center">
                    <span className="font-heading font-bold text-2xl text-white">02</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#1E293B] mb-2">Design & Development</h3>
                  <p className="text-[#1E293B]/70 leading-relaxed">
                    Create compelling visual solutions with regular check-ins and revisions to ensure perfect alignment with your vision.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#6366F1]/80 flex items-center justify-center">
                    <span className="font-heading font-bold text-2xl text-white">03</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#1E293B] mb-2">Launch & Optimize</h3>
                  <p className="text-[#1E293B]/70 leading-relaxed">
                    Deploy your new brand and website with ongoing support to maximize performance and business impact.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1758613656529-e3f28f3b413a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwcm9jZXNzJTIwd29ya2Zsb3clMjBjcmVhdGl2ZSUyMHN0cmF0ZWd5fGVufDB8MHx8fDE3NzE4Mzc4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Design process and creative strategy"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-[#6366F1] to-[#6366F1]/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0tMTYgMGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMzIgMzJjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bS0xNiAwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0tMTYgMGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6 text-balance">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              Let&apos;s discuss how strategic design can accelerate your startup&apos;s growth and market presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-[#EC4899] hover:bg-[#EC4899]/90 text-white px-8 h-12 text-base shadow-xl">
                <Link href="mailto:jane@janedesigner.com">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#6366F1] px-8 h-12 text-base">
                <Link href="#portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
          <div className="mt-16 relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aW9uJTIwbWVldGluZyUyMGRlc2lnbiUyMGNvbnN1bHRhdGlvbiUyMHByb2Zlc3Npb25hbHxlbnwwfDB8fHwxNzcxODM3ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Collaboration and design consultation"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E293B] text-white py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="font-heading font-bold text-xl text-[#6366F1] mb-2">Jane Designer</div>
              <p className="text-white/70 text-sm">Creative designer specializing in brand identity and web design for startups.</p>
            </div>
            <div className="flex gap-6">
              <Link href="#about" className="text-white/70 hover:text-white transition-colors text-sm">
                About
              </Link>
              <Link href="#services" className="text-white/70 hover:text-white transition-colors text-sm">
                Services
              </Link>
              <Link href="#portfolio" className="text-white/70 hover:text-white transition-colors text-sm">
                Portfolio
              </Link>
              <Link href="#contact" className="text-white/70 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/50">
            © {new Date().getFullYear()} Jane Designer. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
