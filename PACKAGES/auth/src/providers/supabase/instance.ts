// PACKAGES/auth/src/providers/supabase/instance.ts
import { SupabaseAuthProvider } from './auth';

let instance: SupabaseAuthProvider | null = null;

export function getAuthProviderInstance(): SupabaseAuthProvider {
    if (!instance) {
        instance = new SupabaseAuthProvider();
    }
    return instance;
}

export function resetAuthProviderInstance(): void {
    instance = null;
}