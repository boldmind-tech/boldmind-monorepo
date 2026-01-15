// dto/save-progress.dto.ts
import { IsString, IsBoolean, IsNumber } from 'class-validator';

export class SaveProgressDto {
    
  @IsString()
  uid: string;

  @IsString()
  subject: string;

  @IsString()
  year: string;

  @IsString()
  questionId: string;

  @IsString()
  answer: string;

  @IsBoolean()
  isCorrect: boolean;

  @IsNumber()
  timeSpent: number;
}