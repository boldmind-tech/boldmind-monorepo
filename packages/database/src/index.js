export * from './mongodb/client';
export * from './mongodb/models';
export { getPostgresClient } from './postgres/client';
export { connectToDatabase } from './mongodb/client';
export { User, Product, Subscription, Lead } from './mongodb/models';
export async function healthCheck() {
    try {
        const { db: mongoDb } = await connectToDatabase();
        await mongoDb.command({ ping: 1 });
        return {
            mongodb: 'connected',
            timestamp: new Date().toISOString()
        };
    }
    catch (error) {
        console.error('Database health check failed:', error);
        throw error;
    }
}
export async function initializeDatabases() {
    try {
        const mongoClient = await connectToDatabase();
        console.log('✅ MongoDB connected successfully');
        return {
            mongo: mongoClient
        };
    }
    catch (error) {
        console.error('❌ Failed to initialize databases:', error);
        throw error;
    }
}
export async function disconnectDatabases() {
    try {
        const { client: mongoClient } = await connectToDatabase();
        await mongoClient.close();
        console.log('✅ MongoDB disconnected');
    }
    catch (error) {
        console.error('Error disconnecting databases:', error);
    }
}
//# sourceMappingURL=index.js.map