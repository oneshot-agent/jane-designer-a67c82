import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Jane's design work was instrumental in helping us secure our Series A funding. Her brand identity perfectly captured our vision and resonated with investors.",
    author: 'Sarah Chen',
    title: 'CEO, TechFlow Startup',
    initials: 'SC',
    color: 'var(--brand-primary)',
  },
  {
    quote:
      'The website Jane designed increased our conversion rate by 150%. Her understanding of user experience and startup needs is exceptional.',
    author: 'Michael Rodriguez',
    title: 'Founder, DataSync Solutions',
    initials: 'MR',
    color: 'var(--brand-secondary)',
  },
  {
    quote:
      'Working with Jane was seamless. She delivered beyond our expectations and helped establish our brand in a competitive market.',
    author: 'Emily Thompson',
    title: 'Co-founder, GreenSpace Co.',
    initials: 'ET',
    color: 'var(--brand-accent)',
  },
]

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 md:py-32"
      style={{ background: 'var(--brand-surface)' }}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-xl mx-auto">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: 'var(--brand-primary)' }}
          >
            Testimonials
          </span>
          <h2
            id="testimonials-heading"
            className="font-serif text-4xl md:text-5xl font-bold leading-tight text-balance"
            style={{ color: 'var(--brand-text)' }}
          >
            What{' '}
            <span className="text-gradient-primary">Clients Say</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="relative flex flex-col justify-between gap-6 p-8 rounded-2xl border card-hover"
              style={{
                background: 'var(--brand-bg)',
                borderColor: 'var(--brand-border)',
              }}
            >
              {/* Quote icon */}
              <div
                className="w-10 h-10 flex items-center justify-center rounded-xl"
                style={{ background: `${t.color}15`, color: t.color }}
                aria-hidden="true"
              >
                <Quote className="w-5 h-5" />
              </div>

              <blockquote
                className="text-base leading-relaxed flex-1"
                style={{ color: 'var(--brand-text)' }}
              >
                <p>{`"${t.quote}"`}</p>
              </blockquote>

              <figcaption className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className="w-11 h-11 flex items-center justify-center rounded-full font-serif font-bold text-sm text-white flex-shrink-0"
                  style={{ background: t.color }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div className="flex flex-col">
                  <span
                    className="font-semibold text-sm"
                    style={{ color: 'var(--brand-text)' }}
                  >
                    {t.author}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: 'var(--brand-text-muted)' }}
                  >
                    {t.title}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
