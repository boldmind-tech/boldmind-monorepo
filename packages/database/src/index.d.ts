export * from './mongodb/client';
export * from './mongodb/models';
export { getPostgresClient } from './postgres/client';
export type { PostgresClient } from './postgres/client';
export { connectToDatabase } from './mongodb/client';
export { User, Product, Subscription, Lead } from './mongodb/models';
export type { IUser, IProduct, ISubscription, ILead } from './mongodb/models';
export declare function healthCheck(): Promise<{
    mongodb: string;
    timestamp: string;
}>;
export declare function initializeDatabases(): Promise<{
    mongo: any;
}>;
export declare function disconnectDatabases(): Promise<void>;
//# sourceMappingURL=index.d.ts.map