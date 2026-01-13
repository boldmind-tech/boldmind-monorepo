// generate-icons.js - Node.js based icon generator (no ImageMagick needed)
const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

console.log('🎨 BoldMind Icon Generator (Node.js)');
console.log('====================================');

const logoPath = path.join(__dirname, '../../apps/web/amebogist/public/logo.png');
const outputDir = path.join(__dirname, '../../apps/web/amebogist/public');

// Check if canvas is available
try {
  require('canvas');
} catch (error) {
  console.log('❌ Canvas module not found. Installing...');
  console.log('Run: npm install canvas');
  process.exit(1);
}

// Check if logo exists
if (!fs.existsSync(logoPath)) {
  console.log('❌ Logo not found at:', logoPath);
  console.log('');
  console.log('Creating a simple placeholder logo...');
  
  // Create a simple placeholder using canvas
  const canvas = createCanvas(512, 512);
  const ctx = canvas.getContext('2d');
  
  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, 512, 512);
  gradient.addColorStop(0, '#0A1D37');
  gradient.addColorStop(1, '#3b82f6');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 512);
  
  // Add text
  ctx.fillStyle = 'white';
  ctx.font = 'bold 72px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('BM', 256, 256);
  
  // Save logo
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(logoPath, buffer);
  console.log('✅ Created placeholder logo');
}

async function generateIcons() {
  try {
    console.log('');
    console.log('🔨 Generating icons...');
    
    // Load the logo
    const logo = await loadImage(logoPath);
    
    // Define icon sizes
    const sizes = [
      { name: 'favicon-16x16.png', width: 16, height: 16 },
      { name: 'favicon-32x32.png', width: 32, height: 32 },
      { name: 'apple-touch-icon.png', width: 180, height: 180 },
      { name: 'icon-192x192.png', width: 192, height: 192 },
      { name: 'icon-512x512.png', width: 512, height: 512 },
    ];
    
    // Generate each icon
    for (const size of sizes) {
      console.log(`  → ${size.name} (${size.width}x${size.height})`);
      
      const canvas = createCanvas(size.width, size.height);
      const ctx = canvas.getContext('2d');
      
      // Draw logo centered
      ctx.drawImage(
        logo,
        0, 0, logo.width, logo.height, // source
        0, 0, size.width, size.height  // destination
      );
      
      // Save the icon
      const buffer = canvas.toBuffer('image/png');
      fs.writeFileSync(path.join(outputDir, size.name), buffer);
    }
    
    // Create OG image (social media preview)
    console.log('  → og-image.png (1200x630)');
    const ogCanvas = createCanvas(1200, 630);
    const ogCtx = ogCanvas.getContext('2d');
    
    // Background color
    ogCtx.fillStyle = '#0A1D37';
    ogCtx.fillRect(0, 0, 1200, 630);
    
    // Add logo in center
    const logoSize = 400;
    const x = (1200 - logoSize) / 2;
    const y = (630 - logoSize) / 2;
    ogCtx.drawImage(logo, x, y, logoSize, logoSize);
    
    // Add text
    ogCtx.fillStyle = 'white';
    ogCtx.font = 'bold 48px Arial';
    ogCtx.textAlign = 'center';
    ogCtx.fillText('Amebogist', 600, 550);
    ogCtx.font = '32px Arial';
    ogCtx.fillText('🇳🇬 Amebo wey make sense. Gist wey fit change your level!', 600, 600);
    
    const ogBuffer = ogCanvas.toBuffer('image/png');
    fs.writeFileSync(path.join(outputDir, 'og-image.png'), ogBuffer);
    
    console.log('');
    console.log('✅ All icons generated successfully!');
    console.log('');
    console.log('📁 Generated files:');
    sizes.forEach(size => {
      const filePath = path.join(outputDir, size.name);
      const stats = fs.statSync(filePath);
      console.log(`   ${size.name} (${Math.round(stats.size / 1024)} KB)`);
    });
    console.log(`   og-image.png (${Math.round(fs.statSync(path.join(outputDir, 'og-image.png')).size / 1024)} KB)`);
    
    console.log('');
    console.log('🎉 Done! Your icons are ready to use.');
    
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