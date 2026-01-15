type ProductKey = 'amebogist' | 'educenter';

interface PlatformRules {
  platforms: string[];
  schedule: string;
  templates: Record<string, string>;
}

export const socialAccounts = {
  youtube: [
    { id: 'channel1', name: 'Boldmind Technology Solution Enterprise', url: 'https://youtube.com/@BoldMindTech' },
    { id: 'channel2', name: 'Code Fires', url: 'https://youtube.com/@Codefires' },
    { id: 'channel3', name: 'Chains to Coins', url: 'https://youtube.com/@ChainstoCoins' },
    { id: 'channel4', name: 'Echoes of the Elders', url: 'https://youtube.com/@EchoesoftheElders-d68' },
  ],
  facebook: [
    { id: 'fb1', name: 'BoldMind Technology Solution Enterprise', url: 'https://facebook.com/BoldMindTech' },
    { id: 'fb2', name: 'Amebo Gist', url: 'https://facebook.com/amebogistng' },
    { id: 'fb3', name: 'Educenter', url: 'https://facebook.com/DevConectPage' },
    { id: 'fb4', name: 'Charles Uche Chijuka', url: 'https://facebook.com/cuche3' },
  ],
  instagram: [
    { id: 'ig1', name: '@boldmindtech', url: 'https://instagram.com/boldmindtech' },
    { id: 'ig2', name: '@amebogist10', url: 'https://instagram.com/amebogist10' },
    { id: 'ig3', name: '@educenterc', url: 'https://instagram.com/educenterc' },
    { id: 'ig4', name: '@charleschijuka', url: 'https://instagram.com/charleschijuka' },
    { id: 'ig5', name: '@villagecircl', url: 'https://instagram.com/villagecircl' },
  ],
  x: [
    { id: 'tw1', name: 'VillageCircle', url: 'https://x.com/bobbycuc2025' },
    { id: 'tw2', name: 'AmeboGist', url: 'https://x.com/Amebo__Gist' },
    { id: 'tw3', name: 'ChainsToCoins', url: 'https://x.com/ChainsToCoins' },
    { id: 'tw4', name: 'CodeFiresAfrica', url: 'https://x.com/mediaman9ja' },
    { id: 'tw5', name: 'Charles Uche Chijuka', url: 'https://x.com/CharlesUcheCh' },
  ],
  tiktok: [
    { id: 'tt1', name: 'CodeFiresAfrica', url: 'https://tiktok.com/@codesfiresafrica' },
    { id: 'tt2', name: 'VillageCircle', url: 'https://tiktok.com/@viilagecircle' },
  ],
  whatsapp: [
    { id: 'wa1', name: 'Charles', phone: '+2348136705908' },
    { id: 'wa2', name: 'BoldMind Technology Solution Enterpires', phone: '+2349138349271' },
  ]
};

export const crossPostingRules: Record<ProductKey, PlatformRules> = {
  'amebogist': {
    platforms: ['facebook', 'twitter', 'instagram', 'tiktok'],
    schedule: 'daily',
    templates: {
      facebook: '📰 {title}\n\n{excerpt}\n\n🔗 Read full gist: {url}\n\n#AmeboGist #NaijaNews #TechNaija',
      twitter: '📰 {title}\n\n{url}\n\n#AmeboGist #NaijaTech',
      instagram: '{title}\n\n{excerpt}\n\n🔗 Link in bio\n\n#AmeboGist #NaijaNews #Nigeria',
    }
  },
  'educenter': {
    platforms: ['facebook', 'twitter', 'instagram', 'youtube'],
    schedule: 'weekly',
    templates: {
      facebook: '🎓 New lesson: {title}\n\nPerfect for JAMB/WAEC prep!\n\n{url}\n\n#EduCenter #JAMB #Education',
      twitter: '🎓 {title}\n\n{url}\n\n#EduCenter #JAMB2026',
    }
  }
};
