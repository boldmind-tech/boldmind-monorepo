'use client';
import { Brain, Target, Zap, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [activeBrain, setActiveBrain] = useState('capture');

  const brains = [
    {
      id: 'capture',
      title: 'Capture Brain',
      icon: <Brain className="h-8 w-8" />,
      description: 'Capture ideas in any format - voice, text, image, or email.',
      color: 'bg-blue-500',
    },
    {
      id: 'focus',
      title: 'Focus Brain',
      icon: <Target className="h-8 w-8" />,
      description: 'ADHD-friendly Pomodoro timer with distraction blocking.',
      color: 'bg-green-500',
    },
    {
      id: 'connect',
      title: 'Connect Brain',
      icon: <Zap className="h-8 w-8" />,
      description: 'Visual knowledge graph that connects your ideas.',
      color: 'bg-purple-500',
    },
    {
      id: 'create',
      title: 'Create Brain',
      icon: <Sparkles className="h-8 w-8" />,
      description: 'Content pipeline manager for YouTube, blog, and social media.',
      color: 'bg-yellow-500',
    },
    {
      id: 'reflect',
      title: 'Reflect Brain',
      icon: <Shield className="h-8 w-8" />,
      description: 'Progress tracking with ADHD-friendly analytics.',
      color: 'bg-red-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Your Personal Operating System
          </h1>
          <p className="text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Finally, a productivity system that works WITH your ADHD/dyslexia, not against it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 text-lg font-semibold flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 text-lg font-semibold">
              Watch Demo Video
            </button>
          </div>
        </div>
      </div>

      {/* The 5 Brains */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet Your 5 AI-Powered Brains</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {brains.map((brain) => (
            <button
              key={brain.id}
              onClick={() => setActiveBrain(brain.id)}
              className={`p-6 rounded-xl transition-all ${activeBrain === brain.id ? `${brain.color} text-white scale-105` : 'bg-gray-800 hover:bg-gray-700'}`}
            >
              <div className="flex flex-col items-center">
                <div className="mb-4">{brain.icon}</div>
                <h3 className="font-semibold">{brain.title}</h3>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-gray-800 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <div className={`p-4 rounded-lg ${brains.find(b => b.id === activeBrain)?.color}`}>
              {brains.find(b => b.id === activeBrain)?.icon}
            </div>
            <div className="ml-6">
              <h3 className="text-3xl font-bold">
                {brains.find(b => b.id === activeBrain)?.title}
              </h3>
              <p className="text-gray-300 text-lg mt-2">
                {brains.find(b => b.id === activeBrain)?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}