# 🚀 BenDev Portfolio

> **Portfolio moderne et sécurisé de Y. Bienvenu Sekongo, développeur logiciel fullstack**

[![Next.js](https://img.shields.io/badge/Next.js-16.3.3-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Security](https://img.shields.io/badge/Security-A+-success)](https://github.com/BenSek225/bendev/blob/main/SECURITY.md)

**🌍 Live:** [bendev.site](https://bendev.site)  
**📧 Contact:** [sekongobienvenu22@gmail.com](mailto:sekongobienvenu22@gmail.com)  
**🔗 LinkedIn:** [Bienvenu Y. Sekongo](https://linkedin.com/in/sek-y-ben)

---

## 📋 Table des Matières

- [🎯 Vue d'ensemble](#-vue-densemble)
- [✨ Fonctionnalités](#-fonctionnalités)
- [🛠️ Stack Technique](#️-stack-technique)
- [🔒 Sécurité](#-sécurité)
- [🎨 Design System](#-design-system)
- [📊 Performance & SEO](#-performance--seo)
- [🚀 Installation](#-installation)
- [📁 Structure du Projet](#-structure-du-projet)
- [🌐 Déploiement](#-déploiement)
- [🤝 Contribution](#-contribution)
- [📄 Licence](#-licence)

---

## 🎯 Vue d'ensemble

**BenDev** est mon portfolio professionnel, conçu comme une vitrine moderne de mes compétences en développement logiciel. Il présente mes réalisations, mon expertise technique et ma vision du développement web & mobile.

### 🎪 Projets Phares Présentés

- **🏪 La Maison Arlett** - Mini-ERP Fashion & E-commerce Premium
- **🍛 Ayi Premium** - Plateforme foodtech e-commerce (Cofondateur & CTO)
- **🏠 Locat Mobile** - Application gestion locative mobile
- **💰 Tontine+** - Digitalisation des tontines en Côte d'Ivoire
- **🐔 Volaille du Bélier** - Marketplace e-commerce avicole (5 interfaces)
- **📱 Répertoire+** - Plateforme SaaS SMS marketing
- **🍔 Ôba-lii** - App food delivery 3 interfaces (Vendue)

---

## ✨ Fonctionnalités

### 🎨 **Interface & UX**
- **Design moderne** avec palette harmonieuse (orange/noir/beige)
- **Animations fluides** powered by Framer Motion
- **Responsive design** mobile-first optimisé
- **Custom cursor** interactif sur desktop
- **Smooth scrolling** avec Lenis
- **Dark theme** élégant et professionnel

### 📱 **Navigation & Contenu**
- **Menu burger mobile** avec liens visibles
- **7 projets détaillés** avec galleries d'images
- **Page About** avec centres d'intérêt animés
- **Page Skills** interactive avec progression bars
- **Contact** avec liens directs et FAQ
- **CV téléchargeable** (FR/EN)

### 🔍 **SEO & Performance**
- **SEO complet** avec 130+ keywords ciblés
- **Open Graph** et Twitter Cards
- **JSON-LD structured data** (Person schema)
- **Sitemap dynamique** avec tous les projets
- **PWA ready** avec manifest complet
- **Page 404** personnalisée

---

## 🛠️ Stack Technique

### 🎯 **Frontend Core**
```json
{
  "framework": "Next.js 16.3.3 (App Router)",
  "library": "React 19",
  "language": "TypeScript 5.7.3",
  "styling": "Tailwind CSS 4.3.3"
}
```

### ⚡ **Performance & Animation**
- **Framer Motion** 13.2.0 - Animations fluides
- **Lenis** 1.3.26 - Smooth scrolling
- **@vercel/analytics** - Monitoring performance
- **Image optimization** - WebP/AVIF automatique

### 🎨 **UI Components**
- **Shadcn/UI** + Radix UI - Composants accessibles
- **Lucide React** - Icônes modernes
- **Custom components** - Design system unifié
- **CSS Grid/Flexbox** - Layout responsive

### 🛡️ **Sécurité & Outils**
- **Security headers** - CSP, HSTS, XSS protection
- **TypeScript strict** - Type safety
- **ESLint** - Code quality
- **Git hooks** - Pre-commit checks

---

## 🔒 Sécurité

### 🛡️ **Headers de Sécurité Implémentés**

```typescript
// next.config.mjs
headers: [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://vitals.vercel-insights.com; frame-ancestors 'none';"
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' }
]
```

### 🔐 **Mesures de Protection**

- **✅ Audit de dépendances** - 0 vulnérabilité détectée
- **✅ TypeScript strict** - Type safety complet
- **✅ Input validation** - Sanitization des données
- **✅ Environment variables** - Configuration sécurisée
- **✅ Image optimization** - Formats sécurisés
- **✅ Error boundaries** - Gestion d'erreurs robuste

### 📋 **Scripts de Sécurité**

```bash
npm run audit          # Audit des dépendances
npm run security-check # Vérification complète
npm run type-check     # Vérification TypeScript
npm run prebuild       # Checks avant build
```

---

## 🎨 Design System

### 🎨 **Palette de Couleurs**

```css
:root {
  --primary: #0A0A0A;     /* Noir profond */
  --elevated: #141414;     /* Gris foncé */
  --accent: #E6572A;       /* Orange signature */
  --text-primary: #F5F2ED; /* Blanc cassé */
  --secondary: #8A8580;    /* Gris moyen */
}
```

### 📱 **Responsive Design**

```css
/* Breakpoints */
mobile: 320px - 767px    /* Mobile first */
tablet: 768px - 1023px   /* Tablette */
desktop: 1024px+         /* Desktop */

/* Container adaptatif */
.container-portfolio {
  width: 100%;
  max-width: 1440px;
  padding-inline: 20px; /* Mobile */
  padding-inline: 32px; /* Tablet */
  padding-inline: 64px; /* Desktop */
}
```

### 🎭 **Animations & Interactions**

- **Hover effects** sur tous les éléments interactifs
- **Page transitions** fluides avec Framer Motion
- **Staggered animations** pour les listes
- **Custom cursor** qui réagit aux hover states
- **Smooth scroll** avec momentum naturel

---

## 📊 Performance & SEO

### ⚡ **Optimisations Performance**

- **Image optimization** - WebP/AVIF automatique
- **Code splitting** - Chargement à la demande
- **Font optimization** - Google Fonts préchargées
- **Bundle analysis** - Taille optimisée
- **Lazy loading** - Images et composants

### 🔍 **SEO Complet**

```typescript
// Metadata optimisées
title: "Y. Bienvenu Sekongo — Développeur logiciel"
description: "Portfolio de Y. Bienvenu Sekongo, développeur logiciel basé à Abidjan..."
keywords: [
  "développeur logiciel", "développeur fullstack", "React", "Next.js",
  "TypeScript", "Abidjan", "Côte d'Ivoire", "freelance"
  // + 130 autres keywords ciblés
]
```

### 📈 **Structured Data (JSON-LD)**

```json
{
  "@type": "Person",
  "name": "Y. Bienvenu Sekongo",
  "jobTitle": "Développeur logiciel fullstack",
  "url": "https://bendev.site",
  "knowsAbout": ["React", "Next.js", "React Native", "TypeScript"],
  "address": {
    "addressLocality": "Abidjan",
    "addressCountry": "CI"
  }
}
```

---

## 🚀 Installation

### 📋 **Prérequis**

- **Node.js** ≥ 18.x
- **npm** ou **yarn**
- **Git**

### ⚙️ **Installation Locale**

```bash
# 1. Cloner le repository
git clone https://github.com/BenSek225/bendev.git
cd bendev

# 2. Installer les dépendances
npm install

# 3. Configurer l'environnement
cp .env.example .env.local
# Éditer .env.local avec vos valeurs

# 4. Lancer en développement
npm run dev

# 5. Ouvrir dans le navigateur
# http://localhost:3000
```

### 🔒 **Scripts Disponibles**

```bash
npm run dev           # Développement
npm run build         # Build de production
npm run start         # Serveur de production
npm run lint          # Linting du code
npm run type-check    # Vérification TypeScript
npm run security-check # Audit sécurité complet
npm run audit         # Audit des dépendances
```

---

## 📁 Structure du Projet

```
bendev/
├── 📁 app/                    # Pages Next.js (App Router)
│   ├── 📄 layout.tsx         # Layout racine + SEO
│   ├── 📄 page.tsx           # Page d'accueil
│   ├── 📄 globals.css        # Styles globaux + utilities
│   ├── 📁 about/             # Page À propos
│   ├── 📁 skills/            # Page Compétences
│   ├── 📁 projects/          # Pages projets
│   │   ├── 📄 page.tsx       # Liste des projets
│   │   └── 📁 [slug]/        # Détail projet dynamique
│   ├── 📁 contact/           # Page contact
│   └── 📁 mentions-legales/   # Mentions légales
│
├── 📁 components/             # Composants React
│   ├── 📁 portfolio/         # Composants spécifiques
│   │   ├── 📄 header.tsx     # Navigation principale
│   │   ├── 📄 footer.tsx     # Footer
│   │   ├── 📄 primitives.tsx # Composants de base
│   │   └── 📄 *.tsx          # Autres composants
│   └── 📁 ui/                # Composants UI (Shadcn)
│
├── 📁 data/                  # Données du site
│   ├── 📄 projects.ts        # Base de données projets
│   └── 📄 site.ts           # Configuration site
│
├── 📁 lib/                   # Utilitaires
│   ├── 📄 motion.ts         # Animations Framer Motion
│   └── 📄 utils.ts          # Fonctions utilitaires
│
├── 📁 public/                # Assets statiques
│   ├── 📁 portfolio/        # Images projets
│   ├── 📁 mon_cv/          # CV téléchargeables
│   ├── 📄 icon.png         # Favicon
│   └── 📄 *.png, *.svg     # Autres assets
│
├── 📄 next.config.mjs        # Configuration Next.js + Sécurité
├── 📄 tailwind.config.js     # Configuration Tailwind
├── 📄 tsconfig.json         # Configuration TypeScript
├── 📄 package.json          # Dépendances + scripts
├── 📄 .env.example          # Template environnement
├── 📄 SECURITY.md           # Politique de sécurité
├── 📄 README.md             # Cette documentation
└── 📄 .gitignore           # Fichiers ignorés Git
```

### 🗂️ **Organisation des Composants**

```typescript
// components/portfolio/primitives.tsx - Composants de base
export { Badge, CTAButton, SectionLabel, StatCounter, ProgressBar, ArrowLink }

// components/portfolio/ - Composants spécialisés
- header.tsx          # Navigation + menu mobile
- footer.tsx          # Footer avec liens
- custom-cursor.tsx   # Curseur personnalisé
- ambient-effects.tsx # Effets visuels
- site-atmosphere.tsx # Ambiance générale
```

---

## 🌐 Déploiement

### 🚀 **Déploiement Vercel (Recommandé)**

```bash
# 1. Installer Vercel CLI
npm i -g vercel

# 2. Login Vercel
vercel login

# 3. Déployer
vercel --prod

# 4. Configurer le domaine
# Dashboard Vercel > Settings > Domains > Add bendev.site
```

### ⚙️ **Variables d'Environnement Vercel**

```env
NEXT_PUBLIC_SITE_URL=https://bendev.site
NEXT_PUBLIC_SITE_NAME=BenDev
NEXT_PUBLIC_AUTHOR_NAME=Y. Bienvenu Sekongo
NEXT_PUBLIC_AUTHOR_EMAIL=sekongobienvenu22@gmail.com
```

### 🔧 **Configuration DNS**

```dns
# Enregistrements DNS pour bendev.site
A     @     76.76.19.61       # Vercel IP
CNAME www   bendev.site.       # WWW redirect
TXT   @     "v=spf1 include:_spf.vercel.com ~all"  # SPF
```

### 📊 **Monitoring Post-Déploiement**

- **Vercel Analytics** - Performance monitoring
- **Core Web Vitals** - Métriques utilisateur
- **Error tracking** - Suivi des erreurs
- **Security headers** - Validation sécurité

---

## 🤝 Contribution

### 🔄 **Workflow de Contribution**

```bash
# 1. Fork le project
git clone https://github.com/BenSek225/bendev.git

# 2. Créer une branche
git checkout -b feature/amazing-feature

# 3. Commit les changements
git commit -m 'Add: amazing feature'

# 4. Push vers la branche
git push origin feature/amazing-feature

# 5. Ouvrir une Pull Request
```

### 📝 **Standards de Code**

- **TypeScript strict** - Types requis partout
- **ESLint + Prettier** - Formatage automatique
- **Conventional commits** - Messages standardisés
- **Component documentation** - Props et usage
- **Security first** - Audit avant merge

### 🧪 **Tests & Quality**

```bash
# Vérifications avant commit
npm run type-check    # TypeScript
npm run lint         # ESLint
npm run security-check # Sécurité
npm run build        # Build success
```

---

## 📊 Métriques & Analytics

### 📈 **Performance Metrics**

- **First Contentful Paint** < 1.5s
- **Largest Contentful Paint** < 2.5s
- **Cumulative Layout Shift** < 0.1
- **Time to Interactive** < 3s
- **SEO Score** 100/100

### 🔍 **SEO Coverage**

- **130+ keywords** ciblés
- **7 pages indexées** + projets dynamiques
- **Structured data** complet
- **Open Graph** + Twitter Cards
- **Sitemap XML** automatique

---

## 🎯 Roadmap & Évolutions

### 🔜 **Prochaines Fonctionnalités**

- [ ] **Blog technique** avec articles
- [ ] **Multilingue** (FR/EN)
- [ ] **Mode sombre/clair** toggle
- [ ] **Animations 3D** avec Three.js
- [ ] **Contact form** avec backend
- [ ] **Newsletter** signup
- [ ] **A11y improvements** WCAG 2.1
- [ ] **Performance optimizations**

### 🎨 **Améliorations Design**

- [ ] **Micro-interactions** avancées
- [ ] **Loading states** sophistiqués
- [ ] **Error boundaries** avec retry
- [ ] **Skeleton loaders** pour UX
- [ ] **Gesture support** mobile

---

## 📞 Contact & Support

### 👨‍💻 **Développeur**

**Y. Bienvenu Sekongo**  
🌍 **Portfolio:** [bendev.site](https://bendev.site)  
📧 **Email:** [sekongobienvenu22@gmail.com](mailto:sekongobienvenu22@gmail.com)  
🔗 **LinkedIn:** [sek-y-ben](https://linkedin.com/in/sek-y-ben)  
🐙 **GitHub:** [@BenSek225](https://github.com/BenSek225)  
📱 **WhatsApp:** [+225 07 10 50 40 07](https://wa.me/2250710504007)

### 🌍 **Localisation**

📍 **Basé à Abidjan, Côte d'Ivoire**  
🌐 **Disponible pour missions remote**  
⏰ **Timezone:** GMT+0 (UTC+0)

---

## 📄 Licence

```
MIT License

Copyright (c) 2025 Y. Bienvenu Sekongo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

**🚀 Made with ❤️ in Abidjan, Côte d'Ivoire**

[![Next.js](https://img.shields.io/badge/Powered%20by-Next.js-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com/)
[![TypeScript](https://img.shields.io/badge/Built%20with-TypeScript-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

</div>