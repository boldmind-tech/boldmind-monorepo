#!/bin/bash
echo "📦 Updating eslint to non-deprecated version..."

# Update root package.json
node -e "
  const fs = require('fs');
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  // Update eslint to latest stable
  if (pkg.devDependencies && pkg.devDependencies.eslint) {
    pkg.devDependencies.eslint = '^9.57.0';
  }
  
  fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
"

# Update all app package.json files
find apps -name "package.json" -type f | while read pkg; do
  if [[ $pkg != *"node_modules"* ]]; then
    echo "Updating $pkg..."
    node -e "
      const fs = require('fs');
      try {
        const pkgContent = JSON.parse(fs.readFileSync('$pkg', 'utf8'));
        if (pkgContent.devDependencies && pkgContent.devDependencies.eslint) {
          pkgContent.devDependencies.eslint = '^9.57.0';
          fs.writeFileSync('$pkg', JSON.stringify(pkgContent, null, 2));
        }
      } catch(e) {}
    "
  fi
done

# Regenerate lockfile
echo "🔄 Regenerating lockfile..."
pnpm install --no-frozen-lockfile

echo "✅ ESLint updated!"
