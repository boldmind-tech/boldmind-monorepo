// PACKAGES/api-client/src/api.ts

import APIClient from './client';
import {
  AdminEndpoints,
  AfrocopyAiEndpoints,
  AfrohustleOsEndpoints,
  AiReceptionistEndpoints,
  AiEndpoints,
  AmebogistEndpoints,
  AnalyticsEndpoints,
  AnontruthMicEndpoints,
  AuthEndpoints,
  AutomationEndpoints,
  BoldmindOsEndpoints,
  BorderlessRemitEndpoints,
  ContentEndpoints,
  EducenterEndpoints,
  EmailscraperEndpoints,
  FarmgateDirectEndpoints,
  HubEndpoints,
  MediaEndpoints,
  NaijaFitherEndpoints,
  NotificationsEndpoints,
  PaymentsEndpoints,
  PlanaiSuiteEndpoints,
  PowerAlertEndpoints,
  ProductsEndpoints,
  ReceiptGeniusEndpoints,
  SafeaiEndpoints,
  Skill2cashEndpoints,
  SocialFactoryEndpoints,
  UsersEndpoints,
  DashboardEndpoints
} from './endpoints';

export interface BoldMindAPIConfig {
  baseUrl?: string;
}

export class BoldMindAPI {
  public admin: AdminEndpoints;
  public afrocopyAi: AfrocopyAiEndpoints;
  public afrohustleOs: AfrohustleOsEndpoints;
  public aiReceptionist: AiReceptionistEndpoints;
  public ai: AiEndpoints;
  public amebogist: AmebogistEndpoints;
  public analytics: AnalyticsEndpoints;
  public anontruthMic: AnontruthMicEndpoints;
  public auth: AuthEndpoints;
  public automation: AutomationEndpoints;
  public boldmindOs: BoldmindOsEndpoints;
  public borderlessRemit: BorderlessRemitEndpoints;
  public content: ContentEndpoints;
  public educenter: EducenterEndpoints;
  public emailscraper: EmailscraperEndpoints;
  public farmgateDirect: FarmgateDirectEndpoints;
  public hub: HubEndpoints;
  public media: MediaEndpoints;
  public naijaFither: NaijaFitherEndpoints;
  public notifications: NotificationsEndpoints;
  public payments: PaymentsEndpoints;
  public planaiSuite: PlanaiSuiteEndpoints;
  public powerAlert: PowerAlertEndpoints;
  public products: ProductsEndpoints;
  public receiptGenius: ReceiptGeniusEndpoints;
  public safeai: SafeaiEndpoints;
  public skill2cash: Skill2cashEndpoints;
  public socialFactory: SocialFactoryEndpoints;
  public users: UsersEndpoints;
  public dashboard: DashboardEndpoints;

  private client: APIClient;

  constructor(config?: BoldMindAPIConfig) {
    const baseUrl = config?.baseUrl || 
                    process.env['NEXT_PUBLIC_API_URL'] || 
                    process.env['NEXT_PUBLIC_API_GATEWAY_URL'] ||
                    'http://localhost:4001/api/v1';

    this.client = new APIClient(baseUrl);

    this.admin = new AdminEndpoints(this.client);
    this.afrocopyAi = new AfrocopyAiEndpoints(this.client);
    this.afrohustleOs = new AfrohustleOsEndpoints(this.client);
    this.aiReceptionist = new AiReceptionistEndpoints(this.client);
    this.ai = new AiEndpoints(this.client);
    this.amebogist = new AmebogistEndpoints(this.client);
    this.analytics = new AnalyticsEndpoints(this.client);
    this.anontruthMic = new AnontruthMicEndpoints(this.client);
    this.auth = new AuthEndpoints(this.client);
    this.automation = new AutomationEndpoints(this.client);
    this.boldmindOs = new BoldmindOsEndpoints(this.client);
    this.borderlessRemit = new BorderlessRemitEndpoints(this.client);
    this.content = new ContentEndpoints(this.client);
    this.educenter = new EducenterEndpoints(this.client);
    this.emailscraper = new EmailscraperEndpoints(this.client);
    this.farmgateDirect = new FarmgateDirectEndpoints(this.client);
    this.hub = new HubEndpoints(this.client);
    this.media = new MediaEndpoints(this.client);
    this.naijaFither = new NaijaFitherEndpoints(this.client);
    this.notifications = new NotificationsEndpoints(this.client);
    this.payments = new PaymentsEndpoints(this.client);
    this.planaiSuite = new PlanaiSuiteEndpoints(this.client);
    this.powerAlert = new PowerAlertEndpoints(this.client);
    this.products = new ProductsEndpoints(this.client);
    this.receiptGenius = new ReceiptGeniusEndpoints(this.client);
    this.safeai = new SafeaiEndpoints(this.client);
    this.skill2cash = new Skill2cashEndpoints(this.client);
    this.socialFactory = new SocialFactoryEndpoints(this.client);
    this.users = new UsersEndpoints(this.client);
    this.dashboard = new DashboardEndpoints(this.client);
  }

  /**
   * Reconfigure the API client with a new base URL
   */
  public setBaseUrl(url: string) {
    this.client = new APIClient(url);
    this.rebindEndpoints();
  }

  private rebindEndpoints() {
    this.admin = new AdminEndpoints(this.client);
    this.afrocopyAi = new AfrocopyAiEndpoints(this.client);
    this.afrohustleOs = new AfrohustleOsEndpoints(this.client);
    this.aiReceptionist = new AiReceptionistEndpoints(this.client);
    this.ai = new AiEndpoints(this.client);
    this.amebogist = new AmebogistEndpoints(this.client);
    this.analytics = new AnalyticsEndpoints(this.client);
    this.anontruthMic = new AnontruthMicEndpoints(this.client);
    this.auth = new AuthEndpoints(this.client);
    this.automation = new AutomationEndpoints(this.client);
    this.boldmindOs = new BoldmindOsEndpoints(this.client);
    this.borderlessRemit = new BorderlessRemitEndpoints(this.client);
    this.content = new ContentEndpoints(this.client);
    this.educenter = new EducenterEndpoints(this.client);
    this.emailscraper = new EmailscraperEndpoints(this.client);
    this.farmgateDirect = new FarmgateDirectEndpoints(this.client);
    this.hub = new HubEndpoints(this.client);
    this.media = new MediaEndpoints(this.client);
    this.naijaFither = new NaijaFitherEndpoints(this.client);
    this.notifications = new NotificationsEndpoints(this.client);
    this.payments = new PaymentsEndpoints(this.client);
    this.planaiSuite = new PlanaiSuiteEndpoints(this.client);
    this.powerAlert = new PowerAlertEndpoints(this.client);
    this.products = new ProductsEndpoints(this.client);
    this.receiptGenius = new ReceiptGeniusEndpoints(this.client);
    this.safeai = new SafeaiEndpoints(this.client);
    this.skill2cash = new Skill2cashEndpoints(this.client);
    this.socialFactory = new SocialFactoryEndpoints(this.client);
    this.users = new UsersEndpoints(this.client);
    this.dashboard = new DashboardEndpoints(this.client);
  }
}

// Export default instance
export const boldMindAPI = new BoldMindAPI();

// Re-export common classes and types
export { APIClient };
export * from './endpoints/auth';
export * from './endpoints/users';
export * from './endpoints/payments';
export * from './endpoints/educenter';
export * from './endpoints/products';
export * from './endpoints/admin';
export * from './endpoints/planai-suite';
export * from './endpoints/power-alert';
export * from './endpoints/farmgate-direct';
export * from './endpoints/afrocopy-ai';
export * from './endpoints/skill2cash';
export * from './endpoints/anontruth-mic';
export * from './endpoints/afrohustle-os';
export * from './endpoints/notifications';
export * from './endpoints/ai-receptionist';
export * from './endpoints/amebogist';
export * from './endpoints/boldmind-os';
export * from './endpoints/hub';
export * from './endpoints/social-factory';
export * from './endpoints/emailscraper';
export * from './endpoints/naija-fither';
export * from './endpoints/safeai';
export * from './endpoints/ai';
export * from './endpoints/media';
export * from './endpoints/borderless-remit';
export * from './endpoints/receipt-genius';
export * from './endpoints/automation';
export * from './endpoints/content';
export * from './endpoints/analytics';
