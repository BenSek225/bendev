import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page non trouvée',
  description: 'La page que vous recherchez n\'existe pas ou a été déplacée.',
}

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-primary text-text-primary">
      <div className="container-portfolio text-center">
        <h1 className="font-serif text-[120px] font-bold leading-none text-accent md:text-[200px]">
          404
        </h1>
        <h2 className="mt-8 font-serif text-h2-sm md:text-h2">
          Page non trouvée
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-body-lg text-secondary">
          La page que vous recherchez n&apos;existe pas ou a été déplacée. 
          Revenez à l&apos;accueil pour découvrir mes projets et compétences.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-4 font-mono text-nav uppercase transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-primary"
        >
          <ArrowLeft size={18} />
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  )
}
