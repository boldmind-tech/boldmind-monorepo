FROM node:22-alpine AS builder

RUN npm install -g pnpm@8.15.0

WORKDIR /

COPY . .

# Root install for workspace package linking
RUN pnpm install --no-frozen-lockfile --shamefully-hoist

RUN cd packages/utils && pnpm run build

RUN cd service && npx prisma generate

RUN npm install -g @nestjs/cli

# Use npm directly inside service/ — bypasses pnpm workspace, installs local node_modules
RUN cd service && npm install --legacy-peer-deps

# Verify it worked before attempting build
RUN ls /service/node_modules/@nestjs/common | head -3

RUN cd service && nest build

# ---- Production stage ----
FROM node:22-alpine

WORKDIR /

COPY --from=builder /service/dist ./service/dist
COPY --from=builder /service/package.json ./service/package.json
COPY --from=builder /service/prisma ./service/prisma
COPY --from=builder /service/node_modules ./service/node_modules

COPY --from=builder /packages/utils/dist ./packages/utils/dist
COPY --from=builder /packages/utils/package.json ./packages/utils/package.json

EXPOSE 4001

CMD ["node", "service/dist/main"]