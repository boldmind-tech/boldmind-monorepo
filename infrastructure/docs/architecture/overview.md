# BoldMind Architecture Overview

## Vision
Empower 1 million Nigerian entrepreneurs by 2030 through innovative technology solutions.

## System Architecture

### 1. Frontend Layer
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.x
- **State Management**: Zustand + React Query
- **Animations**: Framer Motion

### 2. Backend Layer
- **API Gateway**: NestJS 10.x
- **Microservices**: Domain-specific NestJS services
- **Authentication**: JWT + OAuth 2.0
- **Database**: MongoDB (content), PostgreSQL (transactions)

### 3. Shared Layer
- **UI Components**: `@boldmind/ui` package
- **Utilities**: `@boldmind/utils` package
- **Authentication**: `@boldmind/auth` package
- **Payments**: `@boldmind/payments` package

### 4. Infrastructure
- **Hosting**: Vercel (frontend), Railway (backend)
- **DNS/CDN**: Cloudflare
- **Monitoring**: Sentry, LogRocket
- **Analytics**: Google Analytics, PostHog

## Data Flow
1. User → Cloudflare → Vercel (Next.js)
2. Next.js → API Gateway → Microservices
3. Microservices → Database/Cache
4. Response → User

## Security
- JWT-based authentication
- Role-based access control
- HTTPS everywhere
- Regular security audits
- Secrets management via environment variables