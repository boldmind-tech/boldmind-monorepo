FROM node:22-alpine AS builder

RUN npm install -g pnpm@8.15.0

WORKDIR /service

COPY service/package.json ./
COPY packages/utils /packages/utils

# Replace workspace:* with file:../packages/utils using Node (single line)
RUN node -e "const fs=require('fs');const pkg=JSON.parse(fs.readFileSync('package.json','utf8'));if(pkg.dependencies&&pkg.dependencies['@boldmind/utils']==='workspace:*'){pkg.dependencies['@boldmind/utils']='file:../packages/utils';fs.writeFileSync('package.json',JSON.stringify(pkg,null,2));console.log('✅ Modified');}else{console.log('⚠️ Not modified');}"

# Verify change
RUN cat package.json

RUN pnpm install --no-frozen-lockfile --ignore-workspace

RUN cd /packages/utils && pnpm install --no-frozen-lockfile && pnpm run build

COPY service/ .

RUN npx prisma generate

RUN pnpm exec nest build

# ---- Production stage ----
FROM node:22-alpine

WORKDIR /service

COPY --from=builder /service/dist ./dist
COPY --from=builder /service/package.json ./package.json
COPY --from=builder /service/prisma ./prisma
COPY --from=builder /service/node_modules ./node_modules
COPY --from=builder /packages/utils/dist /packages/utils/dist
COPY --from=builder /packages/utils/package.json /packages/utils/package.json

RUN mkdir -p /service/node_modules/@boldmind && \
    ln -s /packages/utils /service/node_modules/@boldmind/utils

EXPOSE 4001

CMD ["node", "dist/main"]