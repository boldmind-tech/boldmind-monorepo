import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AiTool, AiToolDocument } from './schemas/ai-tool.schema';
import { VideoGeneration, VideoGenerationDocument } from './schemas/video-generation.schema';

@Injectable()
export class AiLabService {
  constructor(
    @InjectModel(AiTool.name) private aiToolModel: Model<AiToolDocument>,
    @InjectModel(VideoGeneration.name) private videoGenerationModel: Model<VideoGenerationDocument>,
  ) {}

  async getTools(filters?: any) {
    const query: any = {};
    
    if (filters?.category) {
      query.category = filters.category;
    }
    
    if (filters?.free !== undefined) {
      query.isFree = filters.free === 'true';
    }
    
    return this.aiToolModel.find(query).sort({ name: 1 });
  }

  async generateVideo(data: {
    userId: string;
    script: string;
    style: string;
    duration: number;
  }) {
    const videoGen = new this.videoGenerationModel({
      userId: data.userId,
      script: data.script,
      style: data.style,
      duration: data.duration,
      status: 'processing',
      startedAt: new Date(),
    });

    await videoGen.save();

    // Simulate processing
    setTimeout(async () => {
      videoGen.status = 'completed';
      videoGen.completedAt = new Date();
      videoGen.videoUrl = `https://storage.boldmind.ng/videos/${videoGen._id}.mp4`;
      await videoGen.save();
    }, 30000); // 30 seconds

    return {
      success: true,
      generationId: videoGen._id,
      status: 'processing',
      estimatedTime: '30 seconds',
      message: 'Video generation started. We\'ll notify you when it\'s ready.',
    };
  }

  async createWhatsAppAutomation(data: {
    userId: string;
    name: string;
    trigger: string;
    response: string;
  }) {
    // Store automation logic here
    return {
      success: true,
      automationId: `auto_${Date.now()}`,
      name: data.name,
      trigger: data.trigger,
      response: data.response,
      createdAt: new Date(),
      webhookUrl: `https://api.boldmind.ng/webhooks/whatsapp/${data.userId}`,
    };
  }
}