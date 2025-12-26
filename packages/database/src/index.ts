export * from './mongodb/client';
export * from './mongodb/models';

// PostgreSQL exports (for SAFE AI)
export { getPostgresClient } from './postgres/client';
export type { PostgresClient } from './postgres/client';

// Prisma client will be imported dynamically

// MongoDB connection helper
export { connectToDatabase } from './mongodb/client';

// Models for easy import
export { User, Product, Subscription, Lead } from './mongodb/models';
export type { IUser, IProduct, ISubscription, ILead } from './mongodb/models';

// Utility functions
export async function healthCheck() {
  try {
    // Check MongoDB
    const { db: mongoDb } = await connectToDatabase();
    await mongoDb.command({ ping: 1 });
    
    return {
      mongodb: 'connected',
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('Database health check failed:', error);
    throw error;
  }
}

// Initialize database connections
export async function initializeDatabases() {
  try {
    // Connect to MongoDB
    const mongoClient = await connectToDatabase();
    console.log('✅ MongoDB connected successfully');
    
    return {
      mongo: mongoClient
    };
  } catch (error) {
    console.error('❌ Failed to initialize databases:', error);
    throw error;
  }
}

// Graceful shutdown
export async function disconnectDatabases() {
  try {
    const { client: mongoClient } = await connectToDatabase();
    await mongoClient.close();
    console.log('✅ MongoDB disconnected');
  } catch (error) {
    console.error('Error disconnecting databases:', error);
  }
}