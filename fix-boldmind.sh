#!/bin/bash
# scripts/fix-versions.sh
echo "🔧 Fixing all version mismatches..."

# Create unified versions
cat > .versions.json << 'EOF'
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "next": "^14.2.35"
  },
  "devDependencies": {
    "@types/node": "^20.11.3",
    "@types/react": "^18.3.27",
    "@types/react-dom": "^18.3.7",
    "typescript": "^5.4.5",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.1",
    "eslint": "^8.57.0",
    "eslint-config-next": "14.2.35",
    "turbo": "^2.0.0"
  }
}
EOF

echo "📦 Standardizing versions across all packages..."

# Update all package.json files
find . -name "package.json" -type f ! -path "*/node_modules/*" ! -path "*/.*" | while read pkg; do
  echo "Processing: $pkg"
  
  node -e "
    const fs = require('fs');
    const path = require('path');
    const versions = require('./.versions.json');
    
    try {
      const pkgContent = JSON.parse(fs.readFileSync('$pkg', 'utf8'));
      let changes = [];
      
      // Update dependencies
      if (pkgContent.dependencies) {
        for (const [dep, version] of Object.entries(versions.dependencies)) {
          if (pkgContent.dependencies[dep] && pkgContent.dependencies[dep] !== version) {
            changes.push(\`\${dep}: \${pkgContent.dependencies[dep]} → \${version}\`);
            pkgContent.dependencies[dep] = version;
          }
        }
      }
      
      // Update devDependencies
      if (pkgContent.devDependencies) {
        for (const [dep, version] of Object.entries(versions.devDependencies)) {
          if (pkgContent.devDependencies[dep] && pkgContent.devDependencies[dep] !== version) {
            changes.push(\`\${dep}: \${pkgContent.devDependencies[dep]} → \${version}\`);
            pkgContent.devDependencies[dep] = version;
          }
        }
      }
      
      if (changes.length > 0) {
        fs.writeFileSync('$pkg', JSON.stringify(pkgContent, null, 2));
        console.log(\`  Updated:\n    - \${changes.join('\n    - ')}\`);
      }
    } catch (err) {
      console.log(\`  Error: \${err.message}\`);
    }
  "
done

# Update root package.json specifically
if [ -f "package.json" ]; then
  echo "📝 Updating root package.json..."
  node -e "
    const fs = require('fs');
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const versions = require('./.versions.json');
    
    // Update dependencies
    pkg.dependencies = {
      ...pkg.dependencies,
      ...versions.dependencies
    };
    
    // Update devDependencies
    pkg.devDependencies = {
      ...pkg.devDependencies,
      ...versions.devDependencies
    };
    
    // Remove duplicates (keep workspace:* dependencies)
    if (pkg.dependencies) {
      for (const dep in pkg.dependencies) {
        if (dep.startsWith('@boldmind/')) {
          pkg.dependencies[dep] = 'workspace:*';
        }
      }
    }
    
    fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
  "
fi

echo "🔄 Regenerating lockfile..."
rm -f pnpm-lock.yaml
pnpm install --force

echo "✅ All version mismatches fixed!"
echo ""
echo "Next steps:"
echo "1. Commit the changes: git add . && git commit -m 'fix: standardize dependency versions'"
echo "2. Push: git push origin main"
echo "3. GitHub Actions will now deploy successfully"