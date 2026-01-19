// packages/database/src/index.ts

// ===================================
// MONGODB CLIENT
// ===================================
export * from './mongodb/client';
// export * from './mongodb/base.repository';
// export * from './mongodb/models';

// ===================================
// POSTGRESQL CLIENT
// ===================================
export * from './postgres/client';

// ===================================
// SUPABASE CLIENT
// ===================================
// export * from './supabase/client';

// ===================================
// PRISMA CLIENT (Unified)
// ===================================
export { prisma, default as prismaClient } from './prisma/client';  // ← Changed to ./prisma/client
export * from '@prisma/client';
