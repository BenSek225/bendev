import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BenDev — Bienvenu Sekongo | Développeur Logiciel',
    short_name: 'BenDev',
    description: 'Portfolio de Y. Bienvenu Sekongo, développeur fullstack spécialisé en React, Next.js et React Native. Basé à Abidjan, Côte d\'Ivoire. Création d\'applications web et mobiles performantes.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#0A0A0A',
    orientation: 'portrait-primary',
    lang: 'fr',
    dir: 'ltr',
    categories: ['business', 'productivity', 'portfolio'],
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
