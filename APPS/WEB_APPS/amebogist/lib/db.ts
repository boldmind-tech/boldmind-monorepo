import { getProductDatabase } from '@boldmind/utils';
import { prisma, mongoClient, connectMongo } from '@boldmind/database';

/**
 * Get the appropriate database client for AmeboGist
 * Based on the launch architecture, AmeboGist uses MongoDB
 */
export async function getDb() {
  const dbType = getProductDatabase('amebogist');
  
  if (dbType === 'mongodb' || !dbType) {
    await connectMongo();
    return { type: 'mongodb', client: mongoClient.db('amebogist') };
  }
  
  return { type: 'postgres', client: prisma };
}

/**
 * Example of fetching posts (MongoDB)
 */
export async function getPosts() {
  const { type, client } = await getDb();
  if (type === 'mongodb') {
    const db = client as any;
    return await db.collection('posts').find().sort({ createdAt: -1 }).toArray();
  }
  // Fallback for Postgres if mapping changes
  return await (client as typeof prisma).post.findMany({
    orderBy: { createdAt: 'desc' }
  });
}
