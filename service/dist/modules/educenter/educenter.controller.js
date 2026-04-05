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
exports.EduCenterController = void 0;
const common_1 = require("@nestjs/common");
const educenter_service_1 = require("./educenter.service");
const auth_guard_1 = require("../auth/auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const public_decorator_1 = require("../../common/decorators/public.decorator");
const user_decorator_1 = require("../../common/decorators/user.decorator");
const educenter_dto_1 = require("./dto/educenter.dto");
let EduCenterController = class EduCenterController {
    constructor(eduService) {
        this.eduService = eduService;
    }
    getSubjects(examType) {
        return this.eduService.getSubjectsForExam(examType);
    }
    previewQuestions(dto) {
        return this.eduService['aloc'].fetchQuestionsForSession({
            examType: dto.examType,
            subject: dto.subject,
            year: dto.year,
            limit: 5,
        }).then((qs) => qs.map((q) => ({
            alocId: q.alocId,
            question: q.question,
            options: q.options,
            subject: q.subject,
            year: q.year,
        })));
    }
    startSession(user, dto) {
        return this.eduService.startCbtSession(user.sub, dto);
    }
    startFullMock(user, dto) {
        return this.eduService.startFullMockExam(user.sub, dto);
    }
    submitSession(user, sessionId, dto) {
        return this.eduService.submitSession(user.sub, sessionId, dto);
    }
    abandonSession(user, sessionId) {
        return this.eduService.abandonSession(user.sub, sessionId);
    }
    getSessionReview(user, sessionId) {
        return this.eduService.getSessionReview(user.sub, sessionId);
    }
    getMySessions(user, examType, subject, page) {
        return this.eduService.getMySessions(user.sub, { examType, subject, page: page ? +page : 1 });
    }
    getDashboard(user) {
        return this.eduService.getStudentDashboard(user.sub);
    }
    getSubjectAnalytics(user, examType, subject) {
        return this.eduService.getSubjectAnalytics(user.sub, examType, subject);
    }
    getStreak(user) {
        return this.eduService.getMyStreak(user.sub);
    }
    updateWeeklyGoal(user, dto) {
        return this.eduService.updateWeeklyGoal(user.sub, dto.goalDays);
    }
    getLeaderboard(scope = 'weekly', examType, limit) {
        return this.eduService.getLeaderboard({
            scope: scope ?? 'weekly',
            examType,
            limit: limit ? +limit : 50,
        });
    }
    getMyRank(user, scope = 'weekly') {
        return this.eduService.getMyRank(user.sub, scope ?? 'weekly');
    }
    askTutor(user, dto) {
        return this.eduService.askAiTutor(user.sub, dto);
    }
    generateStudyPlan(user, dto) {
        return this.eduService.generateStudyPlan(user.sub, dto);
    }
    listCourses(category, examType, subject, isPremium, search, page) {
        return this.eduService.listCourses({
            category,
            examType,
            subject,
            isPremium: isPremium === 'true' ? true : isPremium === 'false' ? false : undefined,
            search,
            page: page ? +page : 1,
        });
    }
    getCourse(slug, user) {
        return this.eduService.getCourseBySlug(slug, user?.sub);
    }
    enrollCourse(user, courseId) {
        return this.eduService.enrollCourse(user.sub, courseId);
    }
    updateProgress(user, courseId, dto) {
        return this.eduService.updateCourseProgress(user.sub, courseId, dto);
    }
    getMarketingPlaybooks(user) {
        return this.eduService.getMarketingPlaybooks(user?.sub);
    }
    getAiToolsTraining(user) {
        return this.eduService.getAiToolsTraining(user?.sub);
    }
    createCourse(user, dto) {
        return this.eduService.createCourse(user.sub, dto);
    }
    publishCourse(user, courseId) {
        return this.eduService.publishCourse(courseId, user.sub);
    }
};
exports.EduCenterController = EduCenterController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('subjects/:examType'),
    __param(0, (0, common_1.Param)('examType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "getSubjects", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('questions/preview'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [educenter_dto_1.GetQuestionsDto]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "previewQuestions", null);
__decorate([
    (0, common_1.Post)('cbt/start'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, educenter_dto_1.StartCbtDto]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "startSession", null);
__decorate([
    (0, common_1.Post)('cbt/mock'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, educenter_dto_1.StartFullMockDto]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "startFullMock", null);
__decorate([
    (0, common_1.Post)('cbt/:sessionId/submit'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('sessionId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, educenter_dto_1.SubmitSessionDto]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "submitSession", null);
__decorate([
    (0, common_1.Post)('cbt/:sessionId/abandon'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('sessionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "abandonSession", null);
__decorate([
    (0, common_1.Get)('cbt/:sessionId/review'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('sessionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "getSessionReview", null);
__decorate([
    (0, common_1.Get)('sessions'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('examType')),
    __param(2, (0, common_1.Query)('subject')),
    __param(3, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "getMySessions", null);
__decorate([
    (0, common_1.Get)('dashboard'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Get)('analytics/:examType/:subject'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('examType')),
    __param(2, (0, common_1.Param)('subject')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "getSubjectAnalytics", null);
__decorate([
    (0, common_1.Get)('streak'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "getStreak", null);
__decorate([
    (0, common_1.Patch)('streak/goal'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, educenter_dto_1.WeeklyGoalDto]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "updateWeeklyGoal", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('leaderboard'),
    __param(0, (0, common_1.Query)('scope')),
    __param(1, (0, common_1.Query)('examType')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "getLeaderboard", null);
__decorate([
    (0, common_1.Get)('leaderboard/my-rank'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('scope')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "getMyRank", null);
__decorate([
    (0, common_1.Post)('ai-tutor'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, educenter_dto_1.AiTutorDto]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "askTutor", null);
__decorate([
    (0, common_1.Post)('study-plan'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, educenter_dto_1.StudyPlanDto]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "generateStudyPlan", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('courses'),
    __param(0, (0, common_1.Query)('category')),
    __param(1, (0, common_1.Query)('examType')),
    __param(2, (0, common_1.Query)('subject')),
    __param(3, (0, common_1.Query)('isPremium')),
    __param(4, (0, common_1.Query)('search')),
    __param(5, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "listCourses", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('courses/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "getCourse", null);
__decorate([
    (0, common_1.Post)('courses/:courseId/enroll'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('courseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "enrollCourse", null);
__decorate([
    (0, common_1.Patch)('courses/:courseId/progress'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('courseId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, educenter_dto_1.UpdateProgressDto]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "updateProgress", null);
__decorate([
    (0, common_1.Get)('courses/marketing-playbooks'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "getMarketingPlaybooks", null);
__decorate([
    (0, common_1.Get)('courses/ai-tools-training'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "getAiToolsTraining", null);
__decorate([
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'super_admin', 'editor', 'creator'),
    (0, common_1.Post)('courses'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, educenter_dto_1.CreateCourseDto]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "createCourse", null);
__decorate([
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'super_admin', 'editor', 'creator'),
    (0, common_1.Patch)('courses/:courseId/publish'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('courseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], EduCenterController.prototype, "publishCourse", null);
exports.EduCenterController = EduCenterController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('educenter'),
    __metadata("design:paramtypes", [educenter_service_1.EduCenterService])
], EduCenterController);
//# sourceMappingURL=educenter.controller.js.map