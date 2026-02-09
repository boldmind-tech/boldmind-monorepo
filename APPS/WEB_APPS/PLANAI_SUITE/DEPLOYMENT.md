# PlanAI Suite Deployment Guide

This guide covers deploying the PlanAI Suite applications to Vercel with path-based routing under a unified domain (`planai.boldmind.ng`).

## Architecture Overview

The PlanAI Suite uses a **multi-deployment architecture**:
- **1 Landing App** (`planai-landing`) - Main entry point at `planai.boldmind.ng`
- **9 Sub-Apps** - Each deployed independently and proxied through the landing app

```
planai.boldmind.ng/              → planai-landing
planai.boldmind.ng/receptionist  → receptionist app (via rewrite)
planai.boldmind.ng/analytics     → analytics-dashboard app (via rewrite)
planai.boldmind.ng/branding      → branding-design app (via rewrite)
... and so on
```

## Prerequisites

- Vercel account with access to deploy projects
- Access to `boldmind.ng` domain DNS settings
- All apps built and tested locally

## Deployment Steps

### Step 1: Deploy Sub-Apps First

Deploy each of the 9 sub-apps to Vercel **before** deploying the landing app. This ensures the landing app can proxy to valid URLs.

#### Apps to Deploy:
1. `receptionist`
2. `analytics-dashboard`
3. `branding-design`
4. `business-planning`
5. `credibility-hubs`
6. `digital-storefronts`
7. `financial-forecasting`
8. `investor-readiness`
9. `marketing-automation`

#### For Each Sub-App:

**A. Create Vercel Project**
```bash
cd APPS/WEB_APPS/PLANAI_SUITE/<app-name>
vercel
```

Follow the prompts:
- Link to existing project or create new? → **Create new**
- Project name: `planai-<app-name>` (e.g., `planai-receptionist`)
- Directory: `.` (current directory)

**B. Configure Environment Variables in Vercel Dashboard**

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add the following variables for **Production** environment:

| Variable Name | Value | Example |
|--------------|-------|---------|
| `NEXT_PUBLIC_PRODUCT_SLUG` | `<app-slug>` | `ai-receptionist` |
| `NEXT_PUBLIC_APP_URL` | `https://planai.boldmind.ng/<path>` | `https://planai.boldmind.ng/receptionist` |
| `NEXT_PUBLIC_APP_NAME` | `PlanAI <App Name>` | `PlanAI Receptionist` |
| `NEXT_PUBLIC_SITE_NAME` | `PlanAI <App Name>` | `PlanAI Receptionist` |

> **Note**: The `.env.production` files in each app directory contain these values, but Vercel requires them to be set in the dashboard as well.

**C. Deploy to Production**
```bash
vercel --prod
```

**D. Note the Deployment URL**

After deployment, Vercel will provide a URL like:
```
https://planai-receptionist.vercel.app
```

Save this URL - you'll need it for the landing app configuration.

---

### Step 2: Update Landing App Environment Variables

After deploying all 9 sub-apps, update the `planai-landing/.env.production` file with the actual Vercel deployment URLs:

```env
RECEPTIONIST_URL=https://planai-receptionist.vercel.app
ANALYTICS_DASHBOARD_URL=https://planai-analytics.vercel.app
BRANDING_DESIGN_URL=https://planai-branding.vercel.app
BUSINESS_PLANNING_URL=https://planai-business.vercel.app
CREDIBILITY_HUBS_URL=https://planai-credibility.vercel.app
DIGITAL_STOREFRONTS_URL=https://planai-storefronts.vercel.app
FINANCIAL_FORECASTING_URL=https://planai-finance.vercel.app
INVESTOR_READINESS_URL=https://planai-investor.vercel.app
MARKETING_AUTOMATION_URL=https://planai-marketing.vercel.app
```

---

### Step 3: Deploy Landing App

**A. Create Vercel Project**
```bash
cd APPS/WEB_APPS/PLANAI_SUITE/planai-landing
vercel
```

**B. Configure Environment Variables in Vercel Dashboard**

Add the 9 URL environment variables from Step 2 to the Vercel dashboard:

| Variable Name | Value |
|--------------|-------|
| `RECEPTIONIST_URL` | `https://planai-receptionist.vercel.app` |
| `ANALYTICS_DASHBOARD_URL` | `https://planai-analytics.vercel.app` |
| `BRANDING_DESIGN_URL` | `https://planai-branding.vercel.app` |
| `BUSINESS_PLANNING_URL` | `https://planai-business.vercel.app` |
| `CREDIBILITY_HUBS_URL` | `https://planai-credibility.vercel.app` |
| `DIGITAL_STOREFRONTS_URL` | `https://planai-storefronts.vercel.app` |
| `FINANCIAL_FORECASTING_URL` | `https://planai-finance.vercel.app` |
| `INVESTOR_READINESS_URL` | `https://planai-investor.vercel.app` |
| `MARKETING_AUTOMATION_URL` | `https://planai-marketing.vercel.app` |

**C. Deploy to Production**
```bash
vercel --prod
```

---

### Step 4: Configure Custom Domain

**A. Add Domain to Vercel**

1. Go to Vercel Dashboard → `planai-landing` project → Settings → Domains
2. Add domain: `planai.boldmind.ng`
3. Vercel will provide DNS configuration instructions

**B. Update DNS Records**

In your `boldmind.ng` DNS provider, add the records provided by Vercel. Typically:

```
Type: CNAME
Name: planai
Value: cname.vercel-dns.com
```

**C. Wait for DNS Propagation**

DNS changes can take up to 48 hours, but usually complete within a few minutes to hours.

---

## Verification

### Test Each Route

Once deployed, test each route to ensure proper proxying:

1. **Landing Page**: `https://planai.boldmind.ng/` ✓
2. **Receptionist**: `https://planai.boldmind.ng/receptionist` ✓
3. **Analytics**: `https://planai.boldmind.ng/analytics` ✓
4. **Branding**: `https://planai.boldmind.ng/branding` ✓
5. **Business Planning**: `https://planai.boldmind.ng/business-planning` ✓
6. **Credibility**: `https://planai.boldmind.ng/credibility` ✓
7. **Storefronts**: `https://planai.boldmind.ng/storefronts` ✓
8. **Finance**: `https://planai.boldmind.ng/finance` ✓
9. **Investor**: `https://planai.boldmind.ng/investor` ✓
10. **Marketing**: `https://planai.boldmind.ng/marketing` ✓

### Check Browser Console

Open browser DevTools (F12) and check for:
- ✓ No `NEXT_PUBLIC_PRODUCT_SLUG` errors
- ✓ No 404 errors for assets (manifest, icons)
- ✓ Correct `basePath` in network requests

### Verify Environment Variables

In the browser console, check that environment variables are accessible:

```javascript
console.log(process.env.NEXT_PUBLIC_PRODUCT_SLUG);
// Should output the correct slug for each app
```

---

## Troubleshooting

### Error: "Could not detect current product"

**Cause**: `NEXT_PUBLIC_PRODUCT_SLUG` not set in Vercel environment variables.

**Fix**: 
1. Go to Vercel Dashboard → Project → Settings → Environment Variables
2. Add `NEXT_PUBLIC_PRODUCT_SLUG` with the correct value
3. Redeploy: `vercel --prod`

---

### 404 Errors for Assets (manifest.webmanifest, icons)

**Cause**: Assets not found due to `basePath` configuration.

**Fix**: Ensure each sub-app has `basePath` set in `next.config.mjs`:

```javascript
const nextConfig = {
  basePath: '/storefronts', // Must match the rewrite path
  // ... other config
};
```

---

### Rewrite Not Working (404 on sub-app routes)

**Cause**: Sub-app not deployed or URL in landing app environment variables is incorrect.

**Fix**:
1. Verify sub-app is deployed and accessible at its Vercel URL
2. Check landing app environment variables match actual deployment URLs
3. Redeploy landing app after updating environment variables

---

### CORS Errors

**Cause**: Sub-apps rejecting requests from the landing app domain.

**Fix**: Add CORS headers to sub-app `next.config.mjs`:

```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'Access-Control-Allow-Origin', value: 'https://planai.boldmind.ng' },
        { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE,OPTIONS' },
      ],
    },
  ];
},
```

---

## Updating Apps

When you need to update an app:

**For Sub-Apps:**
```bash
cd APPS/WEB_APPS/PLANAI_SUITE/<app-name>
vercel --prod
```

**For Landing App:**
```bash
cd APPS/WEB_APPS/PLANAI_SUITE/planai-landing
vercel --prod
```

---

## Environment Variables Reference

### Sub-Apps (All 9 apps)

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_PRODUCT_SLUG` | ✓ | Unique identifier for the app |
| `NEXT_PUBLIC_APP_URL` | ✓ | Full URL where app is accessible |
| `NEXT_PUBLIC_APP_NAME` | ✓ | Display name of the app |
| `NEXT_PUBLIC_SITE_NAME` | ✓ | Site name for SEO |

### Landing App

| Variable | Required | Description |
|----------|----------|-------------|
| `RECEPTIONIST_URL` | ✓ | Deployed URL of receptionist app |
| `ANALYTICS_DASHBOARD_URL` | ✓ | Deployed URL of analytics app |
| `BRANDING_DESIGN_URL` | ✓ | Deployed URL of branding app |
| `BUSINESS_PLANNING_URL` | ✓ | Deployed URL of business planning app |
| `CREDIBILITY_HUBS_URL` | ✓ | Deployed URL of credibility app |
| `DIGITAL_STOREFRONTS_URL` | ✓ | Deployed URL of storefronts app |
| `FINANCIAL_FORECASTING_URL` | ✓ | Deployed URL of finance app |
| `INVESTOR_READINESS_URL` | ✓ | Deployed URL of investor app |
| `MARKETING_AUTOMATION_URL` | ✓ | Deployed URL of marketing app |

---

## Quick Reference: App Mapping

| Path | App Directory | Product Slug | Vercel Project Name |
|------|--------------|--------------|---------------------|
| `/receptionist` | `receptionist` | `ai-receptionist` | `planai-receptionist` |
| `/analytics` | `analytics-dashboard` | `analytics-dashboard` | `planai-analytics` |
| `/branding` | `branding-design` | `branding-design` | `planai-branding` |
| `/business-planning` | `business-planning` | `business-planning` | `planai-business` |
| `/credibility` | `credibility-hubs` | `credibility-hubs` | `planai-credibility` |
| `/storefronts` | `digital-storefronts` | `digital-storefronts` | `planai-storefronts` |
| `/finance` | `financial-forecasting` | `financial-forecasting` | `planai-finance` |
| `/investor` | `investor-readiness` | `investor-readiness` | `planai-investor` |
| `/marketing` | `marketing-automation` | `marketing-automation` | `planai-marketing` |
