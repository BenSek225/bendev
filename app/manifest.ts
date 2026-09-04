import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BenDev — Développeur logiciel',
    short_name: 'BenDev',
    description: 'Portfolio de Y. Bienvenu Sekongo, développeur logiciel basé à Abidjan.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#0A0A0A',
    lang: 'fr',
  }
}
