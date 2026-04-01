# ─────────────────────────────────────────────────────────────────────────────
# service/Dockerfile - Explicit installation approach
# ─────────────────────────────────────────────────────────────────────────────

# ── Stage 1: deps ─────────────────────────────────────────────────────────────
FROM node:22-alpine AS deps

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /

# Copy root workspace files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY service/package.json ./service/
COPY packages/utils/package.json ./packages/utils/

# Install root dependencies
RUN pnpm install --frozen-lockfile

# Explicitly install service dependencies (critical for Prisma)
RUN cd /service && pnpm install --frozen-lockfile --ignore-workspace

# Verify Prisma is installed
RUN echo "=== Prisma binary locations ===" && \
    find / -name "prisma" -type f -executable 2>/dev/null | grep -E "(bin|node_modules)" && \
    echo "=== Prisma version ===" && \
    /node_modules/.bin/prisma --version 2>/dev/null || \
    /service/node_modules/.bin/prisma --version 2>/dev/null || \
    echo "Prisma not found!"

# ── Stage 2: build ────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /

# Copy all node_modules
COPY --from=deps /node_modules ./node_modules
COPY --from=deps /service/node_modules ./service/node_modules

# Copy source files
COPY service/ ./service/
COPY packages/utils/ ./packages/utils/

# Generate Prisma client (try multiple paths)
RUN if [ -f "/node_modules/.bin/prisma" ]; then \
      /node_modules/.bin/prisma generate --schema=/service/prisma/schema.prisma; \
    elif [ -f "/service/node_modules/.bin/prisma" ]; then \
      /service/node_modules/.bin/prisma generate --schema=/service/prisma/schema.prisma; \
    else \
      echo "ERROR: Prisma binary not found!" && exit 1; \
    fi

# Build NestJS
RUN cd /service && \
    if [ -f "/node_modules/.bin/nest" ]; then \
      /node_modules/.bin/nest build; \
    elif [ -f "/service/node_modules/.bin/nest" ]; then \
      /service/node_modules/.bin/nest build; \
    else \
      echo "ERROR: NestJS binary not found!" && exit 1; \
    fi

# ── Stage 3: runner ───────────────────────────────────────────────────────────
FROM node:22-alpine AS runner

RUN apk add --no-cache dumb-init

WORKDIR /

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nestjs

# Copy built output
COPY --from=builder /service/dist ./dist
COPY --from=builder /service/prisma ./prisma

# Copy Prisma client (from whatever location it was generated)
COPY --from=builder /node_modules/.prisma ./node_modules/.prisma 2>/dev/null || echo "No Prisma client in root node_modules"
COPY --from=builder /service/node_modules/.prisma ./node_modules/.prisma 2>/dev/null || echo "No Prisma client in service node_modules"
COPY --from=builder /node_modules/@prisma ./node_modules/@prisma 2>/dev/null || echo "No Prisma package in root node_modules"
COPY --from=builder /service/node_modules/@prisma ./node_modules/@prisma 2>/dev/null || echo "No Prisma package in service node_modules"

# Copy production dependencies
COPY --from=deps /node_modules ./node_modules
COPY --from=deps /service/node_modules ./service/node_modules 2>/dev/null || echo "No service node_modules found"

# Copy shared packages
COPY --from=builder /packages/utils ./packages/utils

RUN chown -R nestjs:nodejs /

USER nestjs

EXPOSE 4001

CMD ["dumb-init", "node", "dist/main"]