FROM node:22-alpine

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /

# Copy everything
COPY . .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy all node_modules to service directory (the key fix)
RUN mkdir -p /service/node_modules && cp -r /node_modules/* /service/node_modules/

# Generate Prisma client
RUN cd /service && npx prisma generate

# Build NestJS
RUN cd /service && npx nest build

EXPOSE 4001

CMD ["node", "service/dist/main"]