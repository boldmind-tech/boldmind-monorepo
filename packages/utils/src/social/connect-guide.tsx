import React from 'react';
import { ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';

export const SocialPlatformGuide = {
  facebook: {
    steps: [
      {
        title: 'Go to Meta Developers',
        description: 'Visit developers.facebook.com',
        link: 'https://developers.facebook.com',
        icon: '🌐'
      },
      {
        title: 'Create App',
        description: 'Click "Create App" → Choose "Business"',
        link: 'https://developers.facebook.com/apps',
        icon: '📱'
      },
      {
        title: 'Add Facebook Page',
        description: 'In App Dashboard → Add Product → Facebook Login',
        icon: '📘'
      },
      {
        title: 'Get Access Tokens',
        description: 'Generate Page Access Token with manage_pages permission',
        icon: '🔑'
      },
      {
        title: 'Webhooks Setup',
        description: 'Subscribe to: messages, feed, comments',
        icon: '🔄'
      }
    ],
    requiredPermissions: [
      'pages_manage_engagement',
      'pages_read_engagement', 
      'pages_messaging',
      'pages_show_list'
    ],
    apiLimits: '200 calls/hour per page',
    pricing: 'Free for basic usage'
  },

  instagram: {
    steps: [
      {
        title: 'Connect Instagram Account',
        description: 'Facebook Page → Instagram → Connect Account',
        icon: '📸'
      },
      {
        title: 'Instagram Basic Display',
        description: 'Add Instagram Basic Display product',
        icon: '🖼️'
      },
      {
        title: 'Get User ID',
        description: 'Use /me/accounts endpoint',
        icon: '🆔'
      },
      {
        title: 'Content Publishing',
        description: 'Requires Instagram Graph API & Facebook Login',
        icon: '📤'
      }
    ],
    requiredPermissions: [
      'instagram_basic',
      'instagram_manage_insights',
      'pages_show_list'
    ],
    apiLimits: '200 calls/hour',
    pricing: 'Free'
  },

  whatsapp: {
    steps: [
      {
        title: 'Business Manager',
        description: 'Go to business.facebook.com',
        link: 'https://business.facebook.com',
        icon: '🏢'
      },
      {
        title: 'WhatsApp Business API',
        description: 'Apply for WhatsApp Business API access',
        link: 'https://developers.facebook.com/docs/whatsapp/cloud-api',
        icon: '💬'
      },
      {
        title: 'Phone Number Verification',
        description: 'Verify business phone number',
        icon: '📱'
      },
      {
        title: 'Webhook Configuration',
        description: 'Set up message webhooks',
        icon: '🔄'
      },
      {
        title: 'Message Templates',
        description: 'Create approved message templates',
        icon: '📝'
      }
    ],
    requiredPermissions: ['whatsapp_business_management', 'whatsapp_business_messaging'],
    apiLimits: 'Free tier: 1,000 conversations/month',
    pricing: 'First 1,000 conversations free, then $0.005/message'
  },

  twitter: {
    steps: [
      {
        title: 'Twitter Developer Portal',
        description: 'Apply at developer.twitter.com',
        link: 'https://developer.twitter.com',
        icon: '🐦'
      },
      {
        title: 'Create Project & App',
        description: 'New Project → Standalone App',
        icon: '🛠️'
      },
      {
        title: 'OAuth 2.0 Setup',
        description: 'Enable OAuth 2.0 with PKCE',
        icon: '🔐'
      },
      {
        title: 'Permissions',
        description: 'Request: tweet.read, tweet.write, users.read',
        icon: '📋'
      },
      {
        title: 'API Keys',
        description: 'Save API Key, Secret, Bearer Token',
        icon: '🔑'
      }
    ],
    requiredPermissions: ['tweet.read', 'tweet.write', 'users.read'],
    apiLimits: 'Free: 500 tweets/month',
    pricing: 'Basic: Free, Pro: $99/month'
  },

  tiktok: {
    steps: [
      {
        title: 'TikTok for Developers',
        description: 'Go to developers.tiktok.com',
        link: 'https://developers.tiktok.com',
        icon: '🎵'
      },
      {
        title: 'Create App',
        description: 'Business Account required',
        icon: '📱'
      },
      {
        title: 'Permissions',
        description: 'video.upload, user.info',
        icon: '📋'
      },
      {
        title: 'OAuth Flow',
        description: 'Set up authorization callback',
        icon: '🔄'
      }
    ],
    requiredPermissions: ['video.upload', 'user.info'],
    apiLimits: 'Varies by plan',
    pricing: 'Contact sales'
  },

  youtube: {
    steps: [
      {
        title: 'Google Cloud Console',
        description: 'console.cloud.google.com',
        link: 'https://console.cloud.google.com',
        icon: '☁️'
      },
      {
        title: 'Enable YouTube API',
        description: 'API Library → YouTube Data API v3',
        icon: '🎬'
      },
      {
        title: 'Create Credentials',
        description: 'OAuth 2.0 Client ID',
        icon: '🔑'
      },
      {
        title: 'Set Redirect URI',
        description: 'Add your callback URL',
        icon: '🔄'
      },
      {
        title: 'Scopes',
        description: 'youtube.upload, youtube.readonly',
        icon: '👁️'
      }
    ],
    requiredPermissions: ['https://www.googleapis.com/auth/youtube.upload'],
    apiLimits: '10,000 units/day free',
    pricing: 'Free for most use cases'
  }
};

export function SocialConnectionWizard() {
  const [selectedPlatform, setSelectedPlatform] = React.useState<string>('facebook');
  const guide = SocialPlatformGuide[selectedPlatform as keyof typeof SocialPlatformGuide];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Connect Your Social Accounts</h1>
      
      {/* Platform Selector */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {Object.keys(SocialPlatformGuide).map((platform) => (
          <button
            key={platform}
            onClick={() => setSelectedPlatform(platform)}
            className={`p-4 rounded-xl border-2 transition-all capitalize ${
              selectedPlatform === platform
                ? 'border-blue-500 bg-blue-500/10'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="text-2xl mb-2">
              {platform === 'facebook' ? '📘' :
               platform === 'instagram' ? '📸' :
               platform === 'whatsapp' ? '💬' :
               platform === 'twitter' ? '🐦' :
               platform === 'tiktok' ? '🎵' : '📺'}
            </div>
            <div>{platform}</div>
          </button>
        ))}
      </div>

      {/* Step-by-Step Guide */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="capitalize">{selectedPlatform}</span> Setup Guide
        </h2>
        
        <div className="space-y-6">
          {guide.steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <span className="text-lg">{step.icon}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold">Step {index + 1}: {step.title}</span>
                  {/* {step.link && (
                    <a href={step.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 text-gray-500" />
                    </a>
                  )} */}
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Required Permissions */}
        <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
          <h3 className="font-bold mb-2 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Required Permissions
          </h3>
          <div className="flex flex-wrap gap-2">
            {guide.requiredPermissions.map((permission, i) => (
              <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                {permission}
              </span>
            ))}
          </div>
        </div>

        {/* API Limits & Pricing */}
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold mb-2">API Limits</h4>
            <p>{guide.apiLimits}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold mb-2">Pricing</h4>
            <p>{guide.pricing}</p>
          </div>
        </div>
      </div>

      {/* Connection Status */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="w-6 h-6 text-green-600" />
          <h3 className="text-lg font-bold">Auto-Connect Feature Available</h3>
        </div>
        <p className="mb-4">
          For faster setup, use our auto-connect feature that handles OAuth flows automatically.
        </p>
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700">
          Connect {selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1)} Now
        </button>
      </div>
    </div>
  );
}