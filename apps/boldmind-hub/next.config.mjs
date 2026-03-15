/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@boldmind/ui',
    '@boldmind/auth',
    '@boldmind/utils',
    '@boldmind/config',
    '@boldmind/api-client',
    '@boldmind/analytics',
    '@boldmind/pwa',
  ],

  output: 'standalone',

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.boldmind.ng' },
      { protocol: 'https', hostname: '**.amebogist.ng' },
      { protocol: 'https', hostname: '**.educenter.com.ng' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: '**.vercel.app' },
      { protocol: 'https', hostname: '**.r2.cloudflarestorage.com' },
    ],
  },

  experimental: {
    externalDir: true,
  },

  webpack: (config) => {
    config.resolve.symlinks = true;
    return config;
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options',       value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy',        value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',     value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;