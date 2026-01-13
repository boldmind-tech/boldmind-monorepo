#!/bin/bash

# 🏗️ BoldMind Monorepo Structure Generator
# Generates project structure excluding node_modules, .next, dist, build folders

OUTPUT_FILE="PROJECT_STRUCTURE.txt"

echo "🚀 Generating BoldMind Monorepo Structure..."
echo "📝 Output file: $OUTPUT_FILE"
echo ""

# Generate structure with tree command (if available)
if command -v tree &> /dev/null; then
    tree -I 'node_modules|.next|dist|build|.git|.turbo|.vercel|coverage' \
         -L 4 \
         --dirsfirst \
         -F \
         > "$OUTPUT_FILE"
    
    echo "✅ Structure generated using 'tree' command"
else
    # Fallback: Use find command
    echo "⚠️  'tree' command not found. Using 'find' fallback..."
    
    find . -type d \
        -not -path "*/node_modules/*" \
        -not -path "*/.next/*" \
        -not -path "*/dist/*" \
        -not -path "*/build/*" \
        -not -path "*/.git/*" \
        -not -path "*/.turbo/*" \
        -not -path "*/.vercel/*" \
        -not -path "*/coverage/*" \
        -print | \
        sed 's|^\./||' | \
        sort > "$OUTPUT_FILE"
    
    echo "✅ Structure generated using 'find' command"
fi

# Add metadata
{
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📊 STRUCTURE METADATA"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "Generated: $(date)"
    echo "Total Apps: 31 products"
    echo "Total Packages: 12 shared packages"
    echo "Total Services: 8 backend services"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
} >> "$OUTPUT_FILE"

echo ""
echo "✨ Done! Structure saved to: $OUTPUT_FILE"
echo "📖 Open it to debug path errors"

# Also create a simplified version for quick reference
SIMPLE_OUTPUT="PROJECT_STRUCTURE_SIMPLE.txt"

cat > "$SIMPLE_OUTPUT" << 'EOF'
boldmind-monorepo/
├── apps/
│   ├── web/                    # 16 Web Applications
│   │   ├── boldmind-hub/       # Main landing (LIVE)
│   │   ├── amebogist/          # News platform (LIVE)
│   │   ├── educenter/          # Education (LIVE)
│   │   ├── boldmind-os/        # Productivity OS (BUILDING)
│   │   ├── naija-fither/       # Fitness (NEW)
│   │   ├── emailscraper-pro/   # Lead gen (NEW)
│   │   ├── safe-naija/         # Police AI (NEW)
│   │   ├── afrohustle-os/      # Side hustles (CONCEPT)
│   │   ├── naijagig-matcher/   # Gig matching (CONCEPT)
│   │   ├── kolo-ai/            # Thrift groups (CONCEPT)
│   │   ├── borderless-remit/   # Remittance (CONCEPT)
│   │   ├── receipt-genius/     # Receipts (CONCEPT)
│   │   ├── power-alert/        # NEPA status (CONCEPT)
│   │   ├── farmgate-direct/    # Farm-to-table (CONCEPT)
│   │   ├── afrocopy-ai/        # AI copywriting (CONCEPT)
│   │   ├── skill2cash/         # Freelance board (CONCEPT)
│   │   └── anontruth-mic/      # Anonymous tips (CONCEPT)
│   │
│   ├── planai/                 # 10 PlanAI Products
│   │   ├── receptionist/       # AI Receptionist (LIVE)
│   │   ├── social-factory/     # Content factory (BUILDING)
│   │   ├── credibility-hubs/   # Portfolios (PLANNED)
│   │   ├── business-planning/  # Business plans (PLANNED)
│   │   ├── financial-forecasting/  # Finance (PLANNED)
│   │   ├── investor-readiness/ # Investor prep (PLANNED)
│   │   ├── branding-design/    # Brand tools (PLANNED)
│   │   ├── digital-storefronts/# E-commerce (PLANNED)
│   │   ├── marketing-automation/   # Marketing (PLANNED)
│   │   └── analytics-dashboard/    # Analytics (PLANNED)
│   │
│   └── mobile/                 # 6 Mobile Apps
│       ├── amebogist-twa/
│       ├── educenter-twa/
│       ├── boldmind-os-twa/
│       ├── naija-fither-twa/
│       ├── emailscraper-twa/
│       └── safe-naija-native/
│
├── packages/                   # 12 Shared Packages
│   ├── ui/                     # UI components ✅ SOLID
│   ├── utils/                  # Utilities
│   ├── config/                 # Configs
│   ├── api-client/            # API SDK
│   ├── database/              # DB adapters
│   ├── auth/                  # Auth domain ✅ DDD
│   ├── payments/              # Payment integrations
│   ├── ai/                    # AI integrations
│   ├── email/                 # Email templates
│   ├── analytics/             # Analytics
│   ├── seo/                   # SEO utilities
│   └── types/                 # Global types
│
├── services/                  # 8 Backend Services
│   ├── api-gateway/           # Main gateway (NestJS)
│   ├── user-service/          # User management
│   ├── payment-service/       # Payments
│   ├── educenter-service/     # Education
│   ├── naija-fither-service/  # Fitness
│   ├── safe-naija-service/    # Security
│   ├── planai-service/        # PlanAI
│   ├── emailscraper-service/  # Email scraping
│   └── notification-service/  # Notifications
│
├── infrastructure/            # DevOps
│   ├── docker/
│   ├── kubernetes/
│   ├── nginx/
│   └── scripts/
│
├── tools/                     # Dev Tools
│   ├── scripts/
│   ├── generators/
│   └── migrations/
│
├── docs/                      # Documentation
│   ├── architecture/
│   ├── guides/
│   ├── api/
│   └── product-specs/
│
├── .github/workflows/         # CI/CD
├── turbo.json
├── package.json
├── pnpm-workspace.yaml
└── README.md

TOTAL: 31 Products + 12 Packages + 8 Services = 51 Workspaces
EOF

echo "✨ Simplified structure saved to: $SIMPLE_OUTPUT"
echo ""
echo "🎯 Quick commands:"
echo "  - View full structure:   cat $OUTPUT_FILE"
echo "  - View simple version:   cat $SIMPLE_OUTPUT"
echo "  - Search for path:       grep 'your-path' $OUTPUT_FILE"