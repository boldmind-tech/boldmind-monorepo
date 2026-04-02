FROM node:22-alpine AS builder

RUN npm install -g pnpm@8.15.0

WORKDIR /

COPY . .

# Override root .npmrc to force a flat, hoisted node_modules layout.
# The root .npmrc sets node-linker=pnpm which breaks shamefully-hoist and
# prevents NestJS from resolving its dependencies at build time.
RUN echo "node-linker=hoisted\nshamefully-hoist=true\nstrict-peer-dependencies=false\nauto-install-peers=true" > .npmrc

RUN pnpm install --no-frozen-lockfile

RUN cd packages/utils && pnpm run build

RUN cd service && npx prisma generate

RUN npm install -g @nestjs/cli

RUN cd service && nest build

# ---- Production stage ----
FROM node:22-alpine

RUN npm install -g pnpm@8.15.0

WORKDIR /

COPY --from=builder /package.json ./package.json
COPY --from=builder /pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=builder /pnpm-lock.yaml ./pnpm-lock.yaml

COPY --from=builder /service/dist ./service/dist
COPY --from=builder /service/package.json ./service/package.json
COPY --from=builder /service/prisma ./service/prisma

COPY --from=builder /packages/utils/dist ./packages/utils/dist
COPY --from=builder /packages/utils/package.json ./packages/utils/package.json

# Override .npmrc here too so production install uses the same hoisted layout
RUN echo "node-linker=hoisted\nshamefully-hoist=true\nstrict-peer-dependencies=false\nauto-install-peers=true" > .npmrc

RUN pnpm install --prod --no-frozen-lockfile

EXPOSE 4001

CMD ["node", "service/dist/main"]