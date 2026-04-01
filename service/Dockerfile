# service/Dockerfile - Multi-stage build
FROM node:22-alpine AS builder

RUN npm install -g pnpm@8.15.0

WORKDIR /build

# Copy everything
COPY . .

# Install with shamefully hoist
RUN pnpm install --no-frozen-lockfile --shamefully-hoist

# Build shared packages
RUN cd packages/utils && pnpm run build

# Generate Prisma client
RUN cd service && npx prisma generate

# Build NestJS
RUN cd service && npx nest build

# Production stage
FROM node:22-alpine

RUN npm install -g pnpm@8.15.0

WORKDIR /

# Copy only what's needed for production
COPY --from=builder /build/service/dist ./dist
COPY --from=builder /build/service/package.json ./package.json
COPY --from=builder /build/service/node_modules ./node_modules
COPY --from=builder /build/packages ./packages

EXPOSE 4001

CMD ["node", "dist/main"]