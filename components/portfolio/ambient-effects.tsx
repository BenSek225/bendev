'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function NoiseOverlay({ className = '' }: { className?: string }) {
  return <div aria-hidden="true" className={`pointer-events-none absolute inset-0 z-0 opacity-[0.04] mix-blend-overlay hero-noise ${className}`} />
}

export function FloatingOrb({ size, top, left, color = 'var(--color-accent)', duration = 16, delay = 0 }: { size: number; top: string; left: string; color?: string; duration?: number; delay?: number }) {
  return <motion.div aria-hidden="true" className="pointer-events-none absolute rounded-full blur-[40px]" style={{ width: size, height: size, top, left, background: color }} animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0], opacity: [0.3, 0.5, 0.3, 0.3] }} transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }} />
}

export function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null)
  const x = useMotionValue(0); const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 }); const springY = useSpring(y, { stiffness: 150, damping: 15 })
  function move(event: React.MouseEvent) { if (window.matchMedia('(pointer: fine)').matches && ref.current) { const r = ref.current.getBoundingClientRect(); x.set(Math.max(-8, Math.min(8, (event.clientX - (r.left + r.width / 2)) * 0.18))); y.set(Math.max(-8, Math.min(8, (event.clientY - (r.top + r.height / 2)) * 0.18))) } }
  return <motion.span ref={ref} onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0) }} style={{ x: springX, y: springY }} className="inline-flex">{children}</motion.span>
}

export function PortraitTilt({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null); const px = useMotionValue(0); const py = useMotionValue(0)
  const rotateY = useTransform(px, [-1, 1], [-4, 4]); const rotateX = useTransform(py, [-1, 1], [4, -4])
  function move(event: React.MouseEvent) { if (window.matchMedia('(pointer: fine)').matches && ref.current) { const r = ref.current.getBoundingClientRect(); px.set((event.clientX - r.left) / r.width * 2 - 1); py.set((event.clientY - r.top) / r.height * 2 - 1) } }
  return <motion.div ref={ref} onMouseMove={move} onMouseLeave={() => { px.set(0); py.set(0) }} style={{ rotateX, rotateY, transformPerspective: 900 }} className="h-full w-full">{children}</motion.div>
}
