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
exports.WeeklyGoalDto = exports.UpdateProgressDto = exports.EnrollCourseDto = exports.UpdateCourseDto = exports.CreateCourseDto = exports.StudyPlanDto = exports.AiTutorDto = exports.GetQuestionsDto = exports.SubmitAnswerDto = exports.SubmitSessionDto = exports.AnswerDto = exports.StartFullMockDto = exports.StartCbtDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const EXAM_TYPES = ['JAMB', 'WAEC', 'NECO', 'GCE', 'POST_UTME', 'SKILL_TEST'];
const CBT_MODES = ['full', 'practice', 'quick'];
const LEADERBOARD_SCOPES = ['global', 'weekly', 'monthly'];
class StartCbtDto {
}
exports.StartCbtDto = StartCbtDto;
__decorate([
    (0, class_validator_1.IsIn)(EXAM_TYPES),
    __metadata("design:type", String)
], StartCbtDto.prototype, "examType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StartCbtDto.prototype, "subject", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(2000),
    (0, class_validator_1.Max)(2025),
    __metadata("design:type", Number)
], StartCbtDto.prototype, "year", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(CBT_MODES),
    __metadata("design:type", String)
], StartCbtDto.prototype, "mode", void 0);
class StartFullMockDto {
}
exports.StartFullMockDto = StartFullMockDto;
__decorate([
    (0, class_validator_1.IsIn)(EXAM_TYPES),
    __metadata("design:type", String)
], StartFullMockDto.prototype, "examType", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(2),
    (0, class_validator_1.ArrayMaxSize)(4),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], StartFullMockDto.prototype, "subjects", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(2000),
    (0, class_validator_1.Max)(2025),
    __metadata("design:type", Number)
], StartFullMockDto.prototype, "year", void 0);
class AnswerDto {
}
exports.AnswerDto = AnswerDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AnswerDto.prototype, "alocId", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['A', 'B', 'C', 'D', 'a', 'b', 'c', 'd']),
    __metadata("design:type", String)
], AnswerDto.prototype, "selectedAnswer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AnswerDto.prototype, "subject", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], AnswerDto.prototype, "timeTakenSecs", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], AnswerDto.prototype, "isSkipped", void 0);
class SubmitSessionDto {
}
exports.SubmitSessionDto = SubmitSessionDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => AnswerDto),
    __metadata("design:type", Array)
], SubmitSessionDto.prototype, "answers", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], SubmitSessionDto.prototype, "timeTakenSecs", void 0);
class SubmitAnswerDto {
}
exports.SubmitAnswerDto = SubmitAnswerDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubmitAnswerDto.prototype, "alocId", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['A', 'B', 'C', 'D']),
    __metadata("design:type", String)
], SubmitAnswerDto.prototype, "selectedAnswer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], SubmitAnswerDto.prototype, "timeTakenSecs", void 0);
class GetQuestionsDto {
}
exports.GetQuestionsDto = GetQuestionsDto;
__decorate([
    (0, class_validator_1.IsIn)(EXAM_TYPES),
    __metadata("design:type", String)
], GetQuestionsDto.prototype, "examType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetQuestionsDto.prototype, "subject", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(2000),
    (0, class_validator_1.Max)(2025),
    __metadata("design:type", Number)
], GetQuestionsDto.prototype, "year", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(5),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], GetQuestionsDto.prototype, "limit", void 0);
class AiTutorDto {
}
exports.AiTutorDto = AiTutorDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AiTutorDto.prototype, "question", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AiTutorDto.prototype, "subject", void 0);
__decorate([
    (0, class_validator_1.IsIn)(EXAM_TYPES),
    __metadata("design:type", String)
], AiTutorDto.prototype, "examType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AiTutorDto.prototype, "context", void 0);
class StudyPlanDto {
}
exports.StudyPlanDto = StudyPlanDto;
__decorate([
    (0, class_validator_1.IsIn)(EXAM_TYPES),
    __metadata("design:type", String)
], StudyPlanDto.prototype, "examType", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], StudyPlanDto.prototype, "subjects", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], StudyPlanDto.prototype, "targetDate", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(12),
    __metadata("design:type", Number)
], StudyPlanDto.prototype, "studyHoursPerDay", void 0);
class CreateCourseDto {
}
exports.CreateCourseDto = CreateCourseDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['exam-prep', 'marketing-playbook', 'ai-tools-training', 'digital-skills', 'entrepreneurship', 'general']),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)([...EXAM_TYPES, null]),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "examType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "subject", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "thumbnailUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "videoUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateCourseDto.prototype, "durationMins", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateCourseDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "instructorName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateCourseDto.prototype, "tags", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateCourseDto.prototype, "prerequisites", void 0);
class UpdateCourseDto {
}
exports.UpdateCourseDto = UpdateCourseDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCourseDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCourseDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCourseDto.prototype, "thumbnailUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateCourseDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], UpdateCourseDto.prototype, "tags", void 0);
class EnrollCourseDto {
}
exports.EnrollCourseDto = EnrollCourseDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EnrollCourseDto.prototype, "courseId", void 0);
class UpdateProgressDto {
}
exports.UpdateProgressDto = UpdateProgressDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateProgressDto.prototype, "completedLessons", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], UpdateProgressDto.prototype, "progressPercent", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProgressDto.prototype, "lastLessonId", void 0);
class WeeklyGoalDto {
}
exports.WeeklyGoalDto = WeeklyGoalDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(7),
    __metadata("design:type", Number)
], WeeklyGoalDto.prototype, "goalDays", void 0);
//# sourceMappingURL=educenter.dto.js.map