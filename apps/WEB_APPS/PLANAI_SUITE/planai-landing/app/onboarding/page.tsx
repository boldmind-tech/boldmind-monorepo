'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  MessageSquare, 
  Users, 
  Target, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { SuperNavbar } from '@boldmind/ui';

export default function PlanAIOnboarding() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    platforms: [] as string[],
    budget: '',
    goals: [] as string[],
  });

  const industries = [
    'E-commerce', 'Consulting', 'Education', 'Real Estate', 'Healthcare',
    'Fashion', 'Tech Startup', 'Restaurant', 'Beauty', 'Other'
  ];

  const platforms = [
    { id: 'facebook', name: 'Facebook', icon: '📘' },
    { id: 'instagram', name: 'Instagram', icon: '📸' },
    { id: 'whatsapp', name: 'WhatsApp', icon: '💬' },
    { id: 'twitter', name: 'Twitter/X', icon: '🐦' },
    { id: 'tiktok', name: 'TikTok', icon: '🎵' },
    { id: 'youtube', name: 'YouTube', icon: '📺' },
  ];

  const goals = [
    'Generate more leads',
    'Book more appointments',
    'Reduce response time',
    'Scale customer service',
    'Increase sales',
    'Save time on admin',
  ];

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    // Submit to your receptionist backend
    const response = await fetch('https://api.boldmind.ng/onboarding', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setStep(6); // Success step
    }
  };

  const steps = [
    { number: 1, title: 'Business Info', icon: '🏢' },
    { number: 2, title: 'Platforms', icon: '📱' },
    { number: 3, title: 'Goals', icon: '🎯' },
    { number: 4, title: 'Budget', icon: '💰' },
    { number: 5, title: 'Review', icon: '📋' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <SuperNavbar
        logoSrc="/logo.png"
        links={[
          { href: '/planai', label: 'Back to PlanAI', icon: '⬅️' },
          { href: '/planai/demo', label: 'Watch Demo', icon: '📺' },
          { href: '/planai/pricing', label: 'Pricing', icon: '💰' },
        ]}
        cta={{ href: '/login', label: 'Client Login', icon: '🔐' }}
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {steps.map((s) => (
              <div key={s.number} className="text-center">
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2
                  ${step >= s.number ? 'bg-blue-500' : 'bg-gray-700'}
                `}>
                  <span className="text-xl">{s.icon}</span>
                </div>
                <span className="text-sm">{s.title}</span>
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-700 rounded-full">
            <motion.div
              className="h-full bg-blue-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Business Info */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold mb-6">Tell us about your business</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block mb-2">Business Name *</label>
                <input
                  type="text"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3"
                  placeholder="e.g., Naija Fashion House"
                  value={formData.businessName}
                  onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                />
              </div>

              <div>
                <label className="block mb-2">Industry *</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        formData.industry === industry
                          ? 'border-blue-500 bg-blue-500/20'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                      onClick={() => setFormData({...formData, industry})}
                    >
                      {industry}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrev}
                className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.businessName || !formData.industry}
                className="px-6 py-3 bg-blue-600 rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50"
              >
                Next: Choose Platforms
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Platforms */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold mb-6">Where do you connect with customers?</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  className={`p-6 rounded-xl border-2 transition-all flex flex-col items-center ${
                    formData.platforms.includes(platform.id)
                      ? 'border-blue-500 bg-blue-500/20'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                  onClick={() => {
                    const newPlatforms = formData.platforms.includes(platform.id)
                      ? formData.platforms.filter(p => p !== platform.id)
                      : [...formData.platforms, platform.id];
                    setFormData({...formData, platforms: newPlatforms});
                  }}
                >
                  <span className="text-3xl mb-2">{platform.icon}</span>
                  <span>{platform.name}</span>
                </button>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrev}
                className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={formData.platforms.length === 0}
                className="px-6 py-3 bg-blue-600 rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50"
              >
                Next: Set Goals
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Goals */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold mb-6">What do you want to achieve?</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {goals.map((goal) => (
                <button
                  key={goal}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    formData.goals.includes(goal)
                      ? 'border-green-500 bg-green-500/20'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                  onClick={() => {
                    const newGoals = formData.goals.includes(goal)
                      ? formData.goals.filter(g => g !== goal)
                      : [...formData.goals, goal];
                    setFormData({...formData, goals: newGoals});
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5" />
                    <span>{goal}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrev}
                className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-blue-600 rounded-lg font-bold hover:bg-blue-700"
              >
                Next: Budget
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 4: Budget */}
        {step === 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold mb-6">What's your budget?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { range: '₦10k-₦30k', label: 'Starter', features: ['1 Platform', 'Basic AI'] },
                { range: '₦30k-₦80k', label: 'Professional', features: ['3 Platforms', 'Advanced AI'] },
                { range: '₦80k+', label: 'Enterprise', features: ['All Platforms', 'Custom AI'] },
              ].map((plan) => (
                <button
                  key={plan.range}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    formData.budget === plan.range
                      ? 'border-purple-500 bg-purple-500/20'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                  onClick={() => setFormData({...formData, budget: plan.range})}
                >
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold">{plan.range}</div>
                    <div className="text-gray-400">/month</div>
                  </div>
                  <div className="text-center mb-4">
                    <div className="font-bold mb-2">{plan.label}</div>
                    <ul className="text-sm space-y-1">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrev}
                className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.budget}
                className="px-6 py-3 bg-blue-600 rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50"
              >
                Next: Review
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 5: Review */}
        {step === 5 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold mb-6">Review your setup</h2>
            
            <div className="space-y-6 mb-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="text-gray-400 text-sm">Business</div>
                  <div className="font-bold">{formData.businessName}</div>
                  <div className="text-sm">{formData.industry}</div>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="text-gray-400 text-sm">Platforms</div>
                  <div className="font-bold">{formData.platforms.length} platforms</div>
                  <div className="text-sm">
                    {formData.platforms.map(p => 
                      platforms.find(pl => pl.id === p)?.name
                    ).join(', ')}
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <div className="text-gray-400 text-sm">Goals</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.goals.map((goal, i) => (
                    <span key={i} className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                      {goal}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <div className="text-gray-400 text-sm">Budget</div>
                <div className="text-2xl font-bold">{formData.budget}/month</div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrev}
                className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-green-600 rounded-lg font-bold hover:bg-green-700 flex items-center gap-2"
              >
                Launch AI Receptionist
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Success Step */}
        {step === 6 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10"
          >
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">AI Receptionist Activated! 🎉</h2>
            <p className="text-xl text-gray-300 mb-8">
              Your AI assistant is now being configured for {formData.businessName}
            </p>
            
            <div className="max-w-md mx-auto space-y-4 mb-8">
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="font-bold">Next Steps:</div>
                    <div className="text-sm text-gray-400">
                      1. Connect your social media accounts
                      2. Set up auto-reply templates
                      3. Launch your AI assistant
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <div>
                    <div className="font-bold">Setup Time: 24-48 hours</div>
                    <div className="text-sm text-gray-400">
                      Our team will reach out to complete configuration
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-x-4">
              <a
                href="/dashboard"
                className="inline-block px-6 py-3 bg-blue-600 rounded-lg font-bold hover:bg-blue-700"
              >
                Go to Dashboard
              </a>
              <a
                href="/planai"
                className="inline-block px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10"
              >
                Explore More AI Tools
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}