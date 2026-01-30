// PACKAGES/auth/src/domain/models/AuthState.ts

import { User } from './User';
import { Session } from './Session';

export interface AuthError {
    message: string;
    status?: number;
    code?: string;
}

export interface AuthState {
    user: User | null;
    session: Session | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    error: AuthError | null;
}

export const initialAuthState: AuthState = {
    user: null,
    session: null,
    isLoading: true,
    isAuthenticated: false,
    error: null,
};

