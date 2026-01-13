// services/api-gateway/src/auth/auth.controller.ts
import { Controller, Post, Get, Body, Headers, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CurrentUser } from './decorators';

interface User {
  id: string;
  email: string;
  name: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // ✅ FIXED: Proper decorator usage
  @Post('validate')
  async validateToken(
    @Headers('authorization') auth: string
  ): Promise<{ valid: boolean; user: User }> {
    const token = auth?.replace('Bearer ', '');
    return this.authService.validateToken(token);
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string
  ): Promise<{ user: User; token: string }> {
    return this.authService.login(email, password);
  }

  @Post('register')
  async register(
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('name') name: string
  ): Promise<{ user: User; token: string }> {
    return this.authService.register(email, password, name);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getProfile(
    @CurrentUser() user: User
  ): Promise<{ user: User }> {
    return { user };
  }

  @UseGuards(JwtAuthGuard)
  @Post('refresh')
  async refreshToken(
    @CurrentUser() user: User
  ): Promise<{ token: string }> {
    return this.authService.refreshToken(user);
  }
}