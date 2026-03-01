import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'TechFlow Startup',
    category: 'Brand Identity + Web Design',
    description: 'Complete rebrand that increased customer inquiries by 300% in first month.',
    highlight: '+300% inquiries',
    highlightColor: 'var(--brand-primary)',
    size: 'large',
  },
  {
    title: 'GreenSpace Co',
    category: 'Brand Identity',
    description: 'Bold visual identity that helped secure $2M seed funding round.',
    highlight: '$2M raised',
    highlightColor: 'var(--brand-accent)',
    size: 'small',
  },
  {
    title: 'DataDash',
    category: 'Web Design',
    description: 'Landing page redesign that boosted conversion rates from 2% to 12%.',
    highlight: '2% → 12% CVR',
    highlightColor: 'var(--brand-secondary)',
    size: 'small',
  },
  {
    title: 'MindfulTech',
    category: 'Brand Identity + Web Design',
    description: 'Full brand launch that generated 500+ signups in first week.',
    highlight: '500+ signups',
    highlightColor: 'var(--brand-primary)',
    size: 'large',
  },
]

const gradients = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #06FFA5 0%, #00D9E8 100%)',
  'linear-gradient(135deg, #EC4899 0%, #F97316 100%)',
  'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
]

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-24 lg:py-32"
      style={{ backgroundColor: 'var(--surface-elevated)' }}
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--brand-primary)' }}
            >
              Portfolio
            </p>
            <h2
              id="portfolio-heading"
              className="font-heading font-bold text-4xl sm:text-5xl text-balance"
              style={{ color: 'var(--brand-text)' }}
            >
              Brands I&apos;ve{' '}
              <span className="gradient-text">Launched</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs leading-relaxed">
            Each project is built with one goal: results that move the needle for your startup.
          </p>
        </div>

        {/* Showcase image */}
        <div className="relative rounded-2xl overflow-hidden mb-10 shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1763705857736-2b4f16a33758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBzaG93Y2FzZSUyMGJyYW5kJTIwaWRlbnRpdHklMjB3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0c3xlbnwwfDB8fHwxNzcyMzMwMzI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Portfolio showcase — brand identity and web design projects"
            width={1080}
            height={480}
            className="w-full h-48 sm:h-64 lg:h-80 object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, transparent 40%, rgba(250,251,255,0.95) 100%)',
            }}
            aria-hidden="true"
          />
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 gap-6 space-y-6">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="card-hover break-inside-avoid rounded-2xl overflow-hidden bg-card border border-border group"
            >
              {/* Color swatch header */}
              <div
                className="h-32 sm:h-40 flex items-center justify-center p-8"
                style={{ background: gradients[i] }}
                aria-hidden="true"
              >
                <span className="font-heading font-bold text-2xl sm:text-3xl text-white/90 text-center">
                  {project.title}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span
                      className="inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2"
                      style={{
                        backgroundColor: 'var(--primary-light)',
                        color: 'var(--brand-primary)',
                      }}
                    >
                      {project.category}
                    </span>
                    <h3
                      className="font-heading font-bold text-lg"
                      style={{ color: 'var(--brand-text)' }}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0"
                    style={{ backgroundColor: 'var(--brand-primary)' }}
                    aria-hidden="true"
                  >
                    <ArrowUpRight size={14} className="text-white" />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div
                  className="inline-flex items-center gap-1.5 text-sm font-bold mt-1"
                  style={{ color: project.highlightColor }}
                >
                  <span>↑</span>
                  <span>{project.highlight}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
