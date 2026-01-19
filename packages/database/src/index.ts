// packages/database/src/index.ts

// ===================================
// AUTHENTICATION (Supabase)
// ===================================
// All apps use Supabase for auth
// Returns: user.id which is used in both DBs

// ===================================
// PRISMA CLIENT (PostgreSQL/Neon)
// ===================================
// For: EduCenter, BoldMind Hub, Naija FitHer
export { prisma, default as prismaClient } from './prisma/client';
export * from '@prisma/client';

// ===================================
// MONGODB CLIENT (MongoDB Atlas)
// ===================================
// For: AmeboGist, Social Factory, Email Scraper, Safe AI
export { mongoClient, connectMongo, disconnectMongo } from './mongodb/client';
export * from './mongodb/models';

// ===================================
// POSTGRESQL CLIENT (Raw queries if needed)
// ===================================
export * from './postgres/client';
