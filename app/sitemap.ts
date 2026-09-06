import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

const baseUrl = 'https://bendev.site'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/skills', '/projects', '/contact', '/mentions-legales']
  const projectRoutes = Object.values(projects).map((project) => `/projects/${project.slug}`)

  return [...staticRoutes, ...projectRoutes].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('/projects/') ? 0.7 : 0.8,
  }))
}
