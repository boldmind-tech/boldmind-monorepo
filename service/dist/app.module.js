"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const throttler_1 = require("@nestjs/throttler");
const schedule_1 = require("@nestjs/schedule");
const event_emitter_1 = require("@nestjs/event-emitter");
const bull_1 = require("@nestjs/bull");
const bullmq_1 = require("@nestjs/bullmq");
const database_module_1 = require("./database/database.module");
const auth_module_1 = require("./modules/auth/auth.module");
const user_module_1 = require("./modules/user/user.module");
const payment_module_1 = require("./modules/payment/payment.module");
const ai_module_1 = require("./modules/ai/ai.module");
const planai_module_1 = require("./modules/planai/planai.module");
const content_module_1 = require("./modules/content/content.module");
const educenter_module_1 = require("./modules/educenter/educenter.module");
const automation_module_1 = require("./modules/automation/automation.module");
const media_module_1 = require("./modules/media/media.module");
const notification_module_1 = require("./modules/notification/notification.module");
const fitness_module_1 = require("./modules/fitness/fitness.module");
const os_module_1 = require("./modules/os/os.module");
const admin_module_1 = require("./modules/admin/admin.module");
const emailscraper_module_1 = require("./modules/emailscraper/emailscraper.module");
const hub_module_1 = require("./modules/hub/hub.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ['.env.local', '.env'],
                cache: true,
            }),
            throttler_1.ThrottlerModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    throttlers: [
                        { name: 'short', ttl: 1000, limit: 10 },
                        { name: 'medium', ttl: 60000, limit: 200 },
                        { name: 'long', ttl: 3600000, limit: 2000 },
                    ],
                }),
            }),
            schedule_1.ScheduleModule.forRoot(),
            event_emitter_1.EventEmitterModule.forRoot({
                wildcard: true,
                delimiter: '.',
                maxListeners: 20,
            }),
            bull_1.BullModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => {
                    let url = config.get('REDIS_URL');
                    if (url && url.includes('-u ')) {
                        url = url.split('-u ')[1].split(' ')[0];
                    }
                    let redisConfig = { url };
                    if (url && (url.startsWith('rediss://') || url.includes('.upstash.io'))) {
                        redisConfig.tls = { rejectUnauthorized: false };
                    }
                    else if (config.get('NODE_ENV') === 'production') {
                        redisConfig.tls = {};
                    }
                    return {
                        redis: redisConfig,
                        defaultJobOptions: {
                            removeOnComplete: 100,
                            removeOnFail: 500,
                            attempts: 3,
                            backoff: { type: 'exponential', delay: 2000 },
                        },
                    };
                },
            }),
            bullmq_1.BullModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => {
                    let url = config.get('REDIS_URL');
                    if (url && url.includes('-u ')) {
                        url = url.split('-u ')[1].split(' ')[0];
                    }
                    const connection = url ? { url } : {
                        host: config.get('REDIS_HOST', 'localhost'),
                        port: config.get('REDIS_PORT', 6379),
                        password: config.get('REDIS_PASSWORD'),
                    };
                    if (url && (url.startsWith('rediss://') || url.includes('.upstash.io'))) {
                        connection.tls = { rejectUnauthorized: false };
                    }
                    else if (config.get('NODE_ENV') === 'production') {
                        connection.tls = {};
                    }
                    return {
                        connection,
                        defaultJobOptions: {
                            removeOnComplete: 100,
                            removeOnFail: 500,
                            attempts: 3,
                            backoff: { type: 'exponential', delay: 2000 },
                        },
                    };
                },
            }),
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            payment_module_1.PaymentModule,
            ai_module_1.AiModule,
            planai_module_1.PlanAIModule,
            content_module_1.ContentModule,
            educenter_module_1.EduCenterModule,
            automation_module_1.AutomationModule,
            media_module_1.MediaModule,
            notification_module_1.NotificationModule,
            fitness_module_1.FitnessModule,
            os_module_1.OSModule,
            admin_module_1.AdminModule,
            emailscraper_module_1.EmailScraperModule,
            hub_module_1.HubModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map