
import APIClient from '../client';

export class BorderlessRemitEndpoints {
    constructor(private client: APIClient) { }

    async getRates(from: string, to: string) {
        return this.client.get(`/borderless-remit/rates`, { params: { from, to } });
    }

    async createTransfer(data: any) {
        return this.client.post(`/borderless-remit/transfers`, data);
    }

    async getTransfers() {
        return this.client.get(`/borderless-remit/transfers`);
    }

    async getTransferById(id: string) {
        return this.client.get(`/borderless-remit/transfers/${id}`);
    }

    async getRecipients() {
        return this.client.get(`/borderless-remit/recipients`);
    }

    async createRecipient(data: any) {
        return this.client.post(`/borderless-remit/recipients`, data);
    }
}
