"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TrendService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrendService = void 0;
const common_1 = require("@nestjs/common");
let TrendService = TrendService_1 = class TrendService {
    constructor() {
        this.logger = new common_1.Logger(TrendService_1.name);
    }
    async getTrendingTechUpdates() {
        this.logger.debug('Fetching trending tech updates');
        return [
            {
                title: 'Gemini 2.5 Pro updates for developers',
                platform: 'google',
                url: 'https://blog.google/technology/ai/',
                description: 'New context window and performance improvements for builders.',
            },
            {
                title: 'Nigeria Startup Act Implementation Updates',
                platform: 'news',
                url: 'https://startup.gov.ng',
                description: 'Latest on registration and tax incentives for tech founders.',
            },
            {
                title: 'Creator Economy Trends 2026',
                platform: 'x',
                url: 'https://twitter.com/search?q=creator+economy',
                description: 'Monetization shifts and how Nigerian creators are pivoting.',
            },
        ];
    }
};
exports.TrendService = TrendService;
exports.TrendService = TrendService = TrendService_1 = __decorate([
    (0, common_1.Injectable)()
], TrendService);
//# sourceMappingURL=trend.service.js.map