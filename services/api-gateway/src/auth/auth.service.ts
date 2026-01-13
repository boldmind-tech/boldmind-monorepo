// services/api-gateway/src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { createClient } from '@supabase/supabase-js';

interface User {
  id: string;
  email: string;
  name: string;
  createdAt?: Date;
}

@Injectable()
export class AuthService {
  private supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );

  constructor(private jwtService: JwtService) {}

  async validateToken(token: string): Promise<{ valid: boolean; user: User }> {
    try {
      const payload = this.jwtService.verify(token);
      const user = await this.getUserById(payload.sub);
      return { valid: true, user };
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    // Sign in with Supabase
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const user: User = {
      id: data.user.id,
      email: data.user.email!,
      name: data.user.user_metadata.name || email.split('@')[0],
    };

    const token = this.generateToken(user);
    return { user, token };
  }

  async register(
    email: string,
    password: string,
    name: string
  ): Promise<{ user: User; token: string }> {
    // Sign up with Supabase
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    if (error) {
      throw new UnauthorizedException(error.message);
    }

    const user: User = {
      id: data.user!.id,
      email: data.user!.email!,
      name,
    };

    const token = this.generateToken(user);
    return { user, token };
  }

  async refreshToken(user: User): Promise<{ token: string }> {
    const token = this.generateToken(user);
    return { token };
  }

  private generateToken(user: User): string {
    const payload = { email: user.email, sub: user.id, name: user.name };
    return this.jwtService.sign(payload);
  }

  private async getUserById(id: string): Promise<User> {
    const { data, error } = await this.supabase.auth.admin.getUserById(id);
    
    if (error || !data.user) {
      throw new UnauthorizedException('User not found');
    }

    return {
      id: data.user.id,
      email: data.user.email!,
      name: data.user.user_metadata.name || data.user.email!.split('@')[0],
    };
  }
}