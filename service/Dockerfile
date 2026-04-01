FROM node:22-alpine

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /

# Copy everything
COPY . .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Ensure service has access to node_modules
RUN ln -sf /node_modules /service/node_modules

# Generate Prisma client
RUN /node_modules/.bin/prisma generate --schema=/service/prisma/schema.prisma

# Build NestJS
RUN cd /service && /node_modules/.bin/nest build

EXPOSE 4001

CMD ["node", "service/dist/main"]