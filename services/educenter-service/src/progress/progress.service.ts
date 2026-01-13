import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Progress, ProgressDocument } from './schemas/progress.schema';
import { SaveProgressDto } from './dto/save-progress.dto';

@Injectable()
export class ProgressService {
  constructor(
    @InjectModel(Progress.name) private progressModel: Model<ProgressDocument>,
  ) {}

  async saveProgress(dto: SaveProgressDto): Promise<Progress> {
    const progress = new this.progressModel(dto);
    return await progress.save();
  }

  async getUserProgress(uid: string) {
    const progress = await this.progressModel.find({ uid });
    
    const totalQuestions = progress.length;
    const correctAnswers = progress.filter(p => p.isCorrect).length;
    const accuracy = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;
    const totalTimeSpent = progress.reduce((sum, p) => sum + p.timeSpent, 0);
    
    return {
      totalQuestions,
      correctAnswers,
      accuracy,
      totalTimeSpent,
      studyStreak: 0,
      recentActivity: progress.slice(-10),
    };
  }

  async getSubjectProgress(uid: string, subject: string) {
    const progress = await this.progressModel.find({ uid, subject });
    
    const totalQuestions = progress.length;
    const correctAnswers = progress.filter(p => p.isCorrect).length;
    const accuracy = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;
    
    return {
      subject,
      totalQuestions,
      correctAnswers,
      accuracy,
      byYear: {},
    };
  }

  async getTopStudents() {
    return [];
  }
}