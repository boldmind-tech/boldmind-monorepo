{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "module": "Node16",
    "moduleResolution": "Node16",
    "target": "ES2021",
    "outDir": "./dist",
    "rootDir": "./src",
    "declaration": false,
    "declarationMap": false,
    "sourceMap": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"]
}
