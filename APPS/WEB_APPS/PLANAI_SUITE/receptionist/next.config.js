/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  transpilePackages: ['@boldmind/ui', '@boldmind/utils', '@boldmind/ai', '@boldmind/api-client', '@boldmind/auth', '@boldmind/payments'],
};

export default nextConfig;
