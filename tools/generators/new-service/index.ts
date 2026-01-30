#!/usr/bin/env node

import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const name = process.argv[2];

if (!name) {
    console.error("❌ Usage: pnpm new-service <service-name>");
    process.exit(1);
}

const ROOT = process.cwd();
const SERVICE_DIR = join(ROOT, "SERVICES", name);
const SRC_DIR = join(SERVICE_DIR, "src");

const pkgPath = join(SERVICE_DIR, "package.json");
const tsconfigPath = join(SERVICE_DIR, "tsconfig.json");

// ensure folders
mkdirSync(SERVICE_DIR, { recursive: true });
mkdirSync(SRC_DIR, { recursive: true });

// package.json
if (!existsSync(pkgPath)) {
    writeFileSync(
        pkgPath,
        JSON.stringify(
            {
                name: `@boldmind/${name}`,
                version: "1.0.0",
                private: true,
                scripts: {
                    dev: "tsx watch src/main.ts",
                    build: "tsc",
                    start: "node dist/main.js"
                }
            },
            null,
            2
        )
    );
    console.log("✅ package.json created");
} else {
    console.log("↪ package.json exists (skipped)");
}

// tsconfig.json
if (!existsSync(tsconfigPath)) {
    writeFileSync(
        tsconfigPath,
        JSON.stringify(
            {
                extends: "../../tsconfig.json",
                compilerOptions: {
                    outDir: "dist",
                    rootDir: "src",
                    module: "Node16",
                    moduleResolution: "Node16",
                    declaration: true,
                    sourceMap: true
                },
                include: ["src"]
            },
            null,
            2
        )
    );
    console.log("✅ tsconfig.json created");
} else {
    console.log("↪ tsconfig.json exists (skipped)");
}

console.log(`🚀 Service ready: SERVICES/${name}`);
