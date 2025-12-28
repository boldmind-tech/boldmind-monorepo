#!/bin/bash
# verify-setup.sh - Verify the monorepo setup

echo "🔍 Verifying BoldMind Monorepo Setup..."
echo ""

# Check if pnpm is available
if command -v pnpm &> /dev/null; then
    echo "✅ PNPM is installed"
else
    echo "❌ PNPM is not installed. Please install with: npm install -g pnpm"
    exit 1
fi

# Check if shared packages are built
echo "📦 Checking shared packages..."
if [ -d "packages/ui/dist" ] || [ -f "packages/ui/src/index.ts" ]; then
    echo "✅ Shared packages structure exists"
else
    echo "⚠️  Shared packages may not be built. Run: pnpm build:shared"
fi

# Check if apps have basic structure
echo "📁 Checking app structure..."
if [ -f "apps/web/boldmind-hub/app/page.tsx" ] && [ -f "apps/web/amebogist/app/page.tsx" ]; then
    echo "✅ Basic app structure exists"
else
    echo "❌ App structure missing. Run the fix script again."
fi

# Check ES module syntax
echo "⚙️  Checking ES module syntax..."
if grep -r "module.exports" apps/web/amebogist/next.config.js 2>/dev/null | grep -q "module.exports"; then
    echo "❌ AmeboGist still has CommonJS syntax"
else
    echo "✅ ES module syntax looks good"
fi

echo ""
echo "📊 Summary:"
echo "-----------"
echo "To start development:"
echo "1. Build shared packages: pnpm build:shared"
echo "2. Start core apps: pnpm dev:selected"
echo "3. Or use helper: ./dev-helper.sh core"
echo ""
echo "For individual apps:"
echo "pnpm dev:boldmind-hub  # http://localhost:3000"
echo "pnpm dev:amebogist     # http://localhost:3001"
echo "pnpm dev:educenter     # http://localhost:3002"
