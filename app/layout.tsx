import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jane Designer — Brand Identity & Web Design for Startups',
  description:
    'Creative designer specializing in brand identity and web design for startups. 8+ years helping emerging businesses build memorable brands that convert.',
  keywords: [
    'brand identity design',
    'web design',
    'startup branding',
    'logo design',
    'UX/UI design',
    'Jane Designer',
  ],
  authors: [{ name: 'Jane Designer' }],
  openGraph: {
    title: 'Jane Designer — Brand Identity & Web Design for Startups',
    description:
      'Strategic design solutions that help emerging businesses build memorable brands and convert visitors into customers.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jane Designer — Brand Identity & Web Design for Startups',
    description:
      'Strategic design solutions that help emerging businesses build memorable brands.',
  },
  robots: {
    index: true,
    follow: true,
  },
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
