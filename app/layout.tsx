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
  title: 'Jane Designer — Bold Brands That Demand Attention',
  description:
    'Creative designer specializing in brand identity and web design for startups. I transform startup visions into powerful brand identities and websites that convert visitors into customers.',
  keywords: [
    'brand identity design',
    'web design',
    'startup design',
    'logo design',
    'UI/UX design',
    'brand strategy',
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jane Designer — Bold Brands That Demand Attention',
    description:
      'Creative designer specializing in brand identity and web design for startups.',
    creator: '@janedesigner',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
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
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
