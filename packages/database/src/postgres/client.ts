// packages/database/src/postgres/client.ts
import { Pool, PoolClient } from 'pg';

let cachedPool: Pool | null = null;

export interface PostgresConfig {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
  ssl?: boolean;
}

export function createPostgresPool(config: PostgresConfig): Pool {
  if (cachedPool) {
    return cachedPool;
  }

  const pool = new Pool({
    host: config.host,
    port: config.port,
    database: config.database,
    user: config.user,
    password: config.password,
    ssl: config.ssl ? { rejectUnauthorized: false } : false,
    max: 20, // Maximum number of clients in pool
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  });

  pool.on('connect', () => {
    console.log(`✅ PostgreSQL Connected: ${config.database}`);
  });

  pool.on('error', (err: any) => {
    console.error('❌ PostgreSQL Pool Error:', err);
  });

  cachedPool = pool;
  return pool;
}

export async function queryPostgres<T = any>(
  pool: Pool,
  text: string,
  params?: any[]
): Promise<T[]> {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result.rows;
  } finally {
    client.release();
  }
}

export async function disconnectPostgres(): Promise<void> {
  if (cachedPool) {
    await cachedPool.end();
    cachedPool = null;
    console.log('✅ PostgreSQL Disconnected');
  }
}

// Helper for transactions
export async function withTransaction<T>(
  pool: Pool,
  callback: (client: PoolClient) => Promise<T>
): Promise<T> {
  const client = await pool.connect();
  
  try {
    await client.query('BEGIN');
    const result = await callback(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}