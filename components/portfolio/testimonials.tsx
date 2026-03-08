import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Jane's brand design was instrumental in helping us secure our Series A funding. The professional identity she created gave investors confidence in our vision.",
    author: 'Sarah Chen',
    title: 'CEO, TechFlow Startup',
    rating: 5,
    initials: 'SC',
    color: '#6366F1',
  },
  {
    quote:
      "Our website conversion rate tripled after Jane's redesign. She understands how to create designs that not only look great but actually drive business results.",
    author: 'Marcus Rodriguez',
    title: 'Founder, DataViz Pro',
    rating: 5,
    initials: 'MR',
    color: '#8B5CF6',
  },
  {
    quote:
      'Working with Jane was seamless. She delivered a complete brand identity that perfectly captured our mission and resonated with our target audience.',
    author: 'Emily Watson',
    title: 'Co-founder, Wellness Hub',
    rating: 5,
    initials: 'EW',
    color: '#6366F1',
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 md:py-32"
      style={{ background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)' }}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 rounded-full bg-white/50" aria-hidden="true" />
            <span className="text-sm font-semibold tracking-widest uppercase text-white/80">
              Testimonials
            </span>
            <div className="w-8 h-0.5 rounded-full bg-white/50" aria-hidden="true" />
          </div>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            What Startup Founders Say{' '}
            <span style={{ color: '#F59E0B' }}>About My Work</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" role="list">
          {testimonials.map((t) => (
            <li
              key={t.author}
              className="relative flex flex-col gap-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
            >
              {/* Quote icon */}
              <Quote
                className="w-8 h-8 opacity-40 text-white"
                aria-hidden="true"
              />

              {/* Stars */}
              <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/90 text-sm leading-relaxed flex-1">
                {`"${t.quote}"`}
              </blockquote>

              {/* Author */}
              <footer className="flex items-center gap-3 pt-4 border-t border-white/20">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.2)' }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <cite className="not-italic text-white font-semibold text-sm block">
                    {t.author}
                  </cite>
                  <span className="text-white/60 text-xs">{t.title}</span>
                </div>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
