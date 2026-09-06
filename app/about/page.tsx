'use client'

import Image from 'next/image'
import { BookOpen, Cpu, Download, Dumbbell, Feather, Music, Palette, Plane, Puzzle } from 'lucide-react'
import { motion } from 'framer-motion'
import { ArrowLink, Badge, CTAButton, SectionLabel, StatCounter } from '@/components/portfolio/primitives'
import { Footer } from '@/components/portfolio/footer'
import { fadeUp, scaleIn, staggerContainer, staggerItem } from '@/lib/motion'
import { useState, useEffect } from 'react'

const experiences = [
  { 
    title: 'Lead Full-Stack Developer', 
    period: 'Mai 2025 — Janvier 2026', 
    company: 'Volaille du Bélier / Agro4Life (hyperaccess.com) · Abidjan', 
    bullets: [
      'Développement d\'une marketplace e-commerce complète de vente de produits avicoles.',
      'Conception complète : frontend Next.js, architecture technique et base de données Supabase, jusqu\'au déploiement',
      'Mise en place de l\'authentification et de la gestion des utilisateurs',
      'Développement et intégration d\'API REST',
      'Gestion de projet et coordination des développements'
    ], 
    badges: ['React', 'Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS'] 
  },
  { 
    title: 'Lead Frontend Engineer, SaaS', 
    period: 'Octobre 2023 — Février 2025', 
    company: 'Entreprise E2L · Abidjan', 
    bullets: [
      'Développement d\'applications frontend modernes avec React.',
      'Développement de l\'application mobile TONTINE+ (React Native, Expo, TypeScript)',
      'Intégration d\'interfaces web réactives pour la plateforme GOBLO (React, Tailwind CSS)',
      'Collaboration avec l\'équipe design pour l\'implémentation des maquettes',
      'Optimisation des performances et de l\'expérience utilisateur'
    ], 
    badges: ['React', 'React Native', 'Expo', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma'] 
  },
  { 
    title: 'Développeur Web & Mobile Freelance', 
    period: 'Janvier 2024 — Aujourd\'hui', 
    company: 'Indépendant · Abidjan', 
    bullets: [
      'Conception et développement de solutions web et mobiles sur mesure.',
      'App mobile de gestion locative Locat Mobile : architecture fullstack (React Native, Expo, Supabase, Express.js)',
      'Conception de bases de données, API, systèmes d\'authentification et fonctionnalités métier',
      'Réalisation de projets clients dans les domaines du SaaS, e-commerce et applications métier',
      'Création de sites et applications sur mesure, intégration, maintenance et support technique'
    ], 
    badges: ['React', 'Next.js', 'React Native', 'Expo', 'Supabase', 'Express.js', 'TypeScript'] 
  },
]

const interests = [
  [Palette, 'Art Digital', 'Création d\'œuvres numériques et exploration des technologies créatives'],
  [BookOpen, 'Veille Technologique', 'Suivi des tendances en design et développement web'],
  [Dumbbell, 'Sport', 'Musculation en salle et sport de combat pour se dépasser et garder un bon équilibre physique et mental.'],
  [Plane, 'Voyages', 'Découverte de cultures pour nourrir ma créativité'],
  [Puzzle, 'Jeux d\'échecs', 'Stratégie et réflexion pour développer logique et patience'],
  [Cpu, 'Intelligence Artificielle', 'Exploration des avancées en IA et machine learning'],
  [Music, 'Musique', 'Écoute et découverte pour stimuler l\'inspiration'],
  [Feather, 'Détente', 'Méditation et relaxation pour préserver le bien-être mental'],
] as const

// Images disponibles pour les centres d'intérêt
const bgImages = ['1.png', '2.jpg', '3.jpg', '4.png', '5.jpg', '6.jpg', '6.png', '7.png', '8.png', '9.jpg', '10.jpg', '11.png', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg']

// Composant pour une carte d'intérêt avec image aléatoire rotative
function InterestCard({ icon: Icon, title, description, index }: { icon: any; title: string; description: string; index: number }) {
  const [currentImage, setCurrentImage] = useState('')
  const [nextImage, setNextImage] = useState('')
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Fonction pour obtenir une image aléatoire
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * bgImages.length)
    return `/portfolio/bg-centre/${bgImages[randomIndex]}`
  }

  // Initialisation de l'image au montage
  useEffect(() => {
    setCurrentImage(getRandomImage())
  }, [])

  // Rotation automatique des images
  useEffect(() => {
    // Délai aléatoire entre 10 et 30 secondes (en millisecondes)
    const getRandomDelay = () => Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000

    const rotateImage = () => {
      const newImage = getRandomImage()
      setNextImage(newImage)
      setIsTransitioning(true)
      
      // Après la transition, mettre à jour l'image courante
      setTimeout(() => {
        setCurrentImage(newImage)
        setIsTransitioning(false)
        setNextImage('')
      }, 1000) // Durée de la transition
    }

    const intervalId = setInterval(rotateImage, getRandomDelay())

    return () => clearInterval(intervalId)
  }, [])

  return (
    <motion.div
      variants={staggerItem}
      className="group relative overflow-hidden border border-white/10 bg-elevated p-6 transition duration-300 hover:-translate-y-0.5 hover:border-accent/40"
    >
      {/* Image de fond courante */}
      {currentImage && (
        <div 
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-30'}`}
        >
          <Image
            src={currentImage}
            alt=""
            fill
            className="object-cover"
            style={{ filter: 'grayscale(100%)' }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      )}

      {/* Image de fond suivante (pour la transition) */}
      {nextImage && isTransitioning && (
        <div className="absolute inset-0 z-0 opacity-30 transition-opacity duration-1000">
          <Image
            src={nextImage}
            alt=""
            fill
            className="object-cover"
            style={{ filter: 'grayscale(100%)' }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      )}

      {/* Couche d'assombrissement */}
      <div className="absolute inset-0 z-[1] bg-primary/70" />

      {/* Contenu de la carte */}
      <div className="relative z-10">
        <Icon aria-hidden="true" size={24} className="text-accent" />
        <h3 className="mt-6 font-serif text-xl">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-secondary">{description}</p>
      </div>
    </motion.div>
  )
}

export default function AboutPage() {
  return <main className="bg-primary text-text-primary pt-32 md:pt-40">
    <section className="section-spacing-sm container-portfolio">
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
        <motion.div variants={fadeUp}><SectionLabel index="01">À PROPOS</SectionLabel></motion.div>
        <motion.h1 variants={staggerItem} className="mt-6 max-w-4xl font-serif text-h2 text-balance md:mt-8">Je transforme vos idées complexes en solutions digitales <em className="text-accent">simples et puissantes.</em></motion.h1>
        <motion.p variants={staggerItem} className="mt-6 max-w-2xl text-body-lg text-secondary md:mt-8">Passionné par la création d&apos;expériences numériques exceptionnelles, je combine créativité et expertise technique pour donner vie à vos projets.</motion.p>
      </motion.div>
    </section>

    <section className="container-portfolio grid gap-10 pb-16 md:grid-cols-[minmax(260px,0.8fr)_1.2fr] md:gap-20 md:pb-20">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={scaleIn} className="relative aspect-[4/5] overflow-hidden img-warm"><Image src="/portfolio/portrait.png" alt="Bienvenu Sekongo dans son espace de travail" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" /></motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer} className="flex flex-col justify-center gap-6">
        <motion.h2 variants={staggerItem} className="font-serif text-h2-sm">Développeur Web & Mobile FullStack</motion.h2>
        <motion.p variants={staggerItem} className="text-secondary">Avec 3+ ans d&apos;expérience, j&apos;ai construit des produits concrets utilisés par de vraies personnes. Du e-commerce surtout, mais aussi des plateformes de communication et des SaaS. Je maîtrise des technologies modernes pour créer des solutions complètes et performantes, du premier pixel au dernier endpoint.</motion.p>
        <motion.p variants={staggerItem} className="text-secondary">Mon approche : comprendre d&apos;abord le problème, puis concevoir la solution la plus simple et la plus robuste possible. Je travaille avec React, Next.js, React Native, Node.js et PostgreSQL (Supabase) pour livrer des produits rapides, accessibles et maintenables.</motion.p>
        <motion.p variants={staggerItem}>Ce qui me différencie ? Je pense à la fois comme un développeur et comme un utilisateur. Chaque décision technique est guidée par une question simple : <em className="font-semibold text-accent">est-ce que ça rend l&apos;expérience meilleure pour la personne qui va l&apos;utiliser ?</em></motion.p>
        <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-6 pt-3"><CTAButton label="ME CONTACTER" href="/contact" /><a href="/mon_cv/Bienvenu_Sekongo_Fullstack_Developer_CV_fr.pdf" download target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-mono text-nav uppercase text-secondary transition-colors hover:text-accent"><Download aria-hidden="true" size={16} /> Télécharger CV</a></motion.div>
      </motion.div>
    </section>

    <section className="border-y border-white/10 bg-elevated"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="container-portfolio grid md:grid-cols-3">{[[8, 'Projets livrés'], [8, 'Clients satisfaits'], [5, 'Apps en production']].map(([target, label], i) => <motion.div key={label} variants={staggerItem} className={`py-12 md:px-10 ${i > 0 ? 'border-t border-white/10 md:border-l md:border-t-0' : ''}`}><StatCounter target={target as number} suffix="+" label={label as string} /></motion.div>)}</motion.div></section>

    <section className="container-portfolio section-spacing-sm"><SectionLabel index="02">EXPÉRIENCE PROFESSIONNELLE</SectionLabel><h2 className="mt-6 max-w-2xl font-serif text-h2 md:mt-8">Mon parcours professionnel.</h2><div className="mt-12 flex flex-col gap-10 md:gap-12">{experiences.map((experience, index) => <motion.article key={experience.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} className="grid gap-7 md:grid-cols-[96px_1fr] md:gap-12"><div className="relative flex md:justify-center"><div className="grid size-8 shrink-0 place-items-center rounded-full bg-accent font-serif text-primary">{index + 1}</div><div className="absolute left-4 top-8 hidden h-[calc(100%+3rem)] border-l border-white/10 md:block" /></div><div className="border-b border-white/10 pb-12"><div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between"><h3 className="font-serif text-h2-sm">{experience.title}</h3><span className="font-mono text-label uppercase text-accent">{experience.period}</span></div><p className="mt-2 text-secondary">{experience.company}</p><ul className="mt-6 flex flex-col gap-3 text-secondary">{experience.bullets.map((bullet) => <li key={bullet} className="flex gap-3"><span className="text-accent">—</span>{bullet}</li>)}</ul><div className="mt-7 flex flex-wrap gap-2">{experience.badges.map((badge) => <Badge key={badge}>{badge}</Badge>)}</div></div></motion.article>)}</div></section>

    <section className="container-portfolio pb-16 md:pb-20"><SectionLabel index="03">FORMATION</SectionLabel><div className="mt-8 divide-y divide-white/10 border-y border-white/10">{[['Master — Ingénierie Cloud & Logiciel', 'IMAT Abidjan · En cours (en ligne)'], ['Licence — Informatique, Génie Logiciel', 'IMAT Abidjan · 2024'], ['Baccalauréat — Série D', 'Institut Saint Silver (Yopougon) · 2019']].map(([degree, school]) => <div key={degree} className="flex flex-col gap-2 py-5 md:flex-row md:justify-between"><strong>{degree}</strong><span className="text-secondary">{school}</span></div>)}</div></section>

    <section className="container-portfolio pb-16 md:pb-20">
      <SectionLabel index="04">CENTRES D&apos;INTÉRÊT</SectionLabel>
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={staggerContainer} 
        className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
      >
        {interests.map(([Icon, title, description], index) => (
          <InterestCard 
            key={title} 
            icon={Icon} 
            title={title} 
            description={description} 
            index={index}
          />
        ))}
      </motion.div>
    </section>

    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="container-portfolio mb-16 bg-elevated px-6 py-12 text-center md:mb-20 md:px-24 md:py-16"><blockquote className="mx-auto max-w-4xl font-serif text-2xl italic leading-tight md:text-4xl">"Le design n&apos;est pas seulement ce à quoi ça ressemble et ce que ça fait. Le design, c&apos;est comment ça fonctionne."<footer className="mt-6 font-mono text-label not-italic uppercase text-accent">— Steve Jobs</footer></blockquote><p className="mx-auto mt-8 max-w-2xl text-secondary">Cette citation guide mon approche : créer des expériences qui sont non seulement belles, mais aussi fonctionnelles et centrées sur l&apos;utilisateur.</p></motion.section>
    <Footer />
  </main>
}
