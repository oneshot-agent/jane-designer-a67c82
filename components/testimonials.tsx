'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Jane transformed our startup's visual identity completely. The new branding helped us secure Series A funding and establish credibility in our market.",
    author: 'Sarah Chen',
    title: 'CEO, TechFlow',
    rating: 5,
    initials: 'SC',
    color: '#6366F1',
  },
  {
    quote:
      'Working with Jane was exceptional. She understood our vision immediately and delivered a website that converts 3x better than our previous design.',
    author: 'Mike Rodriguez',
    title: 'Founder, DataViz Pro',
    rating: 5,
    initials: 'MR',
    color: '#8B5CF6',
  },
  {
    quote:
      "Jane's design expertise and strategic thinking helped us launch with confidence. Our brand now stands out in a crowded marketplace.",
    author: 'Emily Thompson',
    title: 'Co-founder, Wellness Connect',
    rating: 5,
    initials: 'ET',
    color: '#F59E0B',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((v) => (v === 0 ? testimonials.length - 1 : v - 1))
  const next = () => setActive((v) => (v === testimonials.length - 1 ? 0 : v + 1))

  const current = testimonials[active]

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-background"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
            Client Love
          </div>
          <h2
            id="testimonials-heading"
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-balance text-foreground"
          >
            What Startup{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
            >
              Founders Say
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div
            className="relative rounded-3xl border border-border p-8 md:p-12 shadow-lg overflow-hidden"
            style={{
              background:
                'linear-gradient(145deg, rgba(99,102,241,0.03) 0%, rgba(139,92,246,0.03) 100%)',
            }}
          >
            {/* Large quote icon */}
            <Quote
              className="absolute top-6 right-8 w-20 h-20 opacity-5 text-primary"
              aria-hidden="true"
            />

            {/* Stars */}
            <div className="flex gap-1 mb-6" aria-label={`${current.rating} out of 5 stars`}>
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-current"
                  style={{ color: '#F59E0B' }}
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mb-8">
              <p className="font-heading text-xl md:text-2xl lg:text-3xl font-medium leading-snug text-foreground text-balance">
                &ldquo;{current.quote}&rdquo;
              </p>
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-heading font-bold text-sm shrink-0"
                style={{ background: `linear-gradient(135deg, ${current.color}, #6366F1)` }}
                aria-hidden="true"
              >
                {current.initials}
              </div>
              <div>
                <p className="font-heading font-semibold text-base text-foreground">
                  {current.author}
                </p>
                <p className="text-sm text-muted-foreground">{current.title}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((t, i) => (
                <button
                  key={t.author}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Testimonial from ${t.author}`}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? 'w-8' : 'w-2 bg-border hover:bg-muted-foreground'
                  }`}
                  style={i === active ? { background: 'linear-gradient(90deg, #6366F1, #8B5CF6)' } : undefined}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-xl border border-border bg-background flex items-center justify-center hover:bg-muted transition-colors duration-200 text-foreground"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-xl flex items-center justify-center text-white transition-opacity duration-200 hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* All testimonials strip */}
        <div className="grid sm:grid-cols-3 gap-5 mt-16" aria-label="All client testimonials">
          {testimonials.map((t, i) => (
            <button
              key={t.author}
              type="button"
              onClick={() => setActive(i)}
              className={`text-left rounded-2xl border p-5 transition-all duration-200 hover:shadow-md ${
                i === active ? 'border-primary/30 shadow-md' : 'border-border bg-background'
              }`}
              style={
                i === active
                  ? { background: 'linear-gradient(145deg, rgba(99,102,241,0.05), rgba(139,92,246,0.05))' }
                  : undefined
              }
              aria-pressed={i === active}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-heading font-bold text-xs shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, #6366F1)` }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                &ldquo;{t.quote}&rdquo;
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
