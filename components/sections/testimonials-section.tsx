import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Jane transformed our startup's visual identity completely. The new brand helped us secure funding and establish credibility in our market.",
    author: 'Sarah Chen',
    title: 'CEO, TechFlow',
    rating: 5,
    initials: 'SC',
    color: 'bg-[#6366F1]',
  },
  {
    quote:
      'Working with Jane was seamless. She understood our vision immediately and delivered designs that exceeded our expectations.',
    author: 'Michael Rodriguez',
    title: 'Founder, EcoVenture',
    rating: 5,
    initials: 'MR',
    color: 'bg-emerald-500',
  },
  {
    quote:
      'The website Jane designed for us has been a game-changer. Our conversion rates doubled within the first month of launch.',
    author: 'Lisa Thompson',
    title: 'CMO, FinanceFlow',
    rating: 5,
    initials: 'LT',
    color: 'bg-[#F59E0B]',
  },
]

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-[#F8F9FF]"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0E7FF] text-[#6366F1] text-xs font-semibold uppercase tracking-wider mb-6">
            Testimonials
          </div>
          <h2
            id="testimonials-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] text-balance leading-tight"
          >
            What Clients Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="relative bg-white rounded-2xl p-8 border border-border hover:border-[#6366F1]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Quote icon */}
              <Quote
                className="w-8 h-8 text-[#E0E7FF] mb-4 shrink-0"
                aria-hidden="true"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4" role="img" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <figcaption className="flex items-center gap-4 pt-6 border-t border-border">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} text-white flex items-center justify-center text-sm font-bold shrink-0`}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#1E293B] text-sm">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
