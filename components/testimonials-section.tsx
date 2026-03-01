'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Jane transformed our brand from generic to unforgettable. Our customer recognition increased by 200% after the rebrand.',
    author: 'Sarah Chen',
    title: 'CEO, TechFlow Startup',
    rating: 5,
    initials: 'SC',
    color: '#6366F1',
  },
  {
    quote:
      'The website Jane designed converted 3x better than our old site. Her strategic approach to design really shows in the results.',
    author: 'Michael Rodriguez',
    title: 'Founder, EcoVenture',
    rating: 5,
    initials: 'MR',
    color: '#8B5CF6',
  },
  {
    quote:
      'Professional, creative, and deadline-focused. Jane understood our vision and brought it to life perfectly.',
    author: 'David Park',
    title: 'CEO, FinanceFlow',
    rating: 5,
    initials: 'DP',
    color: '#F59E0B',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-background"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Testimonials
          </span>
          <h2
            id="testimonials-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            What Startup Founders Say
          </h2>
          <div
            className="mt-4 mx-auto h-1 w-16 rounded-full"
            style={{ background: 'linear-gradient(90deg, #6366F1, #8B5CF6)' }}
            aria-hidden="true"
          />
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-card rounded-3xl border border-border p-8 sm:p-12 shadow-xl">
            {/* Quote icon */}
            <div
              className="absolute -top-5 left-10 w-10 h-10 rounded-full flex items-center justify-center shadow-md"
              style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
              aria-hidden="true"
            >
              <Quote className="w-5 h-5 text-white" />
            </div>

            {/* Rating */}
            <div className="mb-6">
              <StarRating count={t.rating} />
            </div>

            {/* Quote */}
            <blockquote
              className="font-heading text-xl sm:text-2xl font-medium text-foreground leading-snug mb-8 text-balance"
              aria-live="polite"
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                style={{ background: t.color }}
                aria-hidden="true"
              >
                {t.initials}
              </div>
              <div>
                <p className="font-semibold text-foreground">{t.author}</p>
                <p className="text-sm text-muted-foreground">{t.title}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border-2 border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Testimonial ${i + 1} of ${testimonials.length}`}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 h-3 bg-primary'
                      : 'w-3 h-3 bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border-2 border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* All 3 previews on desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-16">
          {testimonials.map((item, i) => (
            <button
              key={item.author}
              onClick={() => setCurrent(i)}
              className={`text-left rounded-2xl border p-5 transition-all duration-300 ${
                i === current
                  ? 'border-primary bg-primary/5 shadow-md'
                  : 'border-border bg-card hover:border-primary/40'
              }`}
              aria-label={`View testimonial from ${item.author}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ background: item.color }}
                  aria-hidden="true"
                >
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.author}</p>
                  <p className="text-xs text-muted-foreground">{item.title}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">&ldquo;{item.quote}&rdquo;</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
