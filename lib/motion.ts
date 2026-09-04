export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
}

export const fadeUpDelay = (delay: number) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay } },
})

export const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
export const staggerItem = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } } }
export const scaleIn = { hidden: { opacity: 0, scale: 1.05 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: 'easeOut' as const } } }
export const reducedMotion = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }

export type MotionVariant = typeof fadeUp

export const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/about' },
  { label: 'Compétences', href: '/skills' },
  { label: 'Projets', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]
