// src/auth/auth.controller.ts

import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { SupabaseService } from './supabase.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CurrentUser, RequestUser } from './decorators';
import { LoginDto, RegisterDto, PasswordResetDto, UpdatePasswordDto } from './dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: SupabaseService) { }

  @Post('login')
  @ApiOperation({ summary: 'LogiG with email and password' })
  async login(@Body() loginDto: LoginDto) {
    return this.authService.signInWithPassword(loginDto.email, loginDto.password);
  }

  @Post('register')
  @ApiOperation({ summary: 'Register new user' })
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.signUp(registerDto.email, registerDto.password);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Logout user' })
  async logout(@CurrentUser() _user: RequestUser) {          // changed to normal method
    return this.authService.signOut();
  }

  @Get('session')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current session' })
  async getSession(@CurrentUser() user: any) {      // ← FIXED: normal method syntax
    return {
      session: user,
      user: await this.authService.getSession(),
    };
  }

  @Post('refresh')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Refresh session token' })
  async refreshSession(@CurrentUser() _user: any) {  // ← FIXED
    return this.authService.refreshSession();
  }

  @Post('password-reset/request')
  @ApiOperation({ summary: 'Request password reset' })
  async requestPasswordReset(@Body() dto: PasswordResetDto) {
    return this.authService.resetPasswordForEmail(dto.email);
  }

  @Post('password-reset/update')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update password' })
  async updatePassword(
    @CurrentUser() _user: any,
    @Body() dto: UpdatePasswordDto,
  ) {
    return this.authService.updatePassword(dto.newPassword);
  }
}