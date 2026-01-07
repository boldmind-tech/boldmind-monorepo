#!/bin/bash
# dev-helper.sh - Helper script for BoldMind development

set -e

case "$1" in
    "core")
        echo "🚀 Starting core applications..."
        concurrently \
            "cd apps/web/boldmind-hub && pnpm dev" \
            "cd apps/web/amebogist && pnpm dev" \
            "cd apps/web/educenter && pnpm dev" \
            "cd apps/planai/receptionist && pnpm dev"
        ;;
    "building")
        echo "🔨 Starting apps in development..."
        concurrently \
            "cd apps/web/boldmind-os && pnpm dev" \
            "cd apps/web/naija-fither && pnpm dev" \
            "cd apps/web/emailscraper-pro && pnpm dev" \
            "cd apps/web/safe-naija && pnpm dev" \
            "cd apps/planai/social-factory && pnpm dev"
        ;;
    "all")
        echo "🌐 Starting ALL applications..."
        # This will be heavy - only use when needed
        pnpm dev:all
        ;;
    "fix")
        echo "🔧 Fixing common issues..."
        # Fix ES module issues
        find apps/ -name "next.config.js" -exec sed -i 's/module.exports =/export default/' {} \;
        
        # Rebuild shared packages
        pnpm build:shared
        
        echo "✅ Fixes applied!"
        ;;
    "status")
        echo "📊 Monorepo Status:"
        echo "-------------------"
        echo "Web Apps: $(find apps/web -maxdepth 1 -type d | wc -l)"
        echo "PlanAI Apps: $(find apps/planai -maxdepth 1 -type d | wc -l)"
        echo "Shared Packages: $(find packages -maxdepth 1 -type d | wc -l)"
        echo ""
        echo "Running processes:"
        pgrep -f "next dev" || echo "No Next.js processes running"
        ;;
    *)
        echo "Usage: ./dev-helper.sh [command]"
        echo ""
        echo "Commands:"
        echo "  core     - Start core apps (boldmind-hub, amebogist, educenter, receptionist)"
        echo "  building - Start apps in development"
        echo "  all      - Start ALL apps (heavy)"
        echo "  fix      - Fix common issues"
        echo "  status   - Show monorepo status"
        ;;
esac
