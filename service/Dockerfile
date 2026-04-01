# Single stage - Guaranteed to work
FROM node:22-alpine

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /

# Copy everything
COPY . .

# Install ALL dependencies (this WILL install Prisma)
RUN pnpm install --frozen-lockfile

# Debug: Verify Prisma is installed
RUN ls -la /node_modules/.bin/prisma && \
    /node_modules/.bin/prisma --version

# Generate Prisma client
RUN cd /service && /node_modules/.bin/prisma generate

# Build NestJS
RUN cd /service && /node_modules/.bin/nest build

# Clean up
RUN pnpm prune --prod

EXPOSE 4001

CMD ["node", "service/dist/main"]