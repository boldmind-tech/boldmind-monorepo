// APPS/WEB_APPS/boldmind-os/lib/api.ts
import { boldMindAPI, type Workspace, type OsProject, type OsTask } from '@boldmind/api-client';

/**
 * BoldMind OS API Client
 * Centralizes OS API calls using the central @boldmind/api-client hub
 */
export const osAPI = {
    /**
     * Workspace management
     */
    workspaces: {
        /** POST /os/workspaces */
        create: (data: { name: string; description?: string }) => 
            boldMindAPI.os.workspaces.create(data),
        
        /** GET /os/workspaces */
        list: () => boldMindAPI.os.workspaces.list(),
        
        /** GET /os/workspaces/:id */
        get: (id: string) => boldMindAPI.os.workspaces.get(id),
        
        /** PATCH /os/workspaces/:id */
        update: (id: string, data: Partial<Workspace>) => 
            boldMindAPI.os.workspaces.update(id, data),
        
        /** DELETE /os/workspaces/:id */
        delete: (id: string) => boldMindAPI.os.workspaces.delete(id),
        
        /**
         * Workspace members management
         */
        members: {
            /** POST /os/workspaces/:id/members */
            add: (workspaceId: string, data: { userId: string; role?: string }) => 
                boldMindAPI.os.workspaces.members.add(workspaceId, data),
            
            /** DELETE /os/workspaces/:id/members/:targetUserId */
            remove: (workspaceId: string, targetUserId: string) => 
                boldMindAPI.os.workspaces.members.remove(workspaceId, targetUserId),
            
            /** PATCH /os/workspaces/:id/members/:targetUserId/role */
            updateRole: (workspaceId: string, targetUserId: string, role: string) => 
                boldMindAPI.os.workspaces.members.updateRole(workspaceId, targetUserId, role),
        },
        
        /**
         * Workspace projects management
         */
        projects: {
            /** POST /os/workspaces/:id/projects */
            create: (workspaceId: string, data: { name: string; description?: string }) => 
                boldMindAPI.os.workspaces.projects.create(workspaceId, data),
            
            /** GET /os/workspaces/:id/projects */
            list: (workspaceId: string) => 
                boldMindAPI.os.workspaces.projects.list(workspaceId),
        },
        
        /**
         * Workspace tasks management
         */
        tasks: {
            /** POST /os/workspaces/:id/tasks */
            create: (workspaceId: string, data: Partial<OsTask>) => 
                boldMindAPI.os.workspaces.tasks.create(workspaceId, data),
            
            /** GET /os/workspaces/:id/tasks */
            list: (workspaceId: string) => 
                boldMindAPI.os.workspaces.tasks.list(workspaceId),
        },
    },
    
    /**
     * Global tasks management (across workspaces)
     */
    tasks: {
        /** PATCH /os/tasks/:taskId */
        update: (taskId: string, data: Partial<OsTask>) => 
            boldMindAPI.os.tasks.update(taskId, data),
        
        /** DELETE /os/tasks/:taskId */
        delete: (taskId: string) => boldMindAPI.os.tasks.delete(taskId),
    },
    
    /**
     * OS Dashboard
     */
    dashboard: () => boldMindAPI.os.dashboard(),
};

export default osAPI;