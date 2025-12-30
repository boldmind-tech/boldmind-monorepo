#!/bin/bash
echo "í´§ Fixing ESLint v8 compatibility..."

# Add missing es-abstract dependency
pnpm add -w es-abstract@^1.23.9

# Update all eslint related packages to compatible versions
pnpm add -w \
  eslint@^8.57.0 \
  eslint-plugin-react@^7.37.5 \
  eslint-plugin-react-hooks@^4.6.0 \
  @typescript-eslint/eslint-plugin@^6.21.0 \
  @typescript-eslint/parser@^6.21.0 \
  eslint-config-prettier@^9.1.0

# Update .eslintrc.js to use Next.js config
cat > .eslintrc.js << 'EOF2'
module.exports = {
  extends: [
    "next/core-web-vitals",  // Use Next.js built-in config
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "no-console": ["warn", { "allow": ["warn", "error"] }]
  },
  ignorePatterns: ["node_modules/", "dist/", ".next/", "build/"]
}
EOF2

echo "âœ… ESLint compatibility fixed!"
