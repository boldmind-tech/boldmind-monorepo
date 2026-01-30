// SERVICES/api-gateway/src/users/dto/create-profile.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsObject, IsOptional } from 'class-validator';

export class CreateProfileDto {
    @ApiProperty()
    @IsString()
    productSlug?: string;

    @ApiProperty()
    @IsObject()
    @IsOptional()
    profileData?: Record<string, any>;
}