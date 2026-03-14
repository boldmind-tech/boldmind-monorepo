// PACKAGES/utils/src/constants/social-accounts.ts
// Updated: March 2026 Sprint — Full Social Media Arsenal
// Strategy: Storytelling-first, automation via n8n, each account has a clear niche

export interface SocialAccount {
  id: string;
  name: string;
  url?: string;
  phone?: string;
  platform: string;
  niche?: string;           // What this account covers
  status: 'active' | 'new' | 'planned';
  linkedProducts?: string[]; // Which BoldMind products this account promotes
  postingFrequency?: string;
  contentStyle?: string;
}

// ================================================================
// === CURRENT + NEW ACCOUNTS — Full Arsenal ====================
// ================================================================

export const socialAccounts: Record<string, SocialAccount[]> = {

  // ============================================================
  // YOUTUBE — 4 existing + 3 new
  // ============================================================
  youtube: [
    // --- EXISTING ---
    {
      id: 'yt-boldmind',
      name: 'BoldMind Technology Solution Enterprise',
      url: 'https://youtube.com/@BoldMindTech',
      platform: 'youtube',
      status: 'active',
      niche: 'Tech education, AI tools, Nigerian entrepreneurship',
      linkedProducts: ['boldmind-hub', 'planai-suite', 'boldmind-os'],
      postingFrequency: '2x/week',
      contentStyle: 'Product demos, behind-the-scenes building, "AI for Nigerian business" tutorials',
    },
    {
      id: 'yt-codefires',
      name: 'Code Fires',
      url: 'https://youtube.com/@Codefires',
      platform: 'youtube',
      status: 'active',
      niche: 'Coding tutorials, African tech developers',
      linkedProducts: ['educenter', 'boldmind-os'],
      postingFrequency: '1x/week',
      contentStyle: 'Developer tutorials in Pidgin/English, "Build with BoldMind" series',
    },
    {
      id: 'yt-chainstocoins',
      name: 'Chains to Coins',
      url: 'https://youtube.com/@ChainstoCoins',
      platform: 'youtube',
      status: 'active',
      niche: 'Financial freedom, entrepreneurship storytelling',
      linkedProducts: ['planai-suite', 'emailscraper-pro', 'kolo-ai'],
      postingFrequency: '2x/week',
      contentStyle: 'Entrepreneurship origin stories, Nigerian business success narratives, income diversification',
    },
    {
      id: 'yt-echoes',
      name: 'Echoes of the Elders',
      url: 'https://youtube.com/@EchoesoftheElders-d68',
      platform: 'youtube',
      status: 'active',
      niche: 'African storytelling, culture, wisdom',
      linkedProducts: ['amebogist', 'boldmind-hub'],
      postingFrequency: '1x/week',
      contentStyle: 'Long-form storytelling, African proverbs applied to modern business, community building',
    },

    // --- NEW — Open These ---
    {
      id: 'yt-boldfit',
      name: 'BoldFit Nigeria',
      url: 'https://youtube.com/@BoldFitNigeria',  // register this handle
      platform: 'youtube',
      status: 'new',
      niche: 'Nigerian fitness, healthy eating, workout culture',
      linkedProducts: ['boldfit'],
      postingFrequency: '3x/week',
      contentStyle: 'Home workouts you can do in your compound, Nigerian food calorie reveals (suya, shawarma, jollof rice), weekly challenge videos, "From flabby to BoldFit" transformation series',
    },
    {
      id: 'yt-amebogist',
      name: 'AmeboGist TV',
      url: 'https://youtube.com/@AmeboGistTV',  // register this handle
      platform: 'youtube',
      status: 'new',
      niche: 'Nigerian news commentary, viral stories, entertainment in Pidgin',
      linkedProducts: ['amebogist'],
      postingFrequency: '5x/week',
      contentStyle: 'Short-form news commentary (5-8 min), "As e dey hot" news breaks, weekly trending stories roundup. Drive traffic to amebogist.ng. YouTube monetization goal.',
    },
    {
      id: 'yt-naijahustle',
      name: 'Naija Hustle Academy',
      url: 'https://youtube.com/@NaijaHustleAcademy',  // register this handle
      platform: 'youtube',
      status: 'new',
      niche: 'Nigerian small business education, marketing, sales',
      linkedProducts: ['educenter', 'planai-suite', 'emailscraper-pro', 'marketing-automation'],
      postingFrequency: '2x/week',
      contentStyle: '"How I use AI to run my business" series, live business plan creation demos, "From market stall to online business" documentary-style content',
    },
  ],

  // ============================================================
  // FACEBOOK — 4 existing + 3 new pages
  // ============================================================
  facebook: [
    // --- EXISTING ---
    {
      id: 'fb-boldmind',
      name: 'BoldMind Technology Solution Enterprise',
      url: 'https://facebook.com/boldmindng',
      platform: 'facebook',
      status: 'active',
      niche: 'Tech ecosystem, product launches, entrepreneur community',
      linkedProducts: ['boldmind-hub', 'planai-suite'],
      contentStyle: 'Product announcements, community spotlights, entrepreneur success stories',
    },
    {
      id: 'fb-amebogist',
      name: 'Amebo Gist',
      url: 'https://facebook.com/amebogistng',
      platform: 'facebook',
      status: 'active',
      niche: 'Nigerian news, entertainment, viral content — Pidgin English',
      linkedProducts: ['amebogist'],
      contentStyle: 'Breaking news, viral stories, community polls, AdSense-driving traffic content',
    },
    {
      id: 'fb-educenter',
      name: 'Educenter Nigeria',
      url: 'https://facebook.com/educenterc',
      platform: 'facebook',
      status: 'active',
      niche: 'Nigerian exam prep, JAMB/WAEC resources, student community',
      linkedProducts: ['educenter'],
      contentStyle: 'Daily JAMB questions, study tips, student success stories, exam countdown posts',
    },
    {
      id: 'fb-charles',
      name: 'Charles Uche Chijuka',
      url: 'https://facebook.com/cuche3',
      platform: 'facebook',
      status: 'active',
      niche: 'Personal brand — founder storytelling, tech entrepreneur journey',
      linkedProducts: ['boldmind-hub'],
      contentStyle: 'Personal building journey, raw behind-the-scenes, wins and failures, entrepreneur mindset',
    },

    // --- NEW — Create These Pages ---
    {
      id: 'fb-boldfit',
      name: 'BoldFit Nigeria',
      url: 'https://facebook.com/boldfitng',  // create this
      platform: 'facebook',
      status: 'new',
      niche: 'Nigerian fitness community — men and women',
      linkedProducts: ['boldfit'],
      contentStyle: '7-day challenge posts, Nigerian food nutrition facts, workout videos, community motivation, before/after posts (with permission)',
    },
    {
      id: 'fb-villagecircle',
      name: 'VillageCircle',
      url: 'https://facebook.com/villagecircleng',
      platform: 'facebook',
      status: 'new',
      niche: 'African community, storytelling, cultural connection',
      linkedProducts: ['amebogist', 'boldmind-hub'],
      contentStyle: 'Storytelling posts, African wisdom, community-building content, cross-promotion with YouTube',
    },
    {
      id: 'fb-planai',
      name: 'PlanAI — Business Tools for Nigeria',
      url: 'https://facebook.com/planai.ng',  // create this
      platform: 'facebook',
      status: 'new',
      niche: 'Nigerian SME business tools, AI automation for entrepreneurs',
      linkedProducts: ['planai-suite', 'ai-receptionist', 'emailscraper-pro'],
      contentStyle: 'Before/after: "Before PlanAI vs After" posts, client testimonial videos, live tool demos, Nigerian business tips',
    },
  ],

  // ============================================================
  // INSTAGRAM — 5 existing + 4 new
  // ============================================================
  instagram: [
    // --- EXISTING ---
    {
      id: 'ig-boldmind',
      name: '@boldmindng',
      url: 'https://instagram.com/boldmindng',
      platform: 'instagram',
      status: 'active',
      niche: 'Tech ecosystem, product aesthetic, founder life',
      linkedProducts: ['boldmind-hub'],
      contentStyle: 'Product screenshots, UI aesthetics, founder day-in-life Reels, "Build in public" Stories',
    },
    {
      id: 'ig-amebogist',
      name: '@amebogistng',
      url: 'https://instagram.com/amebogistng',
      platform: 'instagram',
      status: 'active',
      niche: 'Nigerian pop culture, trending gist, entertainment',
      linkedProducts: ['amebogist'],
      contentStyle: 'Trending news carousels, viral story Reels, Pidgin memes, link-in-bio to amebogist.ng',
    },
    {
      id: 'ig-educenter',
      name: '@educenterc',
      url: 'https://instagram.com/educenterc',
      platform: 'instagram',
      status: 'active',
      niche: 'Nigerian exam prep community, student motivation',
      linkedProducts: ['educenter'],
      contentStyle: 'Daily JAMB questions as carousel, study tips Reels, WAEC countdown, success stories',
    },
    {
      id: 'ig-charles',
      name: '@charleschijuka',
      url: 'https://instagram.com/charleschijuka',
      platform: 'instagram',
      status: 'active',
      niche: 'Personal brand — founder, builder, storyteller',
      linkedProducts: ['boldmind-hub'],
      contentStyle: 'Raw founder journey, "Day X of building BoldMind" series, entrepreneurship reflections',
    },
    {
      id: 'ig-villagecircle',
      name: '@villagecircleng',
      url: 'https://instagram.com/villagecircleng',
      platform: 'instagram',
      status: 'active',
      niche: 'African storytelling, community, cultural content',
      linkedProducts: ['amebogist', 'boldmind-hub'],
      contentStyle: 'Story-driven Reels, African proverbs + business application, VillageCircle community highlights',
    },

    // --- NEW — Create These ---
    {
      id: 'ig-boldfit',
      name: '@boldfit.ng',
      url: 'https://instagram.com/boldfit.ng',  // create this
      platform: 'instagram',
      status: 'new',
      niche: 'Nigerian fitness — workouts, food, transformation',
      linkedProducts: ['boldfit'],
      contentStyle: '30-day fitness challenge Reels, Nigerian food calorie swaps, morning workout routines, transformation Tuesday posts, fitness motivation in Pidgin',
    },
    {
      id: 'ig-planai',
      name: '@planai_ng',
      url: 'https://instagram.com/planai_ng',  // create this
      platform: 'instagram',
      status: 'new',
      niche: 'Nigerian business tools, AI automation for SMEs',
      linkedProducts: ['planai-suite', 'ai-receptionist'],
      contentStyle: '"How I got 500 leads while sleeping" Reels (AI Receptionist demos), carousel posts showing tool outputs, Nigerian entrepreneur testimonials',
    },
    {
      id: 'ig-naijahustle',
      name: '@naijahustleacademy',
      url: 'https://instagram.com/naijahustleacademy',  // create this
      platform: 'instagram',
      status: 'new',
      niche: 'Nigerian business education, sales, marketing tips',
      linkedProducts: ['educenter', 'emailscraper-pro', 'planai-suite'],
      contentStyle: 'Quick business tips Reels (60-second MBA), "How Nigerian businesses fail" educational carousels, tool tutorials in simple language',
    },
    {
      id: 'ig-kolo',
      name: '@koloai.ng',
      url: 'https://instagram.com/koloai.ng',  // create this
      platform: 'instagram',
      status: 'planned',
      niche: 'Nigerian savings culture, group thrift (ajo/esusu), fintech',
      linkedProducts: ['kolo-ai'],
      contentStyle: 'Ajo/esusu education content, savings challenge posts, "How to grow your ajo group" tips',
    },
  ],

  // ============================================================
  // TWITTER / X — 5 existing + 3 new
  // ============================================================
  twitter: [
    // --- EXISTING ---
    {
      id: 'tw-villagecircle',
      name: 'VillageCircle',
      url: 'https://x.com/villagecircl',
      platform: 'twitter',
      status: 'active',
      niche: 'African storytelling, tech-meets-culture commentary',
      linkedProducts: ['amebogist', 'boldmind-hub'],
      contentStyle: 'Long-form threads on African business, storytelling threads, commentary on Nigerian tech',
    },
    {
      id: 'tw-amebogist',
      name: 'AmeboGist',
      url: 'https://x.com/Amebo__Gist',
      platform: 'twitter',
      status: 'active',
      niche: 'Breaking Nigerian news, viral gist, Pidgin commentary',
      linkedProducts: ['amebogist'],
      contentStyle: 'Real-time news tweets, trending topic threads, Pidgin hot-takes',
    },
    {
      id: 'tw-chainstocoins',
      name: 'ChainsToCoins',
      url: 'https://x.com/ChainsToCoins',
      platform: 'twitter',
      status: 'active',
      niche: 'Financial freedom, African entrepreneurship',
      linkedProducts: ['planai-suite', 'kolo-ai'],
      contentStyle: 'Entrepreneurship threads, money mindset tweets, Nigerian business commentary',
    },
    {
      id: 'tw-codefires',
      name: 'CodeFiresAfrica',
      url: 'https://x.com/mediaman9ja',
      platform: 'twitter',
      status: 'active',
      niche: 'African tech, coding, developer community',
      linkedProducts: ['educenter', 'boldmind-os'],
      contentStyle: 'Tech threads, African dev community, "Build in Africa" content',
    },
    {
      id: 'tw-charles',
      name: 'Charles Uche Chijuka',
      url: 'https://x.com/CharlesUcheCh',
      platform: 'twitter',
      status: 'active',
      niche: 'Personal brand, founder journey, startup thoughts',
      linkedProducts: ['boldmind-hub'],
      contentStyle: 'Build-in-public updates, startup learnings, 30-day sprint documentation',
    },

    // --- NEW ---
    {
      id: 'tw-boldmind',
      name: 'BoldMind NG',
      url: 'https://x.com/BoldMindNG',  // register this
      platform: 'twitter',
      status: 'new',
      niche: 'Official BoldMind ecosystem account',
      linkedProducts: ['boldmind-hub'],
      contentStyle: 'Product launches, ecosystem updates, Nigerian tech news commentary, community retweets',
    },
    {
      id: 'tw-boldfit',
      name: 'BoldFit Nigeria',
      url: 'https://x.com/BoldFitNG',  // register this
      platform: 'twitter',
      status: 'new',
      niche: 'Nigerian fitness culture, health tips',
      linkedProducts: ['boldfit'],
      contentStyle: 'Daily fitness motivation, Nigerian food health facts, fitness challenge announcements',
    },
    {
      id: 'tw-planai',
      name: 'PlanAI Nigeria',
      url: 'https://x.com/PlanAI_NG',  // register this
      platform: 'twitter',
      status: 'planned',
      niche: 'AI tools for Nigerian entrepreneurs',
      linkedProducts: ['planai-suite'],
      contentStyle: 'AI tool tips, Nigerian business automation case studies, product feature threads',
    },
  ],

  // ============================================================
  // TIKTOK — 3 existing + 3 new (highest growth potential)
  // ============================================================
  tiktok: [
    // --- EXISTING (VillageCircle = highest growth per your data) ---
    {
      id: 'tt-codefires',
      name: 'CodeFiresAfrica',
      url: 'https://tiktok.com/@codesfiresafrica',
      platform: 'tiktok',
      status: 'active',
      niche: 'African tech, coding, developer culture',
      linkedProducts: ['educenter', 'boldmind-os'],
      contentStyle: 'Quick coding tips (60s), "Nigerians building tech" series, developer life in Africa',
    },
    {
      id: 'tt-villagecircle',
      name: 'VillageCircle',
      url: 'https://tiktok.com/@viilagecircle',
      platform: 'tiktok',
      status: 'active',
      niche: 'African storytelling, culture, wisdom — HIGHEST GROWTH ACCOUNT',
      linkedProducts: ['amebogist', 'boldmind-hub'],
      postingFrequency: '2x/day (priority account)',
      contentStyle: 'Emotional storytelling videos (2-5 min), "What Nigerians never talk about" series, proverb + business lesson mashups. PRIORITY: double down on what drove growth',
    },
    {
      id: 'tt-chainstocoins',
      name: 'ChainsToCoins',
      url: 'https://tiktok.com/@chainstocoins',
      platform: 'tiktok',
      status: 'active',
      niche: 'Financial freedom, hustle culture, income building',
      linkedProducts: ['planai-suite', 'kolo-ai'],
      contentStyle: '"How I made ₦X with zero capital" stories, Nigerian money mindset, savings culture content',
    },

    // --- NEW ---
    {
      id: 'tt-boldfit',
      name: 'BoldFit Nigeria',
      url: 'https://tiktok.com/@boldfitnigeria',  // create this
      platform: 'tiktok',
      status: 'new',
      niche: 'Nigerian fitness — biggest opportunity on TikTok right now',
      linkedProducts: ['boldfit'],
      postingFrequency: '3x/day recommended',
      contentStyle: 'Home workout challenges, Nigerian food calorie reveals (hook: "You ate suya? Here\'s what that cost you"), 30-day body transformation, "Fit Naija" lifestyle content, duets with fitness creators',
    },
    {
      id: 'tt-amebogist',
      name: 'AmeboGist',
      url: 'https://tiktok.com/@amebogistng',  // create this
      platform: 'tiktok',
      status: 'new',
      niche: 'Nigerian viral stories, Pidgin commentary, news entertainment',
      linkedProducts: ['amebogist'],
      postingFrequency: '2x/day',
      contentStyle: '"You won\'t believe this story" viral hooks, Pidgin news commentary, trending Nigerian topics with twist endings. TikTok algorithm loves news-style content.',
    },
    {
      id: 'tt-boldmind',
      name: 'BoldMind Tech',
      url: 'https://tiktok.com/@boldmindtech',  // create this
      platform: 'tiktok',
      status: 'planned',
      niche: 'Nigerian tech entrepreneur building in public',
      linkedProducts: ['boldmind-hub'],
      contentStyle: '"Watch me build a tech startup in Nigeria" series, AI tools demos in Pidgin, "How I use AI to do X in 5 minutes" format',
    },
  ],

  // ============================================================
  // WHATSAPP — 3 existing
  // ============================================================
  whatsapp: [
    {
      id: 'wa-charles',
      name: 'Charles (Personal)',
      phone: '+2348136705908',
      platform: 'whatsapp',
      status: 'active',
      niche: 'Direct outreach to scraped business list, personalized follow-ups',
      contentStyle: 'Personalized business messages. Use AI Receptionist templates. 20 outreach messages/day.',
    },
    {
      id: 'wa-boldmind',
      name: 'BoldMind Technology Solution Enterprises',
      phone: '+2349138349271',
      platform: 'whatsapp',
      status: 'active',
      niche: 'Business WhatsApp — client onboarding, support, demos',
      linkedProducts: ['ai-receptionist', 'planai-suite'],
      contentStyle: 'Business card shareable number. WhatsApp Business API for AI Receptionist demos.',
    },
    {
      id: 'wa-villagecircle',
      name: 'Village Circle',
      phone: '+2348055762023',
      platform: 'whatsapp',
      status: 'active',
      niche: 'Community WhatsApp for VillageCircle audience',
      contentStyle: 'Broadcast list for story updates, EduCenter links during exam season',
    },
  ],

  // ============================================================
  // LINKEDIN — 2 existing + 1 new
  // ============================================================
  linkedin: [
    {
      id: 'li-boldmind',
      name: 'BoldMind Technology Solutions',
      url: 'https://linkedin.com/company/boldmindtech',
      platform: 'linkedin',
      status: 'active',
      niche: 'B2B, corporate, investor-facing content',
      linkedProducts: ['planai-suite', 'emailscraper-pro', 'ai-receptionist'],
      contentStyle: 'Company milestones, product launches, "Building Nigeria\'s tech ecosystem" thought leadership, AI Receptionist case studies for B2B audience',
    },
    {
      id: 'li-charles',
      name: 'Charles Uche Chijuka',
      url: 'https://linkedin.com/in/charleschijuka',
      platform: 'linkedin',
      status: 'active',
      niche: 'Personal brand — founder, entrepreneur, builder',
      linkedProducts: ['boldmind-hub'],
      contentStyle: 'Sprint updates, lessons from building 32 products, Nigerian startup ecosystem commentary, fundraising journey (when ready)',
    },
    {
      id: 'li-planai',
      name: 'PlanAI — AI Business Suite',
      url: 'https://linkedin.com/company/planai-ng',  // create this
      platform: 'linkedin',
      status: 'new',
      niche: 'B2B AI tools, Nigerian SME automation, corporate sales',
      linkedProducts: ['planai-suite', 'ai-receptionist', 'emailscraper-pro'],
      contentStyle: 'ROI case studies, "How X business reduced costs with AI" articles, B2B value proposition content, corporate product showcase',
    },
  ],
};

// ================================================================
// === CONTENT CALENDAR STRATEGY ================================
// ================================================================

export const contentStrategy = {
  // Accounts to prioritize for automation via n8n + Social Factory
  automationPriority: [
    'tt-villagecircle',    // Highest growth — maintain momentum
    'tt-boldfit',          // New — needs volume to grow
    'tt-amebogist',        // News content — high frequency needed
    'ig-boldfit',          // Support TikTok with repurposed content
    'fb-amebogist',        // Traffic driver for AdSense
    'tw-amebogist',        // Real-time news → drives amebogist.ng
  ],

  // Storytelling accounts — Charles manages personally (your strongest skill)
  personalContent: [
    'ig-charles',
    'tw-charles',
    'yt-chainstocoins',
    'tt-villagecircle',   // This one too — your storytelling is what drives it
    'yt-echoes',
  ],

  // Product → Primary social account mapping for outreach
  productPromotionMapping: {
    'ai-receptionist': ['fb-planai', 'ig-planai', 'li-boldmind', 'wa-boldmind'],
    'educenter': ['fb-educenter', 'ig-educenter', 'wa-villagecircle'],
    'amebogist': ['fb-amebogist', 'ig-amebogist', 'tt-amebogist', 'tw-amebogist'],
    'boldfit': ['tt-boldfit', 'ig-boldfit', 'yt-boldfit', 'tw-boldfit'],
    'emailscraper-pro': ['li-planai', 'fb-planai', 'tw-planai'],
    'planai-suite': ['li-boldmind', 'ig-planai', 'fb-planai'],
    'boldmind-os': ['ig-charles', 'tt-boldmind', 'yt-boldmind'],
    'social-factory': ['ig-boldmind', 'li-boldmind'],
  },

  // n8n Posting Schedule Template (run via n8n workflow)
  postingSchedule: {
    tiktok: {
      times: ['07:00', '13:00', '20:00'],  // Nigerian peak times
      frequency: 'daily for tt-villagecircle, tt-boldfit, tt-amebogist',
    },
    instagram: {
      times: ['08:00', '18:00'],
      frequency: 'daily for ig-boldfit, ig-amebogist; 3x/week others',
    },
    facebook: {
      times: ['09:00', '17:00'],
      frequency: '2x/day for fb-amebogist; daily for others',
    },
    twitter: {
      times: ['07:30', '12:00', '19:00', '22:00'],
      frequency: '4x/day for tw-amebogist (news account); 2x/day others',
    },
    youtube: {
      times: ['16:00'],  // 4pm Nigeria time (post-work traffic)
      frequency: 'per-channel schedule above',
    },
  },
};

// ================================================================
// === HELPER FUNCTIONS =========================================
// ================================================================

export function getAccountsByPlatform(platform: string): SocialAccount[] {
  return socialAccounts[platform] || [];
}

export function getAccountsByProduct(productSlug: string): SocialAccount[] {
  const allAccounts = Object.values(socialAccounts).flat();
  return allAccounts.filter(a => a.linkedProducts?.includes(productSlug));
}

export function getActiveAccounts(): SocialAccount[] {
  return Object.values(socialAccounts).flat().filter(a => a.status === 'active');
}

export function getNewAccountsToCreate(): SocialAccount[] {
  return Object.values(socialAccounts).flat().filter(a => a.status === 'new');
}

export function getAccountCount(): Record<string, number> {
  return Object.fromEntries(
    Object.entries(socialAccounts).map(([platform, accounts]) => [platform, accounts.length])
  );
}