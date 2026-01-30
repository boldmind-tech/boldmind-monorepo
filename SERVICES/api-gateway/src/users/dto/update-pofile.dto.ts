// SERVICES/api-gateway/src/users/dto/update-profile.dto.ts

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsString,
    IsObject,
    IsOptional,
    IsBoolean,
    IsArray,
    ValidateNested,
    IsDateString,
    IsNumber,
    Min,
    Max,
    IsEmail,
    IsUrl,
    IsPhoneNumber,
    IsEnum,
    IsNotEmpty
} from 'class-validator';
import { Type } from 'class-transformer';

// ==================== NESTED DTOs ====================

export class ProfileMetadataDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsUrl()
    avatarUrl?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    displayName?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    bio?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    location?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsUrl()
    website?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsDateString()
    dateOfBirth?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    timezone?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    language?: string;
}

export class EducationDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    institution?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    degree?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    fieldOfStudy?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    @Min(1900)
    @Max(new Date().getFullYear())
    startYear?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    @Min(1900)
    @Max(new Date().getFullYear() + 10)
    endYear?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    isCurrent?: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    grade?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    description?: string;
}

export class WorkExperienceDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    company?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    position?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    description?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsDateString()
    startDate?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsDateString()
    endDate?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    isCurrent?: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    location?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    employmentType?: string; // 'full-time', 'part-time', 'contract', 'freelance'
}

export class SocialLinksDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsUrl()
    twitter?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsUrl()
    linkedin?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsUrl()
    github?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsUrl()
    instagram?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsUrl()
    facebook?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsUrl()
    youtube?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsUrl()
    tiktok?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsUrl()
    portfolio?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsUrl()
    medium?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsUrl()
    devto?: string;
}

export class SkillsDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    technical?: string[];

    @ApiPropertyOptional()
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    soft?: string[];

    @ApiPropertyOptional()
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    languages?: string[];

    @ApiPropertyOptional()
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    certifications?: string[];
}

export class PreferencesDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    emailNotifications?: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    pushNotifications?: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    smsNotifications?: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    newsletterSubscribed?: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    theme?: string; // 'light', 'dark', 'auto'

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    currency?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    timeFormat?: string; // '12h', '24h'

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    dateFormat?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    twoFactorEnabled?: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsEnum(['public', 'private', 'connections-only'])
    profileVisibility?: string;
}

export class ContactInfoDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsPhoneNumber()
    phone?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @IsPhoneNumber()
    whatsapp?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    telegram?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    skype?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    discord?: string;
}

// ==================== MAIN DTO ====================

export class UpdateProfileDto {
    @ApiPropertyOptional({
        description: 'Basic profile metadata',
        type: ProfileMetadataDto
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => ProfileMetadataDto)
    metadata?: ProfileMetadataDto;

    @ApiPropertyOptional({
        description: 'Education history',
        type: [EducationDto]
    })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => EducationDto)
    education?: EducationDto[];

    @ApiPropertyOptional({
        description: 'Work experience',
        type: [WorkExperienceDto]
    })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => WorkExperienceDto)
    workExperience?: WorkExperienceDto[];

    @ApiPropertyOptional({
        description: 'Social media links',
        type: SocialLinksDto
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => SocialLinksDto)
    socialLinks?: SocialLinksDto;

    @ApiPropertyOptional({
        description: 'Skills and certifications',
        type: SkillsDto
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => SkillsDto)
    skills?: SkillsDto;

    @ApiPropertyOptional({
        description: 'User preferences',
        type: PreferencesDto
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => PreferencesDto)
    preferences?: PreferencesDto;

    @ApiPropertyOptional({
        description: 'Contact information',
        type: ContactInfoDto
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => ContactInfoDto)
    contactInfo?: ContactInfoDto;

    @ApiPropertyOptional({
        description: 'Custom profile data for specific products',
        type: 'object',
        additionalProperties: true
    })
    @IsOptional()
    @IsObject()
    customData?: Record<string, any>;

    @ApiPropertyOptional({
        description: 'Profile tags for categorization',
        example: ['developer', 'entrepreneur', 'student']
    })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    tags?: string[];

    @ApiPropertyOptional({
        description: 'Whether profile is active',
        default: true
    })
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;

    @ApiPropertyOptional({
        description: 'Profile completion percentage (0-100)',
        minimum: 0,
        maximum: 100
    })
    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(100)
    completionPercentage?: number;

    @ApiPropertyOptional({
        description: 'Last profile update timestamp',
        example: '2024-01-25T10:30:00Z'
    })
    @IsOptional()
    @IsDateString()
    lastUpdatedAt?: string;
}

// ==================== RESPONSE DTOs ====================

export class ProfileResponseDto {
    @ApiProperty()
    id?: string;

    @ApiProperty()
    userId?: string;

    @ApiProperty()
    productSlug?: string;

    @ApiProperty({ type: ProfileMetadataDto })
    metadata?: ProfileMetadataDto;

    @ApiProperty({ type: [EducationDto], required: false })
    education?: EducationDto[];

    @ApiProperty({ type: [WorkExperienceDto], required: false })
    workExperience?: WorkExperienceDto[];

    @ApiProperty({ type: SocialLinksDto, required: false })
    socialLinks?: SocialLinksDto;

    @ApiProperty({ type: SkillsDto, required: false })
    skills?: SkillsDto;

    @ApiProperty({ type: PreferencesDto, required: false })
    preferences?: PreferencesDto;

    @ApiProperty({ type: ContactInfoDto, required: false })
    contactInfo?: ContactInfoDto;

    @ApiProperty({ type: 'object', required: false })
    customData?: Record<string, any>;

    @ApiProperty({ type: [String], required: false })
    tags?: string[];

    @ApiProperty()
    isActive?: boolean;

    @ApiProperty()
    completionPercentage?: number;

    @ApiProperty()
    createdAt?: string;

    @ApiProperty()
    updatedAt?: string;

    @ApiProperty({ required: false })
    lastUpdatedAt?: string;
}

// ==================== VALIDATION GROUPS ====================

export const UpdateProfileValidationGroups = {
    BASIC: 'basic',
    EDUCATION: 'education',
    WORK: 'work',
    SOCIAL: 'social',
    SKILLS: 'skills',
    PREFERENCES: 'preferences',
    CONTACT: 'contact',
    ALL: 'all'
} as const;

// ==================== HELPER FUNCTIONS ====================

/**
 * Create a partial update DTO with validation groups
 */
export function createPartialUpdateDto(
    data: Partial<UpdateProfileDto>,
    _groups: string[] = [UpdateProfileValidationGroups.ALL]
): Partial<UpdateProfileDto> {
    return {
        ...data,
        // Add validation metadata
        // This can be used with class-validator's @ValidateIf decorator
    };
}

/**
 * Calculate profile completion percentage
 */
export function calculateCompletionPercentage(
    profile: Partial<UpdateProfileDto>
): number {
    const fields = [
        profile.metadata?.displayName,
        profile.metadata?.bio,
        profile.metadata?.avatarUrl,
        profile.contactInfo?.email,
        profile.skills?.technical?.length,
        profile.education?.length,
        profile.workExperience?.length
    ];

    const filledFields = fields.filter(field => {
        if (Array.isArray(field)) return field.length > 0;
        return field !== undefined && field !== null && field !== '';
    }).length;

    return Math.round((filledFields / fields.length) * 100);
}