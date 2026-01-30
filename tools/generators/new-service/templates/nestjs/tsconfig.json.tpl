{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "module": "Node16",
    "moduleResolution": "Node16",
    "target": "ES2021",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "outDir": "./dist",
    "declaration": false,
    "declarationMap": false
  },
  "include": ["src/**/*"]
}
