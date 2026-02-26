import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jane Designer – Brand Identity & Web Design for Startups',
  description:
    'Creative designer helping startups build memorable brands and convert-focused websites that drive growth and customer trust.',
  keywords: ['brand identity', 'web design', 'startup design', 'logo design', 'UI/UX design'],
  authors: [{ name: 'Jane Designer' }],
  openGraph: {
    title: 'Jane Designer – Brand Identity & Web Design for Startups',
    description:
      'Creative designer helping startups build memorable brands and convert-focused websites.',
    type: 'website',
    url: 'https://janedesigner.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jane Designer – Brand Identity & Web Design for Startups',
    description:
      'Creative designer helping startups build memorable brands and convert-focused websites.',
  },
  generator: 'v0.app',
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
