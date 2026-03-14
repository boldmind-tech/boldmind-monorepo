import { IsString, IsOptional, IsInt, IsEnum, IsEmail, Min, Max, MinLength, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

// ─── UPDATE USER ────────────────────────────────────────────────────────────

export class UpdateUserDto {
    @ApiPropertyOptional({ example: 'John Doe' })
    @IsOptional()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    name?: string;

    @ApiPropertyOptional({ example: '+2348012345678' })
    @IsOptional()
    @IsString()
    phone?: string;

    @ApiPropertyOptional({ example: 'https://cdn.boldmind.ng/avatars/abc.webp' })
    @IsOptional()
    @IsString()
    avatar?: string;
}

// ─── UPDATE PROFILE ─────────────────────────────────────────────────────────

export class UpdateProfileDto {
    @ApiPropertyOptional({ example: 'Full-stack developer based in Lagos' })
    @IsOptional()
    @IsString()
    @MaxLength(500)
    bio?: string;

    @ApiPropertyOptional({ example: 'Lagos, Nigeria' })
    @IsOptional()
    @IsString()
    location?: string;

    @ApiPropertyOptional({ example: 'https://johndoe.com' })
    @IsOptional()
    @IsString()
    website?: string;

    @ApiPropertyOptional({ example: '@johndoe' })
    @IsOptional()
    @IsString()
    twitter?: string;

    @ApiPropertyOptional({ example: 'johndoe' })
    @IsOptional()
    @IsString()
    instagram?: string;

    @ApiPropertyOptional({ example: 'Software Developer' })
    @IsOptional()
    @IsString()
    occupation?: string;

    @ApiPropertyOptional({ example: 'BoldMind Inc.' })
    @IsOptional()
    @IsString()
    company?: string;

    @ApiPropertyOptional()
    @IsOptional()
    interests?: string[];
}

// ─── USER QUERY (ADMIN LIST) ────────────────────────────────────────────────

export class UserQueryDto {
    @ApiPropertyOptional({ example: 1, default: 1 })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    page?: number;

    @ApiPropertyOptional({ example: 20, default: 20 })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(100)
    limit?: number;

    @ApiPropertyOptional({ example: 'john', description: 'Search by name or email' })
    @IsOptional()
    @IsString()
    search?: string;

    @ApiPropertyOptional({ example: 'ADMIN', enum: ['USER', 'ADMIN', 'SUPER_ADMIN'] })
    @IsOptional()
    @IsString()
    role?: string;
}
