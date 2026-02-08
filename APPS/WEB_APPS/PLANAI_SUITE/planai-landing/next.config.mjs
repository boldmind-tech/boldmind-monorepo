import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,

  transpilePackages: [
    '@boldmind/ui',
    '@boldmind/utils',
    '@boldmind/auth',
    '@boldmind/config',
  ],

  experimental: {
    serverComponentsExternalPackages: ['mongoose', 'mongodb'],
    outputFileTracingRoot: path.join(__dirname, '../../../../')
  },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: 'localhost' },
    ],
  },

  async rewrites() {
    return [
      {
        source: '/receptionist',
        destination: `${process.env.RECEPTIONIST_URL}/receptionist`,
      },
      {
        source: '/receptionist/:path*',
        destination: `${process.env.RECEPTIONIST_URL}/receptionist/:path*`,
      },
      {
        source: '/analytics',
        destination: `${process.env.ANALYTICS_DASHBOARD_URL}/analytics`,
      },
      {
        source: '/analytics/:path*',
        destination: `${process.env.ANALYTICS_DASHBOARD_URL}/analytics/:path*`,
      },
      {
        source: '/branding',
        destination: `${process.env.BRANDING_DESIGN_URL}/branding`,
      },
      {
        source: '/branding/:path*',
        destination: `${process.env.BRANDING_DESIGN_URL}/branding/:path*`,
      },
      {
        source: '/business-planning',
        destination: `${process.env.BUSINESS_PLANNING_URL}/business-planning`,
      },
      {
        source: '/business-planning/:path*',
        destination: `${process.env.BUSINESS_PLANNING_URL}/business-planning/:path*`,
      },
      {
        source: '/credibility',
        destination: `${process.env.CREDIBILITY_HUBS_URL}/credibility`,
      },
      {
        source: '/credibility/:path*',
        destination: `${process.env.CREDIBILITY_HUBS_URL}/credibility/:path*`,
      },
      {
        source: '/storefronts',
        destination: `${process.env.DIGITAL_STOREFRONTS_URL}/storefronts`,
      },
      {
        source: '/storefronts/:path*',
        destination: `${process.env.DIGITAL_STOREFRONTS_URL}/storefronts/:path*`,
      },
      {
        source: '/finance',
        destination: `${process.env.FINANCIAL_FORECASTING_URL}/finance`,
      },
      {
        source: '/finance/:path*',
        destination: `${process.env.FINANCIAL_FORECASTING_URL}/finance/:path*`,
      },
      {
        source: '/investor',
        destination: `${process.env.INVESTOR_READINESS_URL}/investor`,
      },
      {
        source: '/investor/:path*',
        destination: `${process.env.INVESTOR_READINESS_URL}/investor/:path*`,
      },
      {
        source: '/marketing',
        destination: `${process.env.MARKETING_AUTOMATION_URL}/marketing`,
      },
      {
        source: '/marketing/:path*',
        destination: `${process.env.MARKETING_AUTOMATION_URL}/marketing/:path*`,
      },
    ]
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  output: 'standalone',
};

export default nextConfig;