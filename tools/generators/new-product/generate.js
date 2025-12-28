#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const productName = args[0];
const productType = args[1] || "web";

if (!productName) {
  console.error("Usage: node generate.js <product-name> [web|planai]");
  process.exit(1);
}

const templatePath = path.join(__dirname, "template");
const targetPath = path.join(
  __dirname,
  "../../../apps",
  productType === "planai" ? "planai" : "web",
  productName
);

// Copy template
if (!fs.existsSync(templatePath)) {
  console.error("Template directory not found:", templatePath);
  process.exit(1);
}

if (fs.existsSync(targetPath)) {
  console.error("Product already exists:", targetPath);
  process.exit(1);
}

// Create product directory
fs.mkdirSync(targetPath, { recursive: true });

console.log(`✅ Created new ${productType} product: ${productName}`);
console.log(`📁 Location: ${targetPath}`);

// TODO: Copy template files and customize
console.log("📝 Please customize the template files as needed.");
