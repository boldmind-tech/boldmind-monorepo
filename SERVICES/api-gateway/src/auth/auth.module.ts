// SERVICES/api-gateway/src/auth/auth.module.ts

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { SupabaseService } from './supabase.service';
import { UserServiceClient } from '../clients/user-service.client';
import { SupabaseAuthGuard } from './guards/supabase-auth.guard';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env['JWT_SECRET'] || 'your-secret-key',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AuthController],
  providers: [SupabaseService, JwtStrategy, UserServiceClient, SupabaseAuthGuard],
  exports: [JwtStrategy, PassportModule, SupabaseAuthGuard, SupabaseService],
})
export class AuthModule { }