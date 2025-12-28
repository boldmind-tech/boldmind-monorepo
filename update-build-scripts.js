const fs = require('fs');
const path = require('path');

// Read current package.json
const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Add build groups
const newScripts = {
  ...packageJson.scripts,
  'build:groups': 'turbo run build --parallel --continue',
  'build:web': 'turbo run build --filter=./apps/web/*',
  'build:planai': 'turbo run build --filter=./apps/planai/*',
  'build:selected': 'turbo run build --filter=@boldmind/boldmind-hub --filter=@boldmind/amebogist --filter=@boldmind/educenter --filter=@boldmind/receptionist',
  'dev:selected': 'concurrently "pnpm dev:boldmind-hub" "pnpm dev:amebogist" "pnpm dev:educenter" "pnpm dev:planai-receptionist"',
  'setup': 'pnpm install && pnpm build:shared && echo "✅ Setup complete!"',
  'reset': 'pnpm clean && rm -rf node_modules && pnpm install && pnpm build:shared'
};

packageJson.scripts = newScripts;

// Write updated package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('✅ Updated package.json with optimized build scripts');
