FROM node:22-alpine

WORKDIR /

# Copy everything
COPY . .

# Install with npm (no pnpm workspace complexity)
RUN cd /service && npm install

# Generate Prisma client
RUN cd /service && npx prisma generate

# Build NestJS
RUN cd /service && npx nest build

EXPOSE 4001

CMD ["node", "service/dist/main"]