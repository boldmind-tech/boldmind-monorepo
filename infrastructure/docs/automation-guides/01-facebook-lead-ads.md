# Facebook Lead Ads Automation - Step-by-Step Implementation

**Complete guide to capturing and converting Facebook leads automatically**

---

## Overview

This guide shows you how to set up automated lead capture from Facebook Lead Ads with instant follow-up via WhatsApp, Email, and Slack.

**Time to implement:** 2-3 hours  
**Products using this:** All PlanAI Suite apps, AI Receptionist, EmailScraper Pro

---

## Prerequisites

✅ Facebook App created (see `facebook-app-setup-guide.md`)  
✅ n8n-automation-service deployed to Render  
✅ Facebook Page connected to app  
✅ WhatsApp Business API configured  
✅ Notification service ready

---

## Step 1: Create Lead Form (15 mins)

### 1.1 Go to Facebook Business Manager

```
https://business.facebook.com/latest/lead_access/forms
```

### 1.2 Create New Form

Click **"Create Form"** → Choose your Page

**Form Settings:**
- **Form Name:** `PlanAI Business Planning Inquiry`
- **Form Type:** `More Volume` (easier for users)
- **Language:** `English (UK)` or `English (US)`

### 1.3 Add Questions

**Required Questions:**
1. **Full Name** (built-in)
2. **Email** (built-in)
3. **Phone Number** (built-in)

**Custom Questions:**
4. **Business Name**
   - Type: Short Answer
   - Question: "What's your business name?"

5. **Industry**
   - Type: Multiple Choice
   - Options: Food & Beverage, Tech, Fashion, Services, Other

6. **Service Interested**
   - Type: Multiple Choice
   - Options: Business Planning, Financial Forecasting, Investor Readiness, All of the above

### 1.4 Privacy & Compliance

- **Privacy Policy URL:** `https://planai.boldmind.ng/privacy`
- **Thank You Screen:**
  - Headline: "Thanks! We'll be in touch soon."
  - Description: "Check your WhatsApp for an instant message from us!"
  - Button: "Visit Website" → `https://planai.boldmind.ng`

### 1.5 Save Form

Click **"Finish"** and note the **Form ID** (you'll need this later)

---

## Step 2: Configure Facebook Webhook (10 mins)

### 2.1 Go to App Dashboard

```
https://developers.facebook.com/apps/{your_app_id}/webhooks
```

### 2.2 Subscribe to Page

1. Click **"Add Subscription"** under **Pages**
2. **Callback URL:** `https://n8n.boldmind.ng/webhooks/facebook/leads`
3. **Verify Token:** Your custom token (from `.env`)
4. Click **"Verify and Save"**

### 2.3 Subscribe to leadgen Field

1. Find your Page in the list
2. Click **"Subscribe"**
3. Check **`leadgen`** field
4. Click **"Subscribe"**

### 2.4 Test Webhook

```bash
# Facebook will send a GET request to verify
# Your n8n-automation-service will respond with the challenge
# You should see "✅ Facebook webhook verified" in logs
```

---

## Step 3: Create Lead Ad Campaign (20 mins)

### 3.1 Go to Ads Manager

```
https://business.facebook.com/adsmanager
```

### 3.2 Create Campaign

1. Click **"+ Create"**
2. **Objective:** `Lead Generation`
3. **Campaign Name:** `PlanAI Business Planning - Jan 2026`
4. **Budget:** Daily budget ₦5,000 (adjust as needed)
5. Click **"Next"**

### 3.3 Ad Set Settings

**Audience:**
- **Location:** Nigeria → Lagos, Abuja, Port Harcourt
- **Age:** 25-55
- **Gender:** All
- **Detailed Targeting:**
  - Interests: Entrepreneurship, Small Business, Startups
  - Behaviors: Business Page Admins, Small Business Owners

**Placements:**
- **Automatic Placements** (recommended)
- Or **Manual:** Facebook Feed, Instagram Feed

**Budget & Schedule:**
- **Daily Budget:** ₦5,000
- **Start Date:** Immediately
- **End Date:** Ongoing

Click **"Next"**

### 3.4 Create Ad

**Format:** Single Image or Video

**Media:**
- Upload your ad creative (1080x1080px recommended)
- Example: Professional image with text overlay
  - "Get Your FREE Business Plan Template"
  - "Join 1000+ Nigerian Entrepreneurs"

**Primary Text:**
```
🚀 Ready to turn your business idea into reality?

Get a professional business plan in 24 hours with PlanAI.

✅ Market Analysis
✅ Financial Projections
✅ Investor-Ready Documents

Limited spots available this month. Apply now! 👇
```

**Headline:** `Start Your Business Today`

**Call to Action:** `Sign Up`

**Instant Form:** Select the form you created in Step 1

Click **"Publish"**

---

## Step 4: Test Lead Capture (10 mins)

### 4.1 Submit Test Lead

1. Go to your ad preview
2. Click **"Sign Up"**
3. Fill out the form with test data:
   - Name: Test User
   - Email: test@example.com
   - Phone: +2348012345678
   - Business: Test Business
   - Industry: Tech
   - Service: Business Planning

4. Submit form

### 4.2 Check Logs

```bash
# Check Render logs for n8n-automation-service
# You should see:
✅ Facebook webhook verified
✅ Lead lead_123456 saved to database
✅ WhatsApp message sent to +2348012345678
✅ Email queued
✅ Slack notification sent
```

### 4.3 Verify Database

```sql
-- Check Neon database
SELECT * FROM facebook_leads 
WHERE email = 'test@example.com'
ORDER BY created_at DESC 
LIMIT 1;

-- Should show:
-- lead_id, form_id, email, phone, business_name, etc.
```

### 4.4 Check Follow-ups

**WhatsApp:**
- Check if test phone received message within 5 seconds

**Email:**
- Check inbox for welcome email within 5 minutes

**Slack:**
- Check #sales channel for lead notification

---

## Step 5: Customize Follow-up Messages (15 mins)

### 5.1 WhatsApp Template

Edit in `n8n-automation-service/src/facebook/facebook.service.ts`:

```typescript
const whatsappMessage = `
Hi ${leadDetails.fullName}! 👋

Thanks for your interest in ${leadDetails.service}.

I'm Charles from BoldMind. I'd love to help you with your business plan.

When's a good time for a quick 15-min chat?

Reply with:
1️⃣ Today
2️⃣ Tomorrow
3️⃣ This weekend
`;

await this.whatsappService.sendMessage(
  leadDetails.phone,
  whatsappMessage
);
```

### 5.2 Email Template

Create in `notification-service`:

```html
<!-- templates/lead_welcome.html -->
<h1>Welcome to PlanAI, {{name}}! 🚀</h1>

<p>Thanks for your interest in {{service}}.</p>

<p>Here's what happens next:</p>

<ol>
  <li>We'll send you a WhatsApp message (check your phone!)</li>
  <li>Book a free 15-min consultation</li>
  <li>Get your custom business plan in 24 hours</li>
</ol>

<a href="{{booking_link}}">Book Your Free Consultation →</a>

<p>Questions? Reply to this email or WhatsApp us.</p>

<p>Charles<br>Founder, BoldMind</p>
```

### 5.3 Slack Notification

Edit in `facebook.service.ts`:

```typescript
const slackMessage = {
  text: `🎯 New Lead from Facebook!`,
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*${leadDetails.fullName}*\n${leadDetails.businessName}`
      }
    },
    {
      type: 'section',
      fields: [
        { type: 'mrkdwn', text: `*Email:*\n${leadDetails.email}` },
        { type: 'mrkdwn', text: `*Phone:*\n${leadDetails.phone}` },
        { type: 'mrkdwn', text: `*Industry:*\n${leadDetails.industry}` },
        { type: 'mrkdwn', text: `*Service:*\n${leadDetails.service}` }
      ]
    },
    {
      type: 'actions',
      elements: [
        {
          type: 'button',
          text: { type: 'plain_text', text: 'Call Now' },
          url: `tel:${leadDetails.phone}`
        },
        {
          type: 'button',
          text: { type: 'plain_text', text: 'Send Email' },
          url: `mailto:${leadDetails.email}`
        }
      ]
    }
  ]
};
```

---

## Step 6: Set Up Nurture Sequence (30 mins)

### 6.1 Day 1: Welcome (Immediate)

Already handled by Step 5

### 6.2 Day 3: Case Study Email

```typescript
// Cron job or delayed webhook
POST https://api.boldmind.ng/notifications/email
{
  "to": "{email}",
  "template": "planai_case_study",
  "data": {
    "name": "{name}",
    "industry": "{industry}",
    "case_study_url": "https://planai.boldmind.ng/case-studies/{industry}"
  },
  "delay": "3 days"
}
```

**Email Content:**
```
Subject: How {Industry} Businesses Use PlanAI

Hi {name},

I wanted to share how other {industry} businesses are using PlanAI...

[Case study content]

Ready to get started? Book your consultation: {booking_link}
```

### 6.3 Day 7: WhatsApp Follow-up

```typescript
// Delayed WhatsApp message
POST https://n8n.boldmind.ng/whatsapp/send
{
  "to": "{phone}",
  "message": "Hi {name}! It's been a week since you showed interest in {service}. Still interested? I have a special offer for you this week: 20% off if you start today. Book here: {booking_link}",
  "delay": "7 days"
}
```

### 6.4 Day 14: Last Chance Email

```
Subject: Last chance: Your FREE business plan template

Hi {name},

I noticed you haven't booked your consultation yet.

No worries! Here's a FREE business plan template to get you started:
{template_download_link}

If you need help, I'm just a message away.

Charles
```

---

## Step 7: Track Conversions (15 mins)

### 7.1 Set Up Conversions API

Already handled by `n8n-automation-service`, but verify:

```typescript
// In facebook.service.ts
async trackConversion(leadData: any) {
  const pixelId = process.env.FACEBOOK_PIXEL_ID;
  const accessToken = process.env.FACEBOOK_SYSTEM_USER_TOKEN;

  await this.httpService.post(
    `https://graph.facebook.com/v19.0/${pixelId}/events`,
    {
      data: [{
        event_name: 'Lead',
        event_time: Math.floor(Date.now() / 1000),
        user_data: {
          em: hashEmail(leadData.email),
          ph: hashPhone(leadData.phone),
          fn: hashName(leadData.fullName)
        },
        custom_data: {
          service: leadData.service,
          industry: leadData.industry,
          value: 50000, // Estimated lead value
          currency: 'NGN'
        },
        action_source: 'website'
      }],
      access_token: accessToken
    }
  );
}
```

### 7.2 Track Booking Conversion

When lead books consultation:

```typescript
// Event: CompleteRegistration
POST https://n8n.boldmind.ng/facebook/conversion
{
  "event_name": "CompleteRegistration",
  "user_data": { email, phone },
  "custom_data": { value: 100000, currency: "NGN" }
}
```

### 7.3 Track Purchase

When lead becomes paying customer:

```typescript
// Event: Purchase
POST https://n8n.boldmind.ng/facebook/conversion
{
  "event_name": "Purchase",
  "user_data": { email, phone },
  "custom_data": { 
    value: 250000, 
    currency: "NGN",
    content_ids: ["planai_business_plan"]
  }
}
```

---

## Step 8: Monitor & Optimize (Ongoing)

### 8.1 Daily Metrics

Check every morning:

```sql
-- Leads captured yesterday
SELECT COUNT(*) as leads_yesterday
FROM facebook_leads
WHERE created_at >= CURRENT_DATE - INTERVAL '1 day';

-- Leads by service
SELECT service, COUNT(*) as count
FROM facebook_leads
WHERE created_at >= CURRENT_DATE - INTERVAL '7 days'
GROUP BY service
ORDER BY count DESC;

-- Conversion rate
SELECT 
  COUNT(*) as total_leads,
  SUM(CASE WHEN processed = true THEN 1 ELSE 0 END) as processed,
  ROUND(100.0 * SUM(CASE WHEN processed = true THEN 1 ELSE 0 END) / COUNT(*), 2) as conversion_rate
FROM facebook_leads
WHERE created_at >= CURRENT_DATE - INTERVAL '30 days';
```

### 8.2 Facebook Ads Manager

Check daily:
- **Cost per Lead (CPL):** Target < ₦500
- **Click-Through Rate (CTR):** Target > 2%
- **Form Completion Rate:** Target > 50%

### 8.3 A/B Testing

Test different:
- Ad creatives (images, videos)
- Headlines
- Primary text
- Call-to-action buttons
- Form questions

Run each variant for 3-7 days, then scale the winner.

### 8.4 Optimization Tips

**If CPL is too high:**
- Narrow audience targeting
- Improve ad creative
- Simplify lead form (fewer questions)
- Test different placements

**If conversion rate is low:**
- Improve follow-up speed (< 5 seconds for WhatsApp)
- Personalize messages more
- Add social proof to emails
- Offer stronger incentive

---

## Troubleshooting

### Webhook not receiving leads

**Check:**
1. Webhook URL is correct in Facebook App
2. Verify token matches `.env`
3. n8n-automation-service is running (check Render)
4. Check Render logs for errors

**Fix:**
```bash
# Test webhook manually
curl -X GET "https://n8n.boldmind.ng/webhooks/facebook?hub.mode=subscribe&hub.verify_token=YOUR_TOKEN&hub.challenge=test"

# Should return: test
```

### WhatsApp messages not sending

**Check:**
1. WhatsApp credentials in `.env`
2. Phone number format: +234... (with country code)
3. WhatsApp Business API is active

**Fix:**
```typescript
// Test WhatsApp manually
POST https://n8n.boldmind.ng/whatsapp/send
{
  "to": "+2348012345678",
  "message": "Test message"
}
```

### Emails not sending

**Check:**
1. notification-service is running
2. Email service credentials (Resend API key)
3. Email template exists

---

## Success Metrics

After 30 days, you should see:

✅ **50-100 leads** captured (with ₦5,000/day budget)  
✅ **< ₦500 CPL** (Cost Per Lead)  
✅ **> 80% follow-up rate** (WhatsApp + Email sent)  
✅ **> 20% response rate** (leads reply to WhatsApp)  
✅ **> 10% booking rate** (leads book consultation)  
✅ **> 5% conversion rate** (leads become customers)

---

## Next Steps

1. ✅ Set up Instagram automation (see `02-instagram-automation.md`)
2. ✅ Add WhatsApp chatbot (see `03-whatsapp-business.md`)
3. ✅ Integrate with CRM (Airtable/Notion)
4. ✅ Scale to other PlanAI products
5. ✅ Add retargeting campaigns

**Questions?** Check the master guide: `00-automation-master-guide.md`
