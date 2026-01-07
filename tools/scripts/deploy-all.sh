# tools/scripts/deploy-all.sh
#!/bin/bash

echo "🚀 Deploying all apps to production..."

# Assume GitHub Actions triggered by push to main
git add .
git commit -m "Deploy all apps [skip ci]" || echo "No changes to commit"
git push origin main

# Or for Vercel CLI if configured
# vercel deploy --prod --scope boldmind --yes

echo "✅ Deployment triggered! Check GitHub Actions or Vercel dashboard."

# Run: bash tools/scripts/deploy-all.sh