import {
  Controller, Post, Get, Body, Req, Res, HttpCode, HttpStatus, UseGuards, Ip,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Public, CurrentUser } from '../../common/decorators';
import {
  RegisterDto, LoginDto, RefreshTokenDto,
  ForgotPasswordDto, ResetPasswordDto,
} from './dto/auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // ── POST /auth/register ───────────────────────────────────
  @Public()
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Register a new BoldMind user' })
  async register(@Body() dto: RegisterDto, @Req() req: Request) {
    return this.authService.register(dto, req.ip, req.headers['user-agent']);
  }

  // ── POST /auth/login ──────────────────────────────────────
  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login — returns access + refresh token pair' })
  async login(@Body() dto: LoginDto, @Req() req: Request) {
    return this.authService.login(dto, req.ip, req.headers['user-agent']);
  }

  // ── POST /auth/refresh ────────────────────────────────────
  @Public()
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Rotate refresh token — returns new token pair' })
  async refresh(@Body() dto: RefreshTokenDto, @Req() req: Request) {
    return this.authService.refresh(dto.refreshToken, req.ip, req.headers['user-agent']);
  }

  // ── POST /auth/logout ─────────────────────────────────────
  @UseGuards(JwtAuthGuard)
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Revoke current refresh token' })
  async logout(@Body() dto: RefreshTokenDto) {
    await this.authService.logout(dto.refreshToken);
    return { message: 'Logged out successfully' };
  }

  // ── POST /auth/logout-all ─────────────────────────────────
  @UseGuards(JwtAuthGuard)
  @Post('logout-all')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Revoke all sessions for current user' })
  async logoutAll(@CurrentUser('sub') userId: string) {
    await this.authService.logoutAll(userId);
    return { message: 'All sessions revoked' };
  }

  // ── GET /auth/me ──────────────────────────────────────────
  @UseGuards(JwtAuthGuard)
  @Get('me')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Get current authenticated user' })
  async me(@CurrentUser() user: any) {
    return { data: user };
  }

  // ── POST /auth/forgot-password ────────────────────────────
  @Public()
  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Send password reset email' })
  async forgotPassword(@Body() dto: ForgotPasswordDto) {
    await this.authService.forgotPassword(dto.email);
    return { message: 'If that email exists, a reset link has been sent' };
  }

  // ── POST /auth/reset-password ─────────────────────────────
  @Public()
  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Reset password using OTP token' })
  async resetPassword(@Body() dto: ResetPasswordDto) {
    await this.authService.resetPassword(dto.token, dto.newPassword);
    return { message: 'Password updated successfully. Please log in again.' };
  }

  // ── POST /auth/sso/token ──────────────────────────────────
  @UseGuards(JwtAuthGuard)
  @Post('sso/token')
  @HttpCode(HttpStatus.CREATED)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Generate a short-lived SSO token for cross-app login' })
  async createSSOToken(@CurrentUser('sub') userId: string) {
    const token = await this.authService.createSSOToken(userId);
    return { data: { token, expiresIn: 300 } };
  }

  // ── POST /auth/sso/consume ────────────────────────────────
  @Public()
  @Post('sso/consume')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Exchange SSO token for full session (cross-app)' })
  async consumeSSOToken(@Body() dto: SSOTokenDto) {
    return this.authService.consumeSSOToken(dto.token);
  }
}