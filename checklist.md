🔑 Social API Setup Checklist:
Facebook/Meta:

Go to: developers.facebook.com

Create Business App

Get App ID & Secret

Add pages_manage_engagement permissions

Webhook URL: https://api.boldmind.ng/webhook/facebook

WhatsApp Business:

business.facebook.com

Apply for WhatsApp Business API

Verify business phone number

Set up webhooks

Twitter/X:

developer.twitter.com

Create Project → App

Enable OAuth 2.0

Save API Keys

Instagram:

Connected via Facebook Page

Instagram Basic Display API

Requires Facebook App approval

YouTube:

console.cloud.google.com

Create Project

Enable YouTube Data API v3

OAuth 2.0 credentials

All this code is ready to deploy now. The admin dashboard, PlanAI onboarding, and social integration will work immediately after deployment! 🚀



Option 1: Neon (RECOMMENDED) ⭐
Best for production, generous free tier
Step-by-Step:

Go to neon.tech
Sign up with GitHub/Google/Email
Create a new project:

Click "Create Project"
Project name: boldmind-production
Region: Choose closest to Nigeria (e.g., AWS eu-west-1 - Ireland)
Click "Create Project"


Get your connection string:

After creation, you'll see your connection string
It looks like: postgresql://username:password@ep-xxxxx.eu-west-1.aws.neon.tech/neondb?sslmode=require
Copy this immediately!


Set environment variables:
In your root .env.local:

env   DATABASE_URL="postgresql://username:password@ep-xxxxx.eu-west-1.aws.neon.tech/neondb?sslmode=require"

Run migrations:

bash   cd PACKAGES/database
   pnpm db:migrate
Free Tier:

✅ 0.5 GB storage
✅ Unlimited projects
✅ Auto-suspend after inactivity (wakes up instantly)
✅ Branching (separate DB for dev/staging)
✅ Good for ~10k users/month


Option 2: Supabase (EASY SETUP)
Step-by-Step:

Go to supabase.com
Sign up with GitHub
Create a new project:

Click "New Project"
Name: boldmind-db
Database Password: Create a strong password (SAVE IT!)
Region: Choose West EU (London) or Southeast Asia (Singapore)
Click "Create new project" (takes ~2 minutes)


Get connection string:

Go to Project Settings → Database
Scroll to "Connection string"
Select "URI" tab
Copy the connection string
Replace [YOUR-PASSWORD] with the password you created


Set environment variables:

env   DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.xxxxx.supabase.co:5432/postgres"

Run migrations:

bash   cd PACKAGES/database
   pnpm db:migrate
Free Tier:

✅ 500 MB database
✅ 2 GB file storage
✅ 50 GB bandwidth
✅ Auto-pause after 1 week inactivity
✅ Includes Auth, Storage, Realtime (bonus features!)


Option 3: Railway (DEVELOPER FRIENDLY)
Step-by-Step:

Go to railway.app
Sign up with GitHub
Create new project:

Click "New Project"
Select "Provision PostgreSQL"
It creates instantly!


Get connection string:

Click on the PostgreSQL service
Go to "Connect" tab
Copy "Postgres Connection URL"


Set environment variable:

env   DATABASE_URL="postgresql://postgres:password@containers-us-west-xxx.railway.app:7432/railway"

Run migrations:

bash   cd PACKAGES/database
   pnpm db:migrate
Free Tier:

✅ $5 credit/month (enough for small apps)
✅ Good performance
✅ Easy deployment integration
⚠️ Credit expires monthly (must monitor usage)


Option 4: ElephantSQL (SIMPLE & RELIABLE)
Step-by-Step:

Go to elephantsql.com
Sign up (email/password)
Create instance:

Click "Create New Instance"
Name: boldmind-db
Plan: Select "Tiny Turtle (Free)"
Region: EU-West-1 (Ireland)
Click "Review" → "Create instance"


Get connection URL:

Click on your instance name
Copy the URL shown


Set environment variable:

env   DATABASE_URL="postgres://username:password@tai.db.elephantsql.com/username"
Free Tier:

✅ 20 MB storage (tight for production!)
✅ 5 concurrent connections
⚠️ Very limited, only good for initial launch


MY RECOMMENDATION FOR YOUR LAUNCH:
Use Neon + Supabase combo:

Neon for main production DB (better performance, more storage)
Supabase for auth & file storage (bonus features)

Setup both:
bash# In your root .env.local
DATABASE_URL="postgresql://neon-connection-string"
SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_ANON_KEY="your-anon-key"
After launch, when you get money:
Upgrade to:

Neon Pro ($19/month) - 10 GB storage
Supabase Pro ($25/month) - 8 GB database
Or migrate to Render ($7/month) or DigitalOcean ($12/month)


Quick Start (Choose Neon):
bash# 1. Sign up at neon.tech
# 2. Create project, copy connection string
# 3. Add to .env.local:
echo 'DATABASE_URL="your-neon-connection-string"' >> .env.local

# 4. Run migrations
cd PACKAGES/database
pnpm db:generate
pnpm db:migrate

# 5. Verify
pnpm db:studio
Good luck with your launch tomorrow! 🚀
Which one do you want to use? I can give you more specific setup help!