#!/bin/bash
# develop-app.sh
# Template for developing each app step-by-step

set -e

APP_NAME=$1
PHASE=$2

if [ -z "$APP_NAME" ]; then
    echo "Usage: ./develop-app.sh <app-name> [phase]"
    echo ""
    echo "Available apps:"
    echo "  boldmind-hub      - Main landing page"
    echo "  amebogist         - News platform"
    echo "  educenter         - Education platform"
    echo "  boldmind-os       - Productivity OS"
    echo "  naija-fither      - Fitness app"
    echo "  emailscraper-pro  - B2B tool"
    echo "  safe-naija        - Security platform"
    echo "  receptionist      - WhatsApp automation"
    echo "  social-factory    - Content creation"
    echo ""
    echo "Phases:"
    echo "  layout     - Basic layout and structure"
    echo "  pages      - Create all pages"
    echo "  components - Build components"
    echo "  api        - Implement API routes"
    echo "  database   - Setup database"
    echo "  auth       - Add authentication"
    echo "  deploy     - Prepare for deployment"
    exit 1
fi

# Default phase
PHASE=${PHASE:-"layout"}

echo "🛠️  Developing $APP_NAME - Phase: $PHASE"
echo "=========================================="

case $PHASE in
    "layout")
        echo "Phase 1: Basic Layout"
        echo "---------------------"
        echo "1. Create app/layout.tsx with:"
        echo "   - Navigation"
        echo "   - Footer"
        echo "   - Analytics integration"
        echo "   - Cross-app tracking"
        echo ""
        echo "2. Create app/page.tsx with:"
        echo "   - Hero section"
        echo "   - Key features"
        echo "   - Call-to-action"
        echo ""
        echo "3. Create app/globals.css with:"
        echo "   - Brand colors"
        echo "   - Typography"
        echo "   - Responsive design"
        ;;
    
    "pages")
        echo "Phase 2: Create Pages"
        echo "---------------------"
        
        case $APP_NAME in
            "boldmind-hub")
                echo "Create:"
                echo "- /about - Company story"
                echo "- /products - All 27 products"
                echo "- /contact - Contact form"
                echo "- /blog - Updates"
                echo "- /careers - Job openings"
                ;;
            "amebogist")
                echo "Create:"
                echo "- /news/[slug] - Article pages"
                echo "- /categories/[category] - Category pages"
                echo "- /search - Search results"
                echo "- /authors/[author] - Author pages"
                ;;
            "educenter")
                echo "Create:"
                echo "- /courses/[id] - Course details"
                echo "- /jamb/practice - Practice tests"
                echo "- /dashboard - Student portal"
                echo "- /subscription - Payment plans"
                ;;
            "boldmind-os")
                echo "Create:"
                echo "- /capture - Note taking"
                echo "- /focus - Pomodoro timer"
                echo "- /connect - Knowledge graph"
                echo "- /create - Content pipeline"
                echo "- /reflect - Analytics"
                ;;
        esac
        ;;
    
    "components")
        echo "Phase 3: Build Components"
        echo "-------------------------"
        echo "1. Use shared components from @boldmind/ui"
        echo "2. Create app-specific components"
        echo "3. Implement responsive design"
        echo "4. Add dark/light mode"
        echo "5. Ensure accessibility"
        ;;
    
    "api")
        echo "Phase 4: Implement API Routes"
        echo "------------------------------"
        echo "1. Create API routes in app/api/"
        echo "2. Connect to database"
        echo "3. Implement CRUD operations"
        echo "4. Add validation with Zod"
        echo "5. Set up error handling"
        ;;
    
    "database")
        echo "Phase 5: Database Setup"
        echo "------------------------"
        echo "1. Define Prisma schema"
        echo "2. Create migrations"
        echo "3. Seed initial data"
        echo "4. Set up indexes"
        echo "5. Configure backups"
        ;;
    
    "auth")
        echo "Phase 6: Authentication"
        echo "-----------------------"
        echo "1. Set up NextAuth.js or Supabase"
        echo "2. Create login/register pages"
        echo "3. Implement protected routes"
        echo "4. Add social login (Google, Facebook)"
        echo "5. Set up email verification"
        ;;
    
    "deploy")
        echo "Phase 7: Deployment Preparation"
        echo "-------------------------------"
        echo "1. Update next.config.js"
        echo "2. Set environment variables"
        echo "3. Create sitemap.xml"
        echo "4. Configure robots.txt"
        echo "5. Test build locally"
        echo "6. Set up GitHub Actions"
        ;;
    
    *)
        echo "Unknown phase: $PHASE"
        echo "Available phases: layout, pages, components, api, database, auth, deploy"
        ;;
esac

echo ""
echo "📁 App location: apps/web/$APP_NAME or apps/planai/$APP_NAME"
echo "🚀 Start development: pnpm dev:$APP_NAME"
echo "🌐 Preview: http://localhost:$(grep -A1 "dev:$APP_NAME" package.json | grep -o '[0-9]\+' | head -1)"
