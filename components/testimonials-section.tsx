'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Jane didn't just design our brand — she transformed our entire business trajectory. The bold identity she created helped us secure $2M in funding.",
    author: 'Sarah Chen',
    title: 'CEO, TechFlow Startup',
    rating: 5,
    initials: 'SC',
    accent: 'bg-primary',
  },
  {
    quote:
      'Working with Jane was a game-changer. Her fearless approach to design helped us stand out in a crowded market and triple our conversion rates.',
    author: 'Marcus Rodriguez',
    title: 'Founder, GreenSpace Co',
    rating: 5,
    initials: 'MR',
    accent: 'bg-secondary',
  },
  {
    quote:
      "Jane's bold design thinking and startup expertise delivered results beyond our wildest expectations. Best investment we made as a company.",
    author: 'Lisa Park',
    title: 'Co-founder, FinTech Revolution',
    rating: 5,
    initials: 'LP',
    accent: 'bg-accent',
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
      className="py-24 px-6 lg:px-8"
      style={{ background: 'linear-gradient(135deg, #EEF2FF 0%, #FDF2F8 100%)' }}
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest">
            Testimonials
          </span>
          <h2
            id="testimonials-heading"
            className="font-display font-bold text-4xl sm:text-5xl text-foreground text-balance"
          >
            Founders{' '}
            <span className="gradient-text">Love Working With Me</span>
          </h2>
        </div>

        {/* Carousel card */}
        <div className="relative bg-card rounded-3xl shadow-xl border border-border p-8 sm:p-12">
          {/* Quote icon */}
          <div
            className="absolute top-8 right-8 text-primary/10"
            aria-hidden="true"
          >
            <Quote size={64} strokeWidth={1} />
          </div>

          {/* Stars */}
          <div className="flex gap-1 mb-6" aria-label={`${t.rating} out of 5 stars`}>
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star
                key={i}
                size={20}
                className="fill-accent text-accent"
                aria-hidden="true"
              />
            ))}
          </div>

          {/* Quote text */}
          <blockquote className="text-xl sm:text-2xl font-display font-medium text-foreground leading-relaxed mb-8 text-pretty">
            "{t.quote}"
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-full ${t.accent} flex items-center justify-center text-white font-display font-bold text-base`}
              aria-hidden="true"
            >
              {t.initials}
            </div>
            <div>
              <p className="font-display font-bold text-foreground">{t.author}</p>
              <p className="text-sm text-muted-foreground">{t.title}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full bg-card border border-border shadow-sm flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-6 h-2.5 bg-primary'
                    : 'w-2.5 h-2.5 bg-border hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full bg-card border border-border shadow-sm flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
