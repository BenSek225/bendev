'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { AtSign, GitBranch, Mail, MapPin, MessageCircle, Plus, ArrowUpRight } from 'lucide-react'
import { Footer } from '@/components/portfolio/footer'
import { SectionLabel } from '@/components/portfolio/primitives'
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion'

const contacts = [
  { icon: Mail, label: 'Email', value: 'sekongobienvenu22@gmail.com', href: 'mailto:sekongobienvenu22@gmail.com' },
  { icon: AtSign, label: 'LinkedIn', value: 'Bienvenu Y. Sekongo', href: 'https://linkedin.com/in/sek-y-ben' },
  { icon: GitBranch, label: 'GitHub', value: 'BenSek225', href: 'https://github.com/BenSek225' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+225 07 10 50 40 07', href: 'https://wa.me/2250710504007' },
]

const faqs = [
  ['Quels sont vos tarifs ?', 'Mes tarifs varient en fonction de la complexité du projet, de sa durée et des fonctionnalités requises. Je propose des devis personnalisés après une première consultation pour comprendre vos besoins spécifiques.'],
  ['Quel est votre délai de réalisation ?', 'Le délai dépend de la complexité du projet et de ma charge de travail actuelle. Pour un site vitrine simple, comptez environ quelque jours. Pour des projets plus complexes, le délai peut s’étendre à plusieurs semaines.'],
  ['Travaillez-vous à distance ?', 'Oui, je travaille principalement à distance, ce qui me permet de collaborer avec des clients du monde entier. Je reste disponible pour des visioconférences et une communication régulière tout au long du projet.'],
  ['Proposez-vous des services de maintenance ?', 'Oui, je propose des services de maintenance et de support technique pour les sites et applications que je développe. Je peux également vous former à leur utilisation.'],
]

export default function ContactPage() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <main className="min-h-screen bg-primary text-foreground">
      <header className="container-portfolio flex min-h-[65vh] flex-col justify-end gap-6 py-24 md:min-h-[70vh] md:gap-8 md:py-32">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <SectionLabel index="01">CONTACT</SectionLabel>
          <h1 className="mt-6 max-w-4xl font-serif text-hero-sm leading-[1.05] text-balance md:mt-8 md:text-hero-md lg:text-hero">Un projet en tête<span className="text-accent"> ?</span></h1>
          <p className="mt-6 max-w-xl text-body-lg leading-relaxed text-secondary md:mt-8">Vous avez un projet en tête ? N&apos;hésitez pas à me contacter. Je serais ravi de discuter de vos idées et de voir comment nous pouvons collaborer.</p>
        </motion.div>
      </header>

      <section className="border-y border-white/10 bg-surface py-12 md:py-16">
        <div className="container-portfolio">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer} className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <motion.a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} variants={staggerItem} className="group relative overflow-hidden bg-elevated p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-accent/10 hover:shadow-[0_14px_36px_rgba(0,0,0,0.28)]">
                <span className="mb-10 grid size-11 place-items-center rounded-full border border-accent/40 bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110"><Icon aria-hidden="true" size={20} /></span>
                <div className="flex items-end justify-between gap-4"><div><p className="font-mono text-label uppercase tracking-[0.16em] text-accent">{label}</p><p className="mt-3 break-words text-body-lg text-foreground transition-colors group-hover:text-foreground">{value}</p></div><ArrowUpRight aria-hidden="true" className="text-accent opacity-0 transition-opacity group-hover:opacity-100" size={18} /></div>
              </motion.a>
            ))}
          </motion.div>

          <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3 font-mono text-label uppercase text-accent"><span className="size-2 animate-pulse rounded-full bg-accent" />Disponible pour de nouveaux projets</div>
            <p className="max-w-lg text-body text-secondary">Je suis actuellement disponible pour des projets freelance à temps partiel. Mon délai de réponse est généralement de 24 à 48 heures.</p>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-accent via-accent to-accent-hover py-16 text-foreground md:py-20">
        <div className="container-portfolio flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div><h2 className="max-w-2xl font-serif text-display-sm leading-[0.98] text-balance text-foreground md:text-display">Contactez-moi sur WhatsApp</h2><p className="mt-5 max-w-md text-body-lg text-foreground/80">La façon la plus rapide de me contacter est via WhatsApp.</p></div>
          <div className="flex flex-col items-start gap-5"><Link href="https://wa.me/2250710504007" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-primary px-5 py-4 font-mono text-nav uppercase text-accent transition-transform hover:-translate-y-1"><MessageCircle aria-hidden="true" size={18} />DISCUTER SUR WHATSAPP <ArrowUpRight aria-hidden="true" size={18} /></Link><p className="text-label text-primary/65">Ou envoyez-moi un message directement au +225 07 10 50 40 07</p></div>
        </div>
      </section>

      <section className="container-portfolio py-16 md:py-20"><SectionLabel index="02">QUESTIONS FRÉQUENTES</SectionLabel><div className="mt-10 border-t border-white/10">{faqs.map(([question, answer], index) => { const isOpen = open === index; return <div key={question} className="border-b border-white/10"><button type="button" onClick={() => setOpen(isOpen ? null : index)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-6 py-6 text-left"><span className="font-serif text-heading-sm">{question}</span><Plus aria-hidden="true" className={`shrink-0 text-accent transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} size={22} /></button><AnimatePresence initial={false}>{isOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden"><p className="max-w-2xl pb-6 text-body-lg leading-relaxed text-secondary">{answer}</p></motion.div>}</AnimatePresence></div> })}</div></section>

      <section className="border-t border-white/10 bg-surface py-16 md:py-20"><div className="container-portfolio flex flex-col gap-4 md:flex-row md:items-start md:justify-between"><div className="flex items-center gap-3 font-mono text-label uppercase text-accent"><MapPin aria-hidden="true" size={18} />Abidjan, Côte d&apos;Ivoire</div><p className="max-w-xl text-body-lg text-secondary">Basé à Abidjan, je travaille avec des clients du monde entier. Je suis ouvert aux collaborations à distance et aux projets internationaux.</p></div></section>
      <Footer />
    </main>
  )
}
