// Re-export MongoDB
export { connectToDatabase, disconnectFromDatabase } from './mongodb/client';
export type { DatabaseConnection } from './mongodb/client';

// Re-export models
export { User, Product, Subscription, Lead } from './mongodb/models';
export type { IUser, IProduct, ISubscription, ILead } from './mongodb/models';

// PostgreSQL exports (for SAFE AI)
export { getPostgresClient } from './postgres/client';
export type { PostgresClient } from './postgres/client';

// Utility functions - FIXED VERSION
export async function healthCheck() {
  try {
    // Dynamically import to avoid circular dependencies
    const { connectToDatabase } = await import('./mongodb/client');
    const { db: mongoDb } = await connectToDatabase();
    
    // Use proper mongoose method for health check
    const adminDb = mongoDb.db?.admin();
    const pingResult = await adminDb?.ping();
    
    return {
      mongodb: pingResult?.ok === 1 ? 'connected' : 'disconnected',
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('Database health check failed:', error);
    throw error;
  }
}

// Initialize database connections - FIXED VERSION
export async function initializeDatabases() {
  try {
    // Dynamically import to avoid circular dependencies
    const { connectToDatabase } = await import('./mongodb/client');
    const connection = await connectToDatabase();
    console.log('✅ MongoDB connected successfully');
    
    return {
      mongo: connection
    };
  } catch (error) {
    console.error('❌ Failed to initialize databases:', error);
    throw error;
  }
}

// Graceful shutdown - FIXED VERSION
export async function disconnectDatabases() {
  try {
    // Dynamically import to avoid circular dependencies
    const { disconnectFromDatabase } = await import('./mongodb/client');
    await disconnectFromDatabase();
    console.log('✅ MongoDB disconnected');
  } catch (error) {
    console.error('Error disconnecting databases:', error);
  }
}