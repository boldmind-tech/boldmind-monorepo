'use client';
import { Video, Calendar, TrendingUp, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [activePlatform, setActivePlatform] = useState('all');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Social Media Content Factory
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AI-powered video generation and multi-platform publishing automation.
          </p>
        </div>

        {/* Platform Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setActivePlatform('all')}
              className={`px-4 py-2 rounded-md ${activePlatform === 'all' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
            >
              All Platforms
            </button>
            <button
              onClick={() => setActivePlatform('youtube')}
              className={`px-4 py-2 rounded-md flex items-center ${activePlatform === 'youtube' ? 'bg-red-600 text-white' : 'text-gray-600'}`}
            >
              <Youtube className="h-4 w-4 mr-2" />
              YouTube
            </button>
            <button
              onClick={() => setActivePlatform('instagram')}
              className={`px-4 py-2 rounded-md flex items-center ${activePlatform === 'instagram' ? 'bg-pink-600 text-white' : 'text-gray-600'}`}
            >
              <Instagram className="h-4 w-4 mr-2" />
              Instagram
            </button>
            <button
              onClick={() => setActivePlatform('facebook')}
              className={`px-4 py-2 rounded-md flex items-center ${activePlatform === 'facebook' ? 'bg-blue-700 text-white' : 'text-gray-600'}`}
            >
              <Facebook className="h-4 w-4 mr-2" />
              Facebook
            </button>
            <button
              onClick={() => setActivePlatform('twitter')}
              className={`px-4 py-2 rounded-md flex items-center ${activePlatform === 'twitter' ? 'bg-blue-400 text-white' : 'text-gray-600'}`}
            >
              <Twitter className="h-4 w-4 mr-2" />
              Twitter
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
                <Video className="h-6 w-6" />
              </div>
              <span className="text-green-600 text-sm font-semibold">+24%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">1,247</div>
            <div className="text-gray-500 text-sm">Videos Generated</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                <Calendar className="h-6 w-6" />
              </div>
              <span className="text-green-600 text-sm font-semibold">+12%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">324</div>
            <div className="text-gray-500 text-sm">Posts Scheduled</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-50 text-green-600">
                <TrendingUp className="h-6 w-6" />
              </div>
              <span className="text-green-600 text-sm font-semibold">+18%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">89%</div>
            <div className="text-gray-500 text-sm">Engagement Rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-yellow-50 text-yellow-600">
                <Video className="h-6 w-6" />
              </div>
              <span className="text-green-600 text-sm font-semibold">-15%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">2.4h</div>
            <div className="text-gray-500 text-sm">Time Saved/Day</div>
          </div>
        </div>

        {/* Generate Button */}
        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700">
            Generate AI Video Content
          </button>
        </div>
      </div>
    </div>
  );
}