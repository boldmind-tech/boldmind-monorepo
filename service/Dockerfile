# ─────────────────────────────────────────────────────────────────────────────
# service/Dockerfile - Matches your monorepo structure
# Files are at root: /service, /packages, etc.
# ─────────────────────────────────────────────────────────────────────────────

# ── Stage 1: Install dependencies ────────────────────────────────────────────
FROM node:22-alpine AS deps

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY service/package.json ./service/
COPY packages/utils/package.json ./packages/utils/

# Install all dependencies
RUN pnpm install --frozen-lockfile

# ── Stage 2: Build application ───────────────────────────────────────────────
FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /

# Copy node_modules and source
COPY --from=deps /node_modules ./node_modules
COPY service/ ./service/
COPY packages/utils/ ./packages/utils/

# Generate Prisma client using pnpm exec
WORKDIR /service
RUN pnpm exec prisma generate

# Build NestJS
RUN pnpm exec nest build

# ── Stage 3: Production runner ───────────────────────────────────────────────
FROM node:22-alpine AS runner

RUN apk add --no-cache dumb-init

WORKDIR /

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nestjs

# Copy built application
COPY --from=builder /service/dist ./dist
COPY --from=builder /service/prisma ./prisma

# Copy Prisma client
COPY --from=builder /node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /node_modules/@prisma ./node_modules/@prisma

# Copy production dependencies
COPY --from=deps /node_modules ./node_modules

RUN chown -R nestjs:nodejs /

USER nestjs

EXPOSE 4001

CMD ["dumb-init", "node", "dist/main"]