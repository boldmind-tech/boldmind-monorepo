FROM node:22-alpine AS builder

# Install pnpm globally
RUN npm install -g pnpm@8.15.0

WORKDIR /service

# Copy service package.json and the local utils package (needed for the file: dependency)
COPY service/package.json ./
COPY packages/utils /packages/utils

# Replace "workspace:*" with "file:../packages/utils" so pnpm can resolve it locally
RUN sed -i 's|"@boldmind/utils": "workspace:\\*"|"@boldmind/utils": "file:../packages/utils"|' package.json

# Install dependencies (no workspace, just a regular install)
RUN pnpm install --no-frozen-lockfile

# Build the utils package
RUN cd /packages/utils && pnpm install --no-frozen-lockfile && pnpm run build

# Copy the rest of the service code
COPY service/ .

# Generate Prisma client
RUN npx prisma generate

# Build the NestJS service
RUN pnpm exec nest build

# ---- Production stage ----
FROM node:22-alpine

WORKDIR /service

# Copy service build output and production dependencies
COPY --from=builder /service/dist ./dist
COPY --from=builder /service/package.json ./package.json
COPY --from=builder /service/prisma ./prisma
COPY --from=builder /service/node_modules ./node_modules

# Copy the built utils package (so @boldmind/utils is available at runtime)
COPY --from=builder /packages/utils/dist /packages/utils/dist
COPY --from=builder /packages/utils/package.json /packages/utils/package.json

# Optional: create a symlink inside node_modules so Node can resolve @boldmind/utils
RUN mkdir -p /service/node_modules/@boldmind && \
    ln -s /packages/utils /service/node_modules/@boldmind/utils

EXPOSE 4001

CMD ["node", "dist/main"]