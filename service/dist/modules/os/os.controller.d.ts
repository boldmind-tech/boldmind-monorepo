import { OsService } from './os.service';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { InviteMemberDto } from './dto/invite-member.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class OsController {
    private readonly osService;
    constructor(osService: OsService);
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
    inviteMember(id: string, userId: string, dto: InviteMemberDto): Promise<{
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
    removeMember(id: string, userId: string, targetUserId: string): Promise<{
        message: string;
    }>;
    updateMemberRole(id: string, userId: string, targetUserId: string, role: any): Promise<import("@prisma/client").Prisma.BatchPayload>;
    createProject(id: string, userId: string, data: {
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
    getProjects(id: string, userId: string): Promise<({
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
    createTask(id: string, userId: string, dto: CreateTaskDto): Promise<{
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
    getTasks(id: string, userId: string, filters: {
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
}
