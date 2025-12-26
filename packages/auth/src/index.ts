// packages/auth/src/index.ts
import { createClient } from '@supabase/supabase-js';
import type { User, Session } from '@supabase/supabase-js';

// Types
export interface AuthUser extends User {
  app_metadata: {
    product?: string;
    subscription_tier?: 'free' | 'premium' | 'enterprise';
    role?: 'user' | 'admin' | 'super_admin';
  };
  user_metadata: {
    full_name?: string;
    avatar_url?: string;
    phone?: string;
  };
}

export interface AuthSession extends Session {
  user: AuthUser;
}

// Supabase Client Factory
export function createAuthClient(supabaseUrl?: string, supabaseAnonKey?: string) {
  const url = supabaseUrl || process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = supabaseAnonKey || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  
  return createClient(url, key, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      storageKey: 'boldmind-auth-token',
    },
  });
}

// Auth Service Class
export class AuthService {
  private client;

  constructor(supabaseUrl?: string, supabaseAnonKey?: string) {
    this.client = createAuthClient(supabaseUrl, supabaseAnonKey);
  }

  // Sign Up
  async signUp(email: string, password: string, metadata?: {
    full_name?: string;
    product?: string;
  }) {
    const { data, error } = await this.client.auth.signUp({
      email,
      password,
      options: {
        data: metadata,
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) throw error;
    return data;
  }

  // Sign In
  async signIn(email: string, password: string) {
    const { data, error } = await this.client.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data;
  }

  // Sign In with OAuth
  async signInWithOAuth(provider: 'google' | 'facebook') {
    const { data, error } = await this.client.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) throw error;
    return data;
  }

  // Sign Out
  async signOut() {
    const { error } = await this.client.auth.signOut();
    if (error) throw error;
  }

  // Get Session
  async getSession(): Promise<AuthSession | null> {
    const { data, error } = await this.client.auth.getSession();
    if (error) throw error;
    return data.session as AuthSession | null;
  }

  // Get User
  async getUser(): Promise<AuthUser | null> {
    const { data, error } = await this.client.auth.getUser();
    if (error) throw error;
    return data.user as AuthUser | null;
  }

  // Update User
  async updateUser(updates: {
    email?: string;
    password?: string;
    data?: Record<string, any>;
  }) {
    const { data, error } = await this.client.auth.updateUser(updates);
    if (error) throw error;
    return data;
  }

  // Reset Password
  async resetPassword(email: string) {
    const { error } = await this.client.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    });

    if (error) throw error;
  }

  // Listen to Auth Changes
  onAuthStateChange(callback: (session: AuthSession | null) => void) {
    return this.client.auth.onAuthStateChange((_event, session) => {
      callback(session as AuthSession | null);
    });
  }

  // Check if user has access to product
  async hasProductAccess(productId: string): Promise<boolean> {
    const user = await this.getUser();
    if (!user) return false;

    // Check subscription status from database
    const { data, error } = await this.client
      .from('subscriptions')
      .select('status, product_id')
      .eq('user_id', user.id)
      .eq('product_id', productId)
      .single();

    if (error || !data) return false;
    return data.status === 'active';
  }
}

// React Hooks
export { useAuth } from './hooks/useAuth';
export { useUser } from './hooks/useUser';
export { useSession } from './hooks/useSession';

// Middleware
export { authMiddleware } from './middleware/auth-middleware';
export { roleMiddleware } from './middleware/role-middleware';

// Types Export
export type { User, Session } from '@supabase/supabase-js';