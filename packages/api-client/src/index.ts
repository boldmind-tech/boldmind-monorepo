//packages/api-client/src/index.ts

export * from './client';
export * from './api';
export * from './types';
export * from './interceptors';

// Export the default centralized instance
export { boldMindAPI as default } from './api';