const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@boldmind/ui', '@boldmind/utils', '@boldmind/auth', '@boldmind/database', '@boldmind/api-client'],
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: ["localhost"],
  },
  experimental: {
    serverComponentsExternalPackages: ['mongoose', 'mongodb', '@prisma/client'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('mongoose', 'mongodb');
    }
    return config;
  },
};

export default nextConfig;
