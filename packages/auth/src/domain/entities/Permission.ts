// PACKAGES/auth/src/domain/entities/Permission.ts

import { PRODUCT_PERMISSIONS } from '@boldmind/utils';

export type Permission = keyof typeof PRODUCT_PERMISSIONS | 'admin:all' | '*';
