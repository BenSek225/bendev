import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary">
      <div className="container-portfolio flex flex-col items-center justify-between gap-5 py-8 text-center sm:flex-row sm:text-left">
        <Link href="/" className="font-serif text-2xl">BEN<span className="text-accent">/</span></Link>
        <p className="font-mono text-label uppercase text-tertiary">© 2026 Bendev. Tous droits réservés.</p>
        <Link href="/mentions-legales" className="font-mono text-label uppercase text-secondary transition-colors hover:text-accent">Mentions légales</Link>
      </div>
    </footer>
  )
}
