// SERVICES/api-gateway/src/auth/strategies/jwt.strategy.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { SupabaseService } from '../supabase.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private supabaseService: SupabaseService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env['SUPABASE_JWT_SECRET'],
      algorithms: ['HS256'],
    });
  }

  async validate(payload: any) {
    try {
      // Option 1: Verify by user ID (faster, uses JWT payload)
      const user = await this.supabaseService.verifyUserById(payload.sub);

      // Option 2: Verify the actual token (more secure, validates token is still valid)
      // const token = ExtractJwt.fromAuthHeaderAsBearerToken()(request);
      // const user = await this.supabaseService.verifyToken(token);

      if (!user) {
        throw new UnauthorizedException('Invalid token');
      }

      return {
        id: user.id,
        email: user.email,
        role: user.role,
      };
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}