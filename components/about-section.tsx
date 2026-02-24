import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

const highlights = [
  'Strategic brand identity design',
  'Conversion-focused web design',
  'Data-driven design decisions',
  'Startup-specialized expertise',
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative background shape */}
            <div
              className="absolute -top-6 -left-6 w-full h-full rounded-2xl"
              style={{ backgroundColor: 'var(--indigo-50)' }}
              aria-hidden="true"
            />
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGRlc2lnbmVyJTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MHwwfHx8MTc3MTkxMTY1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Jane Designer working in a creative workspace"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-border"
              aria-hidden="true"
            >
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">
                Experience
              </p>
              <p
                className="font-heading text-3xl font-bold"
                style={{ color: 'var(--brand-primary)' }}
              >
                7+ Years
              </p>
              <p className="text-sm text-muted-foreground mt-0.5">In brand design</p>
            </div>
          </div>

          {/* Text Column */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ backgroundColor: 'var(--indigo-50)', color: 'var(--brand-primary)' }}>
              About Me
            </div>
            <h2
              id="about-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-balance text-foreground mb-6"
            >
              Transforming Ideas Into{' '}
              <span className="text-gradient">Iconic Brands</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              I&apos;m Jane Designer, a creative professional specializing in brand identity
              and web design for startups. With a focus on strategic design thinking, I help
              emerging companies establish strong visual foundations that resonate with their
              target audience and support business growth.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10">
              My approach combines creative excellence with data-driven insights to deliver
              designs that not only look exceptional but perform effectively in competitive
              markets.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10" role="list">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm sm:text-base text-foreground font-medium">
                  <CheckCircle2
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: 'var(--brand-primary)' }}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            {/* Divider stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                { value: '50+', label: 'Projects' },
                { value: '7+', label: 'Years exp.' },
                { value: '98%', label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-heading text-2xl sm:text-3xl font-bold mb-1"
                    style={{ color: 'var(--brand-primary)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">
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
