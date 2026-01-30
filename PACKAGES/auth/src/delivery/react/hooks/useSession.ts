
// PACKAGES/auth/src/delivery/react/hooks/useSession.ts

import { useAuth } from '../AuthProvider';
import { Session } from '../../../domain/models/Session';

export function useSession(): Session | null {
    const { session } = useAuth();
    return session;
}