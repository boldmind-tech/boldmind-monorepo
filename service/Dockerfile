FROM node:22-alpine

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /

# Copy everything
COPY . .

# Install root dependencies with pnpm
RUN pnpm install --frozen-lockfile

# Install service dependencies with npm (simpler and more reliable)
RUN cd /service && npm install --production=false

# Generate Prisma client
RUN cd /service && npx prisma generate

# Build NestJS
RUN cd /service && npx nest build

# Remove dev dependencies
RUN cd /service && npm prune --production

EXPOSE 4001

CMD ["node", "service/dist/main"]