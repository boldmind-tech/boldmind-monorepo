# ─────────────────────────────────────────────────────────────────────────────
# service/Dockerfile - Simplified version
# ─────────────────────────────────────────────────────────────────────────────

# ── Stage 1: deps ─────────────────────────────────────────────────────────────
FROM node:22-alpine AS deps

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /service

# Copy only service package.json first
COPY service/package.json ./
COPY packages/utils/package.json ../packages/utils/

# Install service dependencies (including Prisma)
RUN pnpm install --frozen-lockfile

# ── Stage 2: build ────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /service

# Copy node_modules from deps
COPY --from=deps /service/node_modules ./node_modules

# Copy source files
COPY service/ ./
COPY packages/utils ../packages/utils/

# Generate Prisma client
RUN npx prisma generate --schema=./prisma/schema.prisma

# Build NestJS
RUN npx nest build

# ── Stage 3: runner ───────────────────────────────────────────────────────────
FROM node:22-alpine AS runner

RUN apk add --no-cache dumb-init

WORKDIR /service

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nestjs

# Copy built output
COPY --from=builder /service/dist ./dist
COPY --from=builder /service/prisma ./prisma
COPY --from=builder /service/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /service/node_modules/@prisma ./node_modules/@prisma
COPY --from=builder /service/node_modules ./node_modules

RUN chown -R nestjs:nodejs /service

USER nestjs

EXPOSE 4001

CMD ["dumb-init", "node", "dist/main"]