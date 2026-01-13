import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProgressModule } from './progress/progress.module';
import { CoursesModule } from './courses/courses.module';
import { ResultsModule } from './results/results.module';
import { StudyHubModule } from './study-hub/study-hub.module';
import { BusinessSchoolModule } from './business-school/business-school.module';
import { AiLabModule } from './ai-lab/ai-lab.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: ['.env.local', '.env'],
    }),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/educenter',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
    ProgressModule,
    CoursesModule,
    ResultsModule,
    StudyHubModule,
    BusinessSchoolModule,
    AiLabModule,
    SubscriptionsModule,
  ],
})
export class AppModule {}