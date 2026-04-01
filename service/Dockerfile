# service/Dockerfile
FROM node:22-alpine

RUN npm install -g pnpm@8.15.0

WORKDIR /

# Copy everything needed for install
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml .npmrc ./
COPY packages/*/package.json ./packages/
COPY service/package.json ./service/

# Install with frozen lockfile (now that lockfile is included)
RUN pnpm install --frozen-lockfile

# Copy source
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