# 1. Edit schema
packages/database/prisma/schema.prisma

# 2. Create + apply migration
pnpm --filter @boldmind/database prisma migrate dev \
  --name add_subscriptions

## This does three things:

Creates SQL migration

Applies it to your DB

Regenerates Prisma Client

If you already changed the DB manually (NOT recommended)
pnpm --filter @boldmind/database prisma db pull
pnpm --filter @boldmind/database prisma generate

Production flow (important)
pnpm --filter @boldmind/database prisma migrate deploy
