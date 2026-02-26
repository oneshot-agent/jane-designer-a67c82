import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

const stats = [
  { number: '50+', label: 'Startups Launched' },
  { number: '5', label: 'Years Experience' },
  { number: '98%', label: 'Client Satisfaction' },
]

const highlights = [
  'Strategic brand positioning for market differentiation',
  'User-centered design process with measurable results',
  'Full-stack design from concept to launch',
  'Ongoing partnership beyond project delivery',
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-3xl opacity-20"
              style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
            />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1762343283948-7be03220f4e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGZlbWFsZSUyMGRlc2lnbmVyJTIwY29uZmlkZW50JTIwbW9kZXJufGVufDB8MHx8fDE3NzIxNDI1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Jane Designer — confident and approachable professional"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Stats floating card */}
            <div
              className="absolute -right-4 lg:-right-10 top-1/2 -translate-y-1/2 bg-background border border-border rounded-2xl p-6 shadow-xl flex flex-col gap-5"
              aria-label="Key statistics"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="font-heading font-bold text-3xl text-transparent bg-clip-text"
                    style={{ backgroundImage: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
                  >
                    {stat.number}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 whitespace-nowrap">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Text side */}
          <div className="flex flex-col gap-8 order-1 lg:order-2">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium w-fit">
                About Me
              </div>
              <h2
                id="about-heading"
                className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-balance text-foreground"
              >
                Transforming Ideas Into Powerful{' '}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
                >
                  Brand Experiences
                </span>
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m Jane Designer, a creative professional specializing in brand identity and web
              design for ambitious startups. With a passion for clean aesthetics and strategic
              thinking, I help emerging companies establish their visual presence and connect with
              their target audience through thoughtful design solutions.
            </p>

            <ul className="flex flex-col gap-3" aria-label="Key strengths">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 shrink-0"
                    style={{ color: '#6366F1' }}
                    aria-hidden="true"
                  />
                  <span className="text-foreground text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground">
                Brand Identity
              </span>
              <span className="px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground">
                Web Design
              </span>
              <span className="px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground">
                UX/UI Design
              </span>
              <span className="px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground">
                Figma
              </span>
              <span className="px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground">
                Webflow
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
