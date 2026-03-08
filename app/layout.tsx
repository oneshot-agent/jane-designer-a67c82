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
    'Creative designer specializing in brand identity and web design for startups. I help ambitious companies build memorable brands and high-converting websites that drive growth.',
  keywords: ['brand identity', 'web design', 'startup branding', 'logo design', 'UI/UX', 'creative designer'],
  authors: [{ name: 'Jane Designer' }],
  openGraph: {
    title: 'Jane Designer — Brand Identity & Web Design for Startups',
    description:
      'Creative designer specializing in brand identity and web design for startups. Brands that connect, websites that convert.',
    type: 'website',
    url: 'https://janedesigner.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jane Designer — Brand Identity & Web Design for Startups',
    description: 'Creative designer specializing in brand identity and web design for startups.',
  },
  generator: 'v0.app',
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
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
