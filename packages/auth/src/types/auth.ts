export interface AuthUser {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  role?: 'user' | 'admin' | 'super_admin';
}

export interface AuthSession {
  user: AuthUser;
  expires: string;
}

export interface AuthConfig {
  supabaseUrl?: string;
  supabaseKey?: string;
}