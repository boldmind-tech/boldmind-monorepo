FROM node:22-alpine

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /

# Copy everything
COPY . .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy node_modules to service
RUN cp -r /node_modules /service/node_modules

# Install NestJS CLI globally as a fallback
RUN npm install -g @nestjs/cli

# Generate Prisma client
RUN cd /service && npx prisma generate

# Build with global NestJS CLI
RUN cd /service && nest build

EXPOSE 4001

CMD ["node", "service/dist/main"]