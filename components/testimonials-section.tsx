'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    content:
      "Jane's brand design was instrumental in our successful funding round. Her strategic approach helped us stand out to investors and articulate our vision with clarity.",
    author: 'Sarah Chen',
    role: 'CEO, TechFlow',
    rating: 5,
    initials: 'SC',
  },
  {
    content:
      'The website Jane designed increased our conversion rate by 65%. Her understanding of user psychology is exceptional — she truly gets what makes people take action.',
    author: 'Michael Rodriguez',
    role: 'Founder, GreenSpace',
    rating: 5,
    initials: 'MR',
  },
  {
    content:
      'Working with Jane felt like having a design co-founder. She truly understood our vision and brought it to life perfectly, delivering beyond every expectation.',
    author: 'Emma Thompson',
    role: 'CTO, DataViz',
    rating: 5,
    initials: 'ET',
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
      className="py-24 lg:py-32"
      style={{ backgroundColor: 'var(--brand-secondary)' }}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 text-white/60 border border-white/10"
            style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
          >
            Testimonials
          </div>
          <h2
            id="testimonials-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance"
          >
            What Startup{' '}
            <span style={{ color: 'var(--brand-accent)' }}>Founders Say</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10"
            style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
            role="region"
            aria-label="Testimonial carousel"
            aria-live="polite"
          >
            {/* Quote icon */}
            <Quote
              className="w-10 h-10 mb-8 opacity-40"
              style={{ color: 'var(--brand-accent)' }}
              aria-hidden="true"
            />

            {/* Stars */}
            <div className="flex gap-1 mb-6" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-current"
                  style={{ color: 'var(--brand-accent)' }}
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Quote text */}
            <blockquote>
              <p className="text-xl sm:text-2xl lg:text-3xl font-heading font-medium text-white leading-relaxed mb-10 text-pretty">
                &ldquo;{t.content}&rdquo;
              </p>
              <footer className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: 'var(--brand-primary)' }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-white text-base">
                    {t.author}
                  </cite>
                  <p className="text-sm text-white/60 mt-0.5">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                    i === current ? 'w-8 h-2.5' : 'w-2.5 h-2.5 opacity-30 hover:opacity-60'
                  }`}
                  style={{
                    backgroundColor: i === current ? 'var(--brand-accent)' : 'white',
                  }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                style={{ backgroundColor: 'var(--brand-primary)' }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
