# Monorepo Structure

Overview
This monorepo uses PNPM workspaces and Turborepo for optimal package management and build orchestration.

Workspace Configuration
Package Manager: PNPM
Version: 8.9.0

Workspace configuration in pnpm-workspace.yaml

Shared dependencies are hoisted to root

Build System: Turborepo
Parallel builds with caching

Dependency-aware task execution

Remote caching support

Directory Structure
Apps (apps/)
Contains all deployable applications:

Web Applications (apps/web/)
Next.js 13+ applications

App Router architecture

Shared UI components

Individual deployment targets

PlanAI Suite (apps/planai/)
AI-powered business tools

Shared AI infrastructure

Integrated workflows

Mobile Applications (apps/mobile/)
TWA (Trusted Web Activity) apps

React Native applications

Shared mobile components

Packages (packages/)
Shared code used across applications:

UI Package (@boldmind/ui)
Reusable React components

Design system implementation

Theme configuration

Utilities (@boldmind/utils)
Helper functions

Custom hooks

Type definitions

Database (@boldmind/database)
Database connections

Models and schemas

Migration scripts

AI (@boldmind/ai)
OpenAI integration

Prompt templates

AI response caching

Services (services/)
Backend services:

API Gateway
Central routing

Authentication

Rate limiting

Notification Service
Email/SMS/Push notifications

Template management

Delivery tracking

Media Service
Image/video processing

File uploads

CDN integration

Dependency Management
Shared Dependencies
Defined in root package.json

Installed once at root level

Accessible to all packages

App-specific Dependencies
Defined in individual app package.json

Installed in app directory

Can override shared versions

Peer Dependencies
React, ReactDOM

Next.js

TypeScript

Build Pipeline
Development
bash
pnpm dev
Starts all apps in dev mode

Watches for changes

Hot reload enabled

Production Build
bash
pnpm build
Builds all apps and packages

Uses Turborepo caching

Outputs to .next/ or dist/

Deployment Strategy
Web Apps (Vercel)
Individual Vercel projects

Automatic deployments

Preview deployments for PRs

Backend Services (Docker)
Containerized deployment

Kubernetes orchestration

Auto-scaling

Best Practices
Import from packages: Use @boldmind/* imports

Avoid circular dependencies: Keep dependencies unidirectional

Use workspace protocol: "@boldmind/ui": "workspace:*"

Cache builds: Leverage Turborepo caching

Test locally: Run tests before pushing
