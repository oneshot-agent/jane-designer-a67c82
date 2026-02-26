'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  title: string
  rating: number
  initials: string
  color: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Jane transformed our vision into a brand that investors immediately connected with. Her design work was instrumental in our successful funding round.",
    author: 'Sarah Chen',
    title: 'CEO, TechFlow Startup',
    rating: 5,
    initials: 'SC',
    color: 'bg-primary',
  },
  {
    quote:
      "The website Jane designed converted 3x better than our previous site. Her understanding of startup needs is exceptional.",
    author: 'Marcus Rodriguez',
    title: 'Founder, GreenSpace App',
    rating: 5,
    initials: 'MR',
    color: 'bg-accent',
  },
  {
    quote:
      "Professional, creative, and deadline-driven. Jane delivered exactly what we needed to establish credibility in the fintech space.",
    author: 'Emily Watson',
    title: 'Co-founder, FinNext Solutions',
    rating: 5,
    initials: 'EW',
    color: 'bg-primary',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

  return (
    <section
      id="testimonials"
      className="section-pad bg-gradient-subtle"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
            Testimonials
          </div>
          <h2
            id="testimonials-heading"
            className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight text-balance"
          >
            What Startup{' '}
            <span className="text-gradient-primary">Founders Say</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          {/* Quote card */}
          <div
            key={current}
            className="relative bg-card rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/5 border border-border text-center animate-fade-up"
            role="region"
            aria-label={`Testimonial ${current + 1} of ${testimonials.length}`}
            aria-live="polite"
          >
            {/* Large quote mark */}
            <span
              className="absolute top-6 left-8 text-8xl font-serif text-primary/10 leading-none select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6" aria-label={`${t.rating} out of 5 stars`}>
              {[...Array(t.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-accent text-accent"
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-foreground text-lg md:text-xl leading-relaxed font-medium mb-8 text-balance relative z-10">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-3">
              <div
                className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm`}
                aria-hidden="true"
              >
                {t.initials}
              </div>
              <div className="text-left">
                <p className="font-serif font-bold text-foreground text-sm">{t.author}</p>
                <p className="text-muted-foreground text-xs">{t.title}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border bg-card hover:bg-secondary hover:border-primary/30 flex items-center justify-center transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonial indicators">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-2 bg-primary'
                      : 'w-2 h-2 bg-border hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-selected={i === current}
                  role="tab"
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border bg-card hover:bg-secondary hover:border-primary/30 flex items-center justify-center transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
