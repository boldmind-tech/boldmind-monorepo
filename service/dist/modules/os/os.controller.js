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
exports.OsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const os_service_1 = require("./os.service");
const create_workspace_dto_1 = require("./dto/create-workspace.dto");
const update_workspace_dto_1 = require("./dto/update-workspace.dto");
const invite_member_dto_1 = require("./dto/invite-member.dto");
const create_task_dto_1 = require("./dto/create-task.dto");
const update_task_dto_1 = require("./dto/update-task.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const user_decorator_1 = require("../../common/decorators/user.decorator");
let OsController = class OsController {
    constructor(osService) {
        this.osService = osService;
    }
    createWorkspace(userId, dto) {
        return this.osService.createWorkspace(userId, dto);
    }
    getMyWorkspaces(userId) {
        return this.osService.getMyWorkspaces(userId);
    }
    getWorkspace(id, userId) {
        return this.osService.getWorkspace(id, userId);
    }
    updateWorkspace(id, userId, dto) {
        return this.osService.updateWorkspace(id, userId, dto);
    }
    deleteWorkspace(id, userId) {
        return this.osService.deleteWorkspace(id, userId);
    }
    inviteMember(id, userId, dto) {
        return this.osService.inviteMember(id, userId, dto);
    }
    removeMember(id, userId, targetUserId) {
        return this.osService.removeMember(id, userId, targetUserId);
    }
    updateMemberRole(id, userId, targetUserId, role) {
        return this.osService.updateMemberRole(id, userId, targetUserId, role);
    }
    createProject(id, userId, data) {
        return this.osService.createProject(id, userId, data);
    }
    getProjects(id, userId) {
        return this.osService.getProjects(id, userId);
    }
    createTask(id, userId, dto) {
        return this.osService.createTask(id, userId, dto);
    }
    getTasks(id, userId, filters) {
        return this.osService.getTasks(id, userId, filters);
    }
    updateTask(taskId, userId, dto) {
        return this.osService.updateTask(taskId, userId, dto);
    }
    deleteTask(taskId, userId) {
        return this.osService.deleteTask(taskId, userId);
    }
    getDashboard(userId) {
        return this.osService.getDashboard(userId);
    }
};
exports.OsController = OsController;
__decorate([
    (0, common_1.Post)('workspaces'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new workspace' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_workspace_dto_1.CreateWorkspaceDto]),
    __metadata("design:returntype", void 0)
], OsController.prototype, "createWorkspace", null);
__decorate([
    (0, common_1.Get)('workspaces'),
    (0, swagger_1.ApiOperation)({ summary: 'Get my workspaces' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OsController.prototype, "getMyWorkspaces", null);
__decorate([
    (0, common_1.Get)('workspaces/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get workspace details' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], OsController.prototype, "getWorkspace", null);
__decorate([
    (0, common_1.Patch)('workspaces/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update workspace' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_workspace_dto_1.UpdateWorkspaceDto]),
    __metadata("design:returntype", void 0)
], OsController.prototype, "updateWorkspace", null);
__decorate([
    (0, common_1.Delete)('workspaces/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete workspace (owner only)' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], OsController.prototype, "deleteWorkspace", null);
__decorate([
    (0, common_1.Post)('workspaces/:id/members'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Invite a member to workspace' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, invite_member_dto_1.InviteMemberDto]),
    __metadata("design:returntype", void 0)
], OsController.prototype, "inviteMember", null);
__decorate([
    (0, common_1.Delete)('workspaces/:id/members/:targetUserId'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove a member from workspace' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __param(2, (0, common_1.Param)('targetUserId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], OsController.prototype, "removeMember", null);
__decorate([
    (0, common_1.Patch)('workspaces/:id/members/:targetUserId/role'),
    (0, swagger_1.ApiOperation)({ summary: 'Update member role' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __param(2, (0, common_1.Param)('targetUserId')),
    __param(3, (0, common_1.Body)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", void 0)
], OsController.prototype, "updateMemberRole", null);
__decorate([
    (0, common_1.Post)('workspaces/:id/projects'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a project in workspace' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], OsController.prototype, "createProject", null);
__decorate([
    (0, common_1.Get)('workspaces/:id/projects'),
    (0, swagger_1.ApiOperation)({ summary: 'Get workspace projects' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], OsController.prototype, "getProjects", null);
__decorate([
    (0, common_1.Post)('workspaces/:id/tasks'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a task in workspace' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, create_task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", void 0)
], OsController.prototype, "createTask", null);
__decorate([
    (0, common_1.Get)('workspaces/:id/tasks'),
    (0, swagger_1.ApiOperation)({ summary: 'Get workspace tasks with filters' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], OsController.prototype, "getTasks", null);
__decorate([
    (0, common_1.Patch)('tasks/:taskId'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a task' }),
    __param(0, (0, common_1.Param)('taskId')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_task_dto_1.UpdateTaskDto]),
    __metadata("design:returntype", void 0)
], OsController.prototype, "updateTask", null);
__decorate([
    (0, common_1.Delete)('tasks/:taskId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a task' }),
    __param(0, (0, common_1.Param)('taskId')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], OsController.prototype, "deleteTask", null);
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, swagger_1.ApiOperation)({ summary: 'Get OS dashboard for current user' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OsController.prototype, "getDashboard", null);
exports.OsController = OsController = __decorate([
    (0, swagger_1.ApiTags)('OS — Workspaces'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('os'),
    __metadata("design:paramtypes", [os_service_1.OsService])
], OsController);
//# sourceMappingURL=os.controller.js.map