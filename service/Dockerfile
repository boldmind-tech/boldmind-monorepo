FROM node:22-alpine AS builder

RUN npm install -g pnpm@8.15.0

WORKDIR /

COPY . .

# Install all workspace dependencies (hoisted)
RUN pnpm install --no-frozen-lockfile --shamefully-hoist

# Build local workspace package
RUN cd packages/utils && pnpm run build

# Generate Prisma client
RUN cd service && npx prisma generate

# Build the service – it will resolve modules from /node_modules (hoisted)
# because there is no local node_modules inside /service.
RUN cd service && nest build

# ---- Production stage ----
FROM node:22-alpine

WORKDIR /

COPY --from=builder /service/dist ./service/dist
COPY --from=builder /service/package.json ./service/package.json
COPY --from=builder /service/prisma ./service/prisma
COPY --from=builder /service/node_modules ./service/node_modules   # <-- this will be empty, but we keep for safety
COPY --from=builder /node_modules ./node_modules                   # <-- copy the hoisted production dependencies

COPY --from=builder /packages/utils/dist ./packages/utils/dist
COPY --from=builder /packages/utils/package.json ./packages/utils/package.json

EXPOSE 4001

CMD ["node", "service/dist/main"]