'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '@/lib/motion'

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 80); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll) }, [])
  return <>
    <header className={`fixed inset-x-0 top-0 z-50 h-[88px] transition duration-300 ${scrolled ? 'border-b border-white/10 bg-primary/85 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container-portfolio flex h-full items-center justify-between">
        <Link href="/" aria-label="Accueil" className="cursor-hover-target font-serif text-2xl">BEN<span className="text-accent">/</span></Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">{navLinks.map(link => { const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)); return <Link key={link.href} href={link.href} className={`relative cursor-hover-target font-mono text-nav uppercase transition-colors hover:text-accent ${active ? 'text-accent' : 'text-secondary'}`}>{link.label}{active && <motion.span layoutId="active-nav" className="absolute -bottom-3 left-0 h-px w-full bg-accent" />}</Link> })}</nav>
        <button aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => setOpen(!open)} className="cursor-hover-target grid size-11 place-items-center rounded-full border border-white/20 lg:hidden">{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      </div>
    </header>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 flex items-center justify-center bg-primary lg:hidden"><nav className="flex flex-col gap-6 text-center" aria-label="Menu mobile">{navLinks.map((link, i) => <motion.div key={link.href} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.3 } }}><Link onClick={() => setOpen(false)} href={link.href} className={`cursor-hover-target font-serif text-4xl transition-colors ${pathname === link.href ? 'text-accent' : 'text-white/90 hover:text-accent'}`}>{link.label}</Link></motion.div>)}</nav></motion.div>}</AnimatePresence>
  </>
}
