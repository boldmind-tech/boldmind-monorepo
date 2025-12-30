#!/bin/bash
# scripts/sync-deps.sh - Run this in GitHub workflow
echo "🔗 Syncing dependencies across monorepo..."

# Load .depsrc if exists
if [ -f ".depsrc" ]; then
  source .depsrc
fi

# Set default versions if not in .depsrc
REACT_VERSION=${REACT_VERSION:-"^18.3.1"}
NEXT_VERSION=${NEXT_VERSION:-"^14.2.35"}
TYPESCRIPT_VERSION=${TYPESCRIPT_VERSION:-"^5.4.5"}
TAILWINDCSS_VERSION=${TAILWINDCSS_VERSION:-"^3.4.1"}

echo "📦 Using versions:"
echo "  React: $REACT_VERSION"
echo "  Next: $NEXT_VERSION"
echo "  TypeScript: $TYPESCRIPT_VERSION"
echo "  Tailwind: $TAILWINDCSS_VERSION"

# Create a temporary package.json updater
cat > /tmp/update-deps.js << 'EOF'
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const versions = {
  react: args[0],
  next: args[1],
  typescript: args[2],
  tailwindcss: args[3]
};

function updatePackage(pkgPath) {
  try {
    const content = fs.readFileSync(pkgPath, 'utf8');
    const pkg = JSON.parse(content);
    let updated = false;

    // Update dependencies
    if (pkg.dependencies) {
      if (pkg.dependencies.react && pkg.dependencies.react !== versions.react) {
        pkg.dependencies.react = versions.react;
        updated = true;
      }
      if (pkg.dependencies['react-dom'] && pkg.dependencies['react-dom'] !== versions.react) {
        pkg.dependencies['react-dom'] = versions.react;
        updated = true;
      }
      if (pkg.dependencies.next && pkg.dependencies.next !== versions.next) {
        pkg.dependencies.next = versions.next;
        updated = true;
      }
    }

    // Update devDependencies
    if (pkg.devDependencies) {
      if (pkg.devDependencies.typescript && pkg.devDependencies.typescript !== versions.typescript) {
        pkg.devDependencies.typescript = versions.typescript;
        updated = true;
      }
      if (pkg.devDependencies.tailwindcss && pkg.devDependencies.tailwindcss !== versions.tailwindcss) {
        pkg.devDependencies.tailwindcss = versions.tailwindcss;
        updated = true;
      }
    }

    if (updated) {
      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
      console.log(`✅ Updated: ${pkgPath}`);
    }
  } catch (error) {
    console.log(`⚠️ Skipped: ${pkgPath} (${error.message})`);
  }
}

// Find all package.json files (excluding node_modules)
const rootDir = process.cwd();
const packageFiles = [];

function walk(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (item !== 'node_modules' && !item.startsWith('.')) {
        walk(fullPath);
      }
    } else if (item === 'package.json') {
      packageFiles.push(fullPath);
    }
  }
}

walk(rootDir);

console.log(`Found ${packageFiles.length} package.json files`);
packageFiles.forEach(updatePackage);
EOF

# Run the updater
node /tmp/update-deps.js "$REACT_VERSION" "$NEXT_VERSION" "$TYPESCRIPT_VERSION" "$TAILWINDCSS_VERSION"

# Update root package.json with consistent devDependencies
if [ -f "package.json" ]; then
  echo "🔄 Updating root package.json..."
  node -e "
    const fs = require('fs');
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    // Ensure consistent devDependencies
    pkg.devDependencies = {
      ...pkg.devDependencies,
      '@types/node': '^20',
      '@types/react': '^18',
      '@types/react-dom': '^18',
      'typescript': '$TYPESCRIPT_VERSION',
      'turbo': '^2.0.0'
    };
    
    fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
  "
fi

# Regenerate lockfile if changes were made
echo "📦 Regenerating lockfile..."
pnpm install --no-frozen-lockfile

echo "✅ Dependency sync complete!"