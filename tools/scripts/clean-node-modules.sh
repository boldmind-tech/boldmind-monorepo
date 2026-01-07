#!/bin/bash

# Clean all node_modules in the monorepo
echo "🧹 Cleaning node_modules..."

find . -name "node_modules" -type d -prune -exec rm -rf "{}" \;

echo "✅ node_modules cleaned!"
