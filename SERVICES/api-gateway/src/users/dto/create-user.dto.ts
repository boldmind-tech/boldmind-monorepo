// SERVICES/api-gateway/src/users/dto/create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsOptional, IsObject, IsBoolean } from 'class-validator';

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    id!: string;

    @ApiProperty()
    @IsEmail()
    email!: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    fullName?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    phone?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    avatarUrl?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    timezone?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    locale?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    isVerified?: boolean;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsObject()
    metadata?: Record<string, any>;
}
