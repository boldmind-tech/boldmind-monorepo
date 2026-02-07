
import APIClient from '../client';

export class AiReceptionistEndpoints {
    constructor(private client: APIClient) { }

    async getAgents() {
        return this.client.get(`/ai-receptionist/agents`);
    }

    async getAgentById(id: string) {
        return this.client.get(`/ai-receptionist/agents/${id}`);
    }

    async createAgent(data: any) {
        return this.client.post(`/ai-receptionist/agents`, data);
    }

    async updateAgent(id: string, data: any) {
        return this.client.patch(`/ai-receptionist/agents/${id}`, data);
    }

    async deleteAgent(id: string) {
        return this.client.delete(`/ai-receptionist/agents/${id}`);
    }

    async getCalls(agentId?: string) {
        return this.client.get(`/ai-receptionist/calls`, { params: { agentId } });
    }

    async getCallById(id: string) {
        return this.client.get(`/ai-receptionist/calls/${id}`);
    }

    async getCallTranscript(id: string) {
        return this.client.get(`/ai-receptionist/calls/${id}/transcript`);
    }

    async purchaseNumber(countryCode: string) {
        return this.client.post(`/ai-receptionist/numbers/purchase`, { countryCode });
    }

    async getNumbers() {
        return this.client.get(`/ai-receptionist/numbers`);
    }
}
