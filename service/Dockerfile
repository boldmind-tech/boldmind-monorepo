# service/Dockerfile
FROM node:22-alpine

# Install pnpm globally
RUN npm install -g pnpm@8.15.0

# Set working directory to the monorepo root (where pnpm-workspace.yaml lives)
WORKDIR /

# Copy root monorepo configuration files
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml* .npmrc ./
COPY turbo.json tsconfig.base.json ./

# Copy all package.json files first for better caching
COPY packages/*/package.json ./packages/
COPY service/package.json ./service/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the source code
COPY packages ./packages
COPY service ./service

# Build shared packages that the service depends on
RUN cd packages/utils && pnpm run build
RUN cd packages/config && pnpm run build 2>/dev/null || true
RUN cd packages/api-client && pnpm run build 2>/dev/null || true

# Generate Prisma client
RUN cd service && npx prisma generate

# Build the NestJS service
RUN cd service && npx nest build

EXPOSE 4001

CMD ["node", "service/dist/main"]