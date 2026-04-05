"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const prisma_service_1 = require("./prisma.service");
const redis_service_1 = require("./redis.service");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => {
                    const uri = config.get('MONGODB_URL');
                    const dbName = config.get('MONGODB_DB_MAIN') || config.get('MONGODB_DB_NAME', 'boldmind');
                    if (!uri) {
                        throw new Error('MONGODB_URL is not set');
                    }
                    return {
                        uri,
                        dbName,
                        maxPoolSize: 15,
                        serverSelectionTimeoutMS: 5000,
                        heartbeatFrequencyMS: 10000,
                    };
                },
            }),
        ],
        providers: [
            prisma_service_1.PrismaService,
            redis_service_1.RedisService,
        ],
        exports: [
            prisma_service_1.PrismaService,
            redis_service_1.RedisService,
            mongoose_1.MongooseModule,
        ],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map