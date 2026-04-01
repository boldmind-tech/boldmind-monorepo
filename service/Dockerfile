# ─────────────────────────────────────────────────────────────────────────────
# service/Dockerfile - With debugging
# ─────────────────────────────────────────────────────────────────────────────

# ── Stage 1: Install dependencies ────────────────────────────────────────────
FROM node:22-alpine AS deps

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY service/package.json ./service/
COPY packages/utils/package.json ./packages/utils/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Debug: Show where prisma is
RUN echo "=== Finding prisma ===" && \
    find / -name "prisma" -type f 2>/dev/null | grep -v "/.pnpm-store" | head -10 && \
    echo "=== Checking node_modules/.bin ===" && \
    ls -la /node_modules/.bin/ | grep prisma || echo "Not in root .bin" && \
    echo "=== Checking service node_modules ===" && \
    ls -la /service/node_modules/.bin/ 2>/dev/null | grep prisma || echo "Not in service .bin"

# ── Stage 2: Build application ───────────────────────────────────────────────
FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /

# Copy node_modules and source
COPY --from=deps /node_modules ./node_modules
COPY service/ ./service/
COPY packages/utils/ ./packages/utils/

# Try to find and use prisma
RUN echo "=== Building: Finding prisma binary ===" && \
    if [ -f "/node_modules/.bin/prisma" ]; then \
        echo "Using prisma from root .bin"; \
        /node_modules/.bin/prisma generate --schema=/service/prisma/schema.prisma; \
    elif [ -f "/service/node_modules/.bin/prisma" ]; then \
        echo "Using prisma from service .bin"; \
        /service/node_modules/.bin/prisma generate --schema=/service/prisma/schema.prisma; \
    elif [ -f "/node_modules/prisma/build/index.js" ]; then \
        echo "Using prisma via node"; \
        node /node_modules/prisma/build/index.js generate --schema=/service/prisma/schema.prisma; \
    else \
        echo "ERROR: Prisma not found anywhere!"; \
        find / -name "prisma" -type f 2>/dev/null | head -20; \
        exit 1; \
    fi

# Build NestJS
RUN cd /service && /node_modules/.bin/nest build

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