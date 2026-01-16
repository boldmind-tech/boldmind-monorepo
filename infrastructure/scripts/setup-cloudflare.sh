#!/bin/bash
# setup-cloudflare.sh
# Setup Cloudflare DNS for all BoldMind domains

set -e

echo "🌐 Setting up Cloudflare DNS for BoldMind Ecosystem..."

# Check if Cloudflare CLI is installed
if ! command -v cloudflared &> /dev/null; then
    echo "Please install Cloudflare CLI:"
    echo "npm install -g @cloudflare/wrangler"
    echo "Or download from: https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/"
    exit 1
fi

# Login to Cloudflare
echo "Please login to Cloudflare..."
cloudflared login

# Domains to manage (move all to Cloudflare)
DOMAINS=(
    "boldmind.ng"
    "amebogist.ng"
    "educenter.com.ng"
)

# Subdomains for apps
SUBDOMAINS=(
    "os.boldmind.ng"
    'fit.boldmind.ng'
    "email.boldmind.ng"
    "safe.boldmind.ng"
    "receptionist.boldmind.ng"
    "social.boldmind.ng"
    "credibility.boldmind.ng"
    "businessplan.boldmind.ng"
    "financialforecasting.boldmind.ng"
    "investorreadiness.boldmind.ng"
    "brandingdesign.boldmind.ng"
    "digitalstorefront.boldmind.ng"
    "marketingautomation.boldmind.ng"
    "analytics.boldmind.ng"
    "kolo.boldmind.ng"
    "afrohustle.boldmind.ng"
    "anonmic.boldmind.ng"
    "borderlessremit.boldmind.ng"
    "farmgatedirect.boldmind.ng"
    "naijagigmatcher.boldmind.ng"
    "poweralerts.boldmind.ng"
    "receiptgenius.boldmind.ng"
    "skill2cash.boldmind.ng"
    "afrocopy.boldmind.ng"
     'planai.boldmind.ng'
)

echo "Setting up DNS records..."

# Create a zone file template
cat > cloudflare-dns-setup.md << 'DNSGUIDE'
# Cloudflare DNS Setup Guide

## Step 1: Add Domains to Cloudflare
1. Go to Cloudflare Dashboard
2. Click "Add Site"
3. Add each domain:
   - boldmind.ng
   - amebogist.ng
   - educenter.com.ng

## Step 2: Update Nameservers
For each domain, update nameservers at your registrar:
- DomainKing (amebogist.ng)
- WhoGoHost (boldmind.ng, educenter.com.ng)

Use Cloudflare nameservers:
- kate.ns.cloudflare.com
- todd.ns.cloudflare.com

## Step 3: DNS Records Setup

### A Records (point to Vercel)
@ → 76.76.21.21 (Vercel IP)

### CNAME Records (subdomains to Vercel)
os → cname.vercel-dns.com
naijafither → cname.vercel-dns.com
emailscraper → cname.vercel-dns.com
# ... all other subdomains

### MX Records (Email - using one email account)
@ → mx1.improvmx.com (priority 10)
@ → mx2.improvmx.com (priority 20)

### TXT Records
@ → "v=spf1 include:spf.improvmx.com ~all"
_dmarc → "v=DMARC1; p=none; rua=mailto:dmarc@boldmind.ng"

## Step 4: SSL/TLS
- Set SSL/TLS to Full (Strict)
- Enable Always Use HTTPS
- Enable HTTP/2 and HTTP/3

## Step 5: Page Rules
1. https://*.boldmind.ng/* → Cache Level: Cache Everything
2. https://boldmind.ng/* → Browser Cache TTL: 1 month

## Step 6: Workers (Optional)
Create workers for:
- API routing
- A/B testing
- Edge caching

## Step 7: Analytics
Enable Cloudflare Analytics for all domains.

## Migration Timeline
1. Day 1: Add domains to Cloudflare
2. Day 2: Update nameservers
3. Day 3: Verify DNS propagation
4. Day 4: Enable SSL and optimizations
5. Day 5: Monitor traffic and performance

## Important Notes
- Keep old DNS records until propagation is complete
- Monitor email delivery during migration
- Update Google Search Console with new nameservers
- Update social media links if needed
DNSGUIDE

echo "DNS setup guide created: cloudflare-dns-setup.md"
echo ""
echo "📋 Next steps for domain consolidation:"
echo "1. Move all domains to Cloudflare (as per guide)"
echo "2. Use Cloudflare Email Routing for unified email"
echo "3. Set up cross-domain analytics"
echo "4. Configure shared SSL certificates"
echo ""
echo "🔧 For email consolidation:"
echo "Use ImprovMX or Cloudflare Email Routing to route:"
echo "- support@boldmind.ng (primary)"
echo "- contact@boldmind.ng"
echo "- hello@amebogist.ng → support@boldmind.ng"
echo "- info@educenter.com.ng → support@boldmind.ng"
