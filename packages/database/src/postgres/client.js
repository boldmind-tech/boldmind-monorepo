import { Pool } from 'pg';
export class PostgresClient {
    constructor(config) {
        this.isConnected = false;
        this.pool = new Pool({
            ...config,
            max: 20,
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 2000,
            ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
        });
        this.pool.on('connect', () => {
            console.log('PostgreSQL: Connected to database');
            this.isConnected = true;
        });
        this.pool.on('error', (err) => {
            console.error('PostgreSQL: Unexpected error on idle client', err);
            this.isConnected = false;
        });
    }
    async connect() {
        try {
            await this.pool.connect();
            this.isConnected = true;
            return true;
        }
        catch (error) {
            console.error('PostgreSQL: Connection error', error);
            this.isConnected = false;
            throw error;
        }
    }
    async query(text, params) {
        try {
            const result = await this.pool.query(text, params);
            return {
                rows: result.rows,
                rowCount: result.rowCount || 0
            };
        }
        catch (error) {
            console.error('PostgreSQL: Query error', error);
            throw error;
        }
    }
    async transaction(callback) {
        const client = await this.pool.connect();
        try {
            await client.query('BEGIN');
            const result = await callback(client);
            await client.query('COMMIT');
            return result;
        }
        catch (error) {
            await client.query('ROLLBACK');
            throw error;
        }
        finally {
            client.release();
        }
    }
    async close() {
        await this.pool.end();
        this.isConnected = false;
    }
    getPool() {
        return this.pool;
    }
    isDatabaseConnected() {
        return this.isConnected;
    }
    async healthCheck() {
        try {
            const result = await this.query('SELECT NOW() as time');
            return {
                status: 'healthy',
                timestamp: result.rows[0]?.time,
                connected: this.isConnected
            };
        }
        catch (error) {
            return {
                status: 'unhealthy',
                error: error instanceof Error ? error.message : 'Unknown error',
                connected: false
            };
        }
    }
}
let postgresClient;
export const getPostgresClient = (config) => {
    if (!postgresClient && config) {
        postgresClient = new PostgresClient(config);
    }
    return postgresClient;
};
export default getPostgresClient;
//# sourceMappingURL=client.js.map