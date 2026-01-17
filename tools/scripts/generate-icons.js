#!/usr/bin/env node
/**
 * BoldMind Icon Generator
 * Node.js (CommonJS) – Node 18+
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ─────────────────────────────────────────────────────────────
// Dependency check
// ─────────────────────────────────────────────────────────────
function ensureCanvas() {
  try {
    require('canvas');
  } catch {
    console.log('📦 Installing canvas...');
    try {
      execSync('npm install canvas', { stdio: 'inherit' });
    } catch (err) {
      console.error('❌ Failed to install canvas');
      process.exit(1);
    }
  }
}

ensureCanvas();

const { createCanvas, loadImage } = require('canvas');

// ─────────────────────────────────────────────────────────────
// Configuration
// ─────────────────────────────────────────────────────────────
const ROOT = path.resolve(__dirname, '../../');
const PUBLIC_DIR = path.join(
  ROOT,
  'APPS/WEB_APPS/boldmind-hub/public'
);
const LOGO_PATH = path.join(PUBLIC_DIR, 'logo.png');

const PRODUCT = {
  key: 'boldmind-hub',
  name: 'BoldMind Hub',
  emoji: '🚀',
  tagline: 'Empowering 1M Nigerian Enterpreneurs by 2030',
};

const COLORS = {
  'boldmind-hub': {
    primary: '#2A4A6E',
    secondary: '#FFC800',
  },
};

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function write(file, buffer) {
  fs.writeFileSync(file, buffer);
}

// ─────────────────────────────────────────────────────────────
// Dynamic Logo
// ─────────────────────────────────────────────────────────────
async function createDynamicLogo(outputPath) {
  const canvas = createCanvas(512, 512);
  const ctx = canvas.getContext('2d');
  const colors = COLORS[PRODUCT.key];

  const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 512);
  gradient.addColorStop(0, colors.primary);
  gradient.addColorStop(1, colors.secondary);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 512);

  ctx.font = 'bold 200px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#fff';
  ctx.fillText(PRODUCT.emoji, 256, 240);

  ctx.font = 'bold 40px Arial';
  ctx.fillStyle = 'rgba(255,255,255,0.85)';
  ctx.fillText(PRODUCT.name, 256, 430);

  write(outputPath, canvas.toBuffer('image/png'));
  console.log('✅ Created dynamic logo');
}

// ─────────────────────────────────────────────────────────────
// Browser Config + Manifest
// ─────────────────────────────────────────────────────────────
function generateBrowserConfig() {
  const xml = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <TileColor>${COLORS[PRODUCT.key].secondary}</TileColor>
    </tile>
  </msapplication>
</browserconfig>`;

  write(path.join(PUBLIC_DIR, 'browserconfig.xml'), xml);
}

function generateManifest() {
  const manifest = {
    name: PRODUCT.name,
    short_name: PRODUCT.name,
    description: PRODUCT.tagline,
    start_url: '/',
    display: 'standalone',
    background_color: COLORS[PRODUCT.key].primary,
    theme_color: COLORS[PRODUCT.key].secondary,
    icons: [
      { src: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  };

  write(
    path.join(PUBLIC_DIR, 'manifest.webmanifest'),
    JSON.stringify(manifest, null, 2)
  );
}

// ─────────────────────────────────────────────────────────────
// OG Image
// ─────────────────────────────────────────────────────────────
async function generateOGImage(logo) {
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext('2d');
  const colors = COLORS[PRODUCT.key];

  const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
  gradient.addColorStop(0, colors.primary);
  gradient.addColorStop(1, colors.secondary);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 630);

  ctx.drawImage(logo, 500, 130, 200, 200);

  ctx.fillStyle = '#fff';
  ctx.font = 'bold 72px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(PRODUCT.name, 600, 420);

  ctx.font = '32px Arial';
  ctx.fillText(PRODUCT.tagline, 600, 470);

  write(path.join(PUBLIC_DIR, 'og-image.png'), canvas.toBuffer());
}

// ─────────────────────────────────────────────────────────────
// Icon Generation
// ─────────────────────────────────────────────────────────────
async function generateIcons() {
  console.log('🎨 Generating icons…');

  ensureDir(PUBLIC_DIR);

  if (!fs.existsSync(LOGO_PATH)) {
    await createDynamicLogo(LOGO_PATH);
  }

  const logo = await loadImage(LOGO_PATH);

  const sizes = [
    16, 32, 57, 60, 72, 76, 114, 120, 144, 152, 167, 180,
    192, 256, 384, 512,
  ];

  for (const size of sizes) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');

    const g = ctx.createLinearGradient(0, 0, size, size);
    g.addColorStop(0, COLORS[PRODUCT.key].primary);
    g.addColorStop(1, COLORS[PRODUCT.key].secondary);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);

    const pad = size * 0.1;
    ctx.drawImage(logo, pad, pad, size - pad * 2, size - pad * 2);

    write(
      path.join(PUBLIC_DIR, `icon-${size}x${size}.png`),
      canvas.toBuffer('image/png')
    );
  }

  await generateOGImage(logo);
  generateManifest();
  generateBrowserConfig();

  console.log('✅ Icon generation complete');
}

// ─────────────────────────────────────────────────────────────
// Bootstrap
// ─────────────────────────────────────────────────────────────
(async function main() {
  try {
    console.log('🧠 BoldMind Icon Generator');
    console.log('────────────────────────');
    await generateIcons();
  } catch (err) {
    console.error('❌ Fatal error:', err);
    process.exit(1);
  }
})();
