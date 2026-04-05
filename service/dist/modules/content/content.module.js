"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const bullmq_1 = require("@nestjs/bullmq");
const content_service_1 = require("./content.service");
const content_controller_1 = require("./content.controller");
const rss_service_1 = require("./rss.service");
const trend_service_1 = require("./src/services/trend.service");
const ai_service_1 = require("./src/services/ai.service");
const post_schema_1 = require("./schemas/post.schema");
const comment_schema_1 = require("./schemas/comment.schema");
const creator_stats_schema_1 = require("./schemas/creator-stats.schema");
const reaction_schema_1 = require("./schemas/reaction.schema");
let ContentModule = class ContentModule {
};
exports.ContentModule = ContentModule;
exports.ContentModule = ContentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Post', schema: post_schema_1.PostSchema },
                { name: 'Comment', schema: comment_schema_1.CommentSchema },
                { name: 'CreatorStats', schema: creator_stats_schema_1.CreatorStatsSchema },
                { name: 'Reaction', schema: reaction_schema_1.ReactionSchema },
            ]),
            bullmq_1.BullModule.registerQueue({ name: 'content' }),
        ],
        controllers: [content_controller_1.ContentController],
        providers: [
            content_service_1.ContentService,
            rss_service_1.RssService,
            trend_service_1.TrendService,
            ai_service_1.ContentAiService
        ],
        exports: [content_service_1.ContentService],
    })
], ContentModule);
//# sourceMappingURL=content.module.js.map