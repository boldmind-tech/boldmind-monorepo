/**
 * Register a service worker for PWA functionality
 */
export function registerServiceWorker(swPath = '/sw.js') {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register(swPath)
                .then((registration) => {
                    console.log('SW registered:', registration.scope);
                })
                .catch((error) => {
                    console.error('SW registration failed:', error);
                });
        });
    }
}
