# service/Dockerfile
FROM node:22-alpine

RUN npm install -g pnpm@8.15.0

WORKDIR /

# Copy package management files
COPY package.json pnpm-workspace.yaml .npmrc ./
COPY pnpm-lock.yaml* ./

# Copy TypeScript configuration files
COPY tsconfig.base.json ./
COPY packages/*/tsconfig.json ./packages/
COPY service/tsconfig.json ./service/

# Copy package.json files for workspace packages
COPY packages/*/package.json ./packages/
COPY service/package.json ./service/

# Install dependencies with shamefully hoist to flatten everything
# This overrides the .npmrc setting for the build
RUN pnpm install --no-frozen-lockfile --shamefully-hoist

# Copy source code
COPY packages ./packages
COPY service ./service

# Build shared packages
RUN cd packages/utils && pnpm run build

# Generate Prisma client
RUN cd service && npx prisma generate

# Build NestJS
RUN cd service && npx nest build

EXPOSE 4001

CMD ["node", "service/dist/main"]