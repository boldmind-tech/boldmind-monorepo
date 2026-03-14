import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {

    reactStrictMode: true,

    webpack: (config: any, { isServer }: { isServer: boolean }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                crypto: false,
                stream: false,
                buffer: false,
                util: false,
                url: false,
                querystring: false,
                path: false,
                os: false,
                fs: false,
                net: false,
                tls: false,
                child_process: false,
            };
        }
        config.externals = config.externals || [];
        if (isServer) {
            if (Array.isArray(config.externals)) {
                config.externals.push(({ request }: { request?: string }, callback: Function) => {
                    if (request?.startsWith('node:')) {
                        return callback(null, `commonjs ${request.replace('node:', '')}`);
                    }
                    callback();
                });
            }
        }
        return config;
    },

    transpilePackages: [
        '@boldmind/ui',
        '@boldmind/utils',
        '@boldmind/auth',
        '@boldmind/api-client',
        '@boldmind/config',
        '@boldmind/pwa',
    ],

    experimental: {
        outputFileTracingRoot: path.join(__dirname, '../../../')
    },

    images: {
        remotePatterns: [
            { protocol: 'https', hostname: '**' },
            { protocol: 'http', hostname: 'localhost' },
        ],
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
