import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jane Designer — Brand Identity & Web Design for Startups',
  description:
    'Creative designer specializing in brand identity and web design for ambitious startups. Helping founders build memorable brands that drive growth and investor interest.',
  keywords: [
    'brand identity',
    'web design',
    'startup branding',
    'logo design',
    'UI/UX design',
    'Jane Designer',
  ],
  authors: [{ name: 'Jane Designer' }],
  creator: 'Jane Designer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Jane Designer — Brand Identity & Web Design for Startups',
    description:
      'Creative designer specializing in brand identity and web design for ambitious startups.',
    siteName: 'Jane Designer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jane Designer — Brand Identity & Web Design for Startups',
    description:
      'Creative designer specializing in brand identity and web design for ambitious startups.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#6366F1',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
