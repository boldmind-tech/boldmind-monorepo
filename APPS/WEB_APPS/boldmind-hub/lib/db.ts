import { getProductDatabase } from '@boldmind/utils';
import { prisma, mongoClient, connectMongo } from '@boldmind/database';

/**
 * Get the appropriate database client for BoldMind Hub
 * Based on the launch architecture, Hub uses PostgreSQL (Prisma)
 */
export async function getDb() {
  const dbType = getProductDatabase('boldmind-hub');
  
  if (dbType === 'mongodb') {
    await connectMongo();
    return { type: 'mongodb', client: mongoClient.db('boldmind_hub') };
  }
  
  return { type: 'postgres', client: prisma };
}

/**
 * Example of fetching transactional data (Postgres)
 */
export async function getUsers() {
  const { type, client } = await getDb();
  if (type === 'postgres') {
    return await (client as typeof prisma).user.findMany();
  }
  // Fallback for MongoDB if mapping changes
  return await (client as any).collection('users').find().toArray();
}
