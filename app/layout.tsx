import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jane Designer — Brand Identity & Web Design for Startups',
  description:
    'Creative designer helping startups build memorable brand identities and high-performing websites that drive growth. 50+ startups helped, 98% client satisfaction.',
  keywords: [
    'brand identity design',
    'web design',
    'startup branding',
    'logo design',
    'UX design',
    'creative designer',
  ],
  authors: [{ name: 'Jane Designer' }],
  openGraph: {
    title: 'Jane Designer — Brand Identity & Web Design for Startups',
    description:
      'Creative designer helping startups build memorable brand identities and high-performing websites that drive growth.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jane Designer — Brand Identity & Web Design for Startups',
    description:
      'Creative designer helping startups build memorable brand identities and high-performing websites.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#6366F1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
