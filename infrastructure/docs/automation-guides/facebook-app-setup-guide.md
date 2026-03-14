# Facebook App Setup & n8n Configuration Guide

Complete step-by-step guide to create a Facebook App, obtain all necessary credentials, and configure n8n with database hosting.

---

## Part 1: Facebook App Creation & Configuration

### Step 1: Create Facebook App

1. **Go to Facebook Developers**
   - Visit: https://developers.facebook.com/
   - Click **"My Apps"** in top right
   - Click **"Create App"**

2. **Select Use Case (NEW WIZARD)**
   - You will see the **"Add use cases"** screen with many options.
   - **Scroll to the very bottom** of the list.
   - Select **"Other"** (it might say "This option is going away soon") OR **"Create an app without a use case"**.
   - **Why?** Both of these options bypass the pre-packaged bundles that cause conflicts.
   - Click **"Next"**.
   - If prompted for an App Type, select **"Business"**.
   - Click **"Next"**.

3. **Business Portfolio**
   - You will be asked to select a **Business Portfolio** (Business Manager).
   - Select your existing business account.
   - Click **"Next"**.

4. **Review & Create**
   - Name your app (e.g., `BoldMind Marketing Automation`).
   - Review your settings.
   - Click **"Create App"**.

> **Note:** You now have a clean, empty app. You will need to manually add **WhatsApp**, **Messenger**, and **Facebook Login** from the "Add Product" dashboard one by one.

> **⚠️ IMPORTANT:** Do **NOT** select "None", "Consumer", or "Gaming" as the App Type. If you made a mistake (e.g., see "App type: None"), **delete this app and create a new one**. You MUST select **"Business"** to access WhatsApp.

4. **Complete Security Check**
   - Verify you're human
   - Click **"Submit"**

✅ **You now have:** `FACEBOOK_APP_ID` and `FACEBOOK_APP_SECRET`

---

### Step 2: Add Products to Your App

> **Note:** If a product is listed under **"My Products"** in the left sidebar, it is already added. You can skip "Set Up" and go directly to its "Settings".

#### A. Add Facebook Login

1. In App Dashboard, find **"Facebook Login"**
2. Click **"Set Up"**
3. Select **"Web"** platform
4. **Site URL:** `https://boldmind.ng`
5. Click **"Save"**

#### B. Add Webhooks

1. In App Dashboard, find **"Webhooks"**
2. Click **"Set Up"**
3. Product is now added

#### C. Add Instagram

1. Find **"Instagram Graph API"**
2. Click **"Set Up"**

#### D. Add WhatsApp

**Can't find WhatsApp?** Ensure you selected **"Business"** as the App Type in Step 1.
> **TROUBLESHOOTING:** If your App Type is **"None"** or **"Consumer"**, you will NOT see the WhatsApp product. You **MUST** create a new app and select **"Business"** (sometimes called "Business" or "Other" > "Business").

1. Scroll down to the **"Add a product"** section (usually at the bottom of the Dashboard).
2. Look for the **"WhatsApp"** card (with the green logo).
3. Click **"Set Up"**.
4. You will be redirected to the WhatsApp configuration page.
5. Follow prompts to create or link a **Meta Business Account**.

#### E. Add Messenger

1. Find **"Messenger"** in the "Add a product" section.
2. Click **"Set Up"**.
3. *Note: If you already have "Messenger" in your "My Products" list, you can ignore this step.*

---

### Step 3: Configure App Settings

1. **Go to Settings > Basic**
2. **App Domains:** Add `n8n.boldmind.ng`
3. **Privacy Policy URL:** `https://boldmind.ng/privacy`
4. **Terms of Service URL:** `https://boldmind.ng/terms`
5. Click **"Save Changes"**

6. **Copy Your Credentials:**
   ```
   App ID: [Copy this]
   App Secret: [Click "Show" and copy]
   ```

---

### Step 4: Create System User (For Agency Use)

1. **Go to Business Settings**
   - Visit: https://business.facebook.com/settings
   - Select your business

2. **Create System User**
   - Go to **"Users" > "System Users"**
   - Click **"Add"**
   - **Name:** `n8n-automation`
   - **Role:** Admin
   - Click **"Create System User"**

3. **Generate Access Token**
   - Click on the system user you just created
   - Click **"Generate New Token"**
   - **App:** Select your app
   - **Permissions:** Select ALL:
     - `ads_management`
     - `ads_read`
     - `business_management`
     - `catalog_management`
     - `instagram_basic`
     - `instagram_content_publish`
     - `instagram_manage_comments`
     - `instagram_manage_insights`
     - `instagram_manage_messages`
     - `leads_retrieval`
     - `pages_manage_ads`
     - `pages_manage_engagement`
     - `pages_manage_metadata`
     - `pages_manage_posts`
     - `pages_messaging`
     - `pages_read_engagement`
     - `pages_read_user_content`
     - `whatsapp_business_management`
     - `whatsapp_business_messaging`
   - Click **"Generate Token"**
   - **COPY THIS TOKEN** - This is your `FACEBOOK_SYSTEM_USER_TOKEN`

✅ **You now have:** `FACEBOOK_SYSTEM_USER_TOKEN` (never expires)

---

### Step 5: Add Assets to System User

1. **Still in System User settings**
2. Click **"Add Assets"**

#### Add Ad Accounts
- Select **"Ad Accounts"**
- Choose your ad account(s)
- Permission: **Full control**
- Click **"Save Changes"**

#### Add Pages
- Select **"Pages"**
- Choose your Facebook Page(s)
- Permission: **Full control**
- Click **"Save Changes"**

#### Add Instagram Accounts
- Select **"Instagram Accounts"**
- Choose your Instagram Business Account(s)
- Permission: **Full control**
- Click **"Save Changes"**

---

### Step 6: Get Page Access Token

1. **Go to Graph API Explorer**
   - Visit: https://developers.facebook.com/tools/explorer/

2. **Select Your App**
   - Top right: Select your app from dropdown

3. **Get User Access Token**
   - Click **"Generate Access Token"**
   - Grant permissions when prompted
   - **Permissions needed:**
     - `pages_manage_posts`
     - `pages_read_engagement`
     - `pages_manage_metadata`
     - `instagram_basic`
     - `instagram_content_publish`

4. **Exchange for Page Token**
   - In Graph API Explorer, change endpoint to:
     ```
     /me/accounts
     ```
   - Click **"Submit"**
   - Find your page in the response
   - Copy the `access_token` for your page
   - This is your `FACEBOOK_PAGE_ACCESS_TOKEN`

---

### Step 7: Get Instagram Business Account ID

1. **In Graph API Explorer**
2. **Endpoint:**
   ```
   /me/accounts
   ```
3. **Click "Submit"**
4. Find your page, copy the `id`
5. **New endpoint:**
   ```
   /{PAGE_ID}?fields=instagram_business_account
   ```
6. **Click "Submit"**
7. Copy the `instagram_business_account.id`
8. This is your `INSTAGRAM_BUSINESS_ACCOUNT_ID`

---

### Step 8: Get WhatsApp Business Account Details

1. **Go to WhatsApp Manager**
   - Visit: https://business.facebook.com/wa/manage/

2. **Select Your WhatsApp Business Account**
   - Copy the **Business Account ID** from URL
   - This is your `WHATSAPP_BUSINESS_ACCOUNT_ID`

3. **Get Phone Number ID**
   - Click on your phone number
   - Copy the **Phone Number ID**
   - This is your `WHATSAPP_PHONE_NUMBER_ID`

4. **Get Access Token**
   - Use the System User token from Step 4
   - Or generate a new token with `whatsapp_business_messaging` permission

---

### Step 9: Get Facebook Pixel ID

1. **Go to Events Manager**
   - Visit: https://business.facebook.com/events_manager/

2. **Select Your Pixel**
   - Or create new: Click **"Connect Data Sources" > "Web" > "Facebook Pixel"**

3. **Copy Pixel ID**
   - Found in Pixel settings
   - This is your `FACEBOOK_PIXEL_ID`

---

### Step 10: Configure Webhooks

#### A. Lead Ads Webhook

1. **Go to App Dashboard > Webhooks**
2. **Select "Page"**
3. **Callback URL:**
   ```
   https://n8n.boldmind.ng/webhook/facebook-lead-capture
   ```
4. **Verify Token:** Create a random string (e.g., `boldmind_verify_2024`)
   - Save this as `FACEBOOK_VERIFY_TOKEN`
5. **Subscribe to Fields:**
   - `leadgen`
6. Click **"Verify and Save"**

#### B. Instagram Webhook

1. **Select "Instagram"**
2. **Callback URL:**
   ```
   https://n8n.boldmind.ng/webhook/instagram-new-comment
   ```
3. **Verify Token:** Same as above
4. **Subscribe to Fields:**
   - `comments`
   - `mentions`
   - `messages`
5. Click **"Verify and Save"**

#### C. WhatsApp Webhook

1. **Select "WhatsApp Business Account"**
2. **Callback URL:**
   ```
   https://n8n.boldmind.ng/webhook/whatsapp-message-received
   ```
3. **Verify Token:** Same as above
4. **Subscribe to Fields:**
   - `messages`
5. Click **"Verify and Save"**

#### D. Messenger Webhook

1. **Select "Page"** (if not already done)
2. **Callback URL:**
   ```
   https://n8n.boldmind.ng/webhook/messenger-message-received
   ```
3. **Verify Token:** Same as above
4. **Subscribe to Fields:**
   - `messages`
   - `messaging_postbacks`
5. Click **"Verify and Save"**

---

### Step 11: App Review & Go Live

1. **Go to App Review**
2. **Request Permissions:**
   - `pages_manage_posts`
   - `pages_read_engagement`
   - `instagram_basic`
   - `instagram_content_publish`
   - `instagram_manage_comments`
   - `leads_retrieval`
   - `whatsapp_business_messaging`

3. **Submit for Review**
   - Provide use case descriptions
   - Add demo video if required
   - Wait for approval (1-7 days)

4. **Switch to Live Mode**
   - Top of dashboard: Toggle from "Development" to "Live"

---

## Part 2: n8n Database Setup

### Option 1: PostgreSQL on Neon (Recommended)

#### Step 1: Create Neon Database

1. **Go to Neon Console**
   - Visit: https://console.neon.tech/
   - Sign in or create account

2. **Create New Project**
   - Click **"New Project"**
   - **Name:** `n8n-automation`
   - **Region:** Choose closest to your users
   - **PostgreSQL Version:** 16 (latest)
   - Click **"Create Project"**

3. **Create Database**
   - In project dashboard
   - Click **"Databases"**
   - Click **"New Database"**
   - **Name:** `n8n_production`
   - Click **"Create"**

4. **Get Connection String**
   - Click on database
   - Copy **Connection String**
   - Format: `postgresql://user:password@host/database?sslmode=require`
   - This is your `N8N_DATABASE_URL`

#### Step 2: Create Tables for Facebook Integration

1. **Connect to Database**
   - Use any PostgreSQL client (pgAdmin, DBeaver, or psql)
   - Or use Neon's SQL Editor

2. **Run This SQL:**

```sql
-- Facebook Leads Table
CREATE TABLE facebook_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id VARCHAR(255) UNIQUE NOT NULL,
  form_id VARCHAR(255) NOT NULL,
  ad_id VARCHAR(255),
  page_id VARCHAR(255),
  ad_group_id VARCHAR(255),
  full_name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(50),
  business_name VARCHAR(255),
  service VARCHAR(255),
  field_data JSONB,
  created_time TIMESTAMP,
  processed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX idx_facebook_leads_email ON facebook_leads(email);
CREATE INDEX idx_facebook_leads_phone ON facebook_leads(phone);
CREATE INDEX idx_facebook_leads_created ON facebook_leads(created_at DESC);

-- Facebook Campaigns Table
CREATE TABLE facebook_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id VARCHAR(255) UNIQUE NOT NULL,
  ad_account_id VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  objective VARCHAR(100),
  status VARCHAR(50),
  daily_budget DECIMAL(10, 2),
  lifetime_budget DECIMAL(10, 2),
  start_time TIMESTAMP,
  end_time TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Instagram Posts Table
CREATE TABLE instagram_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  media_id VARCHAR(255) UNIQUE NOT NULL,
  ig_user_id VARCHAR(255) NOT NULL,
  media_type VARCHAR(50),
  caption TEXT,
  image_url TEXT,
  video_url TEXT,
  permalink TEXT,
  like_count INTEGER DEFAULT 0,
  comments_count INTEGER DEFAULT 0,
  engagement_rate DECIMAL(5, 2),
  published_at TIMESTAMP,
  status VARCHAR(50) DEFAULT 'published',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_instagram_posts_published ON instagram_posts(published_at DESC);

-- Instagram Comments Table
CREATE TABLE instagram_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  comment_id VARCHAR(255) UNIQUE NOT NULL,
  media_id VARCHAR(255),
  parent_comment_id VARCHAR(255),
  text TEXT,
  from_id VARCHAR(255),
  from_username VARCHAR(255),
  sentiment VARCHAR(50),
  replied BOOLEAN DEFAULT FALSE,
  reply_text TEXT,
  reply_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_instagram_comments_media ON instagram_comments(media_id);

-- WhatsApp Messages Table
CREATE TABLE whatsapp_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  message_id VARCHAR(255) UNIQUE NOT NULL,
  phone_number_id VARCHAR(255) NOT NULL,
  from_number VARCHAR(50) NOT NULL,
  to_number VARCHAR(50),
  direction VARCHAR(20), -- 'inbound' or 'outbound'
  message_type VARCHAR(50),
  message_text TEXT,
  media_url TEXT,
  intent VARCHAR(100),
  sentiment VARCHAR(50),
  needs_human BOOLEAN DEFAULT FALSE,
  auto_reply TEXT,
  status VARCHAR(50), -- 'sent', 'delivered', 'read', 'failed'
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_whatsapp_messages_from ON whatsapp_messages(from_number);
CREATE INDEX idx_whatsapp_messages_created ON whatsapp_messages(created_at DESC);

-- Messenger Conversations Table
CREATE TABLE messenger_conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  message_id VARCHAR(255) UNIQUE NOT NULL,
  sender_id VARCHAR(255) NOT NULL,
  recipient_id VARCHAR(255) NOT NULL,
  message_text TEXT,
  intent VARCHAR(100),
  needs_human BOOLEAN DEFAULT FALSE,
  auto_reply TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Analytics Summary Table
CREATE TABLE facebook_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date DATE NOT NULL,
  platform VARCHAR(50), -- 'facebook', 'instagram', 'whatsapp', 'messenger'
  metric_type VARCHAR(100),
  metric_value DECIMAL(15, 2),
  metadata JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_analytics_date ON facebook_analytics(date DESC);
CREATE INDEX idx_analytics_platform ON facebook_analytics(platform);
```

---

### Option 2: MongoDB Atlas (Alternative)

#### Step 1: Create MongoDB Cluster

1. **Go to MongoDB Atlas**
   - Visit: https://cloud.mongodb.com/
   - Sign in or create account

2. **Create Cluster**
   - Click **"Build a Database"**
   - Choose **"Shared"** (Free tier) or **"Dedicated"**
   - **Cloud Provider:** AWS
   - **Region:** Choose closest
   - **Cluster Name:** `n8n-automation`
   - Click **"Create"**

3. **Create Database User**
   - Go to **"Database Access"**
   - Click **"Add New Database User"**
   - **Username:** `n8n_user`
   - **Password:** Generate strong password
   - **Database User Privileges:** Read and write to any database
   - Click **"Add User"**

4. **Whitelist IP**
   - Go to **"Network Access"**
   - Click **"Add IP Address"**
   - Click **"Allow Access from Anywhere"** (0.0.0.0/0)
   - Or add your n8n server IP
   - Click **"Confirm"**

5. **Get Connection String**
   - Go to **"Database"**
   - Click **"Connect"**
   - Choose **"Connect your application"**
   - Copy connection string
   - Replace `<password>` with your password
   - This is your `N8N_DATABASE_URL`

---

## Part 3: n8n Configuration

### Step 1: Environment Variables

Create `.env` file in your n8n deployment:

```env
# ============================================
# N8N CONFIGURATION
# ============================================
N8N_HOST=n8n.boldmind.ng
N8N_PORT=5678
N8N_PROTOCOL=https
WEBHOOK_URL=https://n8n.boldmind.ng

# Database (Choose one)
# PostgreSQL (Neon)
DB_TYPE=postgresdb
DB_POSTGRESDB_DATABASE=n8n_production
DB_POSTGRESDB_HOST=your-neon-host.neon.tech
DB_POSTGRESDB_PORT=5432
DB_POSTGRESDB_USER=your-username
DB_POSTGRESDB_PASSWORD=your-password
DB_POSTGRESDB_SCHEMA=public

# OR MongoDB
# DB_TYPE=mongodb
# DB_MONGODB_CONNECTION_URL=mongodb+srv://n8n_user:password@cluster.mongodb.net/n8n?retryWrites=true&w=majority

# Encryption
N8N_ENCRYPTION_KEY=your-random-32-char-encryption-key

# ============================================
# FACEBOOK/META API CREDENTIALS
# ============================================
FACEBOOK_APP_ID=your_app_id_from_step_1
FACEBOOK_APP_SECRET=your_app_secret_from_step_1
FACEBOOK_SYSTEM_USER_TOKEN=your_system_user_token_from_step_4
FACEBOOK_VERIFY_TOKEN=boldmind_verify_2024

# Business & Accounts
FACEBOOK_BUSINESS_ID=your_business_id
FACEBOOK_AD_ACCOUNT_ID=act_your_ad_account_id
FACEBOOK_PAGE_ID=your_page_id
FACEBOOK_PAGE_ACCESS_TOKEN=your_page_token_from_step_6

# Instagram
INSTAGRAM_BUSINESS_ACCOUNT_ID=your_ig_account_id_from_step_7

# WhatsApp
WHATSAPP_BUSINESS_ACCOUNT_ID=your_waba_id_from_step_8
WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id_from_step_8
WHATSAPP_ACCESS_TOKEN=your_system_user_token_from_step_4

# Pixel
FACEBOOK_PIXEL_ID=your_pixel_id_from_step_9

# ============================================
# OTHER INTEGRATIONS
# ============================================
SLACK_WEBHOOK_URL=your_slack_webhook_url
OPENAI_API_KEY=your_openai_api_key
```

---

### Step 2: Deploy n8n

#### Option A: Docker (Recommended)

1. **Create `docker-compose.yml`:**

```yaml
version: '3.8'

services:
  n8n:
    image: n8nio/n8n:latest
    container_name: n8n
    restart: always
    ports:
      - "5678:5678"
    environment:
      - N8N_HOST=${N8N_HOST}
      - N8N_PORT=5678
      - N8N_PROTOCOL=https
      - WEBHOOK_URL=${WEBHOOK_URL}
      - DB_TYPE=${DB_TYPE}
      - DB_POSTGRESDB_DATABASE=${DB_POSTGRESDB_DATABASE}
      - DB_POSTGRESDB_HOST=${DB_POSTGRESDB_HOST}
      - DB_POSTGRESDB_PORT=${DB_POSTGRESDB_PORT}
      - DB_POSTGRESDB_USER=${DB_POSTGRESDB_USER}
      - DB_POSTGRESDB_PASSWORD=${DB_POSTGRESDB_PASSWORD}
      - N8N_ENCRYPTION_KEY=${N8N_ENCRYPTION_KEY}
      - FACEBOOK_APP_ID=${FACEBOOK_APP_ID}
      - FACEBOOK_APP_SECRET=${FACEBOOK_APP_SECRET}
      - FACEBOOK_SYSTEM_USER_TOKEN=${FACEBOOK_SYSTEM_USER_TOKEN}
      - FACEBOOK_VERIFY_TOKEN=${FACEBOOK_VERIFY_TOKEN}
      - FACEBOOK_PAGE_ACCESS_TOKEN=${FACEBOOK_PAGE_ACCESS_TOKEN}
      - INSTAGRAM_BUSINESS_ACCOUNT_ID=${INSTAGRAM_BUSINESS_ACCOUNT_ID}
      - WHATSAPP_PHONE_NUMBER_ID=${WHATSAPP_PHONE_NUMBER_ID}
      - WHATSAPP_ACCESS_TOKEN=${WHATSAPP_ACCESS_TOKEN}
      - FACEBOOK_PIXEL_ID=${FACEBOOK_PIXEL_ID}
    volumes:
      - n8n_data:/home/node/.n8n
      - ./workflows:/home/node/.n8n/workflows

volumes:
  n8n_data:
```

2. **Start n8n:**
```bash
docker-compose up -d
```

#### Option B: npm

```bash
npm install -g n8n
n8n start
```

---

### Step 3: Configure Reverse Proxy (Nginx)

1. **Install Nginx:**
```bash
sudo apt update
sudo apt install nginx
```

2. **Create Nginx Config:**

```nginx
server {
    listen 80;
    server_name n8n.boldmind.ng;

    location / {
        proxy_pass http://localhost:5678;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

3. **Enable SSL with Certbot:**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d n8n.boldmind.ng
```

---

### Step 4: Import Workflows

1. **Access n8n:**
   - Visit: https://n8n.boldmind.ng
   - Create admin account

2. **Import Workflows:**
   - Click **"Workflows" > "Import from File"**
   - Import each workflow:
     - `facebook-lead-ads.json`
     - `instagram-automation.json`
     - `whatsapp-customer-service.json`

3. **Configure Credentials:**
   - For each workflow, set up credentials
   - Use environment variables where possible

4. **Activate Workflows:**
   - Toggle each workflow to "Active"

---

## Part 4: Testing

### Test Facebook Lead Ads

1. Create test lead form in Facebook Ads Manager
2. Submit test lead
3. Check n8n execution log
4. Verify database entry
5. Confirm notifications sent

### Test Instagram

1. Trigger publish webhook with test data
2. Verify post appears on Instagram
3. Comment on post
4. Verify AI reply

### Test WhatsApp

1. Send message to WhatsApp number
2. Verify auto-reply
3. Test human handoff
4. Check database logs

---

## Summary Checklist

### Facebook App Setup
- [ ] Created Facebook App
- [ ] Added all products (Login, Webhooks, Instagram, WhatsApp, Messenger)
- [ ] Created System User
- [ ] Generated System User Token
- [ ] Added assets to System User
- [ ] Got Page Access Token
- [ ] Got Instagram Business Account ID
- [ ] Got WhatsApp credentials
- [ ] Got Pixel ID
- [ ] Configured all webhooks
- [ ] Submitted for App Review

### Database Setup
- [ ] Created Neon PostgreSQL database (or MongoDB)
- [ ] Created all tables
- [ ] Got connection string
- [ ] Tested connection

### n8n Setup
- [ ] Configured environment variables
- [ ] Deployed n8n with Docker
- [ ] Set up reverse proxy with SSL
- [ ] Imported workflows
- [ ] Configured credentials
- [ ] Activated workflows
- [ ] Tested all integrations

---

## 🎉 You're Done!

Your n8n automation platform is now fully configured with Facebook/Meta integrations and ready to handle:
- Real-time lead capture
- Instagram automation
- WhatsApp customer service
- Messenger chatbots
- Campaign management
- Analytics tracking

**Access your platform at:** https://n8n.boldmind.ng
