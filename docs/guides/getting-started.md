# Getting Started

Welcome to the BoldMind Monorepo! This guide will help you get started with development.

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/boldmind/boldmind-monorepo.git
   cd boldmind-monorepo
Install dependencies

bash
pnpm install
Set up environment variables

bash
cp .env.example .env.local
# Edit .env.local with your values
Start development servers

bash
# Build shared packages first
pnpm build:packages

# Start specific apps
pnpm dev:hub       # http://localhost:3000
pnpm dev:amebogist # http://localhost:3001
pnpm dev:educenter # http://localhost:3002
Project Structure
text
boldmind-monorepo/
├── apps/              # All applications
│   ├── web/          # Web applications
│   ├── planai/       # PlanAI suite
│   └── mobile/       # Mobile apps
├── packages/         # Shared packages
├── services/         # Backend services
├── infrastructure/   # DevOps configs
├── tools/           # Development tools
└── docs/            # Documentation
Development Commands
Build
bash
# Build all packages and apps
pnpm build

# Build only shared packages
pnpm build:packages
Testing
bash
# Run all tests
pnpm test

# Run tests for specific app
pnpm test --filter=@boldmind/amebogist
Code Quality
bash
# Lint all code
pnpm lint

# Type check
pnpm type-check

# Format code
pnpm format

# Check formatting
pnpm format:check
Development
bash
# Start all apps in development mode
pnpm dev

# Start specific app
pnpm dev --filter=@boldmind/amebogist

# Clean node_modules
pnpm clean
Adding a New Application
Create app directory in apps/web/ or apps/planai/

Copy configuration from existing app

Add to turbo.json pipeline

Create deployment workflow

Update documentation

Need Help?
Check existing issues on GitHub

Contact the development team

Review application logs
