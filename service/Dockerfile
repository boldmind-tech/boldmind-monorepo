FROM node:22-alpine

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /

# Copy everything
COPY . .

# Install ALL dependencies (root + service) in one go
RUN pnpm install --frozen-lockfile && \
    cd /service && pnpm install --frozen-lockfile --ignore-workspace

# Generate Prisma client
RUN cd /service && npx prisma generate

# Build NestJS
RUN cd /service && npx nest build

# Remove dev dependencies
RUN pnpm prune --prod

EXPOSE 4001

CMD ["node", "service/dist/main"]