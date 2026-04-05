"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("@nestjs/config");
const helmet_1 = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const app_module_1 = require("./app.module");
const http_exception_filter_1 = require("./common/filters/http.exception.filter");
const response_interceptor_1 = require("./common/interceptors/response.interceptor");
const logging_interceptor_1 = require("./common/interceptors/logging.interceptor");
const validate_env_1 = require("./database/validate-env");
async function bootstrap() {
    const logger = new common_1.Logger('Bootstrap');
    const { valid, missing } = (0, validate_env_1.validateDatabaseEnvVars)();
    if (!valid) {
        logger.error(`Missing required env vars: ${missing.join(', ')}`);
        process.exit(1);
    }
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['error', 'warn', 'log', 'debug'],
    });
    const configService = app.get(config_1.ConfigService);
    const PORT = configService.get('PORT', 4001);
    const NODE_ENV = configService.get('NODE_ENV', 'development');
    const FRONTEND_ORIGINS = configService.get('ALLOWED_ORIGINS', '').split(',');
    app.use((0, helmet_1.default)({
        crossOriginResourcePolicy: { policy: 'cross-origin' },
    }));
    app.enableCors({
        origin: NODE_ENV === 'production'
            ? [
                'https://boldmind.ng',
                'https://planai.boldmind.ng',
                'https://os.boldmind.ng',
                'https://tools.boldmind.ng',
                'https://fit.boldmind.ng',
                'https://concept.boldmind.ng',
                'https://amebogist.ng',
                'https://studio.amebogist.ng',
                'https://educenter.com.ng',
                'https://skills.educenter.com.ng',
                ...FRONTEND_ORIGINS.filter(Boolean),
            ]
            : true,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-App-ID', 'X-Request-ID'],
    });
    app.use(cookieParser());
    app.use(compression());
    app.use(morgan(NODE_ENV === 'production' ? 'combined' : 'dev'));
    app.setGlobalPrefix('api/v1', { exclude: ['health', '/'] });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: { enableImplicitConversion: true },
    }));
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor(), new response_interceptor_1.ResponseInterceptor());
    if (NODE_ENV !== 'production' || configService.get('SWAGGER_ENABLED') === 'true') {
        const swaggerConfig = new swagger_1.DocumentBuilder()
            .setTitle('BoldMind API')
            .setDescription('BoldMind Ecosystem — 32+ products, 1 monolith. api.boldmind.ng')
            .setVersion('1.0')
            .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'access-token')
            .addTag('Auth', 'Authentication & SSO')
            .addTag('Users', 'User management')
            .addTag('Payments', 'Paystack integration')
            .addTag('AI', 'OpenAI & AI utilities')
            .addTag('PlanAI', 'PlanAI suite — 12 business tools')
            .addTag('Receptionist', 'AI Receptionist for Meta platforms')
            .addTag('Content', 'AmeboGist CMS')
            .addTag('EduCenter', 'JAMB/WAEC/NECO exam prep')
            .addTag('Automation', 'n8n workflows & BullMQ')
            .addTag('Media', 'Cloudflare R2 uploads')
            .addTag('Notifications', 'Email, WhatsApp, Push')
            .addTag('Fitness', 'NaijaFit')
            .addTag('OS', 'BoldMind OS')
            .addTag('Storefronts', 'Digital Storefronts')
            .addTag('Admin', 'Admin dashboard')
            .addTag('Health', 'Railway healthcheck')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
        swagger_1.SwaggerModule.setup('api/docs', app, document, {
            swaggerOptions: { persistAuthorization: true },
        });
        logger.log(`Swagger docs: http://localhost:${PORT}/api/docs`);
    }
    await app.listen(PORT, '0.0.0.0');
    logger.log(`🚀 BoldMind API running on port ${PORT} [${NODE_ENV}]`);
}
bootstrap();
//# sourceMappingURL=main.js.map