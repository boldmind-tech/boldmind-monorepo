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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactToPostDto = exports.CreateCommentDto = exports.ListPostsQueryDto = exports.UpdatePostDto = exports.CreatePostDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreatePostDto {
}
exports.CreatePostDto = CreatePostDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(10),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreatePostDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "authorName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(300),
    __metadata("design:type", String)
], CreatePostDto.prototype, "excerpt", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['ai-tech', 'creator', 'sports', 'politics', 'entertainment', 'trending', 'general']),
    __metadata("design:type", String)
], CreatePostDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "subcategory", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_transformer_1.Transform)(({ value }) => Array.isArray(value) ? value.map((t) => t.toLowerCase().trim()) : []),
    __metadata("design:type", Array)
], CreatePostDto.prototype, "tags", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreatePostDto.prototype, "media", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreatePostDto.prototype, "seo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreatePostDto.prototype, "scheduledFor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "editorialNote", void 0);
class UpdatePostDto {
}
exports.UpdatePostDto = UpdatePostDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(10),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], UpdatePostDto.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(300),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "excerpt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['ai-tech', 'creator', 'sports', 'politics', 'entertainment', 'trending', 'general']),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UpdatePostDto.prototype, "tags", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], UpdatePostDto.prototype, "media", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], UpdatePostDto.prototype, "seo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "editorialNote", void 0);
class ListPostsQueryDto {
}
exports.ListPostsQueryDto = ListPostsQueryDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListPostsQueryDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListPostsQueryDto.prototype, "tag", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], ListPostsQueryDto.prototype, "search", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['latest', 'trending', 'featured']),
    __metadata("design:type", String)
], ListPostsQueryDto.prototype, "sort", void 0);
class CreateCommentDto {
}
exports.CreateCommentDto = CreateCommentDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(1000),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "parentId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['pidgin', 'english', 'yoruba', 'igbo', 'hausa']),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "language", void 0);
class ReactToPostDto {
}
exports.ReactToPostDto = ReactToPostDto;
__decorate([
    (0, class_validator_1.IsIn)(['like', 'love', 'laugh', 'fire', 'sad', 'angry']),
    __metadata("design:type", String)
], ReactToPostDto.prototype, "type", void 0);
//# sourceMappingURL=index.js.map