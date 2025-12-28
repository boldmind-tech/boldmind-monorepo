// Generate sitemaps for all applications
import fs from "fs";
import path from "path";

const apps = [
  "boldmind-hub",
  "amebogist", 
  "educenter",
  "boldmind-os",
  "naija-fither",
  "emailscraper-pro",
  "safe-naija"
];

async function generateSitemaps() {
  for (const app of apps) {
    const appPath = path.join(__dirname, "../../apps/web", app);
    
    if (fs.existsSync(appPath)) {
      console.log(`Generating sitemap for ${app}...`);
      
      // Generate sitemap content
      const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://${app}.boldmind.ng/</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
      
      // Write sitemap to public directory
      const publicPath = path.join(appPath, "public");
      if (!fs.existsSync(publicPath)) {
        fs.mkdirSync(publicPath, { recursive: true });
      }
      
      fs.writeFileSync(path.join(publicPath, "sitemap.xml"), sitemapContent);
      console.log(`✅ Sitemap generated for ${app}`);
    }
  }
}

generateSitemaps().catch(console.error);
