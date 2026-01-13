import { APIClient } from './client';
import { AuthEndpoints } from './endpoints/auth';
import { UsersEndpoints } from './endpoints/users';
import { PaymentsEndpoints } from './endpoints/payments';
import { EducenterEndpoints } from './endpoints/educenter';

export class BoldMindAPI {
  public auth: AuthEndpoints;
  public users: UsersEndpoints;
  public payments: PaymentsEndpoints;
  public educenter: EducenterEndpoints;

  constructor(baseURL: string = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api') {
    const client = new APIClient(baseURL);
    
    this.auth = new AuthEndpoints(client);
    this.users = new UsersEndpoints(client);
    this.payments = new PaymentsEndpoints(client);
    this.educenter = new EducenterEndpoints(client);
  }
}

export const boldMindAPI = new BoldMindAPI();

// Export classes for custom instances
export { APIClient, AuthEndpoints, UsersEndpoints, PaymentsEndpoints, EducenterEndpoints };

// Export types
export type { AxiosRequestConfig } from 'axios';