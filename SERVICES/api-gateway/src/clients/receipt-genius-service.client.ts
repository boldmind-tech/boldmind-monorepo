// SERVICES/api-gateway/src/clients/receipt-genius-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface CreateReceiptDto {
    customerName: string;
    customerEmail?: string;
    items: Array<{
        description: string;
        quantity: number;
        unitPrice: number;
        tax?: number;
    }>;
    paymentMethod: string;
    notes?: string;
}

interface CreateInvoiceDto {
    customerName: string;
    customerEmail: string;
    dueDate: string;
    items: Array<{
        description: string;
        quantity: number;
        unitPrice: number;
    }>;
    taxRate?: number;
    discount?: number;
}

@Injectable()
export class ReceiptGeniusServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['RECEIPT_GENIUS_SERVICE_URL'] || 'http://localhost:4028',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
    }

    // Receipts
    async createReceipt(userId: string, data: CreateReceiptDto) {
        try {
            const response = await this.client.post('/receipts', {
                ...data,
                createdBy: userId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create receipt',
                error.response?.status || 500,
            );
        }
    }

    async getReceipts(userId: string, query?: { startDate?: string; endDate?: string }) {
        try {
            const response = await this.client.get(`/users/${userId}/receipts`, {
                params: query,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch receipts',
                error.response?.status || 500,
            );
        }
    }

    async getReceiptById(receiptId: string) {
        try {
            const response = await this.client.get(`/receipts/${receiptId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Receipt not found',
                error.response?.status || 404,
            );
        }
    }

    async sendReceipt(receiptId: string, method: 'email' | 'sms', recipient: string) {
        try {
            const response = await this.client.post(`/receipts/${receiptId}/send`, {
                method,
                recipient,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to send receipt',
                error.response?.status || 500,
            );
        }
    }

    // Invoices
    async createInvoice(userId: string, data: CreateInvoiceDto) {
        try {
            const response = await this.client.post('/invoices', {
                ...data,
                createdBy: userId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create invoice',
                error.response?.status || 500,
            );
        }
    }

    async getInvoices(userId: string, status?: string) {
        try {
            const response = await this.client.get(`/users/${userId}/invoices`, {
                params: { status },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch invoices',
                error.response?.status || 500,
            );
        }
    }

    async getInvoiceById(invoiceId: string) {
        try {
            const response = await this.client.get(`/invoices/${invoiceId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Invoice not found',
                error.response?.status || 404,
            );
        }
    }

    async markInvoicePaid(invoiceId: string, paymentDetails: any) {
        try {
            const response = await this.client.post(`/invoices/${invoiceId}/pay`, paymentDetails);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to mark invoice as paid',
                error.response?.status || 500,
            );
        }
    }

    // Customer Database
    async addCustomer(userId: string, customerData: any) {
        try {
            const response = await this.client.post(`/users/${userId}/customers`, customerData);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to add customer',
                error.response?.status || 500,
            );
        }
    }

    async getCustomers(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/customers`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch customers',
                error.response?.status || 500,
            );
        }
    }

    // VAT/Tax Compliance
    async calculateVAT(items: Array<{ amount: number; vatRate?: number }>) {
        try {
            const response = await this.client.post('/calculate/vat', { items });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'VAT calculation failed',
                error.response?.status || 500,
            );
        }
    }

    async getTaxReport(userId: string, period: string) {
        try {
            const response = await this.client.get(`/users/${userId}/tax-report`, {
                params: { period },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to generate tax report',
                error.response?.status || 500,
            );
        }
    }

    // Analytics
    async getSalesAnalytics(userId: string, period?: string) {
        try {
            const response = await this.client.get(`/users/${userId}/analytics`, {
                params: { period },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch sales analytics',
                error.response?.status || 500,
            );
        }
    }

    async getTopProducts(userId: string, limit?: number) {
        try {
            const response = await this.client.get(`/users/${userId}/top-products`, {
                params: { limit },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch top products',
                error.response?.status || 500,
            );
        }
    }

    // Templates
    async getReceiptTemplates() {
        try {
            const response = await this.client.get('/templates/receipts');
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch receipt templates',
                error.response?.status || 500,
            );
        }
    }

    async customizeTemplate(userId: string, templateId: string, customizations: any) {
        try {
            const response = await this.client.post(`/users/${userId}/templates/${templateId}/customize`, customizations);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to customize template',
                error.response?.status || 500,
            );
        }
    }
}