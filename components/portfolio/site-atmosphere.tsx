'use client'

import { motion, useReducedMotion } from 'framer-motion'

export function SiteAtmosphere() {
  const reducedMotion = useReducedMotion()

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="site-grid-lines absolute inset-0 opacity-40" />
      <motion.div
        className="site-scanline absolute left-0 top-0 h-px w-full bg-accent/30"
        animate={reducedMotion ? undefined : { y: ['0vh', '100vh'], opacity: [0, 0.7, 0] }}
        transition={reducedMotion ? undefined : { duration: 18, repeat: Infinity, ease: 'linear' }}
      />
      <div className="site-vignette absolute inset-0" />
    </div>
  )
}
