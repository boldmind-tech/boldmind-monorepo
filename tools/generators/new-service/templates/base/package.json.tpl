{
  "name": "@boldmind/{{name}}",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "tsx watch src/main.ts",
    "build": "tsc",
    "start": "node dist/main.js"
  },
  "dependencies": {
    "dotenv": "^16.4.5"
  },
  "devDependencies": {
    "typescript": "^5.9.3",
    "tsx": "^4.7.0",
    "@types/node": "^20.19.30"
  }
}
