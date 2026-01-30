import { IsEmail, IsString, IsOptional, IsBoolean, IsObject, IsArray, IsEnum } from 'class-validator';
import { UserRole } from '../../generated/client';

export class CreateUserDto {
    @IsString()
    id!: string;

    @IsEmail()
    email!: string;

    @IsOptional()
    @IsString()
    fullName?: string;

    @IsOptional()
    @IsString()
    phone?: string;

    @IsOptional()
    @IsString()
    avatarUrl?: string;

    @IsOptional()
    @IsString()
    timezone?: string;

    @IsOptional()
    @IsString()
    locale?: string;

    @IsOptional()
    @IsBoolean()
    isVerified?: boolean;

    @IsOptional()
    @IsString()
    password?: string;

    @IsOptional()
    @IsObject()
    metadata?: Record<string, any>;
}

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    fullName?: string;

    @IsOptional()
    @IsString()
    phone?: string;

    @IsOptional()
    @IsString()
    avatarUrl?: string;

    @IsOptional()
    @IsString()
    timezone?: string;

    @IsOptional()
    @IsString()
    locale?: string;

    @IsOptional()
    @IsBoolean()
    isVerified?: boolean;

    @IsOptional()
    @IsObject()
    metadata?: Record<string, any>;

    @IsOptional()
    @IsString()
    password?: string;
}

export class AdminUpdateUserDto extends UpdateUserDto {
    @IsOptional()
    @IsEnum(UserRole)
    role?: UserRole;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    permissions?: string[];

    @IsOptional()
    @IsBoolean()
    isAdmin?: boolean;

    @IsOptional()
    @IsBoolean()
    isSuperAdmin?: boolean;

    @IsOptional()
    @IsString()
    adminNotes?: string;

}
