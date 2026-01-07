// Mock supabase client for now
export const supabase = {
  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    getUser: async () => ({ data: { user: null }, error: null }),
    signInWithPassword: async (_credentials: any) => ({ data: null, error: null }),
    signUp: async (_credentials: any) => ({ data: null, error: null }),
    signOut: async () => ({ error: null }),
    onAuthStateChange: (_callback: any) => ({ data: { subscription: { unsubscribe: () => {} } } }),
  },
};