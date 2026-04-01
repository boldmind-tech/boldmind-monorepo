# ─────────────────────────────────────────────────────────────────────────────
# service/Dockerfile - Fixed NestJS Docker build with Prisma
# ─────────────────────────────────────────────────────────────────────────────

# ── Stage 1: deps ─────────────────────────────────────────────────────────────
FROM node:22-alpine AS deps

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /

# Copy root workspace files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy all package.json files needed for workspace resolution
COPY service/package.json ./service/
COPY packages/utils/package.json ./packages/utils/

# Install dependencies for ALL workspaces (critical fix!)
# This ensures service dependencies like Prisma are installed
RUN pnpm install --frozen-lockfile --recursive

# Verify Prisma is actually installed
RUN echo "=== Verifying Prisma installation ===" && \
    ls -la /node_modules/.bin/prisma && \
    ls -la /service/node_modules/.bin/prisma 2>/dev/null || echo "Not in service" && \
    echo "Prisma version:" && /node_modules/.bin/prisma --version

# ── Stage 2: build ────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /

# Copy node_modules from deps stage
COPY --from=deps /node_modules ./node_modules

# Copy source files
COPY service/ ./service/
COPY packages/utils/ ./packages/utils/

# Generate Prisma client using the binary from root node_modules
RUN /node_modules/.bin/prisma generate --schema=/service/prisma/schema.prisma

# Build NestJS application
RUN cd /service && /node_modules/.bin/nest build

# ── Stage 3: runner ───────────────────────────────────────────────────────────
FROM node:22-alpine AS runner

RUN apk add --no-cache dumb-init

WORKDIR /

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nestjs

# Copy built application
COPY --from=builder /service/dist ./dist
COPY --from=builder /service/prisma ./prisma

# Copy Prisma client files
COPY --from=builder /node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /node_modules/@prisma ./node_modules/@prisma

# Copy production dependencies only
COPY --from=deps /node_modules ./node_modules

# Copy shared packages
COPY --from=builder /packages/utils ./packages/utils

# Copy package.json for potential runtime scripts
COPY --from=builder /service/package.json ./package.json

# Set ownership
RUN chown -R nestjs:nodejs /

USER nestjs

EXPOSE 4001

CMD ["dumb-init", "node", "dist/main"]