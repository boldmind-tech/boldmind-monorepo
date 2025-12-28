# Architecture Overview

## System Architecture

The BoldMind ecosystem follows a microservices-oriented architecture with a monorepo structure.

## Key Components

### 1. Frontend Applications (Next.js)
- **BoldMind Hub**: Main landing page
- **AmeboGist**: News platform
- **EduCenter**: Education platform
- **PlanAI Suite**: AI-powered tools

### 2. Backend Services
- **API Gateway**: Central API router
- **Notification Service**: Email/SMS/Push notifications
- **Media Service**: Image/video processing
- **Analytics Service**: Data aggregation

### 3. Shared Packages
- Reusable components and utilities
- Consistent design system
- Shared business logic

## Technology Stack

- **Frontend**: Next.js 13+, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, NestJS
- **Database**: MongoDB, PostgreSQL
- **Authentication**: Supabase Auth
- **Payments**: Paystack
- **Deployment**: Vercel, Docker, Kubernetes
- **CI/CD**: GitHub Actions

## Data Flow

1. Client requests → API Gateway
2. Gateway routes → Specific service/app
3. Services process → Database operations
4. Response returned → Client

## Security

- JWT-based authentication
- Role-based access control
- Encrypted database connections
- Secure environment variables
