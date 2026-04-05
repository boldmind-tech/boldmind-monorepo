import { PrismaService } from '../../database/prisma.service';
import { RedisService } from '../../database/redis.service';
import { WorkspaceRole } from '@prisma/client';
interface CreateWorkspaceDto {
    name: string;
    description?: string;
    color?: string;
    icon?: string;
}
interface UpdateWorkspaceDto {
    name?: string;
    description?: string;
    color?: string;
    icon?: string;
}
interface InviteMemberDto {
    email: string;
    role?: string;
}
interface CreateTaskDto {
    title: string;
    description?: string;
    priority?: string;
    status?: string;
    dueDate?: string;
    assigneeId?: string;
    projectId?: string;
    tags?: string[];
    estimatedMinutes?: number;
}
interface UpdateTaskDto {
    title?: string;
    description?: string;
    priority?: string;
    status?: string;
    dueDate?: string;
    assigneeId?: string;
    projectId?: string;
    tags?: string[];
    estimatedMinutes?: number;
    actualMinutes?: number;
}
export declare class OsService {
    private readonly prisma;
    private readonly redis;
    constructor(prisma: PrismaService, redis: RedisService);
    createWorkspace(userId: string, dto: CreateWorkspaceDto): Promise<{
        members: ({
            user: {
                name: string;
                id: string;
                avatar: string;
            };
        } & {
            role: import("@prisma/client").$Enums.WorkspaceRole;
            id: string;
            userId: string;
            workspaceId: string;
        })[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        icon: string | null;
        color: string | null;
        ownerId: string;
    }>;
    getMyWorkspaces(userId: string): Promise<any>;
    getWorkspace(id: string, userId: string): Promise<{
        myRole: import("@prisma/client").$Enums.WorkspaceRole;
        members: ({
            user: {
                name: string;
                email: string;
                id: string;
                avatar: string;
            };
        } & {
            role: import("@prisma/client").$Enums.WorkspaceRole;
            id: string;
            userId: string;
            workspaceId: string;
        })[];
        projects: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            color: string | null;
            workspaceId: string;
            createdById: string;
        }[];
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        icon: string | null;
        color: string | null;
        ownerId: string;
    }>;
    updateWorkspace(id: string, userId: string, dto: UpdateWorkspaceDto): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        icon: string | null;
        color: string | null;
        ownerId: string;
    }>;
    deleteWorkspace(id: string, userId: string): Promise<{
        message: string;
    }>;
    inviteMember(workspaceId: string, inviterId: string, dto: InviteMemberDto): Promise<{
        user: {
            name: string;
            email: string;
            id: string;
            avatar: string;
        };
    } & {
        role: import("@prisma/client").$Enums.WorkspaceRole;
        id: string;
        userId: string;
        workspaceId: string;
    }>;
    removeMember(workspaceId: string, removerId: string, targetUserId: string): Promise<{
        message: string;
    }>;
    updateMemberRole(workspaceId: string, adminId: string, targetUserId: string, role: WorkspaceRole): Promise<import("@prisma/client").Prisma.BatchPayload>;
    createProject(workspaceId: string, userId: string, data: {
        name: string;
        description?: string;
        color?: string;
    }): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        color: string | null;
        workspaceId: string;
        createdById: string;
    }>;
    getProjects(workspaceId: string, userId: string): Promise<({
        _count: {
            tasks: number;
        };
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        color: string | null;
        workspaceId: string;
        createdById: string;
    })[]>;
    createTask(workspaceId: string, creatorId: string, dto: CreateTaskDto): Promise<{
        createdBy: {
            name: string;
            id: string;
        };
        assignee: {
            name: string;
            id: string;
            avatar: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        status: import("@prisma/client").$Enums.TaskStatus;
        tags: string[];
        description: string | null;
        title: string;
        dueDate: Date | null;
        completedAt: Date | null;
        sortOrder: number;
        workspaceId: string;
        createdById: string;
        priority: import("@prisma/client").$Enums.TaskPriority;
        estimatedMinutes: number | null;
        actualMinutes: number | null;
        isRecurring: boolean;
        recurrenceRule: string | null;
        projectId: string | null;
        assigneeId: string | null;
        parentTaskId: string | null;
    }>;
    getTasks(workspaceId: string, userId: string, filters: {
        projectId?: string;
        status?: string;
        assigneeId?: string;
        page?: number;
        limit?: number;
    }): Promise<{
        data: ({
            project: {
                name: string;
                id: string;
                color: string;
            };
            createdBy: {
                name: string;
                id: string;
            };
            assignee: {
                name: string;
                id: string;
                avatar: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            status: import("@prisma/client").$Enums.TaskStatus;
            tags: string[];
            description: string | null;
            title: string;
            dueDate: Date | null;
            completedAt: Date | null;
            sortOrder: number;
            workspaceId: string;
            createdById: string;
            priority: import("@prisma/client").$Enums.TaskPriority;
            estimatedMinutes: number | null;
            actualMinutes: number | null;
            isRecurring: boolean;
            recurrenceRule: string | null;
            projectId: string | null;
            assigneeId: string | null;
            parentTaskId: string | null;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            pages: number;
        };
    }>;
    updateTask(taskId: string, userId: string, dto: UpdateTaskDto): Promise<{
        assignee: {
            name: string;
            id: string;
            avatar: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        status: import("@prisma/client").$Enums.TaskStatus;
        tags: string[];
        description: string | null;
        title: string;
        dueDate: Date | null;
        completedAt: Date | null;
        sortOrder: number;
        workspaceId: string;
        createdById: string;
        priority: import("@prisma/client").$Enums.TaskPriority;
        estimatedMinutes: number | null;
        actualMinutes: number | null;
        isRecurring: boolean;
        recurrenceRule: string | null;
        projectId: string | null;
        assigneeId: string | null;
        parentTaskId: string | null;
    }>;
    deleteTask(taskId: string, userId: string): Promise<{
        message: string;
    }>;
    getDashboard(userId: string): Promise<any>;
    private assertRole;
    private assertMembership;
    private invalidateUserWorkspaces;
    private toPriority;
    private toStatus;
}
export {};
