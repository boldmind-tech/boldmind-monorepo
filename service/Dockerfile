FROM node:22-alpine

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /service

# Copy service and workspace packages
COPY service/package.json ./
COPY packages/utils/package.json ../packages/utils/
COPY package.json ../package.json
COPY pnpm-lock.yaml ../pnpm-lock.yaml
COPY pnpm-workspace.yaml ../pnpm-workspace.yaml

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY service/ ./
COPY packages/utils ../packages/utils/

# Generate Prisma client
RUN pnpm exec prisma generate

# Build NestJS
RUN pnpm exec nest build

EXPOSE 4001

CMD ["node", "dist/main"]