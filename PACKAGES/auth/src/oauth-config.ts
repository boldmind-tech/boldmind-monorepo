// packages/auth/src/oauth-config.ts
import { ENV_CONFIG } from '@boldmind/config';

export const OAUTH_CONFIG = {
    getAllowedOrigins: () => {
        const domains = Object.values(ENV_CONFIG.DOMAINS);
        const uniqueDomains = [...new Set(
            domains.map(d => d.split('/')[0])
        )];

        return [
            ...uniqueDomains.map(d => `https://${d}`),
            ...(ENV_CONFIG.NODE_ENV === 'development' ? ['http://localhost:3000'] : [])
        ];
    },

    getAllowedRedirectURIs: () => {
        const origins = OAUTH_CONFIG.getAllowedOrigins();
        return origins.map(origin => `${origin}/auth/callback`);
    }
};