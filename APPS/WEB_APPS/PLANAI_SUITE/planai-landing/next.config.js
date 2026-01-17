/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
 
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://api.boldmind.ng',
  }
};

module.exports = nextConfig;