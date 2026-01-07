import { MongoClient, Db } from 'mongodb';
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const MONGODB_DB = process.env.MONGODB_DB || 'boldmind';
let cachedClient = null;
let cachedDb = null;
export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }
    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db(MONGODB_DB);
    cachedClient = client;
    cachedDb = db;
    return { client, db };
}
export { Db, MongoClient };
//# sourceMappingURL=client.js.map