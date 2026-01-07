const fs = require('fs');
const path = require('path');

const appsToCreate = [
  // Web Apps
  'apps/web/amebogist',
  'apps/web/educenter',
  'apps/web/boldmind-os',
  'apps/web/naija-fither',
  'apps/web/emailscraper-pro',
  'apps/web/safe-naija',
  'apps/web/afrohustle-os',
  'apps/web/naijagig-matcher',
  'apps/web/kolo-ai',
  'apps/web/borderless-remit',
  'apps/web/receipt-genius',
  'apps/web/power-alert',
  'apps/web/farmgate-direct',
  'apps/web/afrocopy-ai',
  'apps/web/skill2cash',
  'apps/web/anontruth-mic',
  
  // PlanAI Apps
  'apps/planai/receptionist',
  'apps/planai/social-factory',
  'apps/planai/credibility-hubs',
  'apps/planai/business-planning',
  'apps/planai/financial-forecasting',
  'apps/planai/investor-readiness',
  'apps/planai/branding-design',
  'apps/planai/digital-storefronts',
  'apps/planai/marketing-automation',
  'apps/planai/analytics-dashboard',
];

const basicPackageJson = {
  name: "",
  version: "1.0.0",
  private: true,
  scripts: {
    dev: "next dev",
    build: "next build",
    start: "next start",
    lint: "next lint"
  },
  dependencies: {
    "@boldmind/ui": "workspace:*",
    "@boldmind/utils": "workspace:*",
    next: "^14.0.0",
    react: "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.309.0"
  },
  devDependencies: {
    "@types/node": "^20.10.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    autoprefixer: "^10.4.0",
    postcss: "^8.4.0",
    tailwindcss: "^3.3.0",
    typescript: "^5.3.0",
    eslint: "^8.0.0",
    "eslint-config-next": "^14.0.0"
  }
};

const nextConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@boldmind/ui', '@boldmind/utils', '@boldmind/auth', '@boldmind/payments', '@boldmind/ai', '@boldmind/database', '@boldmind/api-client', '@boldmind/config'],
};

module.exports = nextConfig;`;

const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`;

const globalsCss = `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 255, 255, 255;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}`;

const basicPage = `export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Coming Soon
        </h1>
        <p className="text-gray-600">
          This app is under development. Check back soon!
        </p>
      </div>
    </div>
  );
}`;

const basicLayout = `import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BoldMind App',
  description: 'Part of the BoldMind ecosystem',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}`;

function createAppStructure(appPath) {
  const appName = appPath.split('/').pop();
  
  // Create directories
  const dirs = [
    `${appPath}/app`,
    `${appPath}/app/api`,
    `${appPath}/components`,
    `${appPath}/lib`,
    `${appPath}/public`,
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created: ${dir}`);
    }
  });
  
  // Create package.json
  const packageJson = {
    ...basicPackageJson,
    name: `@boldmind/${appName}`
  };
  
  fs.writeFileSync(
    `${appPath}/package.json`,
    JSON.stringify(packageJson, null, 2)
  );
  
  // Create config files
  fs.writeFileSync(`${appPath}/next.config.js`, nextConfig);
  fs.writeFileSync(`${appPath}/tailwind.config.js`, tailwindConfig);
  fs.writeFileSync(`${appPath}/postcss.config.js`, 'module.exports = {\n  plugins: {\n    tailwindcss: {},\n    autoprefixer: {},\n  },\n};');
  
  // Create TypeScript config
  fs.writeFileSync(`${appPath}/tsconfig.json`, `{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    },
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}`);
  
  // Create app files
  fs.writeFileSync(`${appPath}/app/globals.css`, globalsCss);
  fs.writeFileSync(`${appPath}/app/layout.tsx`, basicLayout);
  fs.writeFileSync(`${appPath}/app/page.tsx`, basicPage);
  
  // Create .env.example
  fs.writeFileSync(`${appPath}/.env.example`, `# Add your environment variables here
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
`);
  
  console.log(`✅ Created ${appPath}`);
}

// Run setup
console.log('Setting up BoldMind monorepo apps...\n');

appsToCreate.forEach(appPath => {
  if (!fs.existsSync(appPath)) {
    createAppStructure(appPath);
  } else {
    console.log(`⏩ Skipping ${appPath} (already exists)`);
  }
});

console.log('\n🎉 Setup complete!');