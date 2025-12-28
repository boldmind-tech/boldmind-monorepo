import { useState, useEffect } from 'react';

// Check if running in browser
const isBrowser = typeof window !== 'undefined';

export function useAuth() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isBrowser) {
      setLoading(false);
      return;
    }

    // Mock authentication for now
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signIn = async (email: string, _password: string) => {
    if (!isBrowser) return;
    
    // Mock sign in
    const mockUser = { id: '1', email, name: 'Test User' };
    localStorage.setItem('user', JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const signUp = async (email: string, _password: string, name?: string) => {
    if (!isBrowser) return;
    
    // Mock sign up
    const mockUser = { id: '1', email, name: name || email };
    localStorage.setItem('user', JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const signOut = async () => {
    if (!isBrowser) return;
    
    localStorage.removeItem('user');
    setUser(null);
  };

  return {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    isAuthenticated: !!user,
  };
}