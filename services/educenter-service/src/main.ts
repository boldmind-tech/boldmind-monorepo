import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for all Next.js apps
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://educenter.com.ng',
      'https://educenter-preview.vercel.app',
    ],
    credentials: true,
  });

  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  const port = process.env.PORT || 3002;
  await app.listen(port);
  console.log(`🚀 EduCenter Service running on port ${port}`);
}

bootstrap();