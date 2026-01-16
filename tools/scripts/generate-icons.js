// tools/script/generate-icons.js - Node.js based icon generator (no ImageMagick needed)
const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

console.log('🎨 BoldMind Icon Generator (Node.js)');
console.log('====================================');

const logoPath = path.join(__dirname, '../../apps/web/educenter/public/logo.png');
const outputDir = path.join(__dirname, '../../apps/web/educenter/public');

// Brand colors for browserconfig.xml and fallback generation
const brandColors = {
  educenter: {
    primary: '#10B981',
    secondary: '#3b82f6'
  }
};

// Product-specific settings
const productName = 'educenter';
const productEmoji = '📚';
const productDisplayName = 'EduCenter';
const tagline = 'Africa\'s Practical Learning Engine';

// Check if canvas is available
try {
  require('canvas');
} catch (error) {
  console.log('❌ Canvas module not found. Installing...');
  console.log('Run: npm install canvas');
  process.exit(1);
}

async function createDynamicLogo(productName, outputPath) {
  const colors = brandColors[productName];
  const emoji = productEmoji;
  const text = productDisplayName;
  
  const canvas = createCanvas(512, 512);
  const ctx = canvas.getContext('2d');
  
  // Create gradient background
  const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 512);
  gradient.addColorStop(0, colors.primary);
  gradient.addColorStop(1, colors.secondary);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 512);
  
  // Add emoji (centered, larger)
  ctx.font = 'bold 200px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'white';
  ctx.fillText(emoji, 256, 256);
  
  // Add product name (smaller, at bottom)
  ctx.font = 'bold 40px Arial';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.fillText(text, 256, 420);
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
  console.log('✅ Created dynamic logo');
}

// Check if logo exists
if (!fs.existsSync(logoPath)) {
  console.log('❌ Logo not found at:', logoPath);
  console.log('');
  console.log('Creating a dynamic logo...');
  
  // Ensure directory exists
  const logoDir = path.dirname(logoPath);
  if (!fs.existsSync(logoDir)) {
    fs.mkdirSync(logoDir, { recursive: true });
  }
  
  await createDynamicLogo(productName, logoPath);
}

function generateBrowserConfig(productName, publicDir) {
  const browserConfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square70x70logo src="/mstile-70x70.png"/>
      <square150x150logo src="/mstile-150x150.png"/>
      <square310x310logo src="/mstile-310x310.png"/>
      <wide310x150logo src="/mstile-310x150.png"/>
      <TileColor>${brandColors[productName]?.secondary || '#3b82f6'}</TileColor>
    </tile>
  </msapplication>
</browserconfig>`;
  
  fs.writeFileSync(
    path.join(publicDir, 'browserconfig.xml'),
    browserConfig
  );
  
  console.log(`  → browserconfig.xml`);
}

function generateManifest(productName, publicDir) {
  const manifest = {
    name: productDisplayName,
    short_name: productDisplayName,
    description: tagline,
    start_url: '/',
    display: 'standalone',
    background_color: brandColors[productName].primary,
    theme_color: brandColors[productName].secondary,
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ]
  };
  
  fs.writeFileSync(
    path.join(publicDir, 'manifest.webmanifest'),
    JSON.stringify(manifest, null, 2)
  );
  
  console.log(`  → manifest.webmanifest`);
}

async function generateOGImage(productName, publicDir, logo) {
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext('2d');
  const colors = brandColors[productName];
  
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
  gradient.addColorStop(0, colors.primary);
  gradient.addColorStop(1, colors.secondary);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 630);
  
  // Add grid pattern for better visual appeal
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 1;
  
  // Horizontal lines
  for (let i = 0; i < 630; i += 30) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(1200, i);
    ctx.stroke();
  }
  
  // Vertical lines
  for (let i = 0; i < 1200; i += 30) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, 630);
    ctx.stroke();
  }
  
  // Logo (centered, large)
  const logoSize = 200;
  const logoX = (1200 - logoSize) / 2;
  const logoY = (630 - logoSize) / 2 - 50;
  
  ctx.drawImage(logo, logoX, logoY, logoSize, logoSize);
  
  // Product title
  ctx.fillStyle = 'white';
  ctx.font = 'bold 72px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  ctx.fillText(productDisplayName, 600, logoY + logoSize + 80);
  
  // Tagline
  ctx.font = '32px Arial';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.fillText(tagline, 600, logoY + logoSize + 130);
  
  // Add BoldMind branding
  ctx.font = '24px Arial';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.fillText('A BoldMind Technology Solution', 600, 600);
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(publicDir, 'og-image.png'), buffer);
  
  console.log(`  → og-image.png (1200x630)`);
}

async function generateIcons() {
  try {
    console.log('');
    console.log(`🔨 Generating icons for: ${productName.toUpperCase()}`);
    console.log('─'.repeat(50));
    
    // Load the logo
    let logo;
    try {
      logo = await loadImage(logoPath);
    } catch (error) {
      console.log(`  ⚠️  Could not load logo, creating dynamic one...`);
      await createDynamicLogo(productName, logoPath);
      logo = await loadImage(logoPath);
    }
    
    // Define icon sizes
    const sizes = [
      // Favicons
      { name: 'favicon.ico', width: 32, height: 32, format: 'ico' },
      { name: 'favicon-16x16.png', width: 16, height: 16 },
      { name: 'favicon-32x32.png', width: 32, height: 32 },
      
      // Apple Touch Icons
      { name: 'apple-touch-icon.png', width: 180, height: 180 },
      { name: 'apple-touch-icon-57x57.png', width: 57, height: 57 },
      { name: 'apple-touch-icon-60x60.png', width: 60, height: 60 },
      { name: 'apple-touch-icon-72x72.png', width: 72, height: 72 },
      { name: 'apple-touch-icon-76x76.png', width: 76, height: 76 },
      { name: 'apple-touch-icon-114x114.png', width: 114, height: 114 },
      { name: 'apple-touch-icon-120x120.png', width: 120, height: 120 },
      { name: 'apple-touch-icon-144x144.png', width: 144, height: 144 },
      { name: 'apple-touch-icon-152x152.png', width: 152, height: 152 },
      { name: 'apple-touch-icon-167x167.png', width: 167, height: 167 },
      { name: 'apple-touch-icon-180x180.png', width: 180, height: 180 },
      
      // Android/Chrome
      { name: 'icon-192x192.png', width: 192, height: 192 },
      { name: 'icon-256x256.png', width: 256, height: 256 },
      { name: 'icon-384x384.png', width: 384, height: 384 },
      { name: 'icon-512x512.png', width: 512, height: 512 },
      
      // Microsoft
      { name: 'mstile-70x70.png', width: 70, height: 70 },
      { name: 'mstile-144x144.png', width: 144, height: 144 },
      { name: 'mstile-150x150.png', width: 150, height: 150 },
      { name: 'mstile-310x150.png', width: 310, height: 150 },
      { name: 'mstile-310x310.png', width: 310, height: 310 },
    ];
    
    // Generate each icon
    const generatedFiles = [];
    
    for (const size of sizes) {
      try {
        console.log(`  → ${size.name.padEnd(25)} (${size.width}x${size.height})`);
        
        const canvas = createCanvas(size.width, size.height);
        const ctx = canvas.getContext('2d');
        
        // Add background for certain icons (improved from universal generator)
        if (size.name.includes('apple-touch') || size.name.includes('mstile')) {
          const colors = brandColors[productName];
          const gradient = ctx.createLinearGradient(0, 0, size.width, size.height);
          gradient.addColorStop(0, colors.primary);
          gradient.addColorStop(1, colors.secondary);
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, size.width, size.height);
        }
        
        // Calculate size to fit in icon (90% of canvas) - improved positioning
        const padding = size.width * 0.1;
        const iconSize = size.width - (padding * 2);
        
        // Draw logo centered with padding
        ctx.drawImage(
          logo,
          0, 0, logo.width, logo.height,
          padding, padding, iconSize, iconSize
        );
        
        // Save the icon
        const outputPath = path.join(outputDir, size.name);
        const buffer = size.format === 'ico' 
          ? canvas.toBuffer('image/png')  // Note: Canvas can't create ICO directly
          : canvas.toBuffer('image/png');
        
        fs.writeFileSync(outputPath, buffer);
        generatedFiles.push({
          name: size.name,
          path: outputPath,
          size: buffer.length
        });
        
      } catch (error) {
        console.log(`  ❌ Error generating ${size.name}:`, error.message);
      }
    }
    
    // Generate OG Image
    await generateOGImage(productName, outputDir, logo);
    
    // Generate Manifest
    generateManifest(productName, outputDir);
    
    // Generate Browser Config
    generateBrowserConfig(productName, outputDir);
    
    console.log('');
    console.log('✅ All icons generated successfully!');
    console.log('');
    console.log('📁 Generated files:');
    
    // Display file sizes for all generated files
    const allFiles = [
      ...generatedFiles,
      { name: 'og-image.png', path: path.join(outputDir, 'og-image.png') },
      { name: 'manifest.webmanifest', path: path.join(outputDir, 'manifest.webmanifest') },
      { name: 'browserconfig.xml', path: path.join(outputDir, 'browserconfig.xml') }
    ];
    
    for (const file of allFiles) {
      if (fs.existsSync(file.path)) {
        const stats = fs.statSync(file.path);
        console.log(`   ${file.name.padEnd(25)} (${Math.round(stats.size / 1024)} KB)`);
      }
    }
    
    console.log('');
    console.log(`🎉 Done! ${generatedFiles.length} icons generated for ${productDisplayName}`);
    console.log('✨ Your app is now PWA-ready with perfect icons!');
    
  } catch (error) {
    console.error('❌ Error generating icons:', error.message);
  }
}

// Install canvas if needed and run
console.log('Checking dependencies...');
if (!fs.existsSync(path.join(process.cwd(), 'node_modules/canvas'))) {
  console.log('Installing canvas module...');
  const { execSync } = require('child_process');
  try {
    execSync('npm install canvas', { stdio: 'inherit' });
  } catch (e) {
    console.log('Please install canvas manually: npm install canvas');
    process.exit(1);
  }
}

generateIcons();