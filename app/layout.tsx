import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import { SmoothScrollProvider } from '@/components/portfolio/smooth-scroll-provider'
import { CustomCursor } from '@/components/portfolio/custom-cursor'
import { Header } from '@/components/portfolio/header'
import { SiteAtmosphere } from '@/components/portfolio/site-atmosphere'

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-serif', style: ['normal', 'italic'] })
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const siteUrl = 'https://bendev.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Y. Bienvenu Sekongo — Développeur logiciel',
    template: '%s — BenDev',
  },
  description: 'Portfolio de Y. Bienvenu Sekongo, développeur logiciel basé à Abidjan. Je conçois des produits digitaux fiables, performants et utiles.',
  applicationName: 'BenDev',
  authors: [{ name: 'Y. Bienvenu Sekongo', url: siteUrl }],
  creator: 'Y. Bienvenu Sekongo',
  keywords: ['développeur logiciel', 'développeur fullstack', 'React', 'Next.js', 'React Native', 'Abidjan', 'Côte d’Ivoire'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'BenDev',
    title: 'Y. Bienvenu Sekongo — Développeur logiciel',
    description: 'Des produits digitaux fiables, performants et utiles, du premier pixel au dernier endpoint.',
    images: [{ url: '/portfolio/portrait.png', width: 1200, height: 1200, alt: 'Portrait de Y. Bienvenu Sekongo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Y. Bienvenu Sekongo — Développeur logiciel',
    description: 'Portfolio de développeur logiciel basé à Abidjan.',
    images: ['/portfolio/portrait.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
}
export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#0A0A0A', userScalable: true }

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Y. Bienvenu Sekongo',
  url: siteUrl,
  jobTitle: 'Développeur logiciel',
  address: { '@type': 'PostalAddress', addressLocality: 'Abidjan', addressCountry: 'CI' },
  sameAs: ['https://github.com/BenSek225', 'https://linkedin.com/in/sek-y-ben'],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr" className="bg-primary"><body className={`${fraunces.variable} ${inter.variable} antialiased`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><SmoothScrollProvider><Header /><SiteAtmosphere />{children}</SmoothScrollProvider><CustomCursor /> <Analytics /></body></html> }
