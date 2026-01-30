// src/auth/decorators/current-user.decorator.ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export interface RequestUser {
  id: string;
  email: string;
  role?: string;
  // fullName?: string;
  // ... extend as needed from your JWT payload / user-service
}

export const CurrentUser = createParamDecorator<
  keyof RequestUser | undefined,
  ExecutionContext,
  RequestUser | RequestUser[keyof RequestUser]
>(
  (data: keyof RequestUser | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const user = request.user as RequestUser | undefined;

    if (!user) {
      throw new Error('CurrentUser decorator used without authenticated user');
    }

    if (data) {
      const value = user[data];
      if (value === undefined) {
        throw new Error(`User has no property "${String(data)}"`);
      }
      return value;
    }

    return user;
  },
);