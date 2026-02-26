import type { Metadata } from 'next'
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
    'Creative designer specializing in brand identity and web design for startups. Helping ambitious companies build memorable brands and convert-focused websites that accelerate growth.',
  keywords: ['brand identity', 'web design', 'startup branding', 'logo design', 'UX design'],
  authors: [{ name: 'Jane Designer' }],
  openGraph: {
    title: 'Jane Designer — Brand Identity & Web Design for Startups',
    description:
      'Creative designer helping startups build memorable brands and convert-focused websites that accelerate growth.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jane Designer — Brand Identity & Web Design for Startups',
    description:
      'Creative designer helping startups build memorable brands and convert-focused websites.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
