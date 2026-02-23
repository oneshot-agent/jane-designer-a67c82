import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Palette, Monitor, Rocket, Search, Lightbulb, Star, ArrowRight, CheckCircle2, Mail, Phone } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                Jane Designer
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link 
                href="#about" 
                className="text-sm font-medium text-[#1E293B] hover:text-[#6366F1] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6366F1] hover:after:w-full after:transition-all"
              >
                About
              </Link>
              <Link 
                href="#services" 
                className="text-sm font-medium text-[#1E293B] hover:text-[#6366F1] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6366F1] hover:after:w-full after:transition-all"
              >
                Services
              </Link>
              <Link 
                href="#portfolio" 
                className="text-sm font-medium text-[#1E293B] hover:text-[#6366F1] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6366F1] hover:after:w-full after:transition-all"
              >
                Portfolio
              </Link>
              <Link 
                href="#testimonials" 
                className="text-sm font-medium text-[#1E293B] hover:text-[#6366F1] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6366F1] hover:after:w-full after:transition-all"
              >
                Testimonials
              </Link>
              <Button asChild className="bg-[#F59E0B] hover:bg-[#D97706] text-white shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                <Link href="mailto:hello@janedesigner.com">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#FAFBFF] to-white relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-40 -left-20 w-96 h-96 bg-[#6366F1]/5 rounded-full blur-3xl" />
          <div className="absolute top-20 -right-20 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F59E0B]/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 max-w-5xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/20 px-4 py-2 text-sm font-medium hover:bg-[#6366F1]/15 transition-colors">
              Available for New Projects
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1E293B] mb-6 leading-tight tracking-tight text-balance">
              Transform Your Startup Into a{' '}
              <span className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#6366F1] bg-clip-text text-transparent">
                Memorable Brand
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-[#1E293B]/70 mb-10 max-w-3xl mx-auto leading-relaxed text-pretty">
              Creative designer crafting distinctive brand identities and web experiences that help startups stand out and scale.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-[#F59E0B] hover:bg-[#D97706] text-white text-base px-8 h-14 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 group min-w-[200px]"
              >
                <Link href="#portfolio" className="flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="text-base px-8 h-14 rounded-full border-2 border-[#6366F1]/30 text-[#6366F1] hover:bg-[#6366F1] hover:text-white hover:border-[#6366F1] transition-all hover:scale-105 min-w-[200px]"
              >
                <Link href="mailto:hello@janedesigner.com">Start a Project</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image - NO text overlay issues */}
          <div className="relative max-w-6xl mx-auto mt-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1764737740462-2a310c7b2c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHdvcmtzcGFjZSUyMGJyYW5kJTIwaWRlbnRpdHklMjBza2V0Y2hlc3xlbnwwfDB8fHwxNzcxODM4MzIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Designer workspace showcasing brand identity design process"
                width={1080}
                height={720}
                className="w-full h-auto"
                priority
              />
            </div>
            
            {/* Decorative floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#F59E0B] to-[#F59E0B]/80 rounded-2xl rotate-12 shadow-xl hidden lg:block" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#8B5CF6] to-[#8B5CF6]/80 rounded-2xl -rotate-6 shadow-xl hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-base text-[#1E293B]/70 font-medium">Startups Launched</div>
            </div>
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#F59E0B] bg-clip-text text-transparent mb-2">
                3x
              </div>
              <div className="text-base text-[#1E293B]/70 font-medium">Average Brand Recognition Increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#6366F1] bg-clip-text text-transparent mb-2">
                95%
              </div>
              <div className="text-base text-[#1E293B]/70 font-medium">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFBFF]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Badge variant="secondary" className="mb-6 bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/20">
                About Me
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1E293B] mb-6 leading-tight text-balance">
                Building Brands That{' '}
                <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                  Matter
                </span>
              </h2>
              <div className="space-y-5 text-lg text-[#1E293B]/70 leading-relaxed mb-10">
                <p>
                  I'm Jane Designer, a creative professional specializing in brand identity and web design for startups. With a focus on strategic design thinking, I help emerging companies establish their visual presence and connect authentically with their target audience.
                </p>
                <p>
                  My approach combines creative vision with business understanding to deliver designs that not only look exceptional but drive real results.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  'Strategic brand development',
                  'Custom web experiences',
                  'Results-driven design',
                  'Ongoing support & iteration'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-[#6366F1] flex-shrink-0" />
                    <span className="text-[#1E293B] font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="bg-[#6366F1] hover:bg-[#5558E3] text-white shadow-md hover:shadow-lg transition-all h-12 rounded-full">
                <Link href="mailto:hello@janedesigner.com" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </Link>
              </Button>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1764737740462-2a310c7b2c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGRlc2lnbmVyJTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MHwwfHx8MTc3MTgzODMyMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Creative workspace of Jane Designer"
                  width={1080}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#6366F1]/20 rounded-3xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#F59E0B]/20 rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/20">
              Services
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1E293B] mb-6 leading-tight text-balance">
              Services That{' '}
              <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                Accelerate Your Growth
              </span>
            </h2>
            <p className="text-lg text-[#1E293B]/70">
              Comprehensive design solutions tailored for startups ready to make their mark
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#6366F1]/20 hover:-translate-y-1">
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Palette className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-[#1E293B]">Brand Identity Design</CardTitle>
                <CardDescription className="text-base leading-relaxed text-[#1E293B]/70">
                  Complete brand systems including logo design, color palettes, typography, and brand guidelines that establish your unique market position.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {['Logo & Visual Identity', 'Brand Guidelines', 'Business Card Design', 'Marketing Collateral'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#1E293B]/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#8B5CF6]/20 hover:-translate-y-1">
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Monitor className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-[#1E293B]">Web Design & Development</CardTitle>
                <CardDescription className="text-base leading-relaxed text-[#1E293B]/70">
                  Custom websites that convert visitors into customers, optimized for user experience and designed to scale with your business.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {['Responsive Web Design', 'User Experience Optimization', 'E-commerce Solutions', 'Performance Optimization'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#1E293B]/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#F59E0B]/20 hover:-translate-y-1">
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-[#1E293B]">Startup Branding Packages</CardTitle>
                <CardDescription className="text-base leading-relaxed text-[#1E293B]/70">
                  Comprehensive branding solutions tailored for startups, combining brand identity and web presence in strategic packages.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {['Complete Brand System', 'Website Design', 'Social Media Templates', 'Launch Strategy'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#1E293B]/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFBFF]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/20">
              Portfolio
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1E293B] mb-6 leading-tight text-balance">
              Recent Work &{' '}
              <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-lg text-[#1E293B]/70">
              Real results from real clients – see how strategic design drives business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#6366F1]/20 bg-white">
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-[#6366F1]/5 to-[#8B5CF6]/5">
                <Image
                  src="https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBkZXNpZ24lMjBwcm9qZWN0cyUyMGJyYW5kJTIwaWRlbnRpdHklMjB3ZWIlMjBkZXNpZ24lMjBtb2NrdXBzfGVufDB8MHx8fDE3NzE4MzgzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="TechFlow brand identity and web design project"
                  width={1080}
                  height={720}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader className="space-y-3">
                <div>
                  <CardTitle className="text-2xl font-bold mb-1 text-[#1E293B]">TechFlow - SaaS Startup</CardTitle>
                  <CardDescription className="text-[#6366F1] font-semibold">
                    Brand Identity & Web Design
                  </CardDescription>
                </div>
                <p className="text-[#1E293B]/70 leading-relaxed">
                  Complete rebrand and website redesign that increased user engagement by <span className="font-bold text-[#6366F1]">180%</span> and conversion rates by <span className="font-bold text-[#6366F1]">65%</span>.
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-[#6366F1]/10 text-[#6366F1]">Branding</Badge>
                  <Badge variant="secondary" className="bg-[#8B5CF6]/10 text-[#8B5CF6]">Web Design</Badge>
                  <Badge variant="secondary" className="bg-[#F59E0B]/10 text-[#F59E0B]">SaaS</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#10B981]/20 bg-white">
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-[#10B981]/5 to-[#059669]/5">
                <Image
                  src="https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBkZXNpZ24lMjBwcm9qZWN0cyUyMGJyYW5kJTIwaWRlbnRpdHklMjB3ZWIlMjBkZXNpZ24lMjBtb2NrdXBzfGVufDB8MHx8fDE3NzE4MzgzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="GreenSpace sustainable living app brand identity"
                  width={1080}
                  height={720}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader className="space-y-3">
                <div>
                  <CardTitle className="text-2xl font-bold mb-1 text-[#1E293B]">GreenSpace - Sustainable Living App</CardTitle>
                  <CardDescription className="text-[#10B981] font-semibold">
                    Brand Identity
                  </CardDescription>
                </div>
                <p className="text-[#1E293B]/70 leading-relaxed">
                  Eco-friendly brand identity that helped secure <span className="font-bold text-[#10B981]">$2M in Series A funding</span> within 6 months of launch.
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-[#10B981]/10 text-[#10B981]">Branding</Badge>
                  <Badge variant="secondary" className="bg-[#8B5CF6]/10 text-[#8B5CF6]">App Design</Badge>
                  <Badge variant="secondary" className="bg-[#10B981]/10 text-[#10B981]">Sustainability</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#8B5CF6]/20 bg-white">
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-[#8B5CF6]/5 to-[#6366F1]/5">
                <Image
                  src="https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBkZXNpZ24lMjBwcm9qZWN0cyUyMGJyYW5kJTIwaWRlbnRpdHklMjB3ZWIlMjBkZXNpZ24lMjBtb2NrdXBzfGVufDB8MHx8fDE3NzE4MzgzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="DataSync analytics platform web design"
                  width={1080}
                  height={720}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader className="space-y-3">
                <div>
                  <CardTitle className="text-2xl font-bold mb-1 text-[#1E293B]">DataSync - Analytics Platform</CardTitle>
                  <CardDescription className="text-[#8B5CF6] font-semibold">
                    Web Design
                  </CardDescription>
                </div>
                <p className="text-[#1E293B]/70 leading-relaxed">
                  User-focused website design that reduced bounce rate by <span className="font-bold text-[#8B5CF6]">40%</span> and increased demo requests by <span className="font-bold text-[#8B5CF6]">120%</span>.
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-[#8B5CF6]/10 text-[#8B5CF6]">Web Design</Badge>
                  <Badge variant="secondary" className="bg-[#6366F1]/10 text-[#6366F1]">UX/UI</Badge>
                  <Badge variant="secondary" className="bg-[#8B5CF6]/10 text-[#8B5CF6]">Analytics</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#F59E0B]/20 bg-white">
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-[#F59E0B]/5 to-[#DC2626]/5">
                <Image
                  src="https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBkZXNpZ24lMjBwcm9qZWN0cyUyMGJyYW5kJTIwaWRlbnRpdHklMjB3ZWIlMjBkZXNpZ24lMjBtb2NrdXBzfGVufDB8MHx8fDE3NzE4MzgzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="LocalEats food delivery startup rebrand"
                  width={1080}
                  height={720}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader className="space-y-3">
                <div>
                  <CardTitle className="text-2xl font-bold mb-1 text-[#1E293B]">LocalEats - Food Delivery Startup</CardTitle>
                  <CardDescription className="text-[#F59E0B] font-semibold">
                    Complete Rebrand
                  </CardDescription>
                </div>
                <p className="text-[#1E293B]/70 leading-relaxed">
                  Full brand transformation including new identity, website, and app design that <span className="font-bold text-[#F59E0B]">tripled user acquisition</span>.
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-[#F59E0B]/10 text-[#F59E0B]">Branding</Badge>
                  <Badge variant="secondary" className="bg-[#6366F1]/10 text-[#6366F1]">Web Design</Badge>
                  <Badge variant="secondary" className="bg-[#F59E0B]/10 text-[#F59E0B]">Mobile App</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/20">
              Process
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1E293B] mb-6 leading-tight text-balance">
              My Design{' '}
              <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-lg text-[#1E293B]/70">
              A strategic approach that ensures your brand resonates with your audience and drives business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                icon: Search,
                title: 'Discovery & Strategy',
                description: 'Deep dive into your business goals, target audience, and competitive landscape to establish a solid foundation.',
                gradient: 'from-[#6366F1] to-[#8B5CF6]'
              },
              {
                number: '02',
                icon: Lightbulb,
                title: 'Concept Development',
                description: 'Create multiple design directions and concepts, exploring different approaches to achieve your objectives.',
                gradient: 'from-[#8B5CF6] to-[#F59E0B]'
              },
              {
                number: '03',
                icon: Palette,
                title: 'Design & Refinement',
                description: 'Develop chosen concepts into polished designs with iterative feedback and refinement cycles.',
                gradient: 'from-[#F59E0B] to-[#6366F1]'
              },
              {
                number: '04',
                icon: Rocket,
                title: 'Implementation & Launch',
                description: 'Deliver final assets and provide ongoing support to ensure successful implementation across all touchpoints.',
                gradient: 'from-[#6366F1] to-[#8B5CF6]'
              }
            ].map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="relative group">
                  <div className={`absolute top-0 left-0 text-[120px] font-bold opacity-[0.03] -z-10 leading-none`}>
                    {step.number}
                  </div>
                  <div className="pt-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1E293B] mb-3">{step.title}</h3>
                    <p className="text-[#1E293B]/70 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFBFF]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/20">
              Testimonials
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1E293B] mb-6 leading-tight text-balance">
              What{' '}
              <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-lg text-[#1E293B]/70">
              Real feedback from founders and leaders who've experienced the impact of strategic design
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Jane transformed our entire brand perception. The new identity she created helped us secure our Series A funding and establish credibility in the market.",
                author: "Sarah Chen",
                title: "CEO, TechFlow"
              },
              {
                quote: "Working with Jane was seamless. She understood our vision immediately and delivered a website that exceeds our expectations. Our conversion rates have never been higher.",
                author: "Michael Rodriguez",
                title: "Founder, DataSync"
              },
              {
                quote: "Jane's strategic approach to design is what sets her apart. She doesn't just make things look good – she creates designs that drive real business results.",
                author: "Emily Watson",
                title: "Marketing Director, GreenSpace"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="hover:shadow-2xl transition-all duration-300 bg-white border-2 hover:-translate-y-1">
                <CardHeader className="space-y-5">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <CardDescription className="text-base text-[#1E293B] leading-relaxed font-normal">
                    &ldquo;{testimonial.quote}&rdquo;
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-1">
                  <div className="font-bold text-[#1E293B]">{testimonial.author}</div>
                  <div className="text-sm text-[#1E293B]/70">{testimonial.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#6366F1] text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-balance">
            Ready to Build Your Brand?
          </h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed text-pretty">
            Let's discuss how strategic design can accelerate your startup's growth and help you stand out in the market.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white text-base px-8 h-14 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 min-w-[220px]"
            >
              <Link href="mailto:hello@janedesigner.com">Start Your Project</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 hover:border-white/60 text-base px-8 h-14 rounded-full backdrop-blur-sm min-w-[220px]"
            >
              <Link href="#portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1E293B] text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                  Jane Designer
                </span>
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Creative designer specializing in brand identity and web design for startups.
              </p>
              <Badge className="bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30">
                Available for Projects
              </Badge>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: 'About', href: '#about' },
                  { label: 'Services', href: '#services' },
                  { label: 'Portfolio', href: '#portfolio' },
                  { label: 'Testimonials', href: '#testimonials' }
                ].map((link, i) => (
                  <li key={i}>
                    <Link 
                      href={link.href} 
                      className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <Link 
                  href="mailto:hello@janedesigner.com" 
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">hello@janedesigner.com</span>
                </Link>
                <Button asChild className="bg-[#F59E0B] hover:bg-[#D97706] text-white w-full rounded-full h-12">
                  <Link href="mailto:hello@janedesigner.com">Send a Message</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} Jane Designer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
