FROM node:22-alpine

RUN npm install -g pnpm@8.15.0

WORKDIR /

# Copy only what's needed for dependency installation
COPY package.json pnpm-workspace.yaml .npmrc ./
COPY pnpm-lock.yaml* ./
COPY packages/*/package.json ./packages/
COPY service/package.json ./service/

# Install dependencies
RUN pnpm install --no-frozen-lockfile

# Copy TypeScript configuration files (these change less often than source)
COPY tsconfig.base.json ./
COPY packages/*/tsconfig.json ./packages/
COPY service/tsconfig.json ./service/

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