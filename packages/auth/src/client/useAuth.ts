// useAuth.ts
import { useState, useEffect } from 'react';
import { authApi } from '../api';
import type { AuthUser, TokenPair } from '../types';
export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [tokens, setTokens] = useState<TokenPair | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('auth_tokens');
    if (!stored) return;

    const parsed = JSON.parse(stored);
    setTokens(parsed);

    authApi.getMe(parsed.accessToken)
      .then(setUser)
      .catch(() => setUser(null));
  }, []);

  return { user, tokens, setUser, setTokens };
}