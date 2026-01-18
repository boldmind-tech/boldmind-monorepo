/** @type {import('next').NextConfig} */
// Updated for Vercel deployment
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  transpilePackages: ['@boldmind/ui', '@boldmind/utils', '@boldmind/ai', '@boldmind/api-client', '@boldmind/auth', '@boldmind/payments'],
};

export default nextConfig;
