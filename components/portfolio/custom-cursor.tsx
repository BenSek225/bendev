'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CustomCursor() { const [active, setActive] = useState(false); const x = useSpring(useMotionValue(-20), { stiffness: 300, damping: 30 }); const y = useSpring(useMotionValue(-20), { stiffness: 300, damping: 30 })
  useEffect(() => { const move = (e: MouseEvent) => { x.set(e.clientX - 6); y.set(e.clientY - 6); setActive((e.target as HTMLElement).closest('.cursor-hover-target') !== null) }; window.addEventListener('mousemove', move); return () => window.removeEventListener('mousemove', move) }, [x, y])
  return <motion.div aria-hidden="true" style={{ x, y }} animate={{ width: active ? 32 : 12, height: active ? 32 : 12, backgroundColor: active ? 'rgba(230,87,42,.2)' : '#E6572A' }} className="pointer-events-none fixed left-0 top-0 z-[100] hidden rounded-full border border-accent md:block" />
}
