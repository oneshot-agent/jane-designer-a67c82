import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Jane's design expertise was instrumental in our successful Series A funding. Her brand identity perfectly captured our vision and resonated with investors.",
    author: 'Sarah Chen',
    title: 'CEO, TechFlow Startup',
    rating: 5,
    initials: 'SC',
    color: '#6366F1',
  },
  {
    quote:
      'The website Jane designed converted 3x better than our previous site. Her understanding of user psychology is exceptional.',
    author: 'Michael Rodriguez',
    title: 'Founder, DataViz Platform',
    rating: 5,
    initials: 'MR',
    color: '#EC4899',
  },
  {
    quote:
      'Professional, creative, and results-driven. Jane delivered a complete brand system that exceeded our expectations and timeline.',
    author: 'Emily Watson',
    title: 'Co-founder, GreenSpace Co.',
    rating: 5,
    initials: 'EW',
    color: '#8B5CF6',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#FEFEFE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EC4899]/10 border border-[#EC4899]/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#EC4899]">Testimonials</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E293B] text-balance max-w-2xl leading-tight">
            What Founders Say About{' '}
            <span className="gradient-text-accent">Working Together</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <article
              key={t.author}
              className="group relative flex flex-col gap-6 p-8 rounded-2xl bg-white border border-[#1E293B]/8 hover:shadow-xl hover:shadow-[#6366F1]/8 hover:border-[#6366F1]/25 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: t.color + '15' }}
                aria-hidden="true"
              >
                <Quote size={18} style={{ color: t.color }} />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-[#1E293B]/70 leading-relaxed text-sm flex-grow">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <footer className="flex items-center gap-3 pt-4 border-t border-[#1E293B]/8">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#1E293B]">{t.author}</p>
                  <p className="text-xs text-[#1E293B]/50">{t.title}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
