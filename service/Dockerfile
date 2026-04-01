# ─────────────────────────────────────────────────────────────────────────────
# service/Dockerfile - Production-ready NestJS build with Prisma
# ─────────────────────────────────────────────────────────────────────────────

# ── Stage 1: Install dependencies ────────────────────────────────────────────
FROM node:22-alpine AS deps

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /build

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY service/package.json ./service/
COPY packages/utils/package.json ./packages/utils/

# Install ALL dependencies (including Prisma)
RUN pnpm install --frozen-lockfile

# ── Stage 2: Build application ───────────────────────────────────────────────
FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /build

# Copy node_modules from deps stage
COPY --from=deps /build/node_modules ./node_modules

# Copy source code
COPY service/ ./service/
COPY packages/utils/ ./packages/utils/

# Generate Prisma client
WORKDIR /build/service
RUN npx prisma generate

# Build NestJS application
RUN npx nest build

# ── Stage 3: Production runner ───────────────────────────────────────────────
FROM node:22-alpine AS runner

RUN apk add --no-cache dumb-init

WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nestjs

# Copy built application
COPY --from=builder /build/service/dist ./dist
COPY --from=builder /build/service/prisma ./prisma
COPY --from=builder /build/service/package.json ./package.json

# Copy Prisma client
COPY --from=builder /build/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /build/node_modules/@prisma ./node_modules/@prisma

# Copy production dependencies only
COPY --from=deps /build/node_modules ./node_modules

# Set ownership
RUN chown -R nestjs:nodejs /app

USER nestjs

EXPOSE 4001

CMD ["dumb-init", "node", "dist/main"]