// PACKAGES/api-client/src/api.ts

import APIClient from './client';
import { AuthEndpoints } from './endpoints/auth';
import { UsersEndpoints } from './endpoints/users';
import { PaymentsEndpoints } from './endpoints/payments';
import { EducenterEndpoints } from './endpoints/educenter';
import { ProductsEndpoints } from './endpoints/products';
import { AdminEndpoints, DashboardEndpoints } from './endpoints/admin';

export class BoldMindAPI {
  public auth: AuthEndpoints;
  public users: UsersEndpoints;
  public payments: PaymentsEndpoints;
  public educenter: EducenterEndpoints;
  public products: ProductsEndpoints;
  public admin: AdminEndpoints;
  public dashboard: DashboardEndpoints;

  constructor(config?: {
    apiGatewayUrl?: string;
    paymentServiceUrl?: string;
    educenterServiceUrl?: string;
    userServiceUrl?: string;
    hubServiceUrl?: string;
  }) {
    const apiGatewayUrl = config?.apiGatewayUrl ||
      process.env['NEXT_PUBLIC_API_GATEWAY_URL'] ||
      'http://localhost:4001/api';

    const userServiceUrl = config?.userServiceUrl ||
      process.env['NEXT_PUBLIC_USER_SERVICE_URL'] ||
      'http://localhost:4000/api';

    const paymentServiceUrl = config?.paymentServiceUrl ||
      process.env['NEXT_PUBLIC_PAYMENT_SERVICE_URL'] ||
      'http://localhost:4002';

    const educenterServiceUrl = config?.educenterServiceUrl ||
      process.env['NEXT_PUBLIC_EDUCENTER_SERVICE_URL'] ||
      'http://localhost:4003';

    const hubServiceUrl = config?.hubServiceUrl ||
      process.env['NEXT_PUBLIC_HUB_SERVICE_URL'] ||
      'http://localhost:4005/api';

    const gatewayClient = new APIClient(apiGatewayUrl);
    const paymentClient = new APIClient(paymentServiceUrl);
    const educenterClient = new APIClient(educenterServiceUrl);
    const userClient = new APIClient(userServiceUrl);
    const hubClient = new APIClient(hubServiceUrl);

    this.auth = new AuthEndpoints(gatewayClient);
    this.users = new UsersEndpoints(userClient);
    this.payments = new PaymentsEndpoints(paymentClient);
    this.educenter = new EducenterEndpoints(educenterClient);
    this.products = new ProductsEndpoints(gatewayClient);
    this.admin = new AdminEndpoints(userClient);
    this.dashboard = new DashboardEndpoints(hubClient);
  }
}

// Export default instance
export const boldMindAPI = new BoldMindAPI();

// Export classes for custom instances
export { APIClient };
export { AuthEndpoints } from './endpoints/auth';
export { UsersEndpoints } from './endpoints/users';
export { PaymentsEndpoints } from './endpoints/payments';
export { EducenterEndpoints } from './endpoints/educenter';
export { ProductsEndpoints } from './endpoints/products';
export { AdminEndpoints, DashboardEndpoints } from './endpoints/admin';
