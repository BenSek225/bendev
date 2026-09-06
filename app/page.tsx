'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLink, Badge, CTAButton, SectionLabel, StatCounter } from '@/components/portfolio/primitives'
import { Footer } from '@/components/portfolio/footer'
import { staggerContainer, staggerItem, fadeUp, fadeUpDelay, scaleIn } from '@/lib/motion'
import { FloatingOrb, NoiseOverlay, PortraitTilt } from '@/components/portfolio/ambient-effects'

const projects = [
  { 
    number: '01', 
    title: 'La Maison Arlett', 
    category: 'Web · E-commerce Premium', 
    description: 'Site vitrine et e-commerce pour une marque de vêtement premium basée à Abidjan.', 
    href: '/projects/la-maison-arlett', 
    image: '/portfolio/project-arlett.png' 
  },
  { 
    number: '02', 
    title: 'Ayi Premium', 
    category: 'Web · Livraison', 
    description: "Plateforme de commande et livraison d'attiéké à Abidjan.", 
    href: '/projects/ayi-premium', 
    image: '/portfolio/project-ayi.png' 
  },
  { 
    number: '03', 
    title: 'Tontine+', 
    category: 'Mobile · Fintech', 
    description: "App mobile pour digitaliser et sécuriser les tontines en Côte d'Ivoire.", 
    href: '/projects/tontine-plus', 
    image: '/portfolio/project-tontine.png' 
  },
]

const expertise = [
  'Développement Web', 
  'Applications Mobiles', 
  'UI / UX Design', 
  'Optimisation & SEO'
]

export default function Page() {
  return (
    <main id="accueil" className="bg-primary text-text-primary">
      <section className="hero-grid relative min-h-screen overflow-hidden border-b border-white/10 pt-24 lg:pt-0">
        <NoiseOverlay />
        <FloatingOrb size={320} top="12%" left="68%" color="var(--color-accent-glow)" duration={18} />
        
        <div className="container-portfolio relative z-10 grid min-h-screen items-center gap-10 lg:grid-cols-[58%_42%] lg:gap-0">
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            animate="visible" 
            className="relative flex flex-col gap-6 py-20 pl-6 md:gap-7 md:py-[89px] md:pl-12 lg:py-24"
          >
            <div className="availability-rail absolute left-0 top-1/2 hidden -translate-y-1/2 md:flex">
              <span className="availability-dot" />
              <span>Disponible pour de nouveaux projets</span>
            </div>
            
            <motion.p variants={staggerItem} className="font-mono text-label uppercase text-secondary">
              Développeur Web &amp; Mobile Fullstack
            </motion.p>
            
            <motion.h1 variants={staggerItem} className="max-w-[760px] font-serif text-hero-sm font-medium leading-[1.1] text-balance md:text-hero-md lg:text-hero">
              Je conçois<br className="hidden lg:block" /> des solutions digitales<br className="hidden lg:block" /> <em className="text-accent">performantes.</em>
            </motion.h1>
            
            <motion.p variants={fadeUpDelay(0.1)} className="max-w-[540px] text-base leading-relaxed text-secondary md:text-body-lg">
              Développeur passionné par la création de logiciels fiables. Je transforme des idées complexes en produits digitaux, avec une attention constante portée à la qualité logicielle et à l&apos;expérience utilisateur.
            </motion.p>
            
            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-6">
              <CTAButton label="Voir mes projets" href="/projects" />
              <span className="font-mono text-nav text-secondary">
                Basé à Abidjan,<br className="md:hidden" /> Côte d&apos;Ivoire
              </span>
            </motion.div>
            
            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-3">
              {['React', 'Next.js', 'TypeScript', 'React Native', 'PostgreSQL'].map(item => (
                <Badge key={item}>{item}</Badge>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={scaleIn} 
            initial="hidden" 
            animate="visible" 
            className="relative mx-auto flex h-[min(64vh,620px)] w-full max-w-[560px] items-center justify-center lg:h-screen lg:max-w-none"
          >
            <motion.div 
              aria-hidden="true" 
              className="hero-halo absolute inset-0" 
              animate={{ opacity: [0.5, 0.7, 0.5] }} 
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} 
            />
            
            <Image 
              src="/portfolio/portrait.png" 
              alt="Portrait de Bienvenu Y. Sekongo" 
              width={720} 
              height={900} 
              className="img-warm relative z-10 h-full w-full object-cover object-bottom [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]" 
              priority 
              placeholder="blur" 
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD" 
            />
            
            <div className="absolute bottom-20 right-0 z-20 bg-elevated/80 p-5 backdrop-blur-sm">
              <p className="font-serif text-xl">Y. Bienvenu Sekongo</p>
              <p className="mt-2 font-mono text-label uppercase text-accent">Développeur LOGICIEL</p>
              <p className="mt-2 font-mono text-label text-secondary">
                Basé à Abidjan,<br />Côte d&apos;Ivoire
              </p>
            </div>
            
            <div className="absolute bottom-5 right-0 z-20 flex items-center gap-3 font-mono text-label uppercase text-secondary">
              <span>Scroll</span>
              <motion.span 
                className="h-px w-6 origin-left bg-secondary" 
                animate={{ scaleX: [1, 1.3, 1] }} 
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} 
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="a-propos" className="section-spacing-sm bg-primary">
        <div className="container-portfolio">
          <SectionLabel index="01">À propos</SectionLabel>
          
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: '-100px' }} 
            className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.3fr_1fr] lg:gap-14"
          >
            <motion.div variants={staggerItem}>
              <Image 
                src="/portfolio/contact.png" 
                alt="Architecture et silhouette dans un espace sombre" 
                width={560} 
                height={700} 
                className="img-bw aspect-[4/5] w-full object-cover lg:max-w-[340px]" 
                placeholder="blur" 
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD" 
              />
            </motion.div>
            
            <motion.div variants={staggerItem} className="flex flex-col items-start gap-7">            
              <motion.h2 variants={fadeUp} className="font-serif text-h2-sm md:text-h2 text-balance">
                Je transforme vos idées en solution <em className="text-accent">simples et puissantes.</em>
              </motion.h2>
              
              <motion.p variants={fadeUpDelay(0.1)} className="max-w-[440px] leading-relaxed text-secondary">
                Avec une approche design simple et épurée, j&apos;interviens sur des projets web & mobile, de la conception à la mise en production.
              </motion.p>
              
              <ArrowLink label="En savoir plus" href="/about" />
            </motion.div>
            
            <motion.div variants={staggerItem} className="border-l border-white/10 pl-6 lg:pl-12">
              <p className="mb-7 font-mono text-label uppercase text-accent">Chiffres clés</p>
              
              <div className="grid grid-cols-3 gap-4 border-b border-white/10 pb-8">
                <StatCounter target={15} suffix="+" label="Projets réalisés" compact />
                <StatCounter target={8} suffix="+" label="Clients satisfaits" compact />
                <StatCounter target={3} suffix="+" label="Années d'expérience" compact />
              </div>
              
              <div className="pt-8">
                <p className="mb-2 font-mono text-label uppercase text-accent">Expertises</p>
                {expertise.map(item => (
                  <ArrowLink key={item} label={item} href="/skills" />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="projets" className="projects-section relative overflow-hidden section-spacing-sm">
        <FloatingOrb size={260} top="8%" left="72%" color="rgba(230,87,42,.22)" duration={20} />
        <FloatingOrb size={220} top="62%" left="8%" color="rgba(10,10,10,.28)" duration={24} />
        
        <div className="container-portfolio relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <SectionLabel index="02">Projets récents</SectionLabel>
            <CTAButton label="Voir tous les projets" href="/projects" variant="outline" />
          </div>
          
          <motion.h2 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: '-100px' }} 
            className="mt-10 max-w-3xl font-serif text-h2-sm md:text-h2 text-balance"
          >
            Des projets pensés<br />pour avoir un <em>impact.</em>
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: '-100px' }} 
            className="mt-10 grid gap-8 md:grid-cols-3"
          >
            {projects.map(project => (
              <motion.article variants={staggerItem} key={project.title} className="group">
                <div className="project-image relative overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={`Aperçu du projet ${project.title}`} 
                    width={700} 
                    height={875} 
                    className="aspect-[4/5] w-full object-cover transition duration-400 group-hover:scale-105" 
                    placeholder="blur" 
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD" 
                  />
                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-400 group-hover:opacity-15" />
                </div>
                
                <div className="flex items-start gap-6 pt-5">
                  <span className="font-serif text-3xl">{project.number}</span>
                  
                  <div className="flex-1">
                    <p className="font-mono text-label uppercase text-black/65">
                      {project.category}
                    </p>
                    <h3 className="mt-3 font-serif text-2xl">{project.title}</h3>
                    <p className="mt-3 leading-relaxed text-black/65">
                      {project.description}
                    </p>
                    <div className="mt-4 text-black">
                      <ArrowLink label="Voir le projet" href={project.href} />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="contact-section relative overflow-hidden section-spacing-sm">
        <Image 
          src="/portfolio/contact.png" 
          alt="Couloir architectural éclairé par une lumière orange" 
          fill 
          className="object-cover opacity-25" 
          sizes="100vw" 
        />
        <div className="absolute inset-0 bg-primary/70" />
        
        <div className="container-portfolio relative z-10 grid gap-14 lg:grid-cols-[1.5fr_0.8fr]">
          <div>
            <SectionLabel index="03">Contact</SectionLabel>
            
            <motion.h2 
              variants={fadeUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: '-100px' }} 
              className="mt-10 max-w-2xl font-serif text-h2-sm md:text-h2 text-balance"
            >
              Un projet en tête ?<br /><em className="text-accent">Discutons-en.</em>
            </motion.h2>
            
            <a 
              href="mailto:sekongobienvenu22@gmail.com" 
              className="mt-10 inline-block font-mono text-nav uppercase text-secondary transition-colors hover:text-accent"
            >
              sekongobienvenu22@gmail.com
            </a>
          </div>
          
          <div>
            <p className="font-mono text-label uppercase text-accent">Disponible pour</p>
            <div className="mt-4">
              {['Projets freelance', 'Collaborations', 'Opportunités CDI'].map(item => (
                <ArrowLink key={item} label={item} href="#contact" />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
