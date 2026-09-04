'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Badge, CTAButton, ProgressBar, SectionLabel, StatCounter } from '@/components/portfolio/primitives'
import { Footer } from '@/components/portfolio/footer'
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion'
import { useState } from 'react'

const tabs = ['LANGAGES', 'FRAMEWORKS', 'OUTILS & SERVICES'] as const
const languages = [
  ['HTML/CSS', 90, 'Expert'], ['JavaScript', 85, 'Avancé'], ['TypeScript', 80, 'Avancé'],
  ['SQL', 78, 'Avancé'], ['Python', 50, 'Débutant'], ['Dart', 45, 'Débutant'],
  ['JSON / REST', 86, 'Avancé'], ['Responsive Design', 88, 'Avancé'],
] as const
const frameworks = ['React', 'Next.js', 'Vue.js', 'Node.js', 'React Native', 'Expo', 'Express.js', 'NestJS', 'Django', 'Tailwind CSS', 'Framer Motion', 'Vite', 'NativeWind']
const tools = [
  'Git', 'GitHub', 'Outils AI', 'Claude Code', 'CI/CD', 'Vercel', 'Firebase Hosting',
  'Supabase', 'PostgreSQL', 'Figma', 'Postman', 'Sentry', 'Jest', 'Playwright',
  'Linux', 'REST APIs', 'Row Level Security', 'Webhooks', 'Authentification',
  'Async Storage', 'Context API', 'EAS Build', 'Store deployment',
]
const certifications = [
  ['Certified Full Stack Developer Curriculum', 'freeCodeCamp', '2024'],
  ['React Developer Certification', 'Meta', '2024'],
  ['A2 English for Developers (Beta)', 'freeCodeCamp', '2024'],
  ['Free Foundational C# with Microsoft', 'Microsoft', '2023'],
  ['Responsive Web Design', 'freeCodeCamp', '2023'],
  ['Front End Development Libraries', 'freeCodeCamp', '2023'],
  ['JavaScript Algorithms and Data Structures', 'freeCodeCamp', '2022'],
  ['Legacy Python for Everybody', 'freeCodeCamp', '2022'],
] as const

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('LANGAGES')

  return (
    <main className="bg-primary text-text-primary">
      <section className="container-portfolio section-spacing">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
          <motion.div variants={staggerItem}><SectionLabel index="01">COMPÉTENCES</SectionLabel></motion.div>
          <motion.h1 variants={staggerItem} className="mt-8 max-w-4xl font-serif text-h2 text-balance md:text-[64px] md:leading-[1.05]">Une expertise <em className="text-accent">technique solide</em>, une vision créative.</motion.h1>
          <motion.p variants={staggerItem} className="mt-8 max-w-2xl text-body-lg leading-relaxed text-secondary">Une expertise fullstack combinée à une vision créative pour créer des solutions digitales innovantes, performantes et scalables.</motion.p>
        </motion.div>
      </section>

      <section className="container-portfolio pb-24 md:pb-32">
        <div className="flex flex-wrap gap-3 border-b border-white/10 pb-8">
          {tabs.map((tab) => <button key={tab} type="button" onClick={() => setActiveTab(tab)} className={`cursor-hover-target rounded-full border px-6 py-2 font-mono text-nav uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent ${activeTab === tab ? 'border-accent bg-accent text-text-primary hover:bg-accent-hover hover:text-text-primary' : 'border-white/15 text-secondary hover:text-accent'}`}>{tab}</button>)}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="pt-10">
            {activeTab === 'LANGAGES' && <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid gap-x-16 gap-y-8 md:grid-cols-2">{languages.map(([name, percent, level]) => <motion.div key={name} variants={staggerItem}><div className="mb-3 flex justify-between font-mono text-label uppercase"><span>{name}</span><span className="text-secondary">{level}</span></div><ProgressBar percent={percent} label="" /></motion.div>)}</motion.div>}
            {activeTab === 'FRAMEWORKS' && <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-wrap gap-4">{frameworks.map((item) => <motion.div key={item} variants={staggerItem}><Badge>{item}</Badge></motion.div>)}</motion.div>}
            {activeTab === 'OUTILS & SERVICES' && <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-wrap gap-4">{tools.map((item) => <motion.div key={item} variants={staggerItem}><Badge>{item}</Badge></motion.div>)}</motion.div>}
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="border-t border-white/10 bg-elevated">
        <div className="container-portfolio section-spacing"><SectionLabel index="02">CERTIFICATIONS</SectionLabel><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={staggerContainer} className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{certifications.map(([title, issuer, year]) => <motion.article key={title} variants={staggerItem} className="border-t-2 border-accent bg-primary p-6"><h2 className="font-serif text-xl leading-tight">{title}</h2><div className="mt-8 flex justify-between gap-4 font-mono text-label uppercase text-secondary"><span>{issuer}</span><span>{year}</span></div></motion.article>)}</motion.div></div>
      </section>

      <section className="container-portfolio border-b border-white/10 py-20 md:py-28"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3">{[[15, 'Projets réalisés'], [8, 'Clients satisfaits'], [3, "Années d'expérience"]].map(([target, label], index) => <motion.div key={label} variants={staggerItem} className={`py-5 md:px-10 ${index > 0 ? 'border-t border-white/10 md:border-l md:border-t-0' : ''}`}><StatCounter target={target as number} suffix="+" label={label as string} /></motion.div>)}</motion.div></section>

      <section className="projects-section px-5 py-24 md:py-36"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} className="container-portfolio"><h2 className="max-w-3xl font-serif text-h2 text-text-primary md:text-[64px]">Travaillons ensemble !</h2><p className="mt-6 max-w-xl text-lg leading-relaxed text-text-primary">Mes compétences sont à votre service pour donner vie à vos projets les plus ambitieux.</p><div className="mt-10 flex flex-wrap items-center gap-5"><CTAButton label="DÉMARRER UN PROJET" href="/contact" /><CTAButton label="VOIR MES RÉALISATIONS" href="/projects" variant="outline" /></div></motion.div></section>
      <Footer />
    </main>
  )
}
