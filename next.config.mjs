/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false, // Correction: ne pas ignorer les erreurs TypeScript en production
  },
  images: {
    unoptimized: false,
    domains: ['bendev.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Headers de sécurité renforcés
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://vitals.vercel-insights.com; frame-ancestors 'none';"
        },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
      ],
    }]
  },
  // Optimisations de performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  // Redirections de sécurité
  async redirects() {
    return [
      {
        source: '/.well-known/:path*',
        destination: '/404',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
