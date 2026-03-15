/** @type {import('next').NextConfig} */
// ─────────────────────────────────────────────────────────────────────────────
// GENERIC next.config.mjs — copy this into each remaining app.
// Identical for: educenter, planai-suite, boldmind-os, naija-fit,
//                boldmind-tools, boldmind-concepts, amebo-studio, skillgig
//
// The only differences per app are:
//   - transpilePackages list (add/remove based on app's package.json deps)
//   - async rewrites (only amebogist needs RSS/sitemap)
// ─────────────────────────────────────────────────────────────────────────────
const nextConfig = {
  transpilePackages: [
    '@boldmind/ui',
    '@boldmind/auth',
    '@boldmind/utils',
    '@boldmind/config',
    '@boldmind/api-client',
    '@boldmind/pwa',
    // Remove '@boldmind/pwa' if the app doesn't list it in package.json
    // Remove '@boldmind/analytics' if the app doesn't list it in package.json
  ],

  output: 'standalone',

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.boldmind.ng'       },
      { protocol: 'https', hostname: '**.amebogist.ng'      },
      { protocol: 'https', hostname: '**.educenter.com.ng'  },
      { protocol: 'https', hostname: 'res.cloudinary.com'   },
      { protocol: 'https', hostname: '**.vercel.app'        },
      { protocol: 'https', hostname: '**.r2.cloudflarestorage.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com'   },
    ],
  },

  experimental: {
    externalDir: true,
  },

  webpack: (config) => {
    config.resolve.symlinks = true;
    return config;
  },
};

export default nextConfig;
