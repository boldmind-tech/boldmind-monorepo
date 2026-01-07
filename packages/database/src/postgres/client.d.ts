import { Pool, PoolConfig } from 'pg';
export declare class PostgresClient {
    private pool;
    private isConnected;
    constructor(config: PoolConfig);
    connect(): Promise<boolean>;
    query<T = any>(text: string, params?: any[]): Promise<{
        rows: T[];
        rowCount: number;
    }>;
    transaction<T>(callback: (client: any) => Promise<T>): Promise<T>;
    close(): Promise<void>;
    getPool(): Pool;
    isDatabaseConnected(): boolean;
    healthCheck(): Promise<{
        status: string;
        timestamp: any;
        connected: boolean;
        error?: undefined;
    } | {
        status: string;
        error: string;
        connected: boolean;
        timestamp?: undefined;
    }>;
}
export declare const getPostgresClient: (config?: PoolConfig) => PostgresClient;
export default getPostgresClient;
//# sourceMappingURL=client.d.ts.map