import { Model } from 'mongoose';
import { Queue } from 'bullmq';
import { ConfigService } from '@nestjs/config';
import { IEmailLead, IScrapeJob, ILeadList } from './emailscraper.interface';
interface SearchEmailsDto {
    domain?: string;
    company?: string;
    industry?: string;
    location?: string;
    state?: string;
    title?: string;
    saveToListId?: string;
    limit?: number;
}
export declare class EmailScraperService {
    private readonly emailLeadModel;
    private readonly scrapeJobModel;
    private readonly leadListModel;
    private readonly scrapeQueue;
    private readonly config;
    private readonly logger;
    private readonly hunterApiKey;
    constructor(emailLeadModel: Model<IEmailLead>, scrapeJobModel: Model<IScrapeJob>, leadListModel: Model<ILeadList>, scrapeQueue: Queue, config: ConfigService);
    searchEmails(dto: SearchEmailsDto, userId: string): Promise<{
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
    verifyEmail(email: string): Promise<{
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
    bulkVerify(emails: string[], userId: string): Promise<{
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
    getUserLeads(userId: string, page: number, listId?: string, status?: string): Promise<{
        data: (import("mongoose").FlattenMaps<IEmailLead> & Required<{
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
    exportLeads(userId: string, listId: string | undefined, format: 'csv' | 'json'): Promise<{
        leads: (import("mongoose").FlattenMaps<IEmailLead> & Required<{
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
    createList(name: string, description: string | undefined, userId: string): Promise<import("mongoose").Document<unknown, {}, ILeadList, {}, {}> & ILeadList & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    getUserLists(userId: string): Promise<(import("mongoose").FlattenMaps<ILeadList> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    getUserJobs(userId: string): Promise<(import("mongoose").FlattenMaps<IScrapeJob> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    private searchByDomainHunter;
    private saveLeads;
}
export { IEmailLead, IScrapeJob, ILeadList };
