FROM node:22-alpine AS builder

RUN npm install -g pnpm@8.15.0

WORKDIR /

COPY . .

RUN pnpm install --no-frozen-lockfile --shamefully-hoist

RUN cd packages/utils && pnpm run build

RUN cd service && npx prisma generate

RUN npm install -g @nestjs/cli

RUN ln -s /node_modules /service/node_modules

RUN cd service && nest build

# ---- Production stage ----
FROM node:22-alpine

RUN npm install -g pnpm@8.15.0

WORKDIR /

COPY --from=builder /service/dist ./service/dist
COPY --from=builder /service/package.json ./service/package.json
COPY --from=builder /service/prisma ./service/prisma

COPY --from=builder /packages/utils/dist ./packages/utils/dist
COPY --from=builder /packages/utils/package.json ./packages/utils/package.json

COPY --from=builder /package.json ./package.json
COPY --from=builder /pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=builder /pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install --prod --no-frozen-lockfile --shamefully-hoist

EXPOSE 4001

CMD ["node", "service/dist/main"]