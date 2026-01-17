import { BOLDMIND_PRODUCTS } from '@boldmind/utils';
import { SocialIntegration } from '@boldmind/utils';

export class BoldMindFlywheel {
  private social: SocialIntegration;
  private customerJourney: Map<string, any> = new Map();
  
  constructor() {
    this.social = new SocialIntegration();
  }
  
  // Track customer journey across all products
  async trackCustomerJourney(userId: string, event: {
    product: string;
    action: 'view' | 'signup' | 'purchase' | 'share';
    data?: any;
  }): Promise<void> {
    const journey = this.customerJourney.get(userId) || {
      userId,
      firstSeen: new Date(),
      products: [],
      touchpoints: []
    };
    
    journey.touchpoints.push({
      timestamp: new Date(),
      product: event.product,
      action: event.action,
      data: event.data
    });
    
    // Add to product if new
    if (!journey.products.includes(event.product)) {
      journey.products.push(event.product);
    }
    
    this.customerJourney.set(userId, journey);
    
    // Trigger cross-sell opportunities
    await this.triggerCrossSell(userId, event.product);
  }
  
  // Trigger cross-sell based on customer behavior
  private async triggerCrossSell(userId: string, currentProduct: string): Promise<void> {
    const journey = this.customerJourney.get(userId);
    if (!journey) return;
    
    const product = BOLDMIND_PRODUCTS.find(p => p.slug === currentProduct);
    if (!product) return;
    
    // Cross-sell logic based on product category
    let recommendedProducts: string[] = [];
    
    if (product.category === 'media') {
      // AmeboGist readers → EduCenter courses
      recommendedProducts = ['educenter', 'boldmind-os'];
    } else if (product.category === 'education') {
      // EduCenter students → PlanAI tools
      recommendedProducts = ['ai-receptionist', 'business-planning'];
    } else if (product.category === 'ai') {
      // PlanAI users → Other AI tools
      recommendedProducts = ['social-factory', 'emailscraper-pro'];
    }
    
    // Send personalized recommendations
    if (recommendedProducts.length > 0) {
      await this.sendPersonalizedRecommendation(userId, recommendedProducts);
    }
  }
  
  // Get flywheel metrics
  async getFlywheelMetrics(): Promise<{
    awareness: number;    // AmeboGist reach
    education: number;    // EduCenter signups  
    enablement: number;   // PlanAI purchases
    advocacy: number;     // Social shares
    loopStrength: number; // % moving to next stage
  }> {
    const socialStats = await this.social.getUnifiedAnalytics();
    
    return {
      awareness: socialStats.totalFollowers,
      education: await this.getProductSignups('educenter'),
      enablement: await this.getProductPurchases('ai-receptionist'),
      advocacy: await this.getSocialShares(),
      loopStrength: await this.calculateLoopStrength()
    };
  }
}