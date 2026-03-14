# BoldMind Automation Implementation Guide

**Complete automation strategy for all 31+ products using n8n-automation-service**

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Core Automation Workflows](#core-automation-workflows)
3. [Product-Specific Automations](#product-specific-automations)
4. [Facebook/Meta Marketing](#facebookmeta-marketing)
5. [Cross-Product Integrations](#cross-product-integrations)
6. [Advanced Workflows](#advanced-workflows)

---

## Quick Start

### Prerequisites

1. **n8n-automation-service** deployed to Render
2. **Facebook App** configured with all credentials
3. **Neon PostgreSQL** database created
4. **Environment variables** set in Render

### Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│           FACEBOOK/META PLATFORMS                        │
│  (Lead Ads, Instagram, WhatsApp, Messenger, Pages)      │
└────────────────────┬────────────────────────────────────┘
                     │ Webhooks
                     ▼
┌─────────────────────────────────────────────────────────┐
│      n8n-automation-service (n8n.boldmind.ng)           │
│  • Webhook Reception & Verification                     │
│  • Data Processing & Storage (Prisma)                   │
│  • AI Analysis & Classification                         │
└────────────────────┬────────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        ▼                         ▼
┌──────────────────┐    ┌──────────────────┐
│  notification-   │    │  Product Services│
│  service         │    │  (31+ apps)      │
│  • Email         │    │  • AmeboGist     │
│  • WhatsApp      │    │  • EduCenter     │
│  • Slack         │    │  • PlanAI Suite  │
└──────────────────┘    └──────────────────┘
```

---

## Core Automation Workflows

### 1. Facebook Lead Ads → Multi-Channel Follow-up

**Use Case:** Capture leads from Facebook ads and immediately engage via WhatsApp, Email, and Slack

**Products:** All PlanAI Suite apps, AI Receptionist, EmailScraper Pro

**Implementation Steps:**

#### Step 1: Configure Facebook Webhook

```typescript
// In Facebook App Dashboard
Webhook URL: https://n8n.boldmind.ng/webhooks/facebook/leads
Verify Token: your_verify_token
Subscribed Fields: leadgen
```

#### Step 2: Lead Processing Flow

```typescript
// n8n-automation-service handles this automatically
1. Receive webhook → Verify signature
2. Extract lead data → Save to database
3. Enrich lead (email validation, company lookup)
4. Trigger follow-up actions
```

#### Step 3: Multi-Channel Engagement

**WhatsApp Follow-up (Instant):**
```typescript
// Auto-triggered by n8n-automation-service
POST https://n8n.boldmind.ng/whatsapp/send
{
  "to": "+234{phone}",
  "message": "Hi {name}! Thanks for your interest in {service}. I'm Charles from BoldMind. When can we chat?"
}
```

**Email Follow-up (5 min delay):**
```typescript
// Triggered via notification-service
POST https://api.boldmind.ng/notifications/email
{
  "to": "{email}",
  "template": "lead_welcome",
  "data": { "name": "{name}", "service": "{service}" }
}
```

**Slack Alert (Sales Team):**
```typescript
// Instant notification
POST {SLACK_WEBHOOK_URL}
{
  "text": "🎯 New Lead: {name} interested in {service}",
  "blocks": [...]
}
```

#### Step 4: Track Conversion

```typescript
// Send conversion event to Facebook Pixel
POST https://n8n.boldmind.ng/facebook/conversion
{
  "event_name": "Lead",
  "user_data": { email, phone },
  "custom_data": { service, source: "facebook_lead_ad" }
}
```

**Expected Results:**
- ✅ Lead captured in database within 2 seconds
- ✅ WhatsApp message sent within 5 seconds
- ✅ Email sent within 5 minutes
- ✅ Sales team notified instantly
- ✅ Conversion tracked in Facebook

---

### 2. Instagram Content Automation

**Use Case:** Schedule posts, auto-reply to comments, analyze engagement

**Products:** Social Factory, AmeboGist, All PlanAI Suite apps

**Implementation Steps:**

#### Step 1: Content Publishing

```typescript
// From Social Factory or any product
POST https://n8n.boldmind.ng/instagram/publish
{
  "caption": "🚀 New feature alert! Check out our latest...",
  "imageUrl": "https://cdn.boldmind.ng/images/post-123.jpg"
}
```

**What happens:**
1. Creates media container on Instagram
2. Publishes post
3. Saves to database with `mediaId`
4. Returns success with post URL

#### Step 2: Auto-Reply to Comments

```typescript
// Webhook automatically triggered when new comment
// n8n-automation-service receives:
{
  "entry": [{
    "changes": [{
      "field": "comments",
      "value": {
        "id": "comment_123",
        "text": "How much is this?",
        "from": { "username": "user123" }
      }
    }]
  }]
}

// AI Analysis (auto-triggered)
1. Classify intent: "pricing_inquiry"
2. Generate response: "Hi! Our pricing starts at ₦5,000. DM us for details!"
3. Reply to comment
4. Save to database
```

#### Step 3: Engagement Analytics

```typescript
// Get analytics
GET https://n8n.boldmind.ng/analytics/engagement

Response:
{
  "instagram": {
    "posts": 45,
    "comments": 234,
    "avgEngagementRate": "4.2%",
    "topPost": { mediaId, likes, comments }
  }
}
```

---

### 3. WhatsApp Customer Service Bot

**Use Case:** Automated customer support with AI classification and human handoff

**Products:** All products with customer support needs

**Implementation Steps:**

#### Step 1: Receive Message

```typescript
// Webhook from WhatsApp Business API
POST https://n8n.boldmind.ng/webhooks/whatsapp/messages
{
  "messages": [{
    "from": "+2348012345678",
    "text": { "body": "I need help with my subscription" }
  }]
}
```

#### Step 2: AI Intent Classification

```typescript
// Auto-triggered by n8n-automation-service
1. Analyze message with AI
2. Classify intent:
   - "billing_support" → Route to finance team
   - "technical_support" → Route to tech team
   - "general_inquiry" → Auto-respond
   - "complaint" → Escalate to manager
3. Determine sentiment: positive/negative/neutral
```

#### Step 3: Auto-Response or Human Handoff

**Auto-Response (for general inquiries):**
```typescript
POST https://n8n.boldmind.ng/whatsapp/send
{
  "to": "+2348012345678",
  "message": "Hi! I can help with that. Your subscription is active until March 15, 2026. Need anything else?"
}
```

**Human Handoff (for complex issues):**
```typescript
// Alert support team on Slack
POST {SLACK_WEBHOOK_URL}
{
  "text": "🆘 Customer needs human support",
  "blocks": [
    { "text": "Customer: +2348012345678" },
    { "text": "Issue: Billing support" },
    { "text": "Sentiment: Negative" }
  ]
}

// Mark conversation as "needs_human: true" in database
```

#### Step 4: Conversation Logging

All messages saved to `whatsapp_messages` table:
- Message ID, direction (inbound/outbound)
- Intent classification
- Sentiment analysis
- Auto-reply status
- Timestamps

---

## Product-Specific Automations

### AmeboGist (Social Media Platform)

**Automation Goals:**
1. Auto-publish trending content
2. Moderate comments
3. Notify authors of engagement
4. Generate daily analytics reports

**Implementation:**

#### 1. Trending Content Auto-Publisher

```typescript
// Cron job (daily at 8 AM)
POST https://n8n.boldmind.ng/instagram/publish
{
  "caption": "🔥 Today's trending gist: {title}\n\n{excerpt}\n\nRead more: amebogist.ng/{slug}",
  "imageUrl": "{featured_image}"
}

// Also post to Facebook Page
POST https://n8n.boldmind.ng/facebook/create-post
{
  "message": "...",
  "link": "https://amebogist.ng/{slug}"
}
```

#### 2. Comment Moderation

```typescript
// Webhook: New comment on Instagram/Facebook
1. AI analyzes comment for:
   - Spam detection
   - Hate speech
   - Promotional content
2. If flagged: Auto-hide and alert moderators
3. If clean: Auto-approve
4. Save to database
```

#### 3. Author Engagement Notifications

```typescript
// When post gets 100+ likes or 20+ comments
POST https://api.boldmind.ng/notifications/email
{
  "to": "{author_email}",
  "template": "engagement_milestone",
  "data": {
    "post_title": "...",
    "likes": 150,
    "comments": 25
  }
}
```

---

### EduCenter (Education Platform)

**Automation Goals:**
1. Auto-grade exams
2. Generate certificates
3. Send study reminders
4. Track learning streaks

**Implementation:**

#### 1. Auto-Grade Exam

```typescript
// When student submits exam
POST https://charles.app.n8n.cloud/webhook/educenter-grade
{
  "exam_id": "exam_123",
  "student_id": "student_456",
  "answers": [...]
}

// n8n workflow:
1. Compare answers with answer key
2. Calculate score
3. Save to database
4. Send result email
5. Update student progress
```

#### 2. Certificate Generation

```typescript
// When student completes course
POST https://charles.app.n8n.cloud/webhook/educenter-cert
{
  "student_id": "student_456",
  "course_id": "course_789"
}

// Workflow:
1. Generate PDF certificate (Canva API or Puppeteer)
2. Upload to cloud storage
3. Send via email
4. Post achievement to LinkedIn (optional)
```

#### 3. Study Streak Reminders

```typescript
// Cron job (daily at 6 PM)
1. Query students with active streaks
2. Check if studied today
3. If not: Send WhatsApp reminder
   "🔥 Your 7-day streak is at risk! Study for 10 mins to keep it alive."
```

---

### Social Factory (Content Generation)

**Automation Goals:**
1. AI video generation
2. Multi-platform publishing
3. Performance analytics
4. Content scheduling

**Implementation:**

#### 1. AI Video Generation Pipeline

```typescript
// User triggers video creation
POST https://charles.app.n8n.cloud/webhook/social-generate
{
  "topic": "5 Tips for Nigerian Entrepreneurs",
  "duration": 60,
  "style": "educational"
}

// Workflow:
1. Generate script with AI (Gemini)
2. Generate voiceover (ElevenLabs)
3. Generate video (Replicate/Runway)
4. Add subtitles
5. Merge audio + video
6. Upload to cloud storage
7. Return video URL
```

#### 2. Multi-Platform Publishing

```typescript
// Publish to all platforms
POST https://charles.app.n8n.cloud/webhook/social-publish
{
  "video_url": "https://cdn.boldmind.ng/videos/vid_123.mp4",
  "caption": "...",
  "platforms": ["instagram", "youtube", "twitter", "facebook"]
}

// Workflow:
1. Upload to Instagram (Reels)
2. Upload to YouTube (Shorts)
3. Upload to Twitter (Video)
4. Upload to Facebook (Video)
5. Save all post IDs to database
6. Track performance
```

---

### PlanAI Suite (7 Apps)

#### Business Planning

```typescript
// Generate AI business plan
POST https://charles.app.n8n.cloud/webhook/planai-business
{
  "business_name": "Jollof Delivery Lagos",
  "industry": "Food Delivery",
  "target_market": "Lagos professionals"
}

// Returns:
{
  "executive_summary": "...",
  "market_analysis": "...",
  "financial_projections": {...},
  "pdf_url": "https://cdn.boldmind.ng/plans/plan_123.pdf"
}
```

#### Financial Forecasting

```typescript
// Cashflow projection
POST https://charles.app.n8n.cloud/webhook/planai-cashflow
{
  "revenue": [50000, 75000, 100000],
  "expenses": [30000, 35000, 40000],
  "months": 12
}

// Returns Excel/Google Sheets with:
- Monthly cashflow
- Break-even analysis
- Runway calculation
```

#### Marketing Automation

```typescript
// Abandoned cart recovery
POST https://charles.app.n8n.cloud/webhook/planai-cart
{
  "user_email": "customer@example.com",
  "cart_items": [...],
  "cart_value": 25000
}

// Workflow:
1. Wait 1 hour
2. Send email: "You left items in your cart!"
3. Wait 24 hours
4. Send WhatsApp: "10% discount if you complete order today"
5. Wait 48 hours
6. Final email with 15% discount
```

---

## Facebook/Meta Marketing

### Complete Lead Generation Funnel

**Scenario:** PlanAI Suite running Facebook ads for business planning services

#### Step 1: Create Lead Ad Campaign

```typescript
// Create campaign via Facebook Marketing API
POST https://graph.facebook.com/v19.0/act_{ad_account_id}/campaigns
{
  "name": "PlanAI Business Planning - Jan 2026",
  "objective": "LEAD_GENERATION",
  "status": "ACTIVE",
  "access_token": "{system_user_token}"
}
```

#### Step 2: Configure Lead Form

```typescript
// Create lead form
POST https://graph.facebook.com/v19.0/{page_id}/leadgen_forms
{
  "name": "Business Planning Inquiry",
  "questions": [
    { "type": "FULL_NAME" },
    { "type": "EMAIL" },
    { "type": "PHONE_NUMBER" },
    { "type": "CUSTOM", "key": "business_name" },
    { "type": "CUSTOM", "key": "industry" }
  ],
  "privacy_policy_url": "https://planai.boldmind.ng/privacy"
}
```

#### Step 3: Lead Capture Automation

```
Facebook User Submits Form
         ↓
Webhook → https://n8n.boldmind.ng/webhooks/facebook/leads
         ↓
n8n-automation-service:
  1. Verify signature ✓
  2. Extract lead data ✓
  3. Fetch full details from Graph API ✓
  4. Save to database ✓
  5. Enrich lead (Hunter.io for company) ✓
         ↓
Trigger Follow-ups:
  - WhatsApp (instant)
  - Email (5 min)
  - Slack alert (instant)
  - CRM update (Airtable/Notion)
         ↓
Track Conversion:
  - Send to Facebook Conversions API
  - Update campaign analytics
```

#### Step 4: Nurture Sequence

```typescript
// Day 1: Welcome email
POST https://api.boldmind.ng/notifications/email
{
  "template": "planai_welcome",
  "data": { name, business_name }
}

// Day 3: Case study
POST https://api.boldmind.ng/notifications/email
{
  "template": "planai_case_study",
  "data": { industry }
}

// Day 7: Book consultation
POST https://n8n.boldmind.ng/whatsapp/send
{
  "to": "{phone}",
  "message": "Hi {name}! Ready to create your business plan? Book a free 15-min consultation: {booking_link}"
}
```

---

### Instagram Growth Automation

**Scenario:** AmeboGist growing Instagram following

#### 1. Content Calendar Automation

```typescript
// Schedule posts for the week
const contentCalendar = [
  { day: "Monday", time: "08:00", topic: "Tech News" },
  { day: "Wednesday", time: "12:00", topic: "Entertainment" },
  { day: "Friday", time: "18:00", topic: "Weekend Vibes" }
];

// Cron job triggers publishing
contentCalendar.forEach(post => {
  // At scheduled time:
  POST https://n8n.boldmind.ng/instagram/publish
  {
    "caption": generateCaption(post.topic),
    "imageUrl": generateImage(post.topic)
  }
});
```

#### 2. Engagement Automation

```typescript
// Auto-reply to comments
Webhook: New comment
  ↓
AI analyzes comment
  ↓
If question → Generate helpful reply
If praise → Thank them
If spam → Hide and report
  ↓
POST https://n8n.boldmind.ng/instagram/reply-comment
{
  "comment_id": "...",
  "reply": "..."
}
```

#### 3. Analytics & Reporting

```typescript
// Daily analytics report (8 AM)
GET https://n8n.boldmind.ng/analytics/engagement

// Send to Slack
POST {SLACK_WEBHOOK_URL}
{
  "text": "📊 Instagram Daily Report",
  "blocks": [
    { "text": "Posts: 3" },
    { "text": "New Followers: +45" },
    { "text": "Engagement Rate: 5.2%" },
    { "text": "Top Post: {link}" }
  ]
}
```

---

### WhatsApp Business Automation

**Scenario:** Receipt Genius sending invoices via WhatsApp

#### 1. Invoice Generation & Delivery

```typescript
// User creates invoice
POST https://charles.app.n8n.cloud/webhook/receipt-create
{
  "customer": {
    "name": "John Doe",
    "phone": "+2348012345678"
  },
  "items": [...],
  "total": 50000
}

// Workflow:
1. Generate VAT-compliant PDF invoice
2. Upload to cloud storage
3. Send via WhatsApp:

POST https://n8n.boldmind.ng/whatsapp/send-media
{
  "to": "+2348012345678",
  "type": "document",
  "document": {
    "link": "https://cdn.boldmind.ng/invoices/inv_123.pdf",
    "filename": "Invoice_123.pdf",
    "caption": "Hi John! Here's your invoice for ₦50,000. Pay via bank transfer or card."
  }
}
```

#### 2. Payment Confirmation Automation

```typescript
// When customer pays
Webhook: Payment received (Paystack)
  ↓
Update invoice status in database
  ↓
Send receipt via WhatsApp:

POST https://n8n.boldmind.ng/whatsapp/send
{
  "to": "+2348012345678",
  "message": "✅ Payment received! Thank you, John. Your receipt: {receipt_url}"
}
```

---

## Cross-Product Integrations

### Integration 1: AmeboGist → Social Factory → Instagram

**Flow:** Auto-publish AmeboGist articles to Instagram

```typescript
// When new article published on AmeboGist
Webhook: Article published
  ↓
Trigger Social Factory to create video:

POST https://charles.app.n8n.cloud/webhook/social-generate
{
  "topic": "{article_title}",
  "script": "{article_excerpt}",
  "duration": 60
}
  ↓
Wait for video generation
  ↓
Publish to Instagram:

POST https://n8n.boldmind.ng/instagram/publish
{
  "caption": "🔥 {article_title}\n\nRead full article: amebogist.ng/{slug}",
  "videoUrl": "{generated_video_url}"
}
```

---

### Integration 2: EduCenter → WhatsApp → Slack

**Flow:** Student completes course → WhatsApp certificate → Slack celebration

```typescript
// Student completes course
Webhook: Course completed
  ↓
Generate certificate:

POST https://charles.app.n8n.cloud/webhook/educenter-cert
{
  "student_id": "...",
  "course_id": "..."
}
  ↓
Send via WhatsApp:

POST https://n8n.boldmind.ng/whatsapp/send-media
{
  "to": "{student_phone}",
  "type": "document",
  "document": {
    "link": "{certificate_url}",
    "caption": "🎉 Congratulations! You've completed {course_name}!"
  }
}
  ↓
Celebrate on Slack:

POST {SLACK_WEBHOOK_URL}
{
  "text": "🎓 {student_name} just completed {course_name}!"
}
```

---

### Integration 3: PlanAI Suite → Facebook Ads → CRM

**Flow:** Lead from Facebook → Enrich → Add to CRM → Nurture

```typescript
// Lead captured from Facebook
Webhook: https://n8n.boldmind.ng/webhooks/facebook/leads
  ↓
Enrich lead:

POST https://charles.app.n8n.cloud/webhook/email-enrich
{
  "email": "{lead_email}"
}

Returns: { company, industry, linkedin, twitter }
  ↓
Add to CRM (Airtable/Notion):

POST https://api.airtable.com/v0/{base_id}/Leads
{
  "fields": {
    "Name": "{name}",
    "Email": "{email}",
    "Phone": "{phone}",
    "Company": "{company}",
    "Industry": "{industry}",
    "Source": "Facebook Lead Ad",
    "Status": "New"
  }
}
  ↓
Start nurture sequence (see earlier)
```

---

## Advanced Workflows

### 1. AI-Powered Content Repurposing

**Scenario:** Turn one blog post into 10+ pieces of content

```typescript
// Input: Blog post URL
POST https://n8n.boldmind.ng/workflows/content-repurpose
{
  "url": "https://amebogist.ng/article/ai-in-nigeria"
}

// Workflow:
1. Extract article content
2. Generate:
   - Instagram carousel (10 slides)
   - Twitter thread (15 tweets)
   - LinkedIn post
   - YouTube script
   - TikTok script
   - Email newsletter
   - WhatsApp broadcast
   - Facebook post
3. Schedule all for optimal times
4. Track performance
```

---

### 2. Multi-Product Lead Scoring

**Scenario:** Score leads across all products and route to best product

```typescript
// Lead comes in from any source
Webhook: New lead
  ↓
Analyze lead data:
  - Industry
  - Company size
  - Budget
  - Pain points
  ↓
AI scores lead for each product:
  - PlanAI Business Planning: 85%
  - AI Receptionist: 45%
  - EmailScraper Pro: 60%
  ↓
Route to best-fit product:

POST https://api.boldmind.ng/products/planai/leads
{
  "lead_data": {...},
  "score": 85,
  "source": "facebook_lead_ad"
}
  ↓
Trigger product-specific nurture sequence
```

---

### 3. Automated A/B Testing

**Scenario:** Test different ad creatives and auto-optimize

```typescript
// Create 3 ad variants
variants = [
  { image: "variant_a.jpg", headline: "Start Your Business Today" },
  { image: "variant_b.jpg", headline: "Free Business Plan Template" },
  { image: "variant_c.jpg", headline: "Join 1000+ Entrepreneurs" }
];

// Run for 3 days
// Auto-analyze results:

GET https://n8n.boldmind.ng/analytics/ab-test
{
  "campaign_id": "..."
}

Returns:
{
  "winner": "variant_b",
  "metrics": {
    "variant_a": { ctr: 2.1%, cpl: ₦500 },
    "variant_b": { ctr: 4.5%, cpl: ₦250 }, // Winner
    "variant_c": { ctr: 1.8%, cpl: ₦600 }
  }
}

// Auto-pause losing variants
// Scale winning variant
```

---

## Next Steps

1. **Deploy n8n-automation-service** to Render
2. **Configure Facebook App** with all webhooks
3. **Set up first automation** (Facebook Lead Ads)
4. **Test end-to-end** with real lead
5. **Monitor analytics** and optimize
6. **Scale to all products** one by one

**Need help?** Check the other implementation guides:
- `01-facebook-setup.md` - Facebook App configuration
- `02-instagram-automation.md` - Instagram workflows
- `03-whatsapp-business.md` - WhatsApp automation
- `04-social-factory.md` - Content generation
- `05-planai-suite.md` - PlanAI automations
