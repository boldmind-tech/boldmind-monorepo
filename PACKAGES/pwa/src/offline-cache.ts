/**
 * Get offline cache configuration for a specific app
 */
export function getOfflineCacheConfig(appName: string) {
    return {
        cacheName: `boldmind-${appName}-v1`,
        strategies: {
            pages: 'network-first',
            assets: 'cache-first',
            api: 'network-only',
        },
    };
}
