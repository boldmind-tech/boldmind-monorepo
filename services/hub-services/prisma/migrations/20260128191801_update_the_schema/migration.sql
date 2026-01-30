-- CreateEnum
CREATE TYPE "ProductCategory" AS ENUM ('EDUCATION', 'HEALTH', 'NEWS', 'PRODUCTIVITY', 'SOCIAL', 'FINANCE', 'AI', 'ECOMMERCE', 'SECURITY', 'OTHER');

-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('LIVE', 'BUILDING', 'PLANNED', 'CONCEPT', 'PAUSED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "MetricType" AS ENUM ('PAGE_VIEWS', 'SIGN_UPS', 'CONVERSIONS', 'FEATURE_USAGE', 'API_CALLS', 'ERRORS', 'RESPONSE_TIME', 'UPTIME', 'CUSTOMER_SATISFACTION', 'NPS', 'REVENUE_PER_USER', 'LIFETIME_VALUE');

-- CreateEnum
CREATE TYPE "RoadmapCategory" AS ENUM ('FEATURE', 'IMPROVEMENT', 'BUG_FIX', 'INTEGRATION', 'PERFORMANCE', 'SECURITY');

-- CreateEnum
CREATE TYPE "RoadmapPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "RoadmapStatus" AS ENUM ('PLANNED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED', 'ON_HOLD');

-- CreateEnum
CREATE TYPE "ChangeType" AS ENUM ('MAJOR', 'MINOR', 'PATCH', 'HOTFIX');

-- CreateEnum
CREATE TYPE "FeedbackType" AS ENUM ('BUG', 'FEATURE_REQUEST', 'IMPROVEMENT', 'QUESTION', 'PRAISE', 'COMPLAINT');

-- CreateEnum
CREATE TYPE "FeedbackSeverity" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "FeedbackStatus" AS ENUM ('NEW', 'REVIEWING', 'PLANNED', 'IN_PROGRESS', 'COMPLETED', 'WONT_FIX', 'DUPLICATE');

-- CreateEnum
CREATE TYPE "AnnouncementType" AS ENUM ('INFO', 'WARNING', 'SUCCESS', 'ERROR', 'UPDATE', 'PROMOTION');

-- CreateEnum
CREATE TYPE "InteractionType" AS ENUM ('VIEW', 'CLICK', 'FAVORITE', 'SHARE', 'FEEDBACK', 'PURCHASE_INTENT');

-- CreateTable
CREATE TABLE "products" (
    "id" UUID NOT NULL,
    "productId" VARCHAR(50) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "tagline" VARCHAR(255),
    "category" "ProductCategory" NOT NULL,
    "status" "ProductStatus" NOT NULL,
    "version" VARCHAR(20),
    "monthlyRevenue" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "totalUsers" INTEGER NOT NULL DEFAULT 0,
    "activeUsers" INTEGER NOT NULL DEFAULT 0,
    "priority" INTEGER NOT NULL DEFAULT 99,
    "techStack" TEXT[],
    "tags" TEXT[],
    "features" JSONB,
    "challenges" JSONB,
    "opportunities" JSONB,
    "links" JSONB,
    "logoUrl" TEXT,
    "coverUrl" TEXT,
    "screenshots" TEXT[],
    "launchedAt" TIMESTAMP(3),
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "revenue_tracking" (
    "id" UUID NOT NULL,
    "productId" UUID NOT NULL,
    "date" DATE NOT NULL,
    "revenue" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "newUsers" INTEGER NOT NULL DEFAULT 0,
    "activeUsers" INTEGER NOT NULL DEFAULT 0,
    "churnedUsers" INTEGER NOT NULL DEFAULT 0,
    "mrr" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "churnRate" DECIMAL(5,2) NOT NULL DEFAULT 0,
    "trials" INTEGER NOT NULL DEFAULT 0,
    "conversions" INTEGER NOT NULL DEFAULT 0,
    "conversionRate" DECIMAL(5,2) NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "revenue_tracking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_growth" (
    "id" UUID NOT NULL,
    "productId" UUID NOT NULL,
    "date" DATE NOT NULL,
    "totalUsers" INTEGER NOT NULL DEFAULT 0,
    "newUsers" INTEGER NOT NULL DEFAULT 0,
    "activeUsers" INTEGER NOT NULL DEFAULT 0,
    "sessions" INTEGER NOT NULL DEFAULT 0,
    "avgSessionDuration" INTEGER NOT NULL DEFAULT 0,
    "dau" INTEGER NOT NULL DEFAULT 0,
    "wau" INTEGER NOT NULL DEFAULT 0,
    "mau" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_growth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_metrics" (
    "id" UUID NOT NULL,
    "productId" UUID NOT NULL,
    "metricType" "MetricType" NOT NULL,
    "value" DECIMAL(15,2) NOT NULL,
    "date" DATE NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_metrics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roadmap_items" (
    "id" UUID NOT NULL,
    "productId" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "category" "RoadmapCategory" NOT NULL,
    "priority" "RoadmapPriority" NOT NULL,
    "status" "RoadmapStatus" NOT NULL DEFAULT 'PLANNED',
    "votes" INTEGER NOT NULL DEFAULT 0,
    "quarter" VARCHAR(10),
    "estimatedDate" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roadmap_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "changelog_entries" (
    "id" UUID NOT NULL,
    "productId" UUID NOT NULL,
    "version" VARCHAR(50) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "changes" JSONB NOT NULL,
    "type" "ChangeType" NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "changelog_entries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedback" (
    "id" UUID NOT NULL,
    "productId" UUID NOT NULL,
    "userId" UUID,
    "type" "FeedbackType" NOT NULL,
    "title" VARCHAR(255),
    "description" TEXT NOT NULL,
    "email" VARCHAR(255),
    "severity" "FeedbackSeverity" NOT NULL DEFAULT 'MEDIUM',
    "status" "FeedbackStatus" NOT NULL DEFAULT 'NEW',
    "upvotes" INTEGER NOT NULL DEFAULT 0,
    "response" TEXT,
    "respondedBy" UUID,
    "respondedAt" TIMESTAMP(3),
    "browserInfo" JSONB,
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "feedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "announcements" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "type" "AnnouncementType" NOT NULL,
    "targetProducts" UUID[],
    "targetUsers" UUID[],
    "priority" INTEGER NOT NULL DEFAULT 1,
    "isDismissible" BOOLEAN NOT NULL DEFAULT true,
    "publishedAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "clickCount" INTEGER NOT NULL DEFAULT 0,
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "announcements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolio_items" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "category" VARCHAR(100) NOT NULL,
    "coverImage" TEXT,
    "images" TEXT[],
    "liveUrl" TEXT,
    "githubUrl" TEXT,
    "techStack" TEXT[],
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "likeCount" INTEGER NOT NULL DEFAULT 0,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL DEFAULT 999,
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "portfolio_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "analytics_events" (
    "id" UUID NOT NULL,
    "userId" UUID,
    "sessionId" VARCHAR(100),
    "productSlug" VARCHAR(50) NOT NULL,
    "eventName" VARCHAR(100) NOT NULL,
    "eventData" JSONB,
    "pageUrl" TEXT,
    "referrer" TEXT,
    "userAgent" TEXT,
    "ipAddress" INET,
    "location" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "analytics_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_product_interactions" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "productId" UUID NOT NULL,
    "productSlug" VARCHAR(50) NOT NULL,
    "type" "InteractionType" NOT NULL,
    "data" JSONB,
    "duration" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_product_interactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_productId_key" ON "products"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "products_slug_key" ON "products"("slug");

-- CreateIndex
CREATE INDEX "products_category_idx" ON "products"("category");

-- CreateIndex
CREATE INDEX "products_status_idx" ON "products"("status");

-- CreateIndex
CREATE INDEX "products_priority_idx" ON "products"("priority");

-- CreateIndex
CREATE UNIQUE INDEX "revenue_tracking_date_key" ON "revenue_tracking"("date");

-- CreateIndex
CREATE INDEX "revenue_tracking_date_idx" ON "revenue_tracking"("date");

-- CreateIndex
CREATE UNIQUE INDEX "revenue_tracking_productId_date_key" ON "revenue_tracking"("productId", "date");

-- CreateIndex
CREATE INDEX "user_growth_date_idx" ON "user_growth"("date");

-- CreateIndex
CREATE UNIQUE INDEX "user_growth_productId_date_key" ON "user_growth"("productId", "date");

-- CreateIndex
CREATE INDEX "product_metrics_metricType_date_idx" ON "product_metrics"("metricType", "date");

-- CreateIndex
CREATE UNIQUE INDEX "product_metrics_productId_metricType_date_key" ON "product_metrics"("productId", "metricType", "date");

-- CreateIndex
CREATE INDEX "roadmap_items_productId_idx" ON "roadmap_items"("productId");

-- CreateIndex
CREATE INDEX "roadmap_items_status_idx" ON "roadmap_items"("status");

-- CreateIndex
CREATE INDEX "changelog_entries_productId_idx" ON "changelog_entries"("productId");

-- CreateIndex
CREATE INDEX "changelog_entries_isPublished_publishedAt_idx" ON "changelog_entries"("isPublished", "publishedAt");

-- CreateIndex
CREATE INDEX "feedback_productId_idx" ON "feedback"("productId");

-- CreateIndex
CREATE INDEX "feedback_type_status_idx" ON "feedback"("type", "status");

-- CreateIndex
CREATE INDEX "announcements_isActive_publishedAt_idx" ON "announcements"("isActive", "publishedAt");

-- CreateIndex
CREATE INDEX "portfolio_items_isFeatured_idx" ON "portfolio_items"("isFeatured");

-- CreateIndex
CREATE INDEX "portfolio_items_order_idx" ON "portfolio_items"("order");

-- CreateIndex
CREATE INDEX "analytics_events_productSlug_createdAt_idx" ON "analytics_events"("productSlug", "createdAt");

-- CreateIndex
CREATE INDEX "analytics_events_eventName_createdAt_idx" ON "analytics_events"("eventName", "createdAt");

-- CreateIndex
CREATE INDEX "analytics_events_userId_idx" ON "analytics_events"("userId");

-- CreateIndex
CREATE INDEX "user_product_interactions_userId_idx" ON "user_product_interactions"("userId");

-- CreateIndex
CREATE INDEX "user_product_interactions_productId_idx" ON "user_product_interactions"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "user_product_interactions_userId_productId_type_createdAt_key" ON "user_product_interactions"("userId", "productId", "type", "createdAt");

-- AddForeignKey
ALTER TABLE "revenue_tracking" ADD CONSTRAINT "revenue_tracking_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_growth" ADD CONSTRAINT "user_growth_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_metrics" ADD CONSTRAINT "product_metrics_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_product_interactions" ADD CONSTRAINT "user_product_interactions_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
