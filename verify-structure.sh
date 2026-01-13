#!/bin/bash

# 🔍 BoldMind Structure Verification & Debug Script
# Checks all 31 products, 12 packages, 8 services exist and reports missing paths

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔍 BoldMind Monorepo Structure Verification"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

ERRORS=0
WARNINGS=0
CHECKS=0

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to check directory exists
check_dir() {
    local path=$1
    local name=$2
    CHECKS=$((CHECKS + 1))
    
    if [ -d "$path" ]; then
        echo -e "${GREEN}✓${NC} $name"
        return 0
    else
        echo -e "${RED}✗${NC} $name ${RED}(MISSING: $path)${NC}"
        ERRORS=$((ERRORS + 1))
        return 1
    fi
}

# Function to check file exists
check_file() {
    local path=$1
    local name=$2
    CHECKS=$((CHECKS + 1))
    
    if [ -f "$path" ]; then
        echo -e "${GREEN}✓${NC} $name"
        return 0
    else
        echo -e "${YELLOW}⚠${NC} $name ${YELLOW}(MISSING: $path)${NC}"
        WARNINGS=$((WARNINGS + 1))
        return 1
    fi
}

echo "📱 Checking Web Applications (17 products)..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Live Products
check_dir "apps/web/boldmind-hub" "1. BoldMind Hub (LIVE)"
check_dir "apps/web/amebogist" "2. AmeboGist (LIVE)"
check_dir "apps/web/educenter" "3. EduCenter (LIVE)"

# Building
check_dir "apps/web/boldmind-os" "4. BoldMind OS (BUILDING)"

# New Products
check_dir "apps/web/naija-fither" "5. Naija FitHer (NEW)"
check_dir "apps/web/emailscraper-pro" "6. EmailScraper Pro (NEW)"
check_dir "apps/web/safe-naija" "7. SAFE AI (NEW)"

# Concepts
check_dir "apps/web/afrohustle-os" "8. AfroHustle OS (CONCEPT)"
check_dir "apps/web/naijagig-matcher" "9. NaijaGig Matcher (CONCEPT)"
check_dir "apps/web/kolo-ai" "10. KoloAI (CONCEPT)"
check_dir "apps/web/borderless-remit" "11. BorderlessRemit (CONCEPT)"
check_dir "apps/web/receipt-genius" "12. ReceiptGenius (CONCEPT)"
check_dir "apps/web/power-alert" "13. PowerAlert (CONCEPT)"
check_dir "apps/web/farmgate-direct" "14. FarmGate Direct (CONCEPT)"
check_dir "apps/web/afrocopy-ai" "15. AfroCopy AI (CONCEPT)"
check_dir "apps/web/skill2cash" "16. Skill2Cash (CONCEPT)"
check_dir "apps/web/anontruth-mic" "17. AnonTruth Mic (CONCEPT)"

echo ""
echo "🤖 Checking PlanAI Suite (10 products)..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

check_dir "apps/planai/receptionist" "18. AI Receptionist (LIVE)"
check_dir "apps/planai/social-factory" "19. Social Factory (BUILDING)"
check_dir "apps/planai/credibility-hubs" "20. Credibility Hubs (PLANNED)"
check_dir "apps/planai/business-planning" "21. Business Planning (PLANNED)"
check_dir "apps/planai/financial-forecasting" "22. Financial Forecasting (PLANNED)"
check_dir "apps/planai/investor-readiness" "23. Investor Readiness (PLANNED)"
check_dir "apps/planai/branding-design" "24. Branding & Design (PLANNED)"
check_dir "apps/planai/digital-storefronts" "25. Digital Storefronts (PLANNED)"
check_dir "apps/planai/marketing-automation" "26. Marketing Automation (PLANNED)"
check_dir "apps/planai/analytics-dashboard" "27. Analytics Dashboard (PLANNED)"

echo ""
echo "📱 Checking Mobile Apps (6 products)..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

check_dir "apps/mobile/amebogist-twa" "28. AmeboGist TWA"
check_dir "apps/mobile/educenter-twa" "29. EduCenter TWA"
check_dir "apps/mobile/boldmind-os-twa" "30. BoldMind OS TWA"
check_dir "apps/mobile/naija-fither-twa" "31. Naija FitHer TWA"
check_dir "apps/mobile/emailscraper-twa" "32. EmailScraper TWA"
check_dir "apps/mobile/safe-naija-native" "33. SAFE AI Native"

echo ""
echo "📦 Checking Shared Packages (12 packages)..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

check_dir "packages/ui" "UI Components (SOLID ✅)"
check_dir "packages/utils" "Utilities"
check_dir "packages/config" "Configurations"
check_dir "packages/api-client" "API Client"
check_dir "packages/database" "Database Adapters"
check_dir "packages/auth" "Auth Domain (DDD ✅)"
check_dir "packages/payments" "Payments"
check_dir "packages/ai" "AI Integrations"
check_dir "packages/email" "Email Templates"
check_dir "packages/analytics" "Analytics"
check_dir "packages/seo" "SEO Utilities"
check_dir "packages/types" "Global Types"

echo ""
echo "🔧 Checking Backend Services (8 services)..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

check_dir "services/api-gateway" "API Gateway (NestJS)"
check_dir "services/user-service" "User Service"
check_dir "services/payment-service" "Payment Service"
check_dir "services/educenter-service" "EduCenter Service"
check_dir "services/naija-fither-service" "Naija FitHer Service"
check_dir "services/safe-naija-service" "SAFE AI Service"
check_dir "services/planai-service" "PlanAI Service"
check_dir "services/emailscraper-service" "EmailScraper Service"
check_dir "services/notification-service" "Notification Service"

echo ""
echo "📄 Checking Root Configuration Files..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

check_file "package.json" "Root package.json"
check_file "turbo.json" "Turborepo config"
check_file "pnpm-workspace.yaml" "PNPM workspace"
check_file "tsconfig.json" "TypeScript config"
check_file ".gitignore" ".gitignore"
check_file "README.md" "README.md"

echo ""
echo "🏗️ Checking Infrastructure..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

check_dir "infrastructure/docker" "Docker configs"
check_dir "infrastructure/kubernetes" "Kubernetes configs"
check_dir "tools/scripts" "Scripts"
check_dir "docs" "Documentation"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 Verification Summary"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Total Checks: $CHECKS"
echo -e "${GREEN}Passed: $((CHECKS - ERRORS - WARNINGS))${NC}"
echo -e "${YELLOW}Warnings: $WARNINGS${NC}"
echo -e "${RED}Errors: $ERRORS${NC}"
echo ""

if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✓ Structure verification PASSED!${NC}"
    echo ""
    echo "🎯 Next steps:"
    echo "  - Run 'pnpm install' to install dependencies"
    echo "  - Run 'pnpm dev' to start development"
    echo "  - Run './generate-structure.sh' for full structure export"
    exit 0
else
    echo -e "${RED}✗ Structure verification FAILED!${NC}"
    echo ""
    echo "🔧 Fix missing paths above, then run this script again."
    echo ""
    echo "💡 Quick fixes:"
    echo "  - Create missing directories: mkdir -p <path>"
    echo "  - Use generator: pnpm generate:app <name>"
    exit 1
fi