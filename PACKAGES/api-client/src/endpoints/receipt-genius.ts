
import APIClient from '../client';

export class ReceiptGeniusEndpoints {
    constructor(private client: APIClient) { }

    async scanReceipt(imageData: string) {
        return this.client.post(`/receipt-genius/scan`, { imageData });
    }

    async getReceipts(query?: any) {
        return this.client.get(`/receipt-genius/receipts`, { params: query });
    }

    async getReceiptById(id: string) {
        return this.client.get(`/receipt-genius/receipts/${id}`);
    }

    async createReceipt(data: any) {
        return this.client.post(`/receipt-genius/receipts`, data);
    }

    async updateReceipt(id: string, data: any) {
        return this.client.patch(`/receipt-genius/receipts/${id}`, data);
    }

    async deleteReceipt(id: string) {
        return this.client.delete(`/receipt-genius/receipts/${id}`);
    }

    async getExpensesAnalytics(period?: string) {
        return this.client.get(`/receipt-genius/analytics`, { params: { period } });
    }
}
