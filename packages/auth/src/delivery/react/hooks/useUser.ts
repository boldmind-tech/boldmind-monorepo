// PACKAGES/auth/src/delivery/react/hooks/useUser.ts

import { useAuth } from '../AuthProvider';
import { User } from '../../../domain/models/User';

export function useUser(): User | null {
  const { user } = useAuth();
  return user;
}