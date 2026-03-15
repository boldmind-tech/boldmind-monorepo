// PACKAGES/auth/src/domain/models/UserAPI.ts

import { User } from './User';

export interface UserAPI {
    getMe: () => Promise<User | null>;
    createUser: (userData: any) => Promise<void>;
}
