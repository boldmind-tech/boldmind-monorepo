# Getting Started with BoldMind Monorepo

## Prerequisites

- Node.js 18 or higher
- PNPM 8.15.0 or higher
- Git

## Setup

### 1. Clone Repository

`bash` git clone [https://github.com/boldmind-tech/boldmind-monorepo]

## Install Dependencies

`bash` pnpm install

3. # Environment Setup

``bash`
# Copy environment example
cp .env.example .env.local

# Edit .env.local with your values
4. ## Start Development
`bash`

# Start live products
pnpm dev:live

# Start specific category
pnpm dev:building
pnpm dev:planai
pnpm dev:concepts

# Start all apps (be careful - many ports!)

pnpm dev:all
Port Allocation
3000: BoldMind Hub

3001: AmeboGist

3002: EduCenter

3007: PlanAI Receptionist

See complete port list

Common Tasks
Adding a New App

`bash`

# Use the generator
pnpm new:web

# Or manually create:
# 1. Create folder in APPS/WEB_APPS/
# 2. Copy package.json template
# 3. Update ports
# 4. Add to pnpm-workspace.yaml

Updating Dependencies
bash
# Check for outdated dependencies
pnpm check:deps

# Update all dependencies
pnpm update:deps

# Fix dependency issues
pnpm fix:deps
Building and Deploying
bash
# Build everything
pnpm build

# Build specific apps
pnpm build:live
pnpm build:selected

# Deploy
pnpm deploy:live
pnpm deploy:planai
Troubleshooting
Port Conflicts
Check which process is using a port:

bash
# Windows
netstat -ano | findstr :3001

# Linux/Mac
lsof -i :3001
Dependency Issues

bash

# Clean everything
pnpm clean

# Reinstall
pnpm install
TypeScript Errors

`bash`

# Check all TypeScript configs

pnpm type-check
Next Steps
Read Architecture Overview

Check Product Specifications

Review API Documentation

Join the development team
