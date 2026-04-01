FROM node:22-alpine

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /

# Copy everything
COPY . .

# Install all dependencies
RUN pnpm install --frozen-lockfile

# Debug: Show what's installed
RUN echo "=== Checking pnpm store ===" && ls -la /node_modules/.pnpm/ | head -20
RUN echo "=== Looking for @nestjs/common ===" && find /node_modules -name "@nestjs" -type d 2>/dev/null | head -10

# Generate Prisma client using the full path
RUN /node_modules/.bin/prisma generate --schema=/service/prisma/schema.prisma

# Build NestJS using the full path
RUN /node_modules/.bin/nest build /service

EXPOSE 4001

CMD ["node", "service/dist/main"]