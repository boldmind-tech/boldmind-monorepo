/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Transpile shared packages
  transpilePackages: [
    '@boldmind/ui', 
    '@boldmind/utils', 
    '@boldmind/auth', 
    '@boldmind/database', 
    '@boldmind/api-client'
  ],
  
  // Environment variables
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    MONGODB_URI: process.env.MONGODB_URI,
  },
  
  // Image configuration (updated to use remotePatterns only)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows all HTTPS domains
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '**',
      },
      // Specific domains for common image sources
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '*.amazonaws.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**.wp.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**.ggpht.com',
        pathname: '**',
      },
    ],
    // Additional image optimization settings
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Experimental features
  experimental: {
    serverComponentsExternalPackages: ['mongoose', 'mongodb', '@prisma/client'],
  },
  
  // Webpack configuration
  webpack: (config, { isServer, dev }) => {
    // Exclude mongoose/mongodb from client bundle
    if (isServer) {
      config.externals.push('mongoose', 'mongodb', '@prisma/client');
    }
    
    // Fix for Prisma on Windows
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        dns: false,
      };
    }
    
    return config;
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Redirects for AmeboGist
  async redirects() {
    return [
      {
        source: '/old-article/:slug',
        destination: '/posts/:slug',
        permanent: true,
      },
      {
        source: '/category',
        destination: '/',
        permanent: true,
      },
    ];
  },
  
  // Rewrites for API
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
};

export default nextConfig;