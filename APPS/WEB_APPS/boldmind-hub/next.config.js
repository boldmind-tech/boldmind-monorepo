// apps/web/boldmind-hub/next.config.js
// Updated for Vercel deployment
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@boldmind/ui', 
    '@boldmind/utils', 
    '@boldmind/seo', 
    '@boldmind/analytics',
    '@boldmind/auth',
    '@boldmind/database'
  ],
  swcMinify: true,
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: [], 
  },
  experimental: {
    serverComponentsExternalPackages: ['mongoose', 'mongodb', '@prisma/client'],
  },
}

export default nextConfig