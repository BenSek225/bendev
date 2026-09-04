export interface Project {
  slug: string
  title: string
  category: 'Web' | 'Mobile'
  year: number
  shortDescription: string
  role?: string
  about: string
  features: string[]
  challenges: string[]
  stats?: { label: string; value: string; accent?: boolean }[]
  details: {
    duration?: string
    client: string
    siteUrl?: string
    githubUrl?: string
  }
  technologies: string[]
  gallery?: { src: string; alt: string }[]
  cover?: string
  personalizations?: 'editorial' | 'entrepreneur' | 'dual-interface' | 'qr-focus'
}

export const projects: Record<string, Project> = {
  'la-maison-arlett': {
    slug: 'la-maison-arlett',
    title: 'La Maison Arlett',
    category: 'Web',
    year: 2024,
    shortDescription: 'Site vitrine et e-commerce pour une marque premium de polos à Abidjan.',
    about: 'Site développé pour Les Ateliers Arlett, marque premium de polos basée à Abidjan, dirigée par Arlette Soromou Konan.',
    features: [
      'Catalogue produits par collection, coloris et taille',
      'Fiches produits détaillées avec galerie photo haute résolution',
      'Panier et tunnel de commande simplifié',
      'Présentation de la marque et de son savoir-faire artisanal',
      'Formulaire de contact et demandes sur-mesure',
      'Design responsive premium, pensé pour la mise en valeur du produit',
    ],
    challenges: [
      'Optimisation du chargement d’images produit haute résolution sans sacrifier la performance',
      'Construction d’un design system fidèle à l’identité visuelle premium de la marque',
    ],
    stats: [],
    details: {
      client: 'Les Ateliers Arlett',
      siteUrl: 'lamaisonarlett.com',
    },
    technologies: [],
    personalizations: 'editorial',
  },
  'ayi-premium': {
    slug: 'ayi-premium',
    title: 'Ayi Premium',
    category: 'Web',
    year: 2026,
    shortDescription: "Plateforme de commande et livraison d'attiéké à Abidjan.",
    role: 'Cofondateur & CTO',
    about: 'Ayi Premium est une startup de livraison d\'attiéké à Abidjan que j\'ai cofondée en tant que CTO. La plateforme web permet aux clients de commander en ligne et suit l\'ensemble du parcours de livraison. J\'y pilote l\'ensemble de l\'architecture technique, de la stack applicative aux campagnes d\'acquisition.',
    features: [
      'Commande en ligne avec catalogue produits',
      'Suivi de commande',
      'Intégration de campagnes marketing (Meta Ads) pour l\'acquisition client',
    ],
    challenges: [
      'Optimisation des performances de la landing page (temps de chargement critique pour la conversion depuis les publicités)',
    ],
    stats: [],
    details: {
      duration: '[À COMPLÉTER]',
      client: 'Ayi Premium (cofondateur)',
      siteUrl: 'ayipremium.com',
    },
    technologies: ['Next.js', 'Supabase', 'Vercel'],
    personalizations: 'entrepreneur',
  },
  'locat-mobile': {
    slug: 'locat-mobile',
    title: 'Locat Mobile',
    category: 'Mobile',
    year: 2026,
    shortDescription: 'Application de gestion locative pour propriétaires et locataires en Côte d\'Ivoire.',
    about: 'Locat Mobile digitalise la gestion locative en Côte d\'Ivoire. L\'application connecte gestionnaires immobiliers et locataires autour du suivi des structures, logements, contrats, paiements et quittances — avec une interface manager complète et une interface locataire simplifiée.',
    features: [
      'Gestion des structures, logements et locataires',
      'Suivi des contrats et des paiements',
      'Génération de quittances (conversion automatique des montants en lettres)',
      'Rappels automatiques et invitations',
      'Interface manager (drawer animé) et interface locataire (onglets)',
    ],
    challenges: [
      'Architecture avec Context API et couche de services Supabase dédiée',
      'Système de génération PDF avec modèle Période × Périmètre',
    ],
    stats: [],
    details: {
      duration: '[À COMPLÉTER]',
      client: 'Projet personnel',
    },
    technologies: ['React Native', 'Expo', 'NativeWind', 'Supabase', 'TypeScript'],
    personalizations: 'dual-interface',
  },
  'tontine-plus': {
    slug: 'tontine-plus',
    title: 'Tontine+',
    category: 'Mobile',
    year: 2024,
    shortDescription: 'App mobile pour digitaliser et sécuriser les tontines en Côte d\'Ivoire.',
    about: 'Une tontine est un système d\'épargne collective très répandu en Côte d\'Ivoire, où un groupe cotise régulièrement et chaque membre reçoit la cagnotte à tour de rôle — mais la confiance et la transparence y reposent souvent sur du papier et de la mémoire. Tontine+ digitalise et sécurise cette pratique. En tant que Lead Frontend Engineer SaaS, j\'ai développé une solution mobile complète combinant création de groupes, gestion des membres, intégration Mobile Money, QR codes pour les transactions et historique détaillé.',
    features: [
      'Onboarding guidé avec explication des tontines + intégration bancaire',
      'Interface Gestionnaire (Tontinier) : création de groupes, gestion des membres',
      'Multiples types de tontines : Pénalité, Choix, 2 bras, Achat d\'article, En ligne',
      'Intégration Mobile Money pour les cotisations',
      'Génération de QR codes par transaction avec option de partage',
      'Historique détaillé des transactions (filtres, recherche)',
      'Dashboard : solde total, progression mensuelle, statistiques',
    ],
    challenges: [
      'Conception UX pour utilisateurs non-tech en contexte d\'Afrique émergente',
      'Intégration sécurisée des APIs Mobile Money (Orange Money, MTN MoMo, Moov Money)',
      'Calcul automatique des ordres de prise et transitions de statuts',
      'Support multi-devises (FCFA) et optimisation pour réseaux lents',
    ],
    stats: [
      { label: 'Écrans', value: '25+' },
      { label: 'Composants React Native', value: '64' },
      { label: 'Hooks optimisés', value: '32' },
    ],
    details: {
      duration: 'En cours de développement',
      client: 'Projet personnel',
      siteUrl: 'tontine-plus.app',
    },
    technologies: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Mobile Money API', 'QR Code Generation', 'Firebase', 'NativeWind'],
    personalizations: 'qr-focus',
  },
  'volaille-du-belier': {
    slug: 'volaille-du-belier',
    title: 'Volaille du Bélier',
    category: 'Web',
    year: 2024,
    shortDescription: 'Marketplace e-commerce et gestion complète pour la vente de produits avicoles en Côte d\'Ivoire.',
    about: 'Plateforme e-commerce et de gestion complète pour la vente et distribution de produits avicoles en Côte d\'Ivoire avec 5 interfaces (Client, Boutique, Franchise, Usine, Super Admin).',
    features: [
      'Marketplace clients avec panier intelligent',
      'Paiements multiples (Orange Money, MTN MoMo, Moov, Wave, Visa, Espèces)',
      'Dashboard boutiques avec gestion de stocks temps réel',
      'Interface Super Admin pour orchestration',
      'Gestion des commandes automatisée',
      'Notifications temps réel',
    ],
    challenges: [
      'Architecture à 5 interfaces/rôles avec permissions complexes',
      'Optimisation React Query pour milliers de produits',
      'Gestion d\'états complexes avec Redux',
      'Intégration multi-paiements sécurisée',
      'Sécurité RLS Supabase par rôle',
    ],
    stats: [
      { label: 'Fichiers projet', value: '289', accent: true },
      { label: 'Composants', value: '75' },
      { label: 'Hooks', value: '39' },
      { label: 'Pages', value: '59' },
    ],
    details: {
      duration: '6-7 mois',
      client: 'Agro4Life',
      siteUrl: 'agro4life-web.vercel.app',
    },
    technologies: ['Next.js 16', 'React 19', 'TypeScript 5', 'Tailwind CSS 4', 'Supabase', 'PostgreSQL', 'React Query', 'React Hook Form', 'Zod', 'Radix UI', 'Recharts'],
  },
  'repertoire-plus': {
    slug: 'repertoire-plus',
    title: 'Répertoire+',
    category: 'Web',
    year: 2024,
    shortDescription: 'Plateforme SaaS de communication SMS et campagnes marketing pour régions à accès internet limité.',
    about: 'Plateforme centralisée de communication SMS et gestion de campagnes pour les régions à accès internet limité, combinant gestion de contacts, SMS en masse, abonnements et rapports.',
    features: [
      'Gestion centralisée des contacts avec import Excel',
      'SMS groupés avec planification',
      'Abonnements multi-tiers avec paiements électroniques',
      'Reçus électroniques automatiques',
      'Formations en ligne intégrées',
      'Rapports détaillés par campagne',
    ],
    challenges: [
      'Intégration d\'APIs SMS fiables pour connectivité limitée',
      'Architecture backend scalable pour millions de SMS',
      'Campagnes massivement parallèles sans surcharge',
    ],
    stats: [
      { label: 'Fichiers projet', value: '187' },
      { label: 'Composants', value: '52' },
      { label: 'Endpoints API', value: '42' },
      { label: 'Capacité SMS/jour', value: 'Millions' },
    ],
    details: {
      duration: '2 mois',
      client: 'Projet personnel',
      siteUrl: 'repertoire-plus.firebaseapp.com',
    },
    technologies: ['React', 'Express.js', 'Node.js', 'Firebase', 'Stripe', 'Render', 'Cloud Functions'],
  },
  'oba-lii': {
    slug: 'oba-lii',
    title: 'Ôba-lii',
    category: 'Mobile',
    year: 2024,
    shortDescription: 'Application mobile de commande et livraison de repas avec suivi temps réel (Vendue).',
    about: 'Application mobile complète de commande et livraison de repas avec suivi temps réel, paiements sécurisés et trois interfaces distinctes (Client, Livreur, Restaurant). Projet personnel vendu avec succès.',
    features: [
      'Navigation restaurants avec menu détaillé',
      'Panier intelligent avec suggestions',
      'Suivi temps réel avec notifications push',
      'Tracking géolocalisation livreur (Google Maps)',
      'Paiements sécurisés multi-méthodes',
      'Interfaces Livreur et Restaurant dédiées',
      'Support 10 000+ utilisateurs simultanés',
    ],
    challenges: [
      'Architecture cross-platform à 3 rôles distincts',
      'Synchronisation temps réel Firestore',
      'Intégration Google Maps avec tracking live',
      'Notifications push iOS/Android fiables',
    ],
    stats: [
      { label: 'Fichiers projet', value: '254', accent: true },
      { label: 'Composants', value: '89' },
      { label: 'Écrans', value: '67' },
      { label: 'Utilisateurs simultanés', value: '10k+' },
    ],
    details: {
      duration: 'Développement complet',
      client: 'Projet personnel (Vendu)',
      siteUrl: 'oba-lii.app',
    },
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Google Maps API', 'Stripe & PayPal', 'NativeWind', 'Expo'],
  },
}

export function getProject(slug: string): Project | null {
  return projects[slug] || null
}

export function getAllProjectSlugs(): string[] {
  return Object.keys(projects)
}
