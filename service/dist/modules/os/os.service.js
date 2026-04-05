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
exports.OsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const redis_service_1 = require("../../database/redis.service");
const client_1 = require("@prisma/client");
let OsService = class OsService {
    constructor(prisma, redis) {
        this.prisma = prisma;
        this.redis = redis;
    }
    async createWorkspace(userId, dto) {
        const workspace = await this.prisma.workspace.create({
            data: {
                ...dto,
                ownerId: userId,
                members: {
                    create: { userId, role: client_1.WorkspaceRole.OWNER },
                },
            },
            include: {
                members: {
                    include: { user: { select: { id: true, name: true, avatar: true } } },
                },
            },
        });
        await this.invalidateUserWorkspaces(userId);
        return workspace;
    }
    async getMyWorkspaces(userId) {
        const cacheKey = `os:workspaces:${userId}`;
        const cached = await this.redis.get(cacheKey);
        if (cached)
            return JSON.parse(cached);
        const memberships = await this.prisma.workspaceMember.findMany({
            where: { userId },
            include: {
                workspace: {
                    include: {
                        _count: { select: { members: true, tasks: true, projects: true } },
                    },
                },
            },
        });
        const result = memberships.map((m) => ({ ...m.workspace, myRole: m.role }));
        await this.redis.set(cacheKey, JSON.stringify(result), 120);
        return result;
    }
    async getWorkspace(id, userId) {
        const member = await this.prisma.workspaceMember.findFirst({
            where: { workspaceId: id, userId },
            include: {
                workspace: {
                    include: {
                        members: {
                            include: {
                                user: { select: { id: true, name: true, avatar: true, email: true } },
                            },
                        },
                        projects: { orderBy: { createdAt: 'desc' } },
                    },
                },
            },
        });
        if (!member)
            throw new common_1.NotFoundException('Workspace not found or access denied');
        return { ...member.workspace, myRole: member.role };
    }
    async updateWorkspace(id, userId, dto) {
        await this.assertRole(id, userId, [client_1.WorkspaceRole.OWNER, client_1.WorkspaceRole.ADMIN]);
        const updated = await this.prisma.workspace.update({ where: { id }, data: dto });
        await this.invalidateUserWorkspaces(userId);
        return updated;
    }
    async deleteWorkspace(id, userId) {
        await this.assertRole(id, userId, [client_1.WorkspaceRole.OWNER]);
        await this.prisma.workspace.delete({ where: { id } });
        await this.invalidateUserWorkspaces(userId);
        return { message: 'Workspace deleted' };
    }
    async inviteMember(workspaceId, inviterId, dto) {
        await this.assertRole(workspaceId, inviterId, [client_1.WorkspaceRole.OWNER, client_1.WorkspaceRole.ADMIN]);
        const targetUser = await this.prisma.user.findUnique({ where: { email: dto.email } });
        if (!targetUser)
            throw new common_1.NotFoundException('User not found with that email');
        const existing = await this.prisma.workspaceMember.findFirst({
            where: { workspaceId, userId: targetUser.id },
        });
        if (existing)
            throw new common_1.ForbiddenException('User is already a member');
        const roleMap = {
            OWNER: client_1.WorkspaceRole.OWNER,
            ADMIN: client_1.WorkspaceRole.ADMIN,
            MEMBER: client_1.WorkspaceRole.MEMBER,
        };
        return this.prisma.workspaceMember.create({
            data: {
                workspaceId,
                userId: targetUser.id,
                role: roleMap[dto.role?.toUpperCase() ?? ''] ?? client_1.WorkspaceRole.MEMBER,
            },
            include: { user: { select: { id: true, name: true, email: true, avatar: true } } },
        });
    }
    async removeMember(workspaceId, removerId, targetUserId) {
        await this.assertRole(workspaceId, removerId, [client_1.WorkspaceRole.OWNER, client_1.WorkspaceRole.ADMIN]);
        if (removerId === targetUserId)
            throw new common_1.ForbiddenException('Cannot remove yourself');
        await this.prisma.workspaceMember.deleteMany({
            where: { workspaceId, userId: targetUserId },
        });
        return { message: 'Member removed' };
    }
    async updateMemberRole(workspaceId, adminId, targetUserId, role) {
        await this.assertRole(workspaceId, adminId, [client_1.WorkspaceRole.OWNER]);
        return this.prisma.workspaceMember.updateMany({
            where: { workspaceId, userId: targetUserId },
            data: { role },
        });
    }
    async createProject(workspaceId, userId, data) {
        await this.assertMembership(workspaceId, userId);
        return this.prisma.project.create({
            data: { ...data, workspaceId, createdById: userId },
        });
    }
    async getProjects(workspaceId, userId) {
        await this.assertMembership(workspaceId, userId);
        return this.prisma.project.findMany({
            where: { workspaceId },
            include: { _count: { select: { tasks: true } } },
            orderBy: { createdAt: 'desc' },
        });
    }
    async createTask(workspaceId, creatorId, dto) {
        await this.assertMembership(workspaceId, creatorId);
        const priority = this.toPriority(dto.priority);
        const status = this.toStatus(dto.status);
        return this.prisma.task.create({
            data: {
                workspaceId,
                createdById: creatorId,
                title: dto.title,
                description: dto.description,
                priority,
                status,
                dueDate: dto.dueDate ? new Date(dto.dueDate) : undefined,
                assigneeId: dto.assigneeId,
                projectId: dto.projectId,
                tags: dto.tags ?? [],
                estimatedMinutes: dto.estimatedMinutes,
            },
            include: {
                assignee: { select: { id: true, name: true, avatar: true } },
                createdBy: { select: { id: true, name: true } },
            },
        });
    }
    async getTasks(workspaceId, userId, filters) {
        await this.assertMembership(workspaceId, userId);
        const { projectId, status, assigneeId, page = 1, limit = 50 } = filters;
        const skip = (page - 1) * limit;
        const where = { workspaceId };
        if (projectId)
            where.projectId = projectId;
        if (status)
            where.status = this.toStatus(status);
        if (assigneeId)
            where.assigneeId = assigneeId;
        const [data, total] = await this.prisma.$transaction([
            this.prisma.task.findMany({
                where,
                skip,
                take: limit,
                include: {
                    assignee: { select: { id: true, name: true, avatar: true } },
                    createdBy: { select: { id: true, name: true } },
                    project: { select: { id: true, name: true, color: true } },
                },
                orderBy: [{ priority: 'desc' }, { createdAt: 'desc' }],
            }),
            this.prisma.task.count({ where }),
        ]);
        return { data, meta: { total, page, limit, pages: Math.ceil(total / limit) } };
    }
    async updateTask(taskId, userId, dto) {
        const task = await this.prisma.task.findFirst({
            where: {
                id: taskId,
                workspace: { members: { some: { userId } } },
            },
        });
        if (!task)
            throw new common_1.NotFoundException('Task not found or access denied');
        return this.prisma.task.update({
            where: { id: taskId },
            data: {
                ...(dto.title !== undefined ? { title: dto.title } : {}),
                ...(dto.description !== undefined ? { description: dto.description } : {}),
                ...(dto.priority ? { priority: this.toPriority(dto.priority) } : {}),
                ...(dto.status ? { status: this.toStatus(dto.status) } : {}),
                ...(dto.dueDate !== undefined ? { dueDate: dto.dueDate ? new Date(dto.dueDate) : null } : {}),
                ...(dto.assigneeId !== undefined ? { assigneeId: dto.assigneeId } : {}),
                ...(dto.projectId !== undefined ? { projectId: dto.projectId } : {}),
                ...(dto.tags !== undefined ? { tags: dto.tags } : {}),
                ...(dto.estimatedMinutes !== undefined ? { estimatedMinutes: dto.estimatedMinutes } : {}),
                ...(dto.actualMinutes !== undefined ? { actualMinutes: dto.actualMinutes } : {}),
                ...(dto.status === 'DONE' ? { completedAt: new Date() } : {}),
                updatedAt: new Date(),
            },
            include: {
                assignee: { select: { id: true, name: true, avatar: true } },
            },
        });
    }
    async deleteTask(taskId, userId) {
        const task = await this.prisma.task.findFirst({
            where: { id: taskId },
            include: { workspace: { include: { members: { where: { userId } } } } },
        });
        if (!task)
            throw new common_1.ForbiddenException('Task not found');
        const member = task.workspace.members[0];
        const isCreator = task.createdById === userId;
        const isAdmin = member?.role === client_1.WorkspaceRole.OWNER || member?.role === client_1.WorkspaceRole.ADMIN;
        if (!isCreator && !isAdmin) {
            throw new common_1.ForbiddenException('Cannot delete this task — must be creator or workspace admin');
        }
        await this.prisma.task.delete({ where: { id: taskId } });
        return { message: 'Task deleted' };
    }
    async getDashboard(userId) {
        const cacheKey = `os:dashboard:${userId}`;
        const cached = await this.redis.get(cacheKey);
        if (cached)
            return JSON.parse(cached);
        const [workspaceCount, myTasks, recentActivity] = await Promise.all([
            this.prisma.workspaceMember.count({ where: { userId } }),
            this.prisma.task.findMany({
                where: {
                    assigneeId: userId,
                    status: { not: client_1.TaskStatus.DONE },
                },
                orderBy: { dueDate: 'asc' },
                take: 10,
                include: {
                    workspace: { select: { name: true } },
                    project: { select: { name: true, color: true } },
                },
            }),
            this.prisma.activityLog.findMany({
                where: { userId },
                orderBy: { createdAt: 'desc' },
                take: 20,
            }),
        ]);
        const result = { workspaceCount, myTasks, recentActivity };
        await this.redis.set(cacheKey, JSON.stringify(result), 60);
        return result;
    }
    async assertRole(workspaceId, userId, roles) {
        const member = await this.prisma.workspaceMember.findFirst({
            where: { workspaceId, userId },
        });
        if (!member || !roles.includes(member.role)) {
            throw new common_1.ForbiddenException('Insufficient workspace permissions');
        }
        return member;
    }
    async assertMembership(workspaceId, userId) {
        const member = await this.prisma.workspaceMember.findFirst({
            where: { workspaceId, userId },
        });
        if (!member)
            throw new common_1.ForbiddenException('You are not a member of this workspace');
        return member;
    }
    async invalidateUserWorkspaces(userId) {
        await Promise.all([
            this.redis.del(`os:workspaces:${userId}`),
            this.redis.del(`os:dashboard:${userId}`),
        ]);
    }
    toPriority(value) {
        const map = {
            LOW: client_1.TaskPriority.LOW,
            MEDIUM: client_1.TaskPriority.MEDIUM,
            HIGH: client_1.TaskPriority.HIGH,
            URGENT: client_1.TaskPriority.URGENT,
        };
        return map[value?.toUpperCase() ?? ''] ?? client_1.TaskPriority.MEDIUM;
    }
    toStatus(value) {
        const map = {
            TODO: client_1.TaskStatus.TODO,
            IN_PROGRESS: client_1.TaskStatus.IN_PROGRESS,
            DONE: client_1.TaskStatus.DONE,
            ARCHIVED: client_1.TaskStatus.ARCHIVED,
        };
        return map[value?.toUpperCase() ?? ''] ?? client_1.TaskStatus.TODO;
    }
};
exports.OsService = OsService;
exports.OsService = OsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        redis_service_1.RedisService])
], OsService);
//# sourceMappingURL=os.service.js.map