import { EmailScraperService } from './emailscraper.service';
declare class SearchEmailsDto {
    domain?: string;
    company?: string;
    industry?: string;
    location?: string;
    state?: string;
    title?: string;
    saveToListId?: string;
    limit?: number;
}
export declare class EmailScraperController {
    private readonly emailScraperService;
    constructor(emailScraperService: EmailScraperService);
    searchEmails(dto: SearchEmailsDto, user: {
        id: string;
    }): Promise<{
        jobId: import("mongoose").Types.ObjectId;
        leads: any[];
        status?: undefined;
        message?: undefined;
    } | {
        jobId: import("mongoose").Types.ObjectId;
        status: string;
        message: string;
        leads?: undefined;
    }>;
    verifyEmail(email: string, user: {
        id: string;
    }): Promise<{
        email: string;
        status: string;
        error: string;
        score: any;
        mxRecords?: undefined;
        smtpValid?: undefined;
        isDisposable?: undefined;
        isWebmail?: undefined;
    } | {
        email: string;
        status: string;
        score: number;
        mxRecords: boolean;
        smtpValid: boolean;
        isDisposable: boolean;
        isWebmail: boolean;
        error?: undefined;
    }>;
    bulkVerify(emails: string[], user: {
        id: string;
    }): Promise<{
        total: number;
        results: ({
            email: string;
            status: string;
            error: string;
            score: any;
            mxRecords?: undefined;
            smtpValid?: undefined;
            isDisposable?: undefined;
            isWebmail?: undefined;
        } | {
            email: string;
            status: string;
            score: number;
            mxRecords: boolean;
            smtpValid: boolean;
            isDisposable: boolean;
            isWebmail: boolean;
            error?: undefined;
        } | {
            email: string;
            status: string;
            score: any;
        })[];
    }>;
    getLeads(user: {
        id: string;
    }, page: number, listId?: string, status?: string): Promise<{
        data: (import("mongoose").FlattenMaps<import("./emailscraper.interface").IEmailLead> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    exportLeads(user: {
        id: string;
    }, listId?: string, format?: 'csv' | 'json'): Promise<{
        leads: (import("mongoose").FlattenMaps<import("./emailscraper.interface").IEmailLead> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
        csv?: undefined;
        filename?: undefined;
    } | {
        csv: string;
        filename: string;
        leads?: undefined;
    }>;
    createList(dto: {
        name: string;
        description?: string;
    }, user: {
        id: string;
    }): Promise<import("mongoose").Document<unknown, {}, import("./emailscraper.interface").ILeadList, {}, {}> & import("./emailscraper.interface").ILeadList & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    getLists(user: {
        id: string;
    }): Promise<(import("mongoose").FlattenMaps<import("./emailscraper.interface").ILeadList> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    getScrapeJobs(user: {
        id: string;
    }): Promise<(import("mongoose").FlattenMaps<import("./emailscraper.interface").IScrapeJob> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
}
export {};
