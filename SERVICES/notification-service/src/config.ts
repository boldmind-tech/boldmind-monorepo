
import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables as early as possible
const localEnvPath = path.resolve(__dirname, '../.env');
const rootEnvPath = path.resolve(__dirname, '../../../.env');

console.log(`[Config] Attempting to load .env from: ${localEnvPath}`);
dotenv.config({ path: localEnvPath });

console.log(`[Config] Attempting to load fallback .env from: ${rootEnvPath}`);
dotenv.config({ path: rootEnvPath });

console.log('✅ Environment variables loading complete');
console.log(`[Config] RESEND_API_KEY: ${process.env['RESEND_API_KEY'] ? 'FOUND (starts with ' + process.env['RESEND_API_KEY'].substring(0, 5) + '...)' : 'NOT FOUND'}`);

if (!process.env['RESEND_API_KEY']) {
    console.warn('⚠️  Warning: RESEND_API_KEY is still not defined. The email service will likely fail.');
}
