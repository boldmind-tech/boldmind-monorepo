import { MongoClient, Db } from 'mongodb';
export declare function connectToDatabase(): Promise<{
    client: MongoClient;
    db: Db;
}>;
export { Db, MongoClient };
//# sourceMappingURL=client.d.ts.map