import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Progress, ProgressDocument } from '../progress/schemas/progress.schema';
import { SaveProgressDto } from '../progress/dto/save-progress.dto';

@Injectable()
export class StudyHubService {
  constructor(
    @InjectModel(Progress.name) private progressModel: Model<ProgressDocument>,
  ) {}

  async saveProgress(dto: SaveProgressDto): Promise<Progress> {
    const progress = new this.progressModel(dto);
    return await progress.save();
  }

  async getUserProgress(uid: string) {
    const progress = await this.progressModel.find({ uid }).sort({ attemptedAt: -1 }).limit(100);
    
    const totalQuestions = progress.length;
    const correctAnswers = progress.filter(p => p.isCorrect).length;
    const accuracy = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;
    const totalTimeSpent = progress.reduce((sum, p) => sum + p.timeSpent, 0);
    
    // Calculate study streak
    const studyStreak = this.calculateStudyStreak(progress);
    
    return {
      totalQuestions,
      correctAnswers,
      accuracy,
      totalTimeSpent,
      studyStreak,
      recentActivity: progress.slice(0, 10).map(p => ({
        subject: p.subject,
        questionId: p.questionId,
        isCorrect: p.isCorrect,
        attemptedAt: p.attemptedAt,
      })),
    };
  }

  async getLeaderboard(limit: number = 10) {
    const aggregation = await this.progressModel.aggregate([
      {
        $group: {
          _id: '$uid',
          totalQuestions: { $sum: 1 },
          correctAnswers: { $sum: { $cond: ['$isCorrect', 1, 0] } },
        },
      },
      {
        $addFields: {
          accuracy: {
            $multiply: [
              { $divide: ['$correctAnswers', '$totalQuestions'] },
              100,
            ],
          },
          score: { $multiply: ['$correctAnswers', 10] },
        },
      },
      { $sort: { score: -1, accuracy: -1 } },
      { $limit: limit },
    ]);

    return aggregation.map((item, index) => ({
      uid: item._id,
      score: item.score,
      totalQuestions: item.totalQuestions,
      correctAnswers: item.correctAnswers,
      accuracy: item.accuracy,
      rank: index + 1,
    }));
  }

  private calculateStudyStreak(progress: Progress[]): number {
    if (progress.length === 0) return 0;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let streak = 0;
    let currentDate = today;
    
    const dates = [...new Set(progress.map(p => {
      const date = new Date(p.attemptedAt);
      date.setHours(0, 0, 0, 0);
      return date.getTime();
    }))].sort((a, b) => b - a);
    
    for (const date of dates) {
      const progressDate = new Date(date);
      const diffDays = Math.floor((currentDate.getTime() - progressDate.getTime()) / (1000 * 60 * 60 * 24));
      
      if (diffDays === streak) {
        streak++;
      } else if (diffDays > streak) {
        break;
      }
    }
    
    return streak;
  }
}