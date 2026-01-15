
### **`DOCS/guides/adding-new-product.md`**
```markdown
# Adding a New Product

## Overview
This guide explains how to add a new product to the BoldMind ecosystem.

## Step 1: Product Planning

### Determine Product Category
- **Web App**: Goes in `APPS/WEB_APPS/`
- **Mobile App**: Goes in `APPS/MOBILE/`
- **Concept App**: Goes in `APPS/CONCEPT_APPS/`
- **PlanAI App**: Goes in `APPS/WEB_APPS/PLANAI_SUITE/`

### Product Requirements
1. Define product name and slug
2. Determine target audience
3. List core features
4. Plan monetization strategy
5. Define success metrics

## Step 2: Development Setup

### Using Generator (Recommended)
`bash` pnpm new:web
# Follow prompts

## Manual Setup
1.  # Create Folder Structure
`bash`
# For web app
mkdir -p APPS/WEB_APPS/your-product-slug
cd APPS/WEB_APPS/your-product-slug
2. Create package.json
json
{
  "name": "@boldmind/your-product-slug",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 30XX",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@boldmind/ui": "workspace:*",
    "@boldmind/utils": "workspace:*",
    "next": "^14.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.11.5",
    "@types/react": "^18.2.61",
    "@types/react-dom": "^18.2.19",
    "typescript": "^5.3.3",
    "tailwindcss": "^3.4.1",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.33",
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.1.0"
  }
}
3. Create Next.js App Structure
text
your-product-slug/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
├── lib/
├── public/
├── package.json
└── next.config.js
4. Update Configuration
Add to root files:

Update pnpm-workspace.yaml

Update CONFIGURATION/ports.md

Update DOCS/product-specs/

Step 3: Development
Use Shared Components
tsx
import { SuperNavbar, SuperFooter } from '@boldmind/ui';
import { getProductBySlug } from '@boldmind/utils';
Follow Design System
Use theme variables

Follow Nigerian aesthetic

Ensure mobile responsiveness

Implement accessibility

Integrate with Ecosystem
Add to main navigation

Implement cross-product links

Set up analytics

Configure social media sharing

Step 4: Testing
Local Testing
bash
# Start your app
cd APPS/WEB_APPS/your-product-slug
pnpm dev

# Test with other apps
pnpm dev:selected
Integration Testing
Test navigation from other products

Verify shared components work

Check theme consistency

Test on different devices

Step 5: Deployment
Vercel Deployment
Create new Vercel project

Connect to GitHub repository

Set build command: cd ../.. && pnpm build --filter=@boldmind/your-product-slug

Configure environment variables

Domain Setup
Add DNS record in Cloudflare

Configure in Vercel project settings

Set up SSL certificate

Monitoring
Add to Sentry

Set up Google Analytics

Configure error tracking

Monitor performance

Step 6: Documentation
Update Documentation
Add to DOCS/product-specs/your-product.md

Update DOCS/architecture/overview.md

Add API documentation if needed

Create user guides

Marketing Materials
Create product landing page

Prepare social media announcements

Write blog posts

Create tutorial videos

Best Practices
Code Quality
Follow TypeScript strict mode

Use ESLint and Prettier

Write unit tests

Document complex logic

Performance
Optimize images

Implement code splitting

Use caching strategies

Monitor bundle size

Security
Validate user input

Sanitize data

Implement rate limiting

Regular security audits

Template Files
See TOOLS/generators/new-product/template/ for complete starter template.

