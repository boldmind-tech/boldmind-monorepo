# ─────────────────────────────────────────────────────────────────────────────
# service/Dockerfile - With symlink fix
# ─────────────────────────────────────────────────────────────────────────────

# ── Stage 1: deps ─────────────────────────────────────────────────────────────
FROM node:22-alpine AS deps

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /

# Copy workspace files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY service/package.json ./service/
COPY packages/utils/package.json ./packages/utils/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Create symlink for service node_modules (for compatibility)
RUN ln -sf /node_modules /service/node_modules

# ── Stage 2: build ────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /

# Copy node_modules
COPY --from=deps /node_modules ./node_modules
COPY --from=deps /service/node_modules ./service/node_modules

# Copy source files
COPY service/ ./service/
COPY packages/utils/ ./packages/utils/

# Generate Prisma client
RUN cd /service && ../node_modules/.bin/prisma generate --schema=./prisma/schema.prisma

# Build NestJS
RUN cd /service && ../node_modules/.bin/nest build

# ── Stage 3: runner ───────────────────────────────────────────────────────────
FROM node:22-alpine AS runner

RUN apk add --no-cache dumb-init

WORKDIR /

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nestjs

# Copy built output
COPY --from=builder /service/dist ./dist
COPY --from=builder /service/prisma ./prisma

# Copy Prisma client
COPY --from=builder /node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /node_modules/@prisma ./node_modules/@prisma

# Copy production node_modules
COPY --from=deps /node_modules ./node_modules

# Copy packages source
COPY --from=builder /packages/utils ./packages/utils

RUN chown -R nestjs:nodejs /

USER nestjs

EXPOSE 4001

CMD ["dumb-init", "node", "dist/main"]