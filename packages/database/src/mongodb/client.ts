import mongoose from 'mongoose';

export interface DatabaseConnection {
  client: typeof mongoose;
  db: mongoose.Connection;
}

let cachedConnection: DatabaseConnection | null = null;

export async function connectToDatabase(): Promise<DatabaseConnection> {
  if (cachedConnection) {
    return cachedConnection;
  }

  const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/boldmind';
  
  try {
    // Set mongoose options
    mongoose.set('strictQuery', true);
    
    const client = await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    const db = client.connection;
    
    // Set up event listeners
    db.on('error', (error) => {
      console.error('MongoDB connection error:', error);
      cachedConnection = null;
    });

    db.on('disconnected', () => {
      console.log('MongoDB disconnected');
      cachedConnection = null;
    });

    db.on('connected', () => {
      console.log('✅ MongoDB connected successfully');
    });

    cachedConnection = { client, db };
    return cachedConnection;
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error);
    cachedConnection = null;
    throw error;
  }
}

export async function disconnectFromDatabase(): Promise<void> {
  if (cachedConnection?.client) {
    try {
      await mongoose.disconnect();
      console.log('✅ MongoDB disconnected successfully');
    } catch (error) {
      console.error('Error disconnecting from MongoDB:', error);
      throw error;
    } finally {
      cachedConnection = null;
    }
  }
}

// Helper function to check if connected
export function isConnected(): boolean {
  return mongoose.connection.readyState === 1;
}

// Get the raw MongoDB driver database object for admin commands
export function getMongoDb() {
  if (!cachedConnection) {
    throw new Error('MongoDB not connected');
  }
  return cachedConnection.db.db; // This gives you the MongoDB driver Db object
}