'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { MagneticButton } from '@/components/portfolio/ambient-effects'
import { useRef, useState, useEffect } from 'react'

export function SectionLabel({ children, index = '01' }: { children: React.ReactNode; index?: string }) { return <div className="flex items-center gap-3 font-mono text-label uppercase text-accent"><span>({index})</span><span>{children}</span></div> }

export function CTAButton({ label, href, variant = 'primary' }: { label: string; href: string; variant?: 'primary' | 'outline' }) {
  if (variant === 'outline') return <Link href={href} className="cursor-hover-target group inline-flex items-center rounded-full border border-white/20 px-5 py-3 font-mono text-nav uppercase transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-text-primary hover:shadow-[0_10px_30px_rgba(230,87,42,0.25)]">{label}<ArrowUpRight aria-hidden="true" size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
  return <Link href={href} className="cursor-hover-target inline-flex items-center gap-3 font-mono text-nav uppercase"><MagneticButton><span className="grid size-11 place-items-center rounded-full bg-accent text-primary transition duration-300 hover:scale-110 hover:bg-accent-hover md:size-[52px]"><ArrowUpRight aria-hidden="true" size={20} /></span></MagneticButton><span>{label}</span></Link>
}

export function ArrowLink({ label, href }: { label: string; href: string }) { return <Link href={href} className="cursor-hover-target group flex items-center justify-between border-b border-white/10 py-5 font-mono text-nav uppercase"><span>{label}</span><span className="transition-transform duration-200 group-hover:translate-x-1">↗</span></Link> }

export function StatCounter({ target, suffix = '', label, accent = true, compact = false }: { target: number; suffix?: string; label: string; accent?: boolean; compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null); const visible = useInView(ref, { once: true, margin: '-100px' }); const [value, setValue] = useState(0)
  useEffect(() => { if (!visible) return; const start = performance.now(); const frame = (now: number) => { const p = Math.min((now - start) / 1400, 1); setValue(Math.round(target * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(frame) }; requestAnimationFrame(frame) }, [visible, target])
  return <div ref={ref} style={compact ? { '--stat-size': '36px', '--label-size': '10px' } as React.CSSProperties : undefined}><div className={`font-serif ${compact ? 'text-[36px]' : 'text-stat-sm md:text-stat'} ${accent ? 'text-accent' : 'text-primary'}`}>{value}{suffix}</div><div className={`mt-2 font-mono uppercase text-secondary ${compact ? 'text-xs' : 'text-label'}`}>{label}</div></div>
}

export function ProgressBar({ percent, label }: { percent: number; label?: string }) { return <div className="flex flex-col gap-3">{label && <div className="flex justify-between font-mono text-label uppercase"><span>{label}</span><span className="text-secondary">{percent}%</span></div>}<div className="h-1 overflow-hidden rounded-full bg-white/10"><motion.div initial={{ width: 0 }} whileInView={{ width: `${percent}%` }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.9, ease: 'easeOut' }} className="h-full rounded-full bg-accent" /></div></div> }

export function Badge({ children }: { children: React.ReactNode }) { return <span className="cursor-hover-target inline-flex rounded-full border border-white/[0.18] px-3 py-1.5 font-mono text-[12px] uppercase tracking-wide text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent">{children}</span> }
