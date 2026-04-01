# ─────────────────────────────────────────────────────────────────────────────
# service/Dockerfile
# Multi-stage build for the BoldMind NestJS monolith.
# ─────────────────────────────────────────────────────────────────────────────

# ── Stage 1: deps ─────────────────────────────────────────────────────────────
FROM node:22-alpine AS deps

# Install pnpm
RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /

# Copy workspace manifests
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY service/package.json ./service/
COPY packages/utils/package.json ./packages/utils/

# Install ALL workspace deps
RUN pnpm install --frozen-lockfile

# Debug: Show where node_modules are located
RUN echo "Root node_modules:" && ls -la ./node_modules/.bin/ | head -5
RUN echo "Checking if prisma exists:" && ls -la ./node_modules/.bin/prisma || echo "Prisma not in root .bin"
RUN echo "Checking service node_modules:" && ls -la ./service/node_modules 2>/dev/null || echo "No service/node_modules (expected with pnpm hoisting)"

# ── Stage 2: build ────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /

# Copy node_modules from deps stage (only root, since pnpm hoists there)
COPY --from=deps /node_modules ./node_modules

# Copy source files
COPY service/ ./service/
COPY packages/utils/ ./packages/utils/
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Generate Prisma client using the prisma binary from root node_modules
RUN ./node_modules/.bin/prisma generate --schema=./service/prisma/schema.prisma

# Build NestJS
WORKDIR /service
RUN ./node_modules/.bin/nest build

# ── Stage 3: runner ───────────────────────────────────────────────────────────
FROM node:22-alpine AS runner

RUN apk add --no-cache dumb-init

WORKDIR /

# Non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nestjs

# Copy built output
COPY --from=builder /service/dist ./dist

# Copy Prisma schema
COPY --from=builder /service/prisma ./prisma

# Copy Prisma generated client from root (where it should be)
COPY --from=builder /node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /node_modules/@prisma ./node_modules/@prisma

# Copy production node_modules
COPY --from=deps /node_modules ./node_modules

# Copy packages source
COPY --from=builder /packages/utils ./packages/utils

# Ensure proper ownership
RUN chown -R nestjs:nodejs / 2>/dev/null || true

USER nestjs

EXPOSE 4001

CMD ["dumb-init", "node", "dist/main"]