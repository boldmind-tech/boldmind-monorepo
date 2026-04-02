FROM node:22-alpine AS builder

RUN npm install -g pnpm@8.15.0

WORKDIR /

COPY . .

# Override .npmrc to force hoisted node_modules so NestJS can resolve
# nested dependencies. The root .npmrc sets node-linker=pnpm which
# prevents shamefully-hoist from working correctly.
RUN echo "node-linker=hoisted\nshamefully-hoist=true\nstrict-peer-dependencies=false\nauto-install-peers=true\nshared-workspace-lockfile=true" > .npmrc

RUN pnpm install --no-frozen-lockfile

RUN cd packages/utils && pnpm run build

RUN cd service && npx prisma generate

RUN npm install -g @nestjs/cli

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

# Override .npmrc for production install as well
RUN echo "node-linker=hoisted\nshamefully-hoist=true\nstrict-peer-dependencies=false\nauto-install-peers=true\nshared-workspace-lockfile=true" > .npmrc

RUN pnpm install --prod --no-frozen-lockfile

EXPOSE 4001

CMD ["node", "service/dist/main"]