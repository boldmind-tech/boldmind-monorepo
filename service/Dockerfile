FROM node:22-alpine AS builder

RUN npm install -g pnpm@8.15.0

WORKDIR /

COPY . .

# Override root .npmrc to force a flat, hoisted node_modules layout.
# The root .npmrc sets node-linker=pnpm which breaks shamefully-hoist and
# prevents NestJS from resolving its dependencies at build time.
# We write this AFTER the COPY so it always wins over the committed .npmrc.
RUN printf 'node-linker=hoisted\nshamefully-hoist=true\nstrict-peer-dependencies=false\nauto-install-peers=true\nhoist-pattern[]=*\n' > .npmrc && \
    cat .npmrc

RUN pnpm install --no-frozen-lockfile --shamefully-hoist

# --- Verify critical dependencies are present before building ---
RUN echo "=== Verifying hoisted node_modules ===" && \
    ls /node_modules | head -20 && \
    echo "--- Checking bull ---" && \
    (ls /node_modules/bull > /dev/null 2>&1 && echo "✅ bull found" || echo "❌ bull MISSING") && \
    echo "--- Checking @nestjs/bull ---" && \
    (ls /node_modules/@nestjs/bull > /dev/null 2>&1 && echo "✅ @nestjs/bull found" || echo "❌ @nestjs/bull MISSING") && \
    echo "--- Checking bullmq ---" && \
    (ls /node_modules/bullmq > /dev/null 2>&1 && echo "✅ bullmq found" || echo "❌ bullmq MISSING") && \
    echo "--- Checking @boldmind/utils ---" && \
    (ls /node_modules/@boldmind/utils > /dev/null 2>&1 && echo "✅ @boldmind/utils symlink found" || echo "⚠️  @boldmind/utils not in root node_modules (expected for workspace package)") && \
    echo "--- Checking packages/utils source ---" && \
    (ls /packages/utils/package.json > /dev/null 2>&1 && echo "✅ packages/utils present" || echo "❌ packages/utils MISSING")

# If bull is still missing after the hoisted install, install service deps explicitly
RUN ls /node_modules/bull > /dev/null 2>&1 || \
    (echo "⚠️  bull not found in root node_modules — running explicit service install" && \
     cd /service && pnpm install --no-frozen-lockfile --shamefully-hoist)

RUN cd packages/utils && pnpm run build

# Verify @boldmind/utils dist was built
RUN echo "--- Checking packages/utils/dist ---" && \
    (ls /packages/utils/dist/index.d.ts > /dev/null 2>&1 && echo "✅ @boldmind/utils dist built" || echo "❌ @boldmind/utils dist MISSING — tsconfig path mapping will fail")

RUN cd service && npx prisma generate

RUN npm install -g @nestjs/cli

RUN cd service && nest build

# ---- Production stage ----
FROM node:22-alpine

RUN npm install -g pnpm@8.15.0

WORKDIR /

COPY --from=builder /package.json ./package.json
COPY --from=builder /pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=builder /pnpm-lock.yaml ./pnpm-lock.yaml

COPY --from=builder /service/dist ./service/dist
COPY --from=builder /service/package.json ./service/package.json
COPY --from=builder /service/prisma ./service/prisma

COPY --from=builder /packages/utils/dist ./packages/utils/dist
COPY --from=builder /packages/utils/package.json ./packages/utils/package.json

# Override .npmrc here too so production install uses the same hoisted layout
RUN printf 'node-linker=hoisted\nshamefully-hoist=true\nstrict-peer-dependencies=false\nauto-install-peers=true\nhoist-pattern[]=*\n' > .npmrc

RUN pnpm install --prod --no-frozen-lockfile --shamefully-hoist

EXPOSE 4001

CMD ["node", "service/dist/main"]