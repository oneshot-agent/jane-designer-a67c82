import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jane Designer — Brand Identity & Web Design for Startups',
  description:
    'Creative designer specializing in brand identity and web design for startups. I transform startup visions into unforgettable brand identities and high-converting websites.',
  keywords: ['brand identity', 'web design', 'startup design', 'logo design', 'UI/UX'],
  authors: [{ name: 'Jane Designer' }],
  openGraph: {
    title: 'Jane Designer — Brand Identity & Web Design for Startups',
    description:
      'Creative designer specializing in brand identity and web design for startups. Bold brands that demand attention.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jane Designer — Brand Identity & Web Design for Startups',
    description: 'Creative designer specializing in brand identity and web design for startups.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
