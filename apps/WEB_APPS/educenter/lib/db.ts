import { getProductDatabase } from '@boldmind/utils';
import { prisma, mongoClient, connectMongo } from '@boldmind/database';

/**
 * Get the appropriate database client for EduCenter
 * Based on the launch architecture, EduCenter uses PostgreSQL primary
 */
async function getDb() {
  const dbType = getProductDatabase('educenter');

  if (dbType === 'mongodb') {
    await connectMongo({
      uri: process.env.MONGODB_URI!,
      dbName: "educenter",
    });
    return { type: 'mongodb', client: mongoClient.db('educenter') };
  }

  return { type: 'postgres', client: prisma };
}

/**
 * Fetch courses (Postgres)
 */
// export async function getCourses() {
//   const { type, client } = await getDb();
//   if (type === 'postgres') {
//     return await (client as typeof prisma).course.findMany();
//   }
//   return await (client as any).collection('courses').find().toArray();
// }

/**
 * Analytical data (MongoDB)
 */
async function logAnalytics(data: any) {
  await connectMongo({
    uri: process.env.MONGODB_URI!,
    dbName: "educenter",
  });
  const db = mongoClient.db('educenter_analytics');
  return await db.collection('events').insertOne({
    ...data,
    timestamp: new Date()
  });
}

