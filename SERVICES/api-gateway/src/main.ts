// SERVICES/api-gateway/src/main.ts
import 'reflect-metadata';

import { NestFactory } from '@nestjs/core';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';


async function bootstrap() {
    // Create app instance
    const app = await NestFactory.create(AppModule, {
        logger: ['error', 'warn', 'debug', 'log', 'verbose'],
    });

    const configService = app.get(ConfigService);
    const logger = new Logger('Bootstrap');

    // 1. CORS – safer defaults + env fallback
    const corsOrigins = configService.get<string>('CORS_ORIGIN')?.split(',')?.map(o => o.trim()) || [
        'http://localhost:3000',
        'http://localhost:3001',
        'https://boldmind.ng',
        'https://*.boldmind.ng',
    ];

    app.enableCors({
        origin: corsOrigins,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
        allowedHeaders: 'Content-Type, Authorization, Accept, X-Requested-With',
        exposedHeaders: ['Authorization'],
        maxAge: 86400, // 24 hours cache for preflight
    });

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
            transformOptions: { enableImplicitConversion: true },
            forbidUnknownValues: true,
            exceptionFactory: (errors) => {
                const messages = errors.map(e => ({
                    field: e.property,
                    constraints: e.constraints,
                }));
                return new BadRequestException(messages);
            },
        }),
    );

    app.setGlobalPrefix('api', {
        exclude: ['api/docs(.*)'],
    });

    const swaggerConfig = new DocumentBuilder()
        .setTitle('BoldMind API Gateway')
        .setDescription('Unified backend API for all BoldMind products and services')
        .setVersion('1.0.0')
        .setContact('BoldMind Team', 'https://boldmind.ng', 'support@boldmind.ng')
        .setLicense('Proprietary', 'https://boldmind.ng/license')
        .addBearerAuth(
            {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                name: 'Authorization',
                description: 'Enter JWT token (without "Bearer " prefix)',
                in: 'header',
            },
            'access-token',
        )
        .addTag('auth', 'Authentication & sessions')
        .addTag('users', 'User profiles & management')
        .addTag('products', 'Product catalog & access')
        .addTag('payments', 'Subscriptions & payment processing')
        .addTag('educenter', 'EduCenter learning features')
        .addTag('hub', 'BoldMind Hub features')
        .addTag('webhooks', 'Webhook receivers (Stripe, Supabase, etc)')
        .addTag('health', 'Health check endpoints')
        .addTag('notifications', 'Notification endpoints')
        .addTag('amebogist', 'Amebogist: News and gossip service')
        .addTag('social-factory', 'Social Factory: Content generation')
        .addTag('emailscraper', 'Email Scraper Pro tools')
        .addTag('naija-fither', 'Naija Fither: Fitness & diet')
        .addTag('boldmind-os', 'BoldMind OS system endpoints')
        .addTag('safeai', 'SafeAI: Content filtering & moderation')
        .addTag('analytics', 'System-wide analytics')
        .addTag('ai', 'Core AI services')
        .addTag('media', 'Media upload and management')
        .addTag('borderless-remit', 'Borderless Remit: Cross-border payments')
        .addTag('receipt-genius', 'Receipt Genius: Expense tracking')
        .addTag('planai-suite', 'PlanAI Suite features')
        .addTag('power-alert', 'Power Alert: Energy monitoring')
        .addTag('farmgate-direct', 'Farmgate Direct: Agri-tech')
        .addTag('afrocopy-ai', 'Afrocopy AI: Marketing copy gen')
        .addTag('skill2cash', 'Skill2Cash: Freelance marketplace')
        .addTag('anontruth-mic', 'Anontruth Mic: Social audio')
        .addTag('afrohustle-os', 'Afrohustle OS: Business tools')
        .addTag('ai-receptionist', 'AI Receptionist: Call management')
        .addTag('kolo-ai', 'Kolo AI: Savings & wealth')
        .addTag('naijagig-matcher', 'NaijaGig Matcher: Freelance jobs')
        .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig, {
        // Optional: ignore circular refs if you have them
        ignoreGlobalPrefix: false,
    });

    SwaggerModule.setup('api/docs', app, document, {
        swaggerOptions: {
            persistAuthorization: true, // keep token between refreshes
            tagsSorter: 'alpha',
            operationsSorter: 'alpha',
            docExpansion: 'none',
        },
        customCss: '.swagger-ui .topbar { display: none }', // hide top bar if desired
    });

    // 5. Start server
    const port = configService.get<number>('PORT', 4000);
    const host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost';

    await app.listen(port, host);

    const url = `http${host === '0.0.0.0' ? 's' : ''}://${host === '0.0.0.0' ? 'your-domain' : 'localhost'}:${port}`;

    logger.log(`🚀 API Gateway is running on: ${url}`);
    logger.log(`📚 Swagger documentation: ${url}/api/docs`);
    logger.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
}

bootstrap().catch((err) => {
    console.error('Bootstrap failed:', err);
    process.exit(1);
});