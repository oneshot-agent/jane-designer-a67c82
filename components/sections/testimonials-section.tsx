'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  initials: string
  color: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Jane's brand design was instrumental in our Series A success. Investors immediately understood our vision.",
    author: 'Sarah Chen',
    role: 'CEO, TechFlow',
    company: 'TechFlow',
    initials: 'SC',
    color: 'bg-[#EEF2FF] text-[var(--brand-primary)]',
  },
  {
    quote:
      'The website Jane designed converted 3x better than our previous site. ROI was immediate and significant.',
    author: 'Michael Rodriguez',
    role: 'Founder, DataPulse',
    company: 'DataPulse',
    initials: 'MR',
    color: 'bg-[#FDF2F8] text-[var(--brand-accent)]',
  },
  {
    quote:
      'Professional, fast, and strategic. Jane understands startup needs and delivers designs that actually work.',
    author: 'Emma Thompson',
    role: 'Co-founder, GreenStart',
    company: 'GreenStart',
    initials: 'ET',
    color: 'bg-[#F0FDF4] text-[#16A34A]',
  },
]

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((i) => (i + 1) % testimonials.length)

  const current = testimonials[active]

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-white overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-brand-lg aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <Image
                src="https://images.unsplash.com/photo-1586764921336-8b37580c7aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjU4Mzl8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0YXJ0dXAlMjBmb3VuZGVycyUyMHRlc3RpbW9uaWFscyUyMHByb2Zlc3Npb25hbHxlbnwwfDB8fHwxNzczMDA4Mzk0fDA&ixlib=rb-4.1.0&q=80&w=800"
                alt="Happy startup founders"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" aria-hidden="true" />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-6 -right-6 lg:right-0 bg-white rounded-2xl shadow-brand-lg p-5 border border-[var(--brand-border)]">
              <p className="font-heading font-bold text-3xl text-[var(--brand-primary)]">3x</p>
              <p className="text-xs text-[var(--brand-text-muted)] mt-0.5">Average Conversion Lift</p>
            </div>
          </div>

          {/* Right: testimonial carousel */}
          <div>
            <span className="inline-block text-sm font-semibold text-[var(--brand-primary)] uppercase tracking-widest mb-3">
              Testimonials
            </span>
            <h2
              id="testimonials-heading"
              className="font-heading text-4xl lg:text-5xl font-bold text-[var(--brand-text)] tracking-tight text-balance mb-12"
            >
              What Startup{' '}
              <span className="text-gradient-primary">Founders Say</span>
            </h2>

            {/* Card */}
            <div className="relative bg-[var(--brand-surface)] rounded-2xl p-8 border border-[var(--brand-border)] mb-8">
              <Quote
                className="w-10 h-10 text-[var(--brand-primary)]/20 mb-4"
                aria-hidden="true"
              />
              <blockquote>
                <p className="text-lg text-[var(--brand-text)] leading-relaxed mb-6 text-pretty">
                  {'"'}{current.quote}{'"'}
                </p>
                <footer className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-sm ${current.color}`}
                    aria-hidden="true"
                  >
                    {current.initials}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-[var(--brand-text)]">{current.author}</p>
                    <p className="text-sm text-[var(--brand-text-muted)]">{current.role}</p>
                  </div>
                </footer>
              </blockquote>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full border border-[var(--brand-border)] flex items-center justify-center hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active
                        ? 'w-8 bg-[var(--brand-primary)]'
                        : 'w-2 bg-[var(--brand-border)] hover:bg-[var(--brand-primary)]/40'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full border border-[var(--brand-border)] flex items-center justify-center hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] transition-all duration-200"
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
