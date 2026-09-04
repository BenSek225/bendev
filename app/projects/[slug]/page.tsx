import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllProjectSlugs, getProject } from '@/data/projects'
import { ProjectDetailClient } from '@/components/portfolio/project-detail-client'

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  return project ? { title: `${project.title} — Portfolio`, description: project.shortDescription } : { title: 'Projet introuvable' }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()
  return <ProjectDetailClient project={project} />
}

export const dynamicParams = false
export const revalidate = 3600
