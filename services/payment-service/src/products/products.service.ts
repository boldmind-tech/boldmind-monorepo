// products/products.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './products.schema';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

  async seedProducts() {
    const products = [
      // ====== EDUCENTER ======
      {
        productId: 'educenter-study-hub-6months',
        name: 'EduCenter Study Hub - 6 Months',
        app: 'educenter',
        category: 'subscription',
        price: 70000, // ₦700
        currency: 'NGN',
        duration: 6,
        metadata: {
          pillar: 'studyHub',
          features: ['All past questions', 'CBT mode', 'Performance tracking', 'Study plans'],
          description: 'Access to JAMB/WAEC/NECO past questions for 6 months',
        },
      },
      {
        productId: 'educenter-study-hub-1year',
        name: 'EduCenter Study Hub - 1 Year',
        app: 'educenter',
        category: 'subscription',
        price: 100000, // ₦1,000
        currency: 'NGN',
        duration: 12,
        metadata: {
          pillar: 'studyHub',
          features: ['All past questions', 'CBT mode', 'Performance tracking', 'Study plans', 'Priority support'],
          description: 'Access to JAMB/WAEC/NECO past questions for 1 year',
        },
      },
      {
        productId: 'educenter-business-school-lifetime',
        name: 'EduCenter Digital Business School - Lifetime',
        app: 'educenter',
        category: 'subscription',
        price: 100000, // ₦1,000
        currency: 'NGN',
        duration: null, // Lifetime
        metadata: {
          pillar: 'businessSchool',
          features: ['Platform access', 'Free courses', 'Community', 'Premium courses (paid separately)'],
          description: 'Lifetime access to Digital Business School',
        },
      },
      {
        productId: 'educenter-ai-lab-lifetime',
        name: 'EduCenter AI Skills Lab - Lifetime',
        app: 'educenter',
        category: 'subscription',
        price: 100000, // ₦1,000
        currency: 'NGN',
        duration: null,
        metadata: {
          pillar: 'aiLab',
          features: ['Platform access', 'Free AI tools', 'Basic tutorials', 'Premium tools (paid separately)'],
          description: 'Lifetime access to AI Skills Lab',
        },
      },

      // ====== NAIJA FITHER ======
      {
        productId: 'naija-fither-basic-monthly',
        name: 'Naija FitHer - Basic Plan (Monthly)',
        app: 'naija-fither',
        category: 'subscription',
        price: 50000, // ₦500
        currency: 'NGN',
        duration: 1,
        metadata: {
          features: ['AI meal plans', 'Workout videos', 'Progress tracking'],
          description: 'Monthly access to meal plans and workouts',
        },
      },
      {
        productId: 'naija-fither-premium-monthly',
        name: 'Naija FitHer - Premium Plan (Monthly)',
        app: 'naija-fither',
        category: 'subscription',
        price: 100000, // ₦1,000
        currency: 'NGN',
        duration: 1,
        metadata: {
          features: ['AI meal plans', 'Workout videos', 'Progress tracking', 'Community access', 'Personal trainer'],
          description: 'Premium monthly access with personal trainer',
        },
      },

      // ====== BOLDMIND OS ======
      {
        productId: 'boldmind-os-pro-monthly',
        name: 'BoldMind OS - Pro (Monthly)',
        app: 'boldmind-os',
        category: 'subscription',
        price: 150000, // ₦1,500
        currency: 'NGN',
        duration: 1,
        metadata: {
          features: ['All 5 Brains', 'Unlimited notes', 'AI features', 'Cloud sync'],
          description: 'Full productivity suite with AI features',
        },
      },
      {
        productId: 'boldmind-os-pro-yearly',
        name: 'BoldMind OS - Pro (Yearly)',
        app: 'boldmind-os',
        category: 'subscription',
        price: 1500000, // ₦15,000 (save ₦3,000)
        currency: 'NGN',
        duration: 12,
        metadata: {
          features: ['All 5 Brains', 'Unlimited notes', 'AI features', 'Cloud sync', '2 months free'],
          description: 'Full productivity suite - yearly billing',
        },
      },

      // ====== PLANAI SUITE ======
      {
        productId: 'planai-receptionist-starter',
        name: 'PlanAI Receptionist - Starter',
        app: 'planai-receptionist',
        category: 'subscription',
        price: 500000, // ₦5,000
        currency: 'NGN',
        duration: 1,
        metadata: {
          features: ['100 conversations/month', 'WhatsApp integration', 'Lead capture', 'Basic analytics'],
          description: 'AI receptionist for small businesses',
        },
      },
      {
        productId: 'planai-receptionist-business',
        name: 'PlanAI Receptionist - Business',
        app: 'planai-receptionist',
        category: 'subscription',
        price: 1500000, // ₦15,000
        currency: 'NGN',
        duration: 1,
        metadata: {
          features: ['Unlimited conversations', 'WhatsApp + Instagram', 'Advanced analytics', 'CRM integration'],
          description: 'AI receptionist for growing businesses',
        },
      },
      {
        productId: 'planai-social-factory-basic',
        name: 'PlanAI Social Factory - Basic',
        app: 'planai-social-factory',
        category: 'subscription',
        price: 300000, // ₦3,000
        currency: 'NGN',
        duration: 1,
        metadata: {
          features: ['10 videos/month', 'AI content generation', 'Multi-platform scheduling'],
          description: 'AI-powered social media content creation',
        },
      },

      // ====== EMAIL SCRAPER PRO ======
      {
        productId: 'emailscraper-basic',
        name: 'EmailScraper Pro - Basic',
        app: 'emailscraper-pro',
        category: 'subscription',
        price: 200000, // ₦2,000
        currency: 'NGN',
        duration: 1,
        metadata: {
          features: ['500 emails/month', 'Email verification', 'Basic enrichment'],
          description: 'Find and verify email addresses',
        },
      },
      {
        productId: 'emailscraper-pro',
        name: 'EmailScraper Pro - Professional',
        app: 'emailscraper-pro',
        category: 'subscription',
        price: 500000, // ₦5,000
        currency: 'NGN',
        duration: 1,
        metadata: {
          features: ['5,000 emails/month', 'Advanced verification', 'Full enrichment', 'API access'],
          description: 'Professional email finding and enrichment',
        },
      },

      // ====== SAFE NAIJA ======
      {
        productId: 'safe-naija-citizen',
        name: 'SAFE Naija - Citizen',
        app: 'safe-naija',
        category: 'subscription',
        price: 0, // Free
        currency: 'NGN',
        duration: null,
        metadata: {
          features: ['Report incidents', 'View crime map', 'Safety alerts'],
          description: 'Free for citizens to report and track incidents',
        },
      },
      {
        productId: 'safe-naija-agency',
        name: 'SAFE Naija - Agency License',
        app: 'safe-naija',
        category: 'subscription',
        price: 5000000, // ₦50,000/month
        currency: 'NGN',
        duration: 1,
        metadata: {
          features: ['Full case management', 'AI analytics', 'Officer dashboard', 'Data exports'],
          description: 'For law enforcement agencies',
        },
      },
    ];

    // Upsert all products
    for (const product of products) {
      await this.productModel.findOneAndUpdate(
        { productId: product.productId },
        product,
        { upsert: true, new: true },
      );
    }

    return products;
  }

  async getProductsByApp(app: string) {
    return this.productModel.find({ app, active: true }).exec();
  }

  async getProduct(productId: string) {
    return this.productModel.findOne({ productId, active: true }).exec();
  }

  async getAllProducts() {
    return this.productModel.find({ active: true }).exec();
  }
}