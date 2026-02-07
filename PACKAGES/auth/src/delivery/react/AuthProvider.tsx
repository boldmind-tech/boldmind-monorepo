// PACKAGES/auth/src/delivery/react/AuthProvider.tsx

'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabaseAuthProvider } from '../../providers/supabase/auth';
import { AuthState, initialAuthState } from '../../domain/models/AuthState';
import { User } from '../../domain/models/User';
import { Session } from '../../domain/models/Session';

export interface AuthContextValue extends AuthState {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, metadata?: Record<string, any>) => Promise<void>;
  signInWithOAuth: (provider: 'google' | 'github' | 'twitter' | 'facebook') => Promise<void>;
  signOut: () => Promise<void>;
  refreshUser: () => Promise<void>;
  verifyEmailCode: (email: string, code: string) => Promise<void>;
  resendVerification: (email: string) => Promise<{ success: boolean; error?: string }>;
  resetPassword: (email: string) => Promise<void>;
  updatePassword: (password: string) => Promise<void>;
  hasPermission: (permission: string) => boolean;
}

import { UserAPI } from '../../domain/models/UserAPI';

interface AuthProviderProps {
  children: React.ReactNode;
  userAPI?: UserAPI; // Optional API client
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children, userAPI }: AuthProviderProps) {
  const [state, setState] = useState<AuthState>(initialAuthState);

  // Fetch user data from user-service
  const fetchUser = async (_userId: string): Promise<User | null> => {
    if (!userAPI) {
      console.warn('No userAPI provided to AuthProvider');
      return null;
    }

    try {
      return await userAPI.getMe();
    } catch (error) {
      console.error('Failed to fetch user:', error);
      return null;
    }
  };

  // Handle auth state changes
  useEffect(() => {
    let mounted = true;

    const initializeAuth = async () => {
      try {
        const session = await supabaseAuthProvider.getSession();

        if (session && mounted) {
          const user = await fetchUser(session.user.id);
          setState({
            user,
            session,
            isLoading: false,
            isAuthenticated: true,
            error: null,
          });
        } else if (mounted) {
          setState({
            ...initialAuthState,
            isLoading: false,
          });
        }
      } catch (error: any) {
        if (mounted) {
          console.error('[AuthProvider] Initialization error:', error);
          // Don't clear everything immediately, maybe just stop loading
          setState(prev => ({
            ...prev,
            isLoading: false,
            // Only set error if we really want to show it to the user
            // error: { message: error.message },
          }));
        }
      }
    };

    initializeAuth();

    const { data: authListener } = supabaseAuthProvider.onAuthStateChange(
      async (session: Session | null) => {
        if (!mounted) return;

        if (session) {
          const user = await fetchUser(session.user.id);
          setState({
            user,
            session,
            isLoading: false,
            isAuthenticated: true,
            error: null,
          });
        } else {
          setState({
            ...initialAuthState,
            isLoading: false,
          });
        }
      }
    );

    return () => {
      mounted = false;
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const response = await supabaseAuthProvider.signInWithEmail(email, password);

      if (response.error) {
        throw new Error(response.error.message);
      }

      if (response.session) {
        const user = await fetchUser(response.session.user.id);
        setState({
          user,
          session: response.session,
          isLoading: false,
          isAuthenticated: true,
          error: null,
        });
      }
    } catch (error: any) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: { message: error.message },
      }));
      throw error;
    }
  };

  const signUp = async (
    email: string,
    password: string,
    metadata?: Record<string, any>
  ) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const response = await supabaseAuthProvider.signUpWithEmail(
        email,
        password,
        metadata
      );

      if (response.error) {
        throw new Error(response.error.message);
      }

      if (response.session && userAPI) {
        // Create user in user-service
        await userAPI.createUser({
          id: response.session.user.id,
          email,
          ...metadata,
        });

        const user = await fetchUser(response.session.user.id);
        setState({
          user,
          session: response.session,
          isLoading: false,
          isAuthenticated: true,
          error: null,
        });
      } else {
        // No session (email confirmation required)
        setState(prev => ({ ...prev, isLoading: false }));
      }
    } catch (error: any) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: { message: error.message },
      }));
      throw error;
    }
  };

  const signInWithOAuth = async (
    provider: 'google' | 'github' | 'twitter' | 'facebook'
  ) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      await supabaseAuthProvider.signInWithOAuth(provider);
    } catch (error: any) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: { message: error.message },
      }));
      throw error;
    }
  };

  const signOut = async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      await supabaseAuthProvider.signOut();
      setState({
        ...initialAuthState,
        isLoading: false,
      });
    } catch (error: any) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: { message: error.message },
      }));
      throw error;
    }
  };

  const refreshUser = async () => {
    if (state.session && userAPI) {
      const user = await fetchUser(state.session.user.id);
      setState(prev => ({ ...prev, user }));
    }
  };

  const verifyEmailCode = async (email: string, code: string) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const response = await supabaseAuthProvider.verifyOtp(email, code, 'signup');

      if (response.error) {
        throw new Error(response.error.message);
      }

      if (response.session) {
        const user = await fetchUser(response.session.user.id);
        setState({
          user,
          session: response.session,
          isLoading: false,
          isAuthenticated: true,
          error: null,
        });
      }
    } catch (error: any) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: { message: error.message },
      }));
      throw error;
    }
  };

  const resendVerification = async (email: string) => {
    return await supabaseAuthProvider.resendVerification(email);
  };

  const resetPassword = async (email: string) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      await supabaseAuthProvider.resetPasswordForEmail(email);
      setState(prev => ({ ...prev, isLoading: false }));
    } catch (error: any) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: { message: error.message },
      }));
      throw error;
    }
  };

  const updatePassword = async (password: string) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      await supabaseAuthProvider.updatePassword(password);
      setState(prev => ({ ...prev, isLoading: false }));
    } catch (error: any) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: { message: error.message },
      }));
      throw error;
    }
  };

  const hasPermission = (permission: string): boolean => {
    if (state.user?.isSuperAdmin) return true;
    return state.user?.permissions?.includes(permission) || false;
  };

  // Make sure to RETURN the JSX element
  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signUp,
        signInWithOAuth,
        signOut,
        refreshUser,
        verifyEmailCode,
        resendVerification,
        resetPassword,
        updatePassword,
        hasPermission,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Add a convenience provider factory
export function createAuthProvider(userAPI: UserAPI) {
  return function Provider({ children }: { children: React.ReactNode }) {
    return <AuthProvider userAPI={userAPI}>{children}</AuthProvider>;
  };
}