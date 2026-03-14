#!/usr/bin/env node
/**
 * BoldMind Multi-App Icon Generator
 * Generates icons, OG images, manifests, and browserconfig for ALL 10 apps
 * Node.js (CommonJS) – Node 18+
 *
 * Usage:
 *   node icon-generator.js               → generate all apps
 *   node icon-generator.js boldmind-hub  → generate one app
 *   node icon-generator.js --list        → list all apps
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ─────────────────────────────────────────────────────────────────────────────
// Dependency check
// ─────────────────────────────────────────────────────────────────────────────
function ensureCanvas() {
  try {
    require('canvas');
  } catch {
    console.log('📦 Installing canvas...');
    try {
      execSync('npm install canvas', { stdio: 'inherit' });
    } catch {
      console.error('❌ Failed to install canvas. Try: npm install canvas');
      process.exit(1);
    }
  }
}
ensureCanvas();

const { createCanvas, loadImage } = require('canvas');

// ─────────────────────────────────────────────────────────────────────────────
// App Definitions — All 10 BoldMind Frontend Apps
// ─────────────────────────────────────────────────────────────────────────────
const APPS = [
  {
    key: 'boldmind-hub',
    name: 'BoldMind Hub',
    shortName: 'BoldMind',
    tagline: 'Empowering 1M Nigerian Entrepreneurs by 2030',
    emoji: '🚀',
    dir: 'apps/boldmind-hub',
    domain: 'boldmind.ng',
    twaPackage: 'ng.boldmind.hub',
    colors: {
      primary: '#00143C',    // deep navy
      secondary: '#FFC800',  // bold amber
      background: '#FAFAF9',
      text: '#FFFFFF',
    },
    gradientStyle: 'radial',  // radial | linear | angular | mesh
  },
  {
    key: 'planai-suite',
    name: 'PlanAI Suite',
    shortName: 'PlanAI',
    tagline: 'AI-Powered Business Tools for Nigerian Entrepreneurs',
    emoji: '🧠',
    dir: 'apps/planai-suite',
    domain: 'planai.boldmind.ng',
    twaPackage: 'ng.boldmind.planai',
    colors: {
      primary: '#6B21A8',    // deep purple
      secondary: '#059669',  // emerald accent
      background: '#FAF5FF',
      text: '#FFFFFF',
    },
    gradientStyle: 'angular',
  },
  {
    key: 'amebogist',
    name: 'AmeboGist',
    shortName: 'AmeboGist',
    tagline: "Nigeria's #1 Pidgin News Platform",
    emoji: '📰',
    dir: 'apps/amebogist',
    domain: 'amebogist.ng',
    twaPackage: 'ng.amebogist.app',
    colors: {
      primary: '#065F46',    // deep emerald
      secondary: '#DC2626',  // vibrant red
      background: '#FFFBEB',
      text: '#FFFFFF',
    },
    gradientStyle: 'linear',
  },
  {
    key: 'amebo-studio',
    name: 'Amebo Studio',
    shortName: 'Studio',
    tagline: 'Creator Dashboard for AmeboGist',
    emoji: '🎙️',
    dir: 'apps/amebo-studio',
    domain: 'studio.amebogist.ng',
    twaPackage: 'ng.amebogist.studio',
    colors: {
      primary: '#1C3A2E',    // darker emerald
      secondary: '#F59E0B',  // amber
      background: '#ECFDF5',
      text: '#FFFFFF',
    },
    gradientStyle: 'angular',
  },
  {
    key: 'educenter',
    name: 'EduCenter',
    shortName: 'EduCenter',
    tagline: '',
    emoji: '🎓',
    dir: 'apps/educenter',
    domain: 'educenter.com.ng',
    twaPackage: 'ng.educenter.app',
    colors: {
      primary: '#1E40AF',    // deep blue
      secondary: '#F59E0B',  // amber
      background: '#EFF6FF',
      text: '#FFFFFF',
    },
    gradientStyle: 'linear',
  },
  {
    key: 'skillgig',
    name: 'SkillGig',
    shortName: 'SkillGig',
    tagline: 'No CV. Just Skills. Get Booked.',
    emoji: '🎭',
    dir: 'apps/skillgig',
    domain: 'skills.educenter.com.ng',
    twaPackage: 'ng.educenter.skills',
    colors: {
      primary: '#1D4ED8',    // royal blue
      secondary: '#7C3AED',  // violet
      background: '#EEF2FF',
      text: '#FFFFFF',
    },
    gradientStyle: 'linear',
  },
  {
    key: 'naija-fit',
    name: 'NaijaFit',
    shortName: 'NaijaFit',
    tagline: 'Nigerian Fitness & Wellness — For Everyone',
    emoji: '💪',
    dir: 'apps/naija-fit',
    domain: 'fit.boldmind.ng',
    twaPackage: 'ng.boldmind.fit',
    colors: {
      primary: '#065F46',    // deep forest green
      secondary: '#EA580C',  // energetic orange
      background: '#F0FFF4',
      text: '#FFFFFF',
    },
    gradientStyle: 'radial',
  },
  {
    key: 'boldmind-os',
    name: 'BoldMind OS',
    shortName: 'BoldOS',
    tagline: 'Your Personal OS for Neurodivergent Entrepreneurs',
    emoji: '🧩',
    dir: 'apps/boldmind-os',
    domain: 'os.boldmind.ng',
    twaPackage: 'ng.boldmind.os',
    colors: {
      primary: '#9F1239',    // deep rose
      secondary: '#EA580C',  // orange
      background: '#FFF7ED',
      text: '#FFFFFF',
    },
    gradientStyle: 'angular',
  },
  {
    key: 'boldmind-tools',
    name: 'BoldMind Tools',
    shortName: 'B2B Tools',
    tagline: 'Email Scraper · Social Factory · For Nigerian Businesses',
    emoji: '🔧',
    dir: 'apps/boldmind-tools',
    domain: 'tools.boldmind.ng',
    twaPackage: 'ng.boldmind.tools',
    colors: {
      primary: '#075985',    // deep sky blue
      secondary: '#D97706',  // amber-brown
      background: '#F0F9FF',
      text: '#FFFFFF',
    },
    gradientStyle: 'linear',
  },
  {
    key: 'boldmind-concepts',
    name: 'Concept Hub',
    shortName: 'Concepts',
    tagline: 'What We Are Building Next',
    emoji: '💡',
    dir: 'apps/boldmind-concepts',
    domain: 'concept.boldmind.ng',
    twaPackage: 'ng.boldmind.concept',
    colors: {
      primary: '#44403C',    // warm stone
      secondary: '#78716C',  // warm gray
      background: '#FAFAF9',
      text: '#FFFFFF',
    },
    gradientStyle: 'linear',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Icon sizes to generate
// ─────────────────────────────────────────────────────────────────────────────
const ICON_SIZES = [16, 32, 57, 60, 72, 76, 114, 120, 144, 152, 167, 180, 192, 256, 384, 512];

// ─────────────────────────────────────────────────────────────────────────────
// Root of the monorepo (2 levels up from /infrastructure/scripts/)
// ─────────────────────────────────────────────────────────────────────────────
const ROOT = path.resolve(__dirname, '../../');

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────
function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function write(file, buffer) {
  fs.writeFileSync(file, buffer);
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

// ─────────────────────────────────────────────────────────────────────────────
// Gradient factory
// ─────────────────────────────────────────────────────────────────────────────
function createGradient(ctx, size, app) {
  const { primary, secondary } = app.colors;
  let g;

  switch (app.gradientStyle) {
    case 'radial':
      g = ctx.createRadialGradient(size * 0.3, size * 0.3, 0, size * 0.6, size * 0.6, size);
      g.addColorStop(0, primary);
      g.addColorStop(1, secondary);
      break;

    case 'angular':
      // Simulate angular with diagonal gradient
      g = ctx.createLinearGradient(0, 0, size, size);
      g.addColorStop(0, secondary);
      g.addColorStop(0.4, primary);
      g.addColorStop(1, primary);
      break;

    case 'mesh':
      // Simulate mesh with multiple layered gradients
      g = ctx.createRadialGradient(size * 0.7, size * 0.2, 0, size * 0.5, size * 0.5, size);
      g.addColorStop(0, secondary);
      g.addColorStop(0.6, primary);
      g.addColorStop(1, shiftColor(primary, -30));
      break;

    case 'linear':
    default:
      g = ctx.createLinearGradient(0, 0, size, size);
      g.addColorStop(0, primary);
      g.addColorStop(1, secondary);
      break;
  }
  return g;
}

function shiftColor(hex, amount) {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + amount));
  const b = Math.min(255, Math.max(0, (num & 0xff) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Generate base logo (512×512) if not already present
// ─────────────────────────────────────────────────────────────────────────────
async function createBaseLogo(app, publicDir) {
  const logoPath = path.join(publicDir, 'logo.png');
  if (fs.existsSync(logoPath)) return logoPath;

  const SIZE = 512;
  const canvas = createCanvas(SIZE, SIZE);
  const ctx = canvas.getContext('2d');

  // Background with rounded rect
  const radius = SIZE * 0.2;
  roundRect(ctx, 0, 0, SIZE, SIZE, radius);
  ctx.fillStyle = createGradient(ctx, SIZE, app);
  ctx.fill();

  // Subtle pattern overlay
  ctx.globalAlpha = 0.06;
  for (let i = 0; i < SIZE; i += 32) {
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + SIZE, SIZE);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  // Emoji (main icon)
  ctx.font = `${SIZE * 0.4}px serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#ffffff';
  ctx.shadowColor = 'rgba(0,0,0,0.3)';
  ctx.shadowBlur = 20;
  ctx.fillText(app.emoji, SIZE / 2, SIZE * 0.42);

  // App short name
  ctx.shadowBlur = 0;
  ctx.font = `bold ${SIZE * 0.085}px Georgia`;
  ctx.fillStyle = 'rgba(255,255,255,0.90)';
  ctx.fillText(app.shortName.toUpperCase(), SIZE / 2, SIZE * 0.78);

  write(logoPath, canvas.toBuffer('image/png'));
  return logoPath;
}

// ─────────────────────────────────────────────────────────────────────────────
// Generate all icon sizes from logo
// ─────────────────────────────────────────────────────────────────────────────
async function generateIcons(app, publicDir, logo) {
  for (const size of ICON_SIZES) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');

    // Background gradient fill with rounded corners (for larger sizes)
    if (size >= 72) {
      const r = size * 0.18;
      roundRect(ctx, 0, 0, size, size, r);
      ctx.fillStyle = createGradient(ctx, size, app);
      ctx.fill();
    } else {
      ctx.fillStyle = createGradient(ctx, size, app);
      ctx.fillRect(0, 0, size, size);
    }

    // Draw logo centered with padding
    const pad = size * 0.1;
    ctx.drawImage(logo, pad, pad, size - pad * 2, size - pad * 2);

    write(path.join(publicDir, `icon-${size}x${size}.png`), canvas.toBuffer('image/png'));
  }

  // Copy the 192 and 512 as the standard names too
  fs.copyFileSync(
    path.join(publicDir, 'icon-192x192.png'),
    path.join(publicDir, 'icon-192.png')
  );
  fs.copyFileSync(
    path.join(publicDir, 'icon-512x512.png'),
    path.join(publicDir, 'icon-512.png')
  );

  // Apple touch icon
  fs.copyFileSync(
    path.join(publicDir, 'icon-180x180.png'),
    path.join(publicDir, 'apple-touch-icon.png')
  );

  // Favicon (use 32×32)
  fs.copyFileSync(
    path.join(publicDir, 'icon-32x32.png'),
    path.join(publicDir, 'favicon.ico')
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// OG Image (1200×630)
// ─────────────────────────────────────────────────────────────────────────────
async function generateOGImage(app, publicDir, logo) {
  const W = 1200, H = 630;
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext('2d');

  // Full gradient background
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, app.colors.primary);
  g.addColorStop(1, app.colors.secondary);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  // Decorative circles
  ctx.globalAlpha = 0.08;
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(W * 0.85, H * 0.2, 200, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(W * 0.1, H * 0.9, 150, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Logo (left-center)
  const logoSize = 180;
  ctx.drawImage(logo, 80, H / 2 - logoSize / 2, logoSize, logoSize);

  // Divider line
  ctx.fillStyle = 'rgba(255,255,255,0.25)';
  ctx.fillRect(290, H * 0.25, 2, H * 0.5);

  // App name
  ctx.fillStyle = '#ffffff';
  ctx.font = `bold 72px Georgia`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText(app.name, 320, H * 0.25);

  // Tagline
  ctx.font = `28px Georgia`;
  ctx.fillStyle = 'rgba(255,255,255,0.80)';
  const words = app.tagline.split(' ');
  let line = '', y = H * 0.25 + 90;
  for (const word of words) {
    const test = line + word + ' ';
    if (ctx.measureText(test).width > 760 && line) {
      ctx.fillText(line.trim(), 320, y);
      line = word + ' ';
      y += 38;
    } else {
      line = test;
    }
  }
  ctx.fillText(line.trim(), 320, y);

  // Domain pill
  const pill = `🌐  ${app.domain}`;
  ctx.font = `22px Georgia`;
  ctx.fillStyle = 'rgba(255,255,255,0.60)';
  ctx.fillText(pill, 320, H * 0.76);

  write(path.join(publicDir, 'og-image.png'), canvas.toBuffer('image/png'));

  // Also generate Twitter card (1200x600)
  const tw = createCanvas(1200, 600);
  const twCtx = tw.getContext('2d');
  twCtx.drawImage(canvas, 0, -15, 1200, 640);
  write(path.join(publicDir, 'twitter-card.png'), tw.toBuffer('image/png'));
}

// ─────────────────────────────────────────────────────────────────────────────
// Web Manifest (PWA)
// ─────────────────────────────────────────────────────────────────────────────
function generateManifest(app, publicDir) {
  const manifest = {
    name: app.name,
    short_name: app.shortName,
    description: app.tagline,
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: app.colors.background,
    theme_color: app.colors.primary,
    categories: getCategoryForApp(app.key),
    icons: [
      { src: '/icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { src: '/icon-96x96.png', sizes: '96x96', type: 'image/png' },
      { src: '/icon-128x128.png', sizes: '128x128', type: 'image/png' },
      { src: '/icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { src: '/icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { src: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-384x384.png', sizes: '384x384', type: 'image/png' },
      { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
    ],
    screenshots: [
      { src: '/og-image.png', sizes: '1200x630', type: 'image/png', form_factor: 'wide' },
    ],
    prefer_related_applications: false,
  };

  write(path.join(publicDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
  write(path.join(publicDir, 'manifest.webmanifest'), JSON.stringify(manifest, null, 2));
}

function getCategoryForApp(key) {
  const map = {
    'boldmind-hub': ['business', 'productivity'],
    'planai-suite': ['business', 'utilities'],
    'amebogist': ['news', 'entertainment'],
    'amebo-studio': ['business', 'productivity'],
    'educenter': ['education'],
    'skillgig': ['business', 'lifestyle'],
    'naija-fit': ['health', 'fitness'],
    'boldmind-os': ['productivity', 'utilities'],
    'boldmind-tools': ['business', 'utilities'],
    'boldmind-concepts': ['business'],
  };
  return map[key] || ['business'];
}

// ─────────────────────────────────────────────────────────────────────────────
// Browser Config (Windows tiles)
// ─────────────────────────────────────────────────────────────────────────────
function generateBrowserConfig(app, publicDir) {
  const xml = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square70x70logo src="/icon-72x72.png"/>
      <square150x150logo src="/icon-144x144.png"/>
      <square310x310logo src="/icon-384x384.png"/>
      <TileColor>${app.colors.primary}</TileColor>
    </tile>
  </msapplication>
</browserconfig>`;
  write(path.join(publicDir, 'browserconfig.xml'), xml);
}

// ─────────────────────────────────────────────────────────────────────────────
// Digital Asset Links (TWA)
// ─────────────────────────────────────────────────────────────────────────────
function generateAssetLinks(app, publicDir) {
  const wellKnownDir = path.join(publicDir, '.well-known');
  ensureDir(wellKnownDir);

  const links = [
    {
      relation: ['delegate_permission/common.handle_all_urls'],
      target: {
        namespace: 'android_app',
        package_name: app.twaPackage,
        sha256_cert_fingerprints: ['YOUR_SHA256_FROM_PLAY_CONSOLE'],
      },
    },
  ];

  write(
    path.join(wellKnownDir, 'assetlinks.json'),
    JSON.stringify(links, null, 2)
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// layout.tsx head tags snippet
// ─────────────────────────────────────────────────────────────────────────────
function generateHeadSnippet(app, publicDir) {
  const snippet = `// Add to your app/layout.tsx <head> section
// Auto-generated by BoldMind icon-generator for: ${app.name}

export const metadata = {
  title: '${app.name}',
  description: '${app.tagline}',
  manifest: '/manifest.json',
  themeColor: '${app.colors.primary}',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: '${app.shortName}',
  },
  openGraph: {
    title: '${app.name}',
    description: '${app.tagline}',
    url: 'https://${app.domain}',
    siteName: '${app.name}',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '${app.name}',
    description: '${app.tagline}',
    images: ['/twitter-card.png'],
  },
  icons: {
    icon: [
      { url: '/icon-16x16.png', sizes: '16x16' },
      { url: '/icon-32x32.png', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'mask-icon', url: '/icon-512x512.png', color: '${app.colors.primary}' },
    ],
  },
};

// In <head>:
// <meta name="msapplication-TileColor" content="${app.colors.primary}" />
// <meta name="msapplication-config" content="/browserconfig.xml" />
// <meta name="mobile-web-app-capable" content="yes" />
// <link rel="manifest" href="/manifest.json" />
`;
  write(path.join(publicDir, 'head-snippet.ts'), snippet);
}

// ─────────────────────────────────────────────────────────────────────────────
// Main: Generate one app
// ─────────────────────────────────────────────────────────────────────────────
async function generateApp(app) {
  const appDir = path.join(ROOT, app.dir);
  const publicDir = path.join(appDir, 'public');

  ensureDir(publicDir);
  ensureDir(path.join(publicDir, '.well-known'));

  console.log(`\n  📱 ${app.name} (${app.domain})`);

  // 1. Base logo
  process.stdout.write('     → logo.png ');
  const logoPath = await createBaseLogo(app, publicDir);
  const logo = await loadImage(logoPath);
  console.log('✓');

  // 2. All icon sizes
  process.stdout.write(`     → ${ICON_SIZES.length} icon sizes `);
  await generateIcons(app, publicDir, logo);
  console.log('✓');

  // 3. OG + Twitter card
  process.stdout.write('     → og-image.png + twitter-card.png ');
  await generateOGImage(app, publicDir, logo);
  console.log('✓');

  // 4. manifest.json
  process.stdout.write('     → manifest.json ');
  generateManifest(app, publicDir);
  console.log('✓');

  // 5. browserconfig.xml
  process.stdout.write('     → browserconfig.xml ');
  generateBrowserConfig(app, publicDir);
  console.log('✓');

  // 6. Digital asset links (TWA)
  process.stdout.write('     → .well-known/assetlinks.json ');
  generateAssetLinks(app, publicDir);
  console.log('✓');

  // 7. Head snippet
  generateHeadSnippet(app, publicDir);

  console.log(`     ✅ Done — ${app.twaPackage}`);
}

// ─────────────────────────────────────────────────────────────────────────────
// CLI Entry
// ─────────────────────────────────────────────────────────────────────────────
(async function main() {
  const args = process.argv.slice(2);

  if (args.includes('--list')) {
    console.log('\n🧠 BoldMind Apps:\n');
    APPS.forEach(a => console.log(`  ${a.emoji}  ${a.key.padEnd(22)} → ${a.domain}`));
    console.log('');
    process.exit(0);
  }

  const targets = args.length > 0
    ? APPS.filter(a => args.includes(a.key))
    : APPS;

  if (targets.length === 0) {
    console.error(`❌ Unknown app key(s): ${args.join(', ')}`);
    console.log('Run with --list to see all app keys');
    process.exit(1);
  }

  console.log('\n🧠 BoldMind Icon Generator');
  console.log('══════════════════════════════════════');
  console.log(`  Generating assets for ${targets.length} app(s)...\n`);

  const start = Date.now();
  let success = 0, failed = 0;

  for (const app of targets) {
    try {
      await generateApp(app);
      success++;
    } catch (err) {
      console.error(`\n  ❌ Failed for ${app.key}:`, err.message);
      failed++;
    }
  }

  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  console.log('\n══════════════════════════════════════');
  console.log(`  ✅ ${success} succeeded  ❌ ${failed} failed  ⏱ ${elapsed}s`);
  console.log('\n  Next steps:');
  console.log('  1. Replace logo.png in each app with your actual logo');
  console.log('  2. Update SHA256 in .well-known/assetlinks.json after Play Console upload');
  console.log('  3. Copy head-snippet.ts metadata into each app\'s layout.tsx');
  console.log('  4. Run: npx bubblewrap build  to generate TWA APKs');
  console.log('');
})();