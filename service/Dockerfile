FROM node:22-alpine

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /

# Copy everything
COPY . .

# Install root dependencies (prisma, nestjs/cli, etc.)
RUN pnpm install --frozen-lockfile

# Install service dependencies (THIS IS THE KEY FIX)
# This installs all the NestJS dependencies from service/package.json
RUN cd /service && pnpm install --frozen-lockfile

# Verify prisma is installed
RUN ls -la /node_modules/.bin/prisma && /node_modules/.bin/prisma --version

# Generate Prisma client
RUN cd /service && /node_modules/.bin/prisma generate

# Build NestJS (now all dependencies are available)
RUN cd /service && /node_modules/.bin/nest build

EXPOSE 4001

CMD ["node", "service/dist/main"]