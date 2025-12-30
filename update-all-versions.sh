#!/bin/bash
echo "🔄 Updating all package.json to match lockfile versions..."

# Update boldmind-hub
cat > apps/web/boldmind-hub/package.json << 'JSON'
{
  "type": "module",
  "name": "@boldmind/boldmind-hub",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.16",
    "lucide-react": "^0.309.0",
    "@boldmind/ui": "workspace:*"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "typescript": "^5",
    "tailwindcss": "^3.4.0",
    "postcss": "^8",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.2.0"
  }
}
JSON

echo "✅ Updated boldmind-hub package.json"
echo "📦 Regenerating lockfile..."
rm -f pnpm-lock.yaml
pnpm install

echo "✅ Done! Versions now match."
