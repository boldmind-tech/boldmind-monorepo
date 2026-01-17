#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🚀 DEPLOYING ENTIRE BOLDMIND ECOSYSTEM\n");

// Deployment queue with domains
const DEPLOYMENT_QUEUE = [
  // LIVE PRODUCTS - Priority 1
  {
    name: "boldmind-hub",
    path: "APPS/WEB_APPS/boldmind-hub",
    domain: "boldmind.ng",
  },
  {
    name: "amebogist",
    path: "APPS/WEB_APPS/amebogist",
    domain: "amebogist.ng",
  },
  {
    name: "educenter",
    path: "APPS/WEB_APPS/educenter",
    domain: "educenter.com.ng",
  },
  {
    name: "planai-landing",
    path: "APPS/WEB_APPS/PLANAI_SUITE/planai-landing",
    domain: "planai.boldmind.ng",
  },
  {
    name: "ai-receptionist",
    path: "APPS/WEB_APPS/PLANAI_SUITE/receptionist",
    domain: "planai.boldmind.ng/receptionist",
  },

  // BUILDING PRODUCTS - Priority 2
  {
    name: "boldmind-os",
    path: "APPS/WEB_APPS/boldmind-os",
    domain: "os.boldmind.ng",
  },
  {
    name: "naija-fither",
    path: "APPS/WEB_APPS/naija-fither",
    domain: "fit.boldmind.ng",
  },
  {
    name: "emailscraper-pro",
    path: "APPS/WEB_APPS/emailscraper-pro",
    domain: "email.boldmind.ng",
  },
  {
    name: "social-factory",
    path: "APPS/WEB_APPS/social-factory",
    domain: "social.boldmind.ng",
  },

  // PLANAI SUITE - Priority 3
  {
    name: "ai-receptionist",
    path: "APPS/WEB_APPS/PLANAI_SUITE/receptionist",
    domain: "planai.boldmind.ng/receptionist",
  },
  {
    name: "credibility-hubs",
    path: "APPS/WEB_APPS/PLANAI_SUITE/credibility-hubs",
    domain: "planai.boldmind.ng/credibility",
  },
  {
    name: "business-planning",
    path: "APPS/WEB_APPS/PLANAI_SUITE/business-planning",
    domain: "planai.boldmind.ng/planning",
  },
  {
    name: "financial-forecasting",
    path: "APPS/WEB_APPS/PLANAI_SUITE/financial-forecasting",
    domain: "planai.boldmind.ng/finance",
  },
  {
    name: "investor-readiness",
    path: "APPS/WEB_APPS/PLANAI_SUITE/investor-readiness",
    domain: "planai.boldmind.ng/investor",
  },
  {
    name: "branding-design",
    path: "APPS/WEB_APPS/PLANAI_SUITE/branding-design",
    domain: "planai.boldmind.ng/design",
  },
  {
    name: "digital-storefronts",
    path: "APPS/WEB_APPS/PLANAI_SUITE/digital-storefronts",
    domain: "planai.boldmind.ng/store",
  },
  {
    name: "marketing-automation",
    path: "APPS/WEB_APPS/PLANAI_SUITE/marketing-automation",
    domain: "planai.boldmind.ng/marketing",
  },
  {
    name: "analytics-dashboard",
    path: "APPS/WEB_APPS/PLANAI_SUITE/analytics-dashboard",
    domain: "planai.boldmind.ng/analytics",
  },

  // CONCEPT APPS - Priority 4
  {
    name: "afrohustle-os",
    path: "APPS/CONCEPT_APPS/afrohustle-os",
    domain: "hustle.boldmind.ng",
  },
  {
    name: "naijagig-matcher",
    path: "APPS/CONCEPT_APPS/naijagig-matcher",
    domain: "gig.educenter.com.ng",
  },
  {
    name: "kolo-ai",
    path: "APPS/CONCEPT_APPS/kolo-ai",
    domain: "kolo.boldmind.ng",
  },
  {
    name: "borderless-remit",
    path: "APPS/CONCEPT_APPS/borderless-remit",
    domain: "border.boldmind.ng",
  },
  {
    name: "receipt-genius",
    path: "APPS/CONCEPT_APPS/receipt-genius",
    domain: "receipt.boldmind.ng",
  },
  {
    name: "power-alert",
    path: "APPS/CONCEPT_APPS/power-alert",
    domain: "power.boldmind.ng",
  },
  {
    name: "farmgate-direct",
    path: "APPS/CONCEPT_APPS/farmgate-direct",
    domain: "farm.boldmind.ng",
  },
  {
    name: "afrocopy-ai",
    path: "APPS/CONCEPT_APPS/afrocopy-ai",
    domain: "copy.amebogist.ng",
  },
  {
    name: "skill2cash",
    path: "APPS/CONCEPT_APPS/skill2cash",
    domain: "skills.educenter.com.ng",
  },
  {
    name: "anontruth-mic",
    path: "APPS/CONCEPT_APPS/anontruth-mic",
    domain: "anon.amebogist.ng",
  },
];

// Mobile Apps
const MOBILE_APPS = [
  { name: "safe-ai-native", path: "APPS/MOBILE/native/safe-ai" },
  { name: "amebogist-twa", path: "APPS/MOBILE/twa/amebogist" },
  { name: "educenter-twa", path: "APPS/MOBILE/twa/educenter" },
  { name: "boldmind-os-twa", path: "APPS/MOBILE/twa/boldmind-os" },
  { name: "naija-fither-twa", path: "APPS/MOBILE/twa/naija-fither" },
  { name: "emailscraper-twa", path: "APPS/MOBILE/twa/emailscraper-pro" },
];

async function deployApp(app) {
  console.log(`\n📦 Deploying ${app.name}...`);

  try {
    // Check if app exists
    if (!fs.existsSync(app.path)) {
      console.log(`❌ ${app.name} directory not found: ${app.path}`);
      return { success: false, error: "Directory not found" };
    }

    // Build the app
    console.log(`🔨 Building ${app.name}...`);
    execSync(`cd ${app.path} && npm run build`, { stdio: "inherit" });

    // Deploy to Vercel
    console.log(`🚀 Deploying ${app.name} to ${app.domain}...`);

    const deployCommand = `cd ${app.path} && vercel --prod --yes --confirm`;
    if (app.domain) {
      deployCommand += ` --name ${app.name} --alias ${app.domain}`;
    }

    execSync(deployCommand, { stdio: "inherit" });

    console.log(
      `✅ ${app.name} deployed successfully to ${app.domain || "Vercel"}`,
    );
    return { success: true, domain: app.domain };
  } catch (error) {
    console.error(`❌ Failed to deploy ${app.name}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function deployAll() {
  const results = [];
  const failed = [];

  console.log(
    "📊 Starting deployment of",
    DEPLOYMENT_QUEUE.length,
    "apps...\n",
  );

  // Deploy in batches of 3 to avoid rate limits
  for (let i = 0; i < DEPLOYMENT_QUEUE.length; i += 3) {
    const batch = DEPLOYMENT_QUEUE.slice(i, i + 3);
    console.log(
      `\n🔄 Deploying batch ${Math.floor(i / 3) + 1}: ${batch.map((a) => a.name).join(", ")}`,
    );

    const batchPromises = batch.map((app) => deployApp(app));
    const batchResults = await Promise.all(batchPromises);

    results.push(...batchResults);

    // Wait 30 seconds between batches
    if (i + 3 < DEPLOYMENT_QUEUE.length) {
      console.log("\n⏳ Waiting 30 seconds before next batch...");
      await new Promise((resolve) => setTimeout(resolve, 30000));
    }
  }

  // Summary
  console.log("\n" + "=".repeat(50));
  console.log("📊 DEPLOYMENT SUMMARY");
  console.log("=".repeat(50));

  const successful = results.filter((r) => r.success);
  const failedApps = results.filter((r) => !r.success);

  console.log(
    `✅ Successfully deployed: ${successful.length}/${results.length}`,
  );
  console.log(`❌ Failed: ${failedApps.length}`);

  if (successful.length > 0) {
    console.log("\n🌐 Deployed Domains:");
    successful.forEach((result) => {
      if (result.domain) {
        console.log(`   • ${result.domain}`);
      }
    });
  }

  if (failedApps.length > 0) {
    console.log("\n⚠️  Failed deployments:");
    failedApps.forEach((result, index) => {
      const app = DEPLOYMENT_QUEUE[index];
      console.log(`   • ${app.name}: ${result.error}`);
    });
  }

  // Create deployment report
  const report = {
    timestamp: new Date().toISOString(),
    total: results.length,
    successful: successful.length,
    failed: failedApps.length,
    apps: results.map((result, index) => ({
      app: DEPLOYMENT_QUEUE[index].name,
      domain: DEPLOYMENT_QUEUE[index].domain,
      success: result.success,
      error: result.error,
    })),
  };

  fs.writeFileSync("deployment-report.json", JSON.stringify(report, null, 2));
  console.log("\n📄 Deployment report saved to deployment-report.json");
}

// Run deployment
deployAll().catch(console.error);
