"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EduCenterModule = void 0;
const common_1 = require("@nestjs/common");
const educenter_controller_1 = require("./educenter.controller");
const educenter_service_1 = require("./educenter.service");
const aloc_service_1 = require("./services/aloc.service");
const auth_module_1 = require("../auth/auth.module");
const prisma_service_1 = require("../../database/prisma.service");
const redis_service_1 = require("../../database/redis.service");
let EduCenterModule = class EduCenterModule {
};
exports.EduCenterModule = EduCenterModule;
exports.EduCenterModule = EduCenterModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule],
        controllers: [educenter_controller_1.EduCenterController],
        providers: [
            educenter_service_1.EduCenterService,
            aloc_service_1.AlocService,
            prisma_service_1.PrismaService,
            redis_service_1.RedisService,
        ],
        exports: [educenter_service_1.EduCenterService, aloc_service_1.AlocService],
    })
], EduCenterModule);
//# sourceMappingURL=educenter.module.js.map