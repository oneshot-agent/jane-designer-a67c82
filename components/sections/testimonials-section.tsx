'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Jane didn't just design our brand—she understood our vision and brought it to life in ways we never imagined. Our investor pitch deck got 3x more positive responses.",
    author: 'Sarah Chen',
    position: 'CEO, DataFlow Analytics',
    rating: 5,
    initials: 'SC',
    color: 'bg-primary',
  },
  {
    quote:
      'The website Jane designed converted 40% better than our old one from day one. She gets what startups need to succeed.',
    author: 'Marcus Rodriguez',
    position: 'Founder, EcoShip Logistics',
    rating: 5,
    initials: 'MR',
    color: 'bg-secondary',
  },
  {
    quote:
      "Working with Jane was like having a co-founder who specializes in making everything look incredible. She's strategic, not just creative.",
    author: 'Emily Watson',
    position: 'Co-founder, MindfulTech',
    rating: 5,
    initials: 'EW',
    color: 'bg-accent',
  },
]

export function TestimonialsSection() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((a) => (a + 1) % testimonials.length)

  const current = testimonials[active]

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-gradient-hero overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-border shadow-sm px-4 py-2 rounded-full text-sm font-medium text-primary mb-6">
            <span className="geo-dot" aria-hidden="true" />
            Client Stories
          </div>
          <h2
            id="testimonials-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance"
          >
            What Founders Say{' '}
            <span className="gradient-text-primary">About Working With Me</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Large quote mark */}
          <div
            className="absolute -top-6 -left-4 text-primary/10 pointer-events-none"
            aria-hidden="true"
          >
            <Quote size={120} strokeWidth={1} />
          </div>

          {/* Testimonial card */}
          <div
            className="relative bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-xl"
            role="region"
            aria-live="polite"
            aria-label="Testimonial carousel"
          >
            {/* Stars */}
            <div className="flex items-center gap-1 mb-8" aria-label={`${current.rating} out of 5 stars`}>
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-accent fill-accent"
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed mb-10 text-balance">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 rounded-full ${current.color} flex items-center justify-center flex-shrink-0`}
              >
                <span className="font-display font-bold text-white text-lg">
                  {current.initials}
                </span>
              </div>
              <div>
                <div className="font-display font-bold text-foreground text-lg">
                  {current.author}
                </div>
                <div className="text-muted-foreground text-sm">{current.position}</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 right-8 flex items-center gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border bg-muted hover:bg-primary hover:text-primary-foreground hover:border-primary flex items-center justify-center transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border bg-muted hover:bg-primary hover:text-primary-foreground hover:border-primary flex items-center justify-center transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-8" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? 'w-8 h-2.5 bg-primary'
                    : 'w-2.5 h-2.5 bg-border hover:bg-primary/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
