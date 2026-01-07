#!/bin/bash
# setup-vercel.sh
# Setup Vercel for all BoldMind apps

set -e

echo "🚀 Setting up Vercel for BoldMind Monorepo..."

# Install Vercel CLI if not installed
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm install -g vercel
fi

# Login to Vercel
echo "Please login to Vercel..."
vercel login

# Create Vercel projects for each app
APPS=(
    "boldmind-hub:boldmind.ng"
    "amebogist:amebogist.ng"
    "educenter:educenter.com.ng"
    "boldmind-os:os.boldmind.ng"
    "naija-fither:naijafither.boldmind.ng"
    "emailscraper-pro:emailscraper.boldmind.ng"
    "safe-naija:safeai.boldmind.ng"
    "receptionist:receptionist.boldmind.ng"
    "social-factory:socialfactory.boldmind.ng"
)

for app_pair in "${APPS[@]}"; do
    IFS=':' read -r app_name domain <<< "$app_pair"
    
    echo "Setting up $app_name ($domain)..."
    
    # Navigate to app directory
    cd "apps/web/$app_name" 2>/dev/null || cd "apps/planai/$app_name"
    
    # Link to Vercel project
    echo "Linking to Vercel project..."
    vercel link --yes --scope boldmind
    
    # Create vercel.json if it doesn't exist
    if [ ! -f "vercel.json" ]; then
        cat > vercel.json << VERCELEOF
{
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "outputDirectory": ".next",
  "regions": ["fra1"],
  "env": {
    "NEXT_PUBLIC_APP_NAME": "$app_name",
    "NEXT_PUBLIC_APP_URL": "https://$domain"
  }
}
VERCELEOF
    fi
    
    # Add environment variables
    echo "Adding environment variables..."
    
    # Common env vars
    vercel env add NODE_ENV production
    vercel env add NEXT_PUBLIC_APP_NAME "$app_name"
    vercel env add NEXT_PUBLIC_APP_URL "https://$domain"
    vercel env add NEXT_PUBLIC_GA4_ID "$GA4_ID"
    
    # App-specific env vars
    case $app_name in
        "amebogist")
            vercel env add NEXT_PUBLIC_ADSENSE_ID "$ADSENSE_ID"
            ;;
        "educenter")
            vercel env add NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY "$PAYSTACK_PUBLIC_KEY"
            ;;
        "boldmind-os")
            vercel env add OPENAI_API_KEY "$OPENAI_API_KEY"
            ;;
    esac
    
    echo "✅ $app_name setup complete!"
    
    # Return to root
    cd ../../..
done

echo "🎉 Vercel setup complete for all apps!"
echo ""
echo "Next steps:"
echo "1. Connect each app to GitHub for auto-deploy"
echo "2. Set up custom domains in Vercel dashboard"
echo "3. Configure Cloudflare DNS (see setup-cloudflare.sh)"
echo "4. Deploy: vercel --prod"
