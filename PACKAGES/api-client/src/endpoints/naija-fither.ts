
import APIClient from '../client';

export class NaijaFitherEndpoints {
    constructor(private client: APIClient) { }

    async getFighters(query?: any) {
        return this.client.get(`/naija-fither/fighters`, { params: query });
    }

    async getFighterById(id: string) {
        return this.client.get(`/naija-fither/fighters/${id}`);
    }

    async createFighter(data: any) {
        return this.client.post(`/naija-fither/fighters`, data);
    }

    async getMatches() {
        return this.client.get(`/naija-fither/matches`);
    }

    async challengeFighter(fighterId: string) {
        return this.client.post(`/naija-fither/fighters/${fighterId}/challenge`);
    }

    async getLeaderboard() {
        return this.client.get(`/naija-fither/leaderboard`);
    }
}
