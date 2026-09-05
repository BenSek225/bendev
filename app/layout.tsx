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
  keywords: [
    // Métiers & rôles
    'développeur logiciel',
    'développeur fullstack',
    'développeur full-stack',
    'développeur web',
    'développeur mobile',
    'ingénieur logiciel',
    'développeur frontend',
    'développeur backend',
    'lead developer',
    'développeur freelance',
    'consultant développeur',
    'CTO',
    'tech lead',
    
    // Technologies frontend
    'React',
    'Next.js',
    'React Native',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Framer Motion',
    'Expo',
    'Redux',
    'React Query',
    
    // Technologies backend & databases
    'Node.js',
    'Express.js',
    'Supabase',
    'PostgreSQL',
    'Firebase',
    'API REST',
    'GraphQL',
    
    // Domaines d\'expertise
    'développement web',
    'développement mobile',
    'applications web',
    'applications mobiles',
    'e-commerce',
    'marketplace',
    'SaaS',
    'fintech',
    'PWA',
    'application progressive',
    'plateforme web',
    'site vitrine',
    
    // Services
    'création site web',
    'développement application mobile',
    'conception interface utilisateur',
    'UI/UX',
    'design web',
    'intégration web',
    'optimisation performance',
    'SEO',
    'responsive design',
    'architecture logicielle',
    'base de données',
    'authentification',
    'paiement en ligne',
    
    // Localisation
    'Abidjan',
    'Côte d\'Ivoire',
    'Afrique',
    'développeur Abidjan',
    'développeur Côte d\'Ivoire',
    'développeur ivoirien',
    'développeur africain',
    'tech Abidjan',
    'startup Abidjan',
    'IT Abidjan',
    'freelance Abidjan',
    
    // Projets & portfolio
    'portfolio développeur',
    'projets web',
    'réalisations',
    'case studies',
    'références développeur',
    'travaux développeur',
    
    // Soft skills & approche
    'solutions digitales',
    'transformation digitale',
    'produits numériques',
    'expérience utilisateur',
    'qualité logicielle',
    'développement agile',
    'freelance',
    'remote',
    'télétravail',
    'mission freelance',
    'projet sur mesure',
    
    // Technologies complémentaires
    'Git',
    'GitHub',
    'Vercel',
    'deployment',
    'CI/CD',
    'Figma',
    'mobile money',
    'Orange Money',
    'MTN MoMo',
    'intégration paiement',
    
    // Secteurs d\'activité
    'tontine digitale',
    'gestion locative',
    'livraison',
    'food delivery',
    'SMS marketing',
    'aviculture',
    'commerce électronique',
    
    // Généraux
    'portfolio',
    'CV développeur',
    'embauche développeur',
    'recrutement tech',
    'développeur disponible',
    'mission CDI',
    'contrat freelance',
    'collaboration tech',
  ],
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

export const viewport: Viewport = { 
  colorScheme: 'dark', 
  themeColor: '#0A0A0A', 
  userScalable: true 
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Y. Bienvenu Sekongo',
  alternateName: 'Bienvenu Sekongo',
  url: siteUrl,
  image: `${siteUrl}/portfolio/portrait.png`,
  jobTitle: 'Développeur logiciel fullstack',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
  description: 'Développeur logiciel fullstack spécialisé en React, Next.js, React Native et Node.js. Expert en création d\'applications web et mobiles.',
  knowsAbout: [
    'React',
    'Next.js',
    'React Native',
    'TypeScript',
    'Node.js',
    'Supabase',
    'PostgreSQL',
    'Développement web',
    'Développement mobile',
    'E-commerce',
    'UI/UX',
  ],
  address: { 
    '@type': 'PostalAddress', 
    addressLocality: 'Abidjan', 
    addressRegion: 'Lagunes',
    addressCountry: 'CI' 
  },
  email: 'sekongobienvenu22@gmail.com',
  telephone: '+225-07-10-50-40-07',
  sameAs: [
    'https://github.com/BenSek225', 
    'https://linkedin.com/in/sek-y-ben',
    'https://wa.me/2250710504007'
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'IMAT Abidjan'
  },
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Développeur logiciel',
    occupationLocation: {
      '@type': 'City',
      name: 'Abidjan'
    },
    skills: 'React, Next.js, React Native, TypeScript, Node.js, Supabase, PostgreSQL, Express.js, Tailwind CSS'
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="bg-primary">
      <body className={`${fraunces.variable} ${inter.variable} antialiased`}>
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
        />
        <SmoothScrollProvider>
          <Header />
          <SiteAtmosphere />
          {children}
        </SmoothScrollProvider>
        <CustomCursor />
        <Analytics />
      </body>
    </html>
  )
}
