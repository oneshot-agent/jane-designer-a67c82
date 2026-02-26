import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

const stats = [
  { number: '50+', label: 'Startups Launched' },
  { number: '5 Years', label: 'Design Experience' },
  { number: '98%', label: 'Client Satisfaction' },
]

const highlights = [
  'Strategic brand identity systems',
  'Conversion-focused web design',
  'Startup-specific design packages',
  'Data-driven design decisions',
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[#FEFEFE]"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image col */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-[#6366F1]/10">
              <Image
                src="https://images.unsplash.com/photo-1764737740462-2a310c7b2c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGZlbWFsZSUyMGRlc2lnbmVyJTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MHwwfHx8MTc3MjEzNDE1NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Jane Designer in her creative workspace"
                width={1080}
                height={720}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-5 shadow-xl ring-1 ring-border hidden md:block">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-2">
                Trusted by
              </p>
              <p className="font-serif font-bold text-2xl text-[#6366F1]">50+</p>
              <p className="text-sm text-[#1E293B] font-medium">Growing Startups</p>
            </div>
            {/* Geometric accent */}
            <div
              className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#E0E7FF] -z-10"
              aria-hidden="true"
            />
          </div>

          {/* Content col */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0E7FF] text-[#6366F1] text-xs font-semibold uppercase tracking-wider mb-6">
              About Me
            </div>

            <h2
              id="about-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] text-balance leading-tight mb-6"
            >
              Building Brands That Connect
            </h2>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              I&apos;m Jane Designer, a creative professional specializing in brand
              identity and web design for startups. With a focus on strategic design
              thinking, I help emerging companies establish their visual presence and
              create digital experiences that resonate with their target audience. My
              approach combines creativity with business strategy to deliver designs
              that not only look great but drive real results.
            </p>

            {/* Highlights */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10" role="list">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-[#1E293B]">
                  <CheckCircle2
                    className="w-4 h-4 text-[#6366F1] shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif font-bold text-2xl md:text-3xl text-[#6366F1]">
                    {stat.number}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
