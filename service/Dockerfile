# service/Dockerfile
FROM node:22-alpine AS builder

RUN npm install -g pnpm@8.15.0

WORKDIR /

# Copy everything
COPY . .

# Install with shamefully hoist to flatten dependencies
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
COPY --from=builder /service/dist /service/dist
COPY --from=builder /service/package.json /service/package.json
COPY --from=builder /service/node_modules /service/node_modules
COPY --from=builder /packages/utils /packages/utils

EXPOSE 4001

CMD ["node", "service/dist/main"]