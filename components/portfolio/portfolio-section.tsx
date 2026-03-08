import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'TechFlow Startup',
    category: 'Brand Identity & Web Design',
    description:
      'Complete rebrand and website redesign that increased user engagement by 150% and conversion rates by 40%.',
    tags: ['Branding', 'Web Design', 'UX/UI'],
    result: '+150% Engagement',
    color: '#6366F1',
  },
  {
    title: 'GreenSpace Co.',
    category: 'Brand Identity',
    description:
      'Sustainable brand identity that helped secure $2M in Series A funding within 6 months of launch.',
    tags: ['Logo Design', 'Brand Strategy', 'Print Design'],
    result: '$2M Funding',
    color: '#8B5CF6',
  },
  {
    title: 'DataViz Pro',
    category: 'Web Design',
    description:
      'SaaS platform redesign that reduced bounce rate by 60% and improved user onboarding completion by 80%.',
    tags: ['Web Design', 'UX Research', 'Conversion Optimization'],
    result: '-60% Bounce Rate',
    color: '#6366F1',
  },
  {
    title: 'Wellness Hub',
    category: 'Brand Identity & Web Design',
    description:
      'Health tech startup branding and website that attracted 10K+ users in the first month post-launch.',
    tags: ['Branding', 'Web Design', 'Mobile Design'],
    result: '10K+ First Month',
    color: '#8B5CF6',
  },
]

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 bg-background"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 rounded-full" style={{ background: '#6366F1' }} aria-hidden="true" />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6366F1' }}>
                Portfolio
              </span>
            </div>
            <h2
              id="portfolio-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Recent Projects That{' '}
              <span style={{ color: '#6366F1' }}>Drove Real Results</span>
            </h2>
          </div>
          {/* Feature image badge */}
          <div className="relative w-40 h-24 md:w-52 md:h-32 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 hidden sm:block" aria-hidden="true">
            <Image
              src="https://images.unsplash.com/photo-1613759612065-d5971d32ca49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBtb2NrdXBzJTIwYnJhbmQlMjBpZGVudGl0eSUyMHdlYiUyMGRlc2lnbiUyMHN0YXJ0dXAlMjBwcm9qZWN0c3xlbnwwfDB8fHwxNzczMDA4NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Portfolio mockups"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 160px, 208px"
            />
          </div>
        </div>

        {/* Projects grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" role="list">
          {projects.map((project) => (
            <li
              key={project.title}
              className="group relative bg-white rounded-3xl border border-border shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Top color bar */}
              <div
                className="h-1.5 w-full"
                style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}80)` }}
                aria-hidden="true"
              />
              <div className="p-8 flex flex-col gap-4">
                {/* Category & result badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">
                    {project.category}
                  </span>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ background: project.color }}
                  >
                    {project.result}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-foreground transition-colors group-hover:text-primary"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags & arrow */}
                <div className="flex items-center justify-between pt-2">
                  <ul className="flex flex-wrap gap-2" role="list">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full border"
                        style={{
                          borderColor: `${project.color}40`,
                          color: project.color,
                          background: `${project.color}0d`,
                        }}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${project.color}15`, color: project.color }}
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
