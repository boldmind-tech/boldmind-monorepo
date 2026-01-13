import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.enableCors();

  // Swagger for Payment Service
  const config = new DocumentBuilder()
    .setTitle('BoldMind Payment Service')
    .setDescription('Centralized payment processing for all BoldMind products')
    .setVersion('1.0')
    .addTag('paystack', 'Paystack integration')
    .addTag('subscriptions', 'Subscription management')
    .addTag('products', 'Product pricing')
    .addTag('webhooks', 'Payment webhooks')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.PORT || 4003;
  await app.listen(port);
  console.log(`💳 Global Payment Service running on: http://localhost:${port}`);
  console.log(`📚 Docs: http://localhost:${port}/docs`);
}

bootstrap();