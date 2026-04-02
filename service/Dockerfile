FROM node:22-alpine AS builder

WORKDIR /service

# Copy only service/package.json + lockfile first (better caching)
COPY service/package.json ./

# Install dependencies directly inside /service
RUN npm install -g pnpm@8.15.0 && pnpm install --no-frozen-lockfile

# Copy the rest of the service code
COPY service/ .

# Copy the local utils package (if needed)
COPY packages/utils /packages/utils
# Build utils (still needed)
RUN cd /packages/utils && pnpm install && pnpm run build

# Generate Prisma client
RUN npx prisma generate

# Build the service (nestjs CLI is in devDependencies)
RUN pnpm exec nest build

# ---- Production stage ----
FROM node:22-alpine

WORKDIR /service

COPY --from=builder /service/dist ./dist
COPY --from=builder /service/package.json ./package.json
COPY --from=builder /service/prisma ./prisma
COPY --from=builder /service/node_modules ./node_modules
COPY --from=builder /packages/utils/dist /packages/utils/dist
COPY --from=builder /packages/utils/package.json /packages/utils/package.json

EXPOSE 4001
CMD ["node", "dist/main"]