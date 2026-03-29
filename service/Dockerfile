# ─────────────────────────────────────────────────────────────────────────────
# service/Dockerfile
# Multi-stage build for the BoldMind NestJS monolith.
#
# Build context MUST be the monorepo root so Docker can COPY workspace packages.
# Example:
#   cd /path/to/boldmind-monorepo
#   docker build -f service/Dockerfile -t boldmind-service:latest .
#
# This means Docker can see:
#   ./service/          (NestJS source)
#   ./packages/utils/   (shared workspace dep)
#   ./package.json      (root monorepo package.json)
#   ./pnpm-lock.yaml
# ─────────────────────────────────────────────────────────────────────────────

# ── Stage 1: deps ─────────────────────────────────────────────────────────────
FROM node:22-alpine AS deps

# Install pnpm
RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /

# Copy workspace manifests (root + service + shared packages)
# We only copy what's needed to resolve workspace deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY service/package.json ./service/
COPY packages/utils/package.json ./packages/utils/
# COPY packages/config/package.json ./packages/config/
# Install ALL workspace deps (needed because service uses workspace:* refs)
RUN pnpm install --frozen-lockfile --ignore-scripts


# ── Stage 2: build ────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /

# Copy node_modules from deps stage
COPY --from=deps /node_modules ./node_modules

# Copy source
COPY service/ ./service/
COPY packages/utils/ ./packages/utils/
# COPY packages/config/ ./packages/config/

# Copy root config files needed by NestJS build
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

WORKDIR /service

# Generate Prisma client
RUN npx prisma generate

# Build NestJS
RUN node -e "try{require('fs').unlinkSync('tsconfig.tsbuildinfo')}catch(e){}" && \
    npx nest build


# ── Stage 3: runner ───────────────────────────────────────────────────────────
FROM node:22-alpine AS runner

RUN apk add --no-cache dumb-init

WORKDIR /

# Non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser  --system --uid  1001 nestjs

# Copy built output
COPY --from=builder /service/dist ./dist

# Copy Prisma schema + generated client
COPY --from=builder /service/prisma ./prisma
COPY --from=builder /service/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /service/node_modules/@prisma ./node_modules/@prisma

# Copy production node_modules
COPY --from=deps /node_modules ./node_modules

# Copy packages source (workspace:* deps need the source at runtime if not bundled)
COPY --from=builder /packages/utils ./packages/utils
# COPY --from=builder /app/packages/config ./packages/config

USER nestjs

EXPOSE 4001

# dumb-init handles signal forwarding + zombie reaping
CMD ["dumb-init", "node", "dist/main"]