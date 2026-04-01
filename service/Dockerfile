FROM node:22-alpine

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /service

# Copy service package.json first
COPY service/package.json ./
COPY packages/utils/package.json ../packages/utils/
COPY package.json ../package.json
COPY pnpm-lock.yaml ../pnpm-lock.yaml
COPY pnpm-workspace.yaml ../pnpm-workspace.yaml

# Install dependencies with pnpm (this handles workspace: protocol)
RUN pnpm install --frozen-lockfile

# Copy source code
COPY service/ ./
COPY packages/utils ../packages/utils/

# Create a standard node_modules structure using npm
# This ensures NestJS can resolve all dependencies
RUN rm -rf node_modules && \
    cp -r ../node_modules . && \
    npm install --omit=dev

# Generate Prisma client
RUN npx prisma generate

# Build NestJS
RUN npx nest build

EXPOSE 4001

CMD ["node", "dist/main"]