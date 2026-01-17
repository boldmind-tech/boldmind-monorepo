#!/bin/bash
echo "🌐 Setting up Google Search Console for all domains..."

# Domains to verify
DOMAINS=(
  "boldmind.ng"
  "amebogist.ng" 
  "educenter.com.ng"
  "os.boldmind.ng"
  "fit.boldmind.ng"
  "email.boldmind.ng"
  "safe.boldmind.ng"
  "social.boldmind.ng"
  "planai.boldmind.ng"
  "hustle.boldmind.ng"
  "kolo.boldmind.ng"
  "border.boldmind.ng"
  "receipt.boldmind.ng"
  "power.boldmind.ng"
  "farm.boldmind.ng"
  "copy.amebogist.ng"
  "anon.amebogist.ng"
  "gig.educenter.com.ng"
  "skills.educenter.com.ng"
)

# Create verification file for each domain
for domain in "${DOMAINS[@]}"; do
  echo "🔗 Setting up $domain"
  
  # Create DNS TXT record instructions
  cat > "google-verification-$domain.md" << EOF
# Google Search Console Setup for $domain

## Steps:
1. Go to https://search.google.com/search-console
2. Add property: $domain
3. Choose "Domain" verification method
4. Add this TXT record to your Cloudflare DNS:

## DNS TXT Record:
Name: @ (or $domain)
Type: TXT
Content: google-site-verification=XXXXXXXXXXXXX_xxxxxxxxxxxxxxxxxxxxxx

## Sitemap URLs to submit:
- https://$domain/sitemap.xml
- https://$domain/sitemap-index.xml

## Important Pages to Index:
- https://$domain/
- https://$domain/products
- https://$domain/about
- https://$domain/contact
EOF

  echo "✅ Created instructions for $domain"
done

# Create unified sitemap index
cat > "sitemap-index.xml" << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://boldmind.ng/sitemap.xml</loc>
    <lastmod>2025-12-28</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://amebogist.ng/sitemap.xml</loc>
    <lastmod>2025-12-28</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://educenter.com.ng/sitemap.xml</loc>
    <lastmod>2025-12-28</lastmod>
  </sitemap>
</sitemapindex>
EOF

echo "📊 To verify all domains in bulk:"
echo "1. Download Google Search Console API client"
echo "2. Run: python3 TOOLS/scripts/bulk-verify-domains.py"