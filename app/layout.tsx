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
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jane Designer — Bold Brands That Demand Attention',
  description:
    'Creative designer specializing in brand identity and web design for startups. Transform your startup vision into an unforgettable brand that converts customers from day one.',
  keywords: [
    'brand identity design',
    'web design for startups',
    'startup branding',
    'logo design',
    'landing page design',
    'Jane Designer',
  ],
  authors: [{ name: 'Jane Designer' }],
  creator: 'Jane Designer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://janedesigner.com',
    title: 'Jane Designer — Bold Brands That Demand Attention',
    description:
      'Creative designer specializing in brand identity and web design for startups.',
    siteName: 'Jane Designer',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1710799885122-428e63eff691?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Jane Designer — Creative Brand & Web Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jane Designer — Bold Brands That Demand Attention',
    description:
      'Creative designer specializing in brand identity and web design for startups.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
