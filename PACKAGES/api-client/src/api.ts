// PACKAGES/api-client/src/api.ts

import APIClient from './client';
import { AuthEndpoints } from './endpoints/auth';
import { UsersEndpoints } from './endpoints/users';
import { PaymentsEndpoints } from './endpoints/payments';
import { EducenterEndpoints } from './endpoints/educenter';
import { ProductsEndpoints } from './endpoints/products';
import { AdminEndpoints, DashboardEndpoints } from './endpoints/admin';
import { PlanaiSuiteEndpoints } from './endpoints/planai-suite';
import { PowerAlertEndpoints } from './endpoints/power-alert';
import { FarmgateDirectEndpoints } from './endpoints/farmgate-direct';
import { AfrocopyAiEndpoints } from './endpoints/afrocopy-ai';
import { Skill2cashEndpoints } from './endpoints/skill2cash';
import { AnontruthMicEndpoints } from './endpoints/anontruth-mic';
import { AfrohustleOsEndpoints } from './endpoints/afrohustle-os';
import { NotificationsEndpoints } from './endpoints/notifications';
import { AiReceptionistEndpoints } from './endpoints/ai-receptionist';
import { AmebogistEndpoints } from './endpoints/amebogist';
import { BoldmindOsEndpoints } from './endpoints/boldmind-os';
import { HubEndpoints } from './endpoints/hub';
import { SocialFactoryEndpoints } from './endpoints/social-factory';
import { EmailscraperEndpoints } from './endpoints/emailscraper';
import { NaijaFitherEndpoints } from './endpoints/naija-fither';
import { SafeaiEndpoints } from './endpoints/safeai';
import { AiEndpoints } from './endpoints/ai';
import { MediaEndpoints } from './endpoints/media';
import { BorderlessRemitEndpoints } from './endpoints/borderless-remit';
import { ReceiptGeniusEndpoints } from './endpoints/receipt-genius';

export class BoldMindAPI {
  public auth: AuthEndpoints;
  public users: UsersEndpoints;
  public payments: PaymentsEndpoints;
  public educenter: EducenterEndpoints;
  public products: ProductsEndpoints;
  public admin: AdminEndpoints;
  public dashboard: DashboardEndpoints;
  public planaiSuite: PlanaiSuiteEndpoints;
  public powerAlert: PowerAlertEndpoints;
  public farmgateDirect: FarmgateDirectEndpoints;
  public afrocopyAi: AfrocopyAiEndpoints;
  public skill2cash: Skill2cashEndpoints;
  public anontruthMic: AnontruthMicEndpoints;
  public afrohustleOs: AfrohustleOsEndpoints;
  public notifications: NotificationsEndpoints;
  public aiReceptionist: AiReceptionistEndpoints;
  public amebogist: AmebogistEndpoints;
  public boldmindOs: BoldmindOsEndpoints;
  public hub: HubEndpoints;
  public socialFactory: SocialFactoryEndpoints;
  public emailscraper: EmailscraperEndpoints;
  public naijaFither: NaijaFitherEndpoints;
  public safeai: SafeaiEndpoints;
  public ai: AiEndpoints;
  public media: MediaEndpoints;
  public borderlessRemit: BorderlessRemitEndpoints;
  public receiptGenius: ReceiptGeniusEndpoints;

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

    this.planaiSuite = new PlanaiSuiteEndpoints(gatewayClient);
    this.powerAlert = new PowerAlertEndpoints(gatewayClient);
    this.farmgateDirect = new FarmgateDirectEndpoints(gatewayClient);
    this.afrocopyAi = new AfrocopyAiEndpoints(gatewayClient);
    this.skill2cash = new Skill2cashEndpoints(gatewayClient);
    this.anontruthMic = new AnontruthMicEndpoints(gatewayClient);
    this.afrohustleOs = new AfrohustleOsEndpoints(gatewayClient);
    this.notifications = new NotificationsEndpoints(gatewayClient);
    this.aiReceptionist = new AiReceptionistEndpoints(gatewayClient);
    this.amebogist = new AmebogistEndpoints(gatewayClient);
    this.boldmindOs = new BoldmindOsEndpoints(gatewayClient);
    this.hub = new HubEndpoints(hubClient); // Hub might need own base URL? Assuming hubClient for now as hub endpoints.
    this.socialFactory = new SocialFactoryEndpoints(gatewayClient);
    this.emailscraper = new EmailscraperEndpoints(gatewayClient);
    this.naijaFither = new NaijaFitherEndpoints(gatewayClient);
    this.safeai = new SafeaiEndpoints(gatewayClient);
    this.ai = new AiEndpoints(gatewayClient);
    this.media = new MediaEndpoints(gatewayClient);
    this.borderlessRemit = new BorderlessRemitEndpoints(gatewayClient);
    this.receiptGenius = new ReceiptGeniusEndpoints(gatewayClient);
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
export { PlanaiSuiteEndpoints } from './endpoints/planai-suite';
export { PowerAlertEndpoints } from './endpoints/power-alert';
export { FarmgateDirectEndpoints } from './endpoints/farmgate-direct';
export { AfrocopyAiEndpoints } from './endpoints/afrocopy-ai';
export { Skill2cashEndpoints } from './endpoints/skill2cash';
export { AnontruthMicEndpoints } from './endpoints/anontruth-mic';
export { AfrohustleOsEndpoints } from './endpoints/afrohustle-os';
export { NotificationsEndpoints } from './endpoints/notifications';
export { AiReceptionistEndpoints } from './endpoints/ai-receptionist';
export { AmebogistEndpoints } from './endpoints/amebogist';
export { BoldmindOsEndpoints } from './endpoints/boldmind-os';
export { HubEndpoints } from './endpoints/hub';
export { SocialFactoryEndpoints } from './endpoints/social-factory';
export { EmailscraperEndpoints } from './endpoints/emailscraper';
export { NaijaFitherEndpoints } from './endpoints/naija-fither';
export { SafeaiEndpoints } from './endpoints/safeai';
export { AiEndpoints } from './endpoints/ai';
export { MediaEndpoints } from './endpoints/media';
export { BorderlessRemitEndpoints } from './endpoints/borderless-remit';
export { ReceiptGeniusEndpoints } from './endpoints/receipt-genius';
