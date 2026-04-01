FROM node:22-alpine

# Install pnpm globally to match the monorepo's declared package manager
RUN npm install -g pnpm@8.15.0

WORKDIR /

# Copy everything (includes root package.json, pnpm-workspace.yaml, pnpm-lock.yaml,
# and all workspace packages so workspace:* references resolve correctly)
COPY . .

# Install dependencies using pnpm so workspace protocol is understood.
# --shamefully-hoist flattens node_modules so TypeScript can resolve all
# dependencies when compiling from the /service subdirectory in Docker.
RUN pnpm install --frozen-lockfile --shamefully-hoist

# Generate Prisma client
RUN cd /service && npx prisma generate

# Build NestJS
RUN cd /service && npx nest build

EXPOSE 4001

CMD ["node", "service/dist/main"]