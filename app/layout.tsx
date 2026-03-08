import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jane Designer — Bold Brand Identity & Web Design for Startups',
  description:
    'Creative designer specializing in brand identity and web design for startups. I transform visions into unforgettable brands that attract investors, customers, and growth.',
  keywords: [
    'brand identity',
    'web design',
    'startup design',
    'logo design',
    'brand strategy',
    'UI UX design',
  ],
  authors: [{ name: 'Jane Designer' }],
  openGraph: {
    title: 'Jane Designer — Bold Brand Identity & Web Design for Startups',
    description:
      'Creative designer specializing in brand identity and web design for startups. I transform visions into unforgettable brands.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jane Designer — Bold Brand Identity & Web Design for Startups',
    description:
      'Creative designer specializing in brand identity and web design for startups.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
