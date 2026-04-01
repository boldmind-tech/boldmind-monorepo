# service/Dockerfile
FROM node:22-alpine

RUN npm install -g pnpm@8.15.0

WORKDIR /

# Copy package management files (lockfile is optional - pnpm will generate if missing)
COPY package.json pnpm-workspace.yaml .npmrc ./
# Copy lockfile only if it exists (use wildcard to handle missing file)
COPY pnpm-lock.yaml* ./

# Copy package.json files for workspace packages
COPY packages/*/package.json ./packages/
COPY service/package.json ./service/

# Install dependencies - use --no-frozen-lockfile to generate lockfile if missing
RUN pnpm install --no-frozen-lockfile

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