{
  "name": "@boldmind/{{name}}",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "pnpm exec nest start --watch",
    "build": "pnpm exec nest build",
    "start": "node dist/main.js"
  },
  "dependencies": {
    "@nestjs/common": "^10.4.20",
    "@nestjs/core": "^10.4.20",
    "@nestjs/platform-express": "^10.4.20",
    "reflect-metadata": "^0.1.13",
    "rxjs": "^7.8.1"
  },
  "devDependencies": {
    "@nestjs/cli": "^10.0.0",
    "typescript": "^5.9.3"
  }
}
