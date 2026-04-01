FROM node:22-alpine

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /service

# Copy everything needed
COPY service/package.json ./
COPY packages/utils/package.json ../packages/utils/
COPY package.json ../package.json
COPY pnpm-lock.yaml ../pnpm-lock.yaml
COPY pnpm-workspace.yaml ../pnpm-workspace.yaml

# Install with pnpm
RUN pnpm install --frozen-lockfile

# Copy source
COPY service/ ./
COPY packages/utils ../packages/utils/

# Create a symlink from service/node_modules to root node_modules
# This makes NestJS see the dependencies
RUN ln -sf ../node_modules node_modules

# Generate Prisma client
RUN npx prisma generate

# Build NestJS
RUN npx nest build

EXPOSE 4001

CMD ["node", "dist/main"]