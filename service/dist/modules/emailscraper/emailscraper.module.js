"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailScraperModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const bullmq_1 = require("@nestjs/bullmq");
const emailscraper_controller_1 = require("./emailscraper.controller");
const emailscraper_service_1 = require("./emailscraper.service");
const emailscraper_schema_1 = require("./emailscraper.schema");
let EmailScraperModule = class EmailScraperModule {
};
exports.EmailScraperModule = EmailScraperModule;
exports.EmailScraperModule = EmailScraperModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'EmailLead', schema: emailscraper_schema_1.EmailLeadSchema },
                { name: 'ScrapeJob', schema: emailscraper_schema_1.ScrapeJobSchema },
                { name: 'LeadList', schema: emailscraper_schema_1.LeadListSchema },
            ]),
            bullmq_1.BullModule.registerQueue({ name: 'emailscraper' }),
        ],
        controllers: [emailscraper_controller_1.EmailScraperController],
        providers: [emailscraper_service_1.EmailScraperService],
        exports: [emailscraper_service_1.EmailScraperService],
    })
], EmailScraperModule);
//# sourceMappingURL=emailscraper.module.js.map