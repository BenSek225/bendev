import { Footer } from '@/components/portfolio/footer'
import { Header } from '@/components/portfolio/header'

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-primary pt-32 text-text-primary">
      <Header />
      <section className="container-portfolio section-spacing">
        <p className="font-mono text-label uppercase text-accent">Informations</p>
        <h1 className="mt-8 font-serif text-h1 text-balance">Mentions légales</h1>
        <p className="mt-8 max-w-2xl leading-relaxed text-secondary">Contenu à venir.</p>
      </section>
      <Footer />
    </main>
  )
}
