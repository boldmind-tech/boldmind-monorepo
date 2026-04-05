"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RssService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const redis_service_1 = require("../../database/redis.service");
const SITE_URL = 'https://amebogist.ng';
const SITE_NAME = 'AmeboGist';
const SITE_DESCRIPTION = "Nigeria's #1 Pidgin English tech, entertainment & gist platform";
const RSS_CACHE_TTL = 900;
let RssService = class RssService {
    constructor(postModel, redis) {
        this.postModel = postModel;
        this.redis = redis;
    }
    async generateMainFeed() {
        const cacheKey = 'rss:main';
        const cached = await this.redis.get(cacheKey);
        if (cached)
            return cached;
        const articles = await this.postModel
            .find({ status: 'published' })
            .select('slug title excerpt content.pidgin category author.name media.featuredImage publishedAt')
            .sort({ publishedAt: -1 })
            .limit(30)
            .lean();
        const xml = this.buildRssXml({
            title: SITE_NAME,
            link: SITE_URL,
            description: SITE_DESCRIPTION,
            feedUrl: `${SITE_URL}/api/content/rss`,
            articles,
        });
        await this.redis.setex(cacheKey, RSS_CACHE_TTL, xml);
        return xml;
    }
    async generateCategoryFeed(category) {
        const cacheKey = `rss:category:${category}`;
        const cached = await this.redis.get(cacheKey);
        if (cached)
            return cached;
        const articles = await this.postModel
            .find({ status: 'published', category })
            .select('slug title excerpt content.pidgin category author.name media.featuredImage publishedAt')
            .sort({ publishedAt: -1 })
            .limit(20)
            .lean();
        const xml = this.buildRssXml({
            title: `${SITE_NAME} — ${this.capitalise(category)}`,
            link: `${SITE_URL}/category/${category}`,
            description: `Latest ${category} gist from AmeboGist`,
            feedUrl: `${SITE_URL}/api/content/rss/${category}`,
            articles,
        });
        await this.redis.setex(cacheKey, RSS_CACHE_TTL, xml);
        return xml;
    }
    buildRssXml(params) {
        const { title, link, description, feedUrl, articles } = params;
        const items = articles
            .map((article) => {
            const articleUrl = `${SITE_URL}/${article.slug}`;
            const pubDate = article.publishedAt
                ? new Date(article.publishedAt).toUTCString()
                : new Date().toUTCString();
            const image = article.media?.featuredImage
                ? `<enclosure url="${this.escapeXml(article.media.featuredImage)}" type="image/jpeg"/>`
                : '';
            return `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${articleUrl}</link>
      <description><![CDATA[${article.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${articleUrl}</guid>
      <dc:creator><![CDATA[${article.author?.name ?? 'AmeboGist'}]]></dc:creator>
      <category><![CDATA[${article.category}]]></category>
      ${image}
    </item>`;
        })
            .join('');
        return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${title}]]></title>
    <link>${link}</link>
    <description><![CDATA[${description}]]></description>
    <language>en-NG</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_URL}/icons/icon-192x192.png</url>
      <title>${title}</title>
      <link>${link}</link>
    </image>
    ${items}
  </channel>
</rss>`;
    }
    escapeXml(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }
    capitalise(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ');
    }
};
exports.RssService = RssService;
exports.RssService = RssService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Post')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        redis_service_1.RedisService])
], RssService);
//# sourceMappingURL=rss.service.js.map