'use client'

import { useState } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Jane didn't just design our brand—she understood our vision and made it impossible to ignore. We closed our Series A two months ahead of schedule.",
    author: 'Sarah Chen',
    title: 'CEO, TechFlow',
    initials: 'SC',
    color: 'var(--brand-primary)',
  },
  {
    quote:
      'The website Jane created converts like crazy. Our demo requests increased 400% in the first month alone.',
    author: 'Marcus Rodriguez',
    title: 'Founder, DataDash',
    initials: 'MR',
    color: 'var(--brand-secondary)',
  },
  {
    quote:
      "Jane's bold approach gave us the confidence to stand out in a crowded market. Best investment we made as a startup.",
    author: 'Emily Watson',
    title: 'Co-founder, GreenSpace',
    initials: 'EW',
    color: 'var(--brand-accent)',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const t = testimonials[current]

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--brand-primary)' }}
          >
            Social Proof
          </p>
          <h2
            id="testimonials-heading"
            className="font-heading font-bold text-4xl sm:text-5xl text-balance"
            style={{ color: 'var(--brand-text)' }}
          >
            What Founders{' '}
            <span className="gradient-text">Say</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Card */}
          <div
            key={current}
            className="relative rounded-3xl p-8 sm:p-12 lg:p-16 animate-fade-in"
            style={{
              background: 'linear-gradient(135deg, var(--primary-light) 0%, var(--secondary-light) 100%)',
              border: '1px solid var(--border)',
            }}
            role="region"
            aria-label={`Testimonial ${current + 1} of ${testimonials.length}`}
            aria-live="polite"
          >
            {/* Quote icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-8"
              style={{ backgroundColor: t.color }}
              aria-hidden="true"
            >
              <Quote size={20} className="text-white" />
            </div>

            <blockquote>
              <p
                className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl leading-snug text-balance mb-8"
                style={{ color: 'var(--brand-text)' }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <cite className="not-italic font-heading font-bold text-base" style={{ color: 'var(--brand-text)' }}>
                    {t.author}
                  </cite>
                  <p className="text-muted-foreground text-sm">{t.title}</p>
                </div>
              </footer>
            </blockquote>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className="h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{
                    width: i === current ? '2rem' : '0.5rem',
                    backgroundColor: i === current ? 'var(--brand-primary)' : 'var(--border)',
                  }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ backgroundColor: 'var(--brand-primary)' }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
