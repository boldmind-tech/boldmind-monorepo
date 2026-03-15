// PACKAGES/config/src/index.ts
export * from './shared/env-config';

// All apps should extend this config in their tailwind.config.js
export { default as baseConfig } from './tailwind/base.config';
