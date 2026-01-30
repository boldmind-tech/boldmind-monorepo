// PACKAGES/auth/src/providers/supabase/singleton.ts
import { SupabaseAuthProvider } from './auth';

let instance: SupabaseAuthProvider | null = null;

/**
 * Get or create a singleton instance of SupabaseAuthProvider
 * This lazy-loads the instance only when first called, avoiding
 * initialization errors when env vars aren't available yet
 */
export function getSupabaseAuthProvider(): SupabaseAuthProvider {
    if (!instance) {
        instance = new SupabaseAuthProvider();
    }
    return instance;
}

/**
 * Reset the singleton (useful for testing)
 */
export function resetSupabaseAuthProvider(): void {
    instance = null;
}