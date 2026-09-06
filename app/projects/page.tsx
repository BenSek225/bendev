'use client'

import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLink, Badge, CTAButton, SectionLabel } from '@/components/portfolio/primitives'
import { Footer } from '@/components/portfolio/footer'
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion'

const projects = [
  { number: '01', slug: 'la-maison-arlett', title: 'La Maison Arlett', category: 'Web', badge: 'E-commerce premium', description: 'Site vitrine et e-commerce pour une marque premium de polos à Abidjan.', image: '/portfolio/cover-arlett.png' },
  { number: '02', slug: 'ayi-premium', title: 'Ayi Premium', category: 'Web', badge: 'Livraison', description: "Plateforme de commande et livraison d'attiéké à Abidjan, cofondée en tant que CTO.", image: '/portfolio/cover-ayi.png' },
  { number: '03', slug: 'locat-mobile', title: 'Locat Mobile', category: 'Mobile', badge: 'Gestion locative', description: 'Application de gestion locative pour propriétaires et locataires en Côte d’Ivoire.', image: '/portfolio/cover-locat.png' },
  { number: '04', slug: 'tontine-plus', title: 'Tontine+', category: 'Mobile', badge: 'Fintech', description: 'App mobile pour digitaliser et sécuriser les tontines en Côte d’Ivoire.', image: '/portfolio/cover-tontine.png' },
  { number: '05', slug: 'volaille-du-belier', title: 'Volaille du Bélier', category: 'Web', badge: 'Marketplace', description: 'Marketplace e-commerce et gestion complète pour la vente de produits avicoles, 5 interfaces.', image: '/portfolio/cover-volaille.png' },
  { number: '06', slug: 'repertoire-plus', title: 'Répertoire+', category: 'Web', badge: 'SaaS & SMS', description: 'Plateforme SaaS de communication SMS et campagnes marketing pour régions à accès internet limité.', image: '/portfolio/cover-repertoire.png' },
  { number: '07', slug: 'oba-lii', title: 'Ôba-lii', category: 'Mobile', badge: 'Food delivery', description: 'App mobile de commande et livraison de repas avec suivi temps réel.', image: '/portfolio/cover-oba.png' },
]

const filters = ['Tous les projets', 'Développement web', 'Développement mobile'] as const

type Filter = (typeof filters)[number]

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.article layout variants={staggerItem} initial="hidden" animate="visible" exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }} className="group flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden bg-elevated">
        <Image src={project.image} alt={`Aperçu du projet ${project.title}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="img-warm object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/15" />
        <span className="absolute left-4 top-4 font-serif text-3xl text-text-primary">{project.number}</span>
      </div>
      <div className="flex flex-1 flex-col gap-4 border-b border-white/10 py-6">
        <div className="flex items-center justify-between gap-4"><Badge>{project.category}</Badge><span className="font-mono text-label uppercase text-secondary">{project.badge}</span></div>
        <h2 className="font-serif text-3xl text-balance">{project.title}</h2>
        <p className="max-w-md leading-relaxed text-secondary">{project.description}</p>
        <div className="mt-auto pt-3"><ArrowLink label="Voir le projet" href={`/projects/${project.slug}`} /></div>
      </div>
    </motion.article>
  )
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('Tous les projets')
  const visibleProjects = projects.filter((project) => activeFilter === 'Tous les projets' || project.category === (activeFilter === 'Développement web' ? 'Web' : 'Mobile'))

  return (
    <main className="bg-primary text-text-primary">
      <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-32 md:pb-20 md:pt-40 lg:pt-52">
        <div className="hero-noise pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="container-portfolio relative"><SectionLabel index="01">Projets</SectionLabel><motion.div variants={fadeUp} initial="hidden" animate="visible"><h1 className="mt-6 max-w-4xl font-serif text-hero-sm leading-[1.08] text-balance md:mt-8 md:text-hero-md lg:text-hero">Des projets réalisés pour avoir un <em className="text-accent">impact.</em></h1><p className="mt-6 max-w-xl text-body-lg leading-relaxed text-secondary md:mt-8">Une sélection de mes réalisations récentes en développement web, applications mobiles et solutions fullstack.</p></motion.div></div>
      </section>
      <section className="section-spacing-sm"><div className="container-portfolio"><div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-6"><p className="font-mono text-label uppercase text-secondary">Filtrer la sélection</p><div role="tablist" aria-label="Filtrer les projets" className="flex flex-wrap gap-2">{filters.map((filter) => <button key={filter} type="button" role="tab" aria-selected={activeFilter === filter} onClick={() => setActiveFilter(filter)} className={`rounded-full border px-4 py-3 font-mono text-label uppercase transition-colors ${activeFilter === filter ? 'border-accent bg-accent text-primary' : 'border-white/15 text-secondary hover:border-accent hover:text-text-primary'}`}>{filter}</button>)}</div></div><motion.div layout variants={staggerContainer} initial="hidden" animate="visible" className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3"><AnimatePresence mode="popLayout">{visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</AnimatePresence></motion.div></div></section>
      <section className="relative isolate overflow-hidden border-t border-white/10 py-16 md:py-20"><Image src="/portfolio/contact.png" alt="Espace architectural sombre pour démarrer un projet" fill sizes="100vw" className="img-warm absolute inset-0 -z-20 object-cover" /><div className="absolute inset-0 -z-10 bg-primary/80" aria-hidden="true" /><div className="hero-noise pointer-events-none absolute inset-0 -z-10 opacity-20" aria-hidden="true" /><div className="container-portfolio relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between"><h2 className="max-w-2xl font-serif text-h2-sm text-balance md:text-h2">Vous avez un projet en tête&nbsp;?</h2><CTAButton label="Discutons de votre projet" href="/contact" /></div></section>
      <Footer />
    </main>
  )
}
