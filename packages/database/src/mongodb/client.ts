// packages/database/src/mongodb/client.ts
import { MongoClient, Db } from 'mongodb';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export interface MongoConfig {
  uri: string;
  dbName: string;
}

export async function connectMongoDB(config: MongoConfig): Promise<{ client: MongoClient; db: Db }> {
  // Return cached connection in production
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // Create new connection
  const client = new MongoClient(config.uri, {
    maxPoolSize: 10,
    minPoolSize: 5,
    maxIdleTimeMS: 30000,
  });

  await client.connect();
  const db = client.db(config.dbName);

  // Cache the connection
  cachedClient = client;
  cachedDb = db;

  console.log(`✅ MongoDB Connected: ${config.dbName}`);
  
  return { client, db };
}

export async function disconnectMongoDB(): Promise<void> {
  if (cachedClient) {
    await cachedClient.close();
    cachedClient = null;
    cachedDb = null;
    console.log('✅ MongoDB Disconnected');
  }
}

// Helper function for apps
export async function getMongoDb(uri: string, dbName: string): Promise<Db> {
  const { db } = await connectMongoDB({ uri, dbName });
  return db;
}