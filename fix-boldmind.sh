#!/bin/bash
# scripts/fix-all-deps.sh
echo "🚀 Nuclear option: Fixing ALL dependency issues..."

# 1. Remove all lockfiles and node_modules
rm -rf node_modules
rm -rf apps/*/node_modules
rm -rf packages/*/node_modules
rm -f pnpm-lock.yaml

# 2. Create unified versions file
cat > .depsrc << 'EOF'
REACT_VERSION="^18.3.1"
NEXT_VERSION="^14.2.35"
TYPESCRIPT_VERSION="^5.4.5"
TAILWINDCSS_VERSION="^3.4.1"
EOF

# 3. Update all package.json files to use same versions
find . -name "package.json" -type f | grep -v node_modules | while read pkg; do
  echo "🔧 Updating $pkg..."
  
  # Use jq if available, or node
  if command -v jq &> /dev/null; then
    # Update dependencies with jq
    jq '
      .dependencies.react = "^18.3.1" |
      .dependencies["react-dom"] = "^18.3.1" |
      .dependencies.next = "^14.2.35" |
      .devDependencies.typescript = "^5.4.5" |
      .devDependencies["@types/node"] = "^20" |
      .devDependencies["@types/react"] = "^18" |
      .devDependencies["@types/react-dom"] = "^18" |
      .devDependencies.tailwindcss = "^3.4.1" |
      .devDependencies.autoprefixer = "^10.4.19" |
      .devDependencies.postcss = "^8.4.38" |
      .devDependencies.eslint = "^8" |
      .devDependencies["eslint-config-next"] = "14.2.35"
    ' "$pkg" > "${pkg}.tmp" && mv "${pkg}.tmp" "$pkg"
  else
    # Use node
    node -e "
      const fs = require('fs');
      const pkg = JSON.parse(fs.readFileSync('$pkg', 'utf8'));
      
      if (pkg.dependencies) {
        pkg.dependencies.react = '^18.3.1';
        pkg.dependencies['react-dom'] = '^18.3.1';
        pkg.dependencies.next = '^14.2.35';
      }
      
      if (pkg.devDependencies) {
        pkg.devDependencies.typescript = '^5.4.5';
        pkg.devDependencies['@types/node'] = '^20';
        pkg.devDependencies['@types/react'] = '^18';
        pkg.devDependencies['@types/react-dom'] = '^18';
        pkg.devDependencies.tailwindcss = '^3.4.1';
        pkg.devDependencies.autoprefixer = '^10.4.19';
        pkg.devDependencies.postcss = '^8.4.38';
        pkg.devDependencies.eslint = '^8';
        pkg.devDependencies['eslint-config-next'] = '14.2.35';
      }
      
      fs.writeFileSync('$pkg', JSON.stringify(pkg, null, 2));
    "
  fi
done

# 4. Fresh install
echo "📦 Fresh install..."
pnpm install

# 5. Build UI package first
echo "🏗️ Building UI package..."
pnpm --filter @boldmind/ui build

echo "✅ All dependencies fixed! Test a build:"
echo "cd apps/web/boldmind-hub && pnpm build"