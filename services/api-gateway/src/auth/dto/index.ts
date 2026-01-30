import { IsEmail, IsString, MinLength, IsOptional, IsPhoneNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty({
        example: 'user@example.com',
        description: 'User email address',
    })
    @IsEmail({}, { message: 'Please provide a valid email address' })
    email!: string;

    @ApiProperty({
        example: 'SecurePassword123!',
        description: 'User password (minimum 8 characters)',
        minLength: 8,
    })
    @IsString()
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    password!: string;
}

export class RegisterDto {
    @ApiProperty({
        example: 'user@example.com',
        description: 'User email address',
    })
    @IsEmail({}, { message: 'Please provide a valid email address' })
    email!: string;

    @ApiProperty({
        example: 'SecurePassword123!',
        description: 'User password (minimum 8 characters)',
        minLength: 8,
    })
    @IsString()
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    password!: string;

    @ApiPropertyOptional({
        example: 'John Doe',
        description: 'Full name of the user',
    })
    @IsOptional()
    @IsString()
    fullName?: string;

    @ApiPropertyOptional({
        example: '+2348012345678',
        description: 'Phone number in international format',
    })
    @IsOptional()
    @IsString()
    @IsPhoneNumber(undefined, { message: 'Please provide a valid phone number' })
    phone?: string;

    @ApiPropertyOptional({
        example: 'Africa/Lagos',
        description: 'User timezone',
        default: 'Africa/Lagos',
    })
    @IsOptional()
    @IsString()
    timezone?: string = 'Africa/Lagos';

    @ApiPropertyOptional({
        example: 'en-NG',
        description: 'User locale/language',
        default: 'en-NG',
    })
    @IsOptional()
    @IsString()
    locale?: string = 'en-NG';
}

export class PasswordResetDto {
    @ApiProperty({
        example: 'user@example.com',
        description: 'Email address to send reset instructions to',
    })
    @IsEmail({}, { message: 'Please provide a valid email address' })
    email!: string;
}

export class UpdatePasswordDto {
    @ApiProperty({
        example: 'NewSecurePassword456!',
        description: 'New password (minimum 8 characters)',
        minLength: 8,
    })
    @IsString()
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    newPassword!: string;
}

// Additional DTOs you might need:

export class RefreshTokenDto {
    @ApiProperty({
        description: 'Refresh token to get new access token',
    })
    @IsString()
    refreshToken!: string;
}

export class VerifyEmailDto {
    @ApiProperty({
        description: 'Email verification token',
    })
    @IsString()
    token!: string;
}

export class ResendVerificationDto {
    @ApiProperty({
        example: 'user@example.com',
        description: 'Email address to resend verification to',
    })
    @IsEmail({}, { message: 'Please provide a valid email address' })
    email!: string;
}

export class ChangePasswordDto {
    @ApiProperty({
        example: 'CurrentPassword123!',
        description: 'Current password',
    })
    @IsString()
    currentPassword!: string;

    @ApiProperty({
        example: 'NewSecurePassword456!',
        description: 'New password',
        minLength: 8,
    })
    @IsString()
    @MinLength(8, { message: 'New password must be at least 8 characters long' })
    newPassword!: string;
}