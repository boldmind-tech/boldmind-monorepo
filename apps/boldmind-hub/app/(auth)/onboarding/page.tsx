'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// ─── Types ───────────────────────────────────────────────────────────────────

type EcosystemRole = 'hustler' | 'founder' | 'creator' | 'student';
type DigitalMaturity = 'low' | 'medium' | 'high';
type Step = 'role' | 'preferences' | 'maturity' | 'done';

interface OnboardingState {
  role: EcosystemRole | null;
  preferences: string[];
  digitalMaturity: DigitalMaturity | null;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const ROLES = [
  {
    key: 'hustler' as EcosystemRole,
    icon: '⚡',
    label: 'Hustler',
    sub: 'Side income · Daily grind · Making moves',
    color: 'from-orange-500 to-amber-400',
    border: 'border-orange-400',
    bg: 'bg-orange-950/30',
    selectedBg: 'bg-orange-500/20',
    pill: 'bg-orange-500/15 text-orange-300',
    perks: ['Access to EmailScraper Pro', 'Social Content Factory', 'AmeboGist trending'],
  },
  {
    key: 'student' as EcosystemRole,
    icon: '🎓',
    label: 'Student',
    sub: 'JAMB · WAEC · NECO · Exam prep',
    color: 'from-blue-500 to-cyan-400',
    border: 'border-blue-400',
    bg: 'bg-blue-950/30',
    selectedBg: 'bg-blue-500/20',
    pill: 'bg-blue-500/15 text-blue-300',
    perks: ['EduCenter CBT simulator', '10,000+ past questions', 'Study streaks & leaderboard'],
  },
  {
    key: 'creator' as EcosystemRole,
    icon: '✍️',
    label: 'Creator',
    sub: 'Content · Community · Monetization',
    color: 'from-purple-500 to-pink-400',
    border: 'border-purple-400',
    bg: 'bg-purple-950/30',
    selectedBg: 'bg-purple-500/20',
    pill: 'bg-purple-500/15 text-purple-300',
    perks: ['AmeboGist creator dashboard', 'Social Content Factory', 'Earn from your content'],
  },
  {
    key: 'founder' as EcosystemRole,
    icon: '🚀',
    label: 'Founder',
    sub: 'Business · Tools · AI · Growth',
    color: 'from-emerald-500 to-teal-400',
    border: 'border-emerald-400',
    bg: 'bg-emerald-950/30',
    selectedBg: 'bg-emerald-500/20',
    pill: 'bg-emerald-500/15 text-emerald-300',
    perks: ['AI Receptionist', 'Business planning tools', 'Digital storefront'],
  },
];

const PRODUCTS = [
  { key: 'amebogist', icon: '📰', label: 'AmeboGist', sub: 'Nigerian news in Pidgin', for: ['hustler', 'creator', 'founder'] },
  { key: 'educenter', icon: '🎓', label: 'EduCenter', sub: 'JAMB & exam prep', for: ['student'] },
  { key: 'planai', icon: '🧠', label: 'PlanAI Suite', sub: 'AI business tools', for: ['founder', 'hustler'] },
  { key: 'boldmind-os', icon: '🧩', label: 'BoldMind OS', sub: 'Focus & productivity', for: ['hustler', 'founder', 'creator'] },
  { key: 'naija-fit', icon: '💪', label: 'NaijaFit', sub: 'Fitness & wellness', for: ['hustler', 'student', 'founder', 'creator'] },
  { key: 'emailscraper', icon: '🔍', label: 'EmailScraper Pro', sub: 'Lead generation', for: ['founder', 'hustler'] },
  { key: 'social-factory', icon: '🎬', label: 'Social Factory', sub: 'Auto-post content', for: ['creator', 'founder', 'hustler'] },
  { key: 'skillgig', icon: '🎭', label: 'SkillGig', sub: 'Find & book talent', for: ['hustler', 'founder'] },
];

const MATURITY_LEVELS = [
  {
    key: 'low' as DigitalMaturity,
    icon: '🌱',
    label: 'Just Starting Out',
    sub: "I'm new to digital tools — keep it simple",
    hint: "We'll show simpler UI and guide you step by step",
  },
  {
    key: 'medium' as DigitalMaturity,
    icon: '⚙️',
    label: 'Getting the Hang of It',
    sub: 'I use a few apps and am learning more',
    hint: "We'll give you more features with clear guidance",
  },
  {
    key: 'high' as DigitalMaturity,
    icon: '🔥',
    label: 'Power User',
    sub: 'I move fast — give me everything',
    hint: "Full access to all features, advanced controls unlocked",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>('role');
  const [state, setState] = useState<OnboardingState>({
    role: null,
    preferences: [],
    digitalMaturity: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dots, setDots] = useState('');

  // Animated dots on done screen
  useEffect(() => {
    if (step !== 'done') return;
    const id = setInterval(() => setDots(d => d.length >= 3 ? '' : d + '.'), 500);
    return () => clearInterval(id);
  }, [step]);

  const currentRole = ROLES.find(r => r.key === state.role);
  const suggestedProducts = state.role
    ? PRODUCTS.filter(p => p.for.includes(state.role!))
    : PRODUCTS;

  const togglePreference = (key: string) => {
    setState(s => ({
      ...s,
      preferences: s.preferences.includes(key)
        ? s.preferences.filter(p => p !== key)
        : [...s.preferences, key],
    }));
  };

  const handleSubmit = async () => {
    if (!state.role || !state.digitalMaturity) return;
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/auth/complete-onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(state),
      });

      if (res.ok) {
        setStep('done');
        setTimeout(() => router.push('/dashboard'), 2200);
      }
    } catch {
      setIsSubmitting(false);
    }
  };

  const progress = { role: 33, preferences: 66, maturity: 90, done: 100 }[step];

  return (
    <div className="min-h-screen bg-[#080C14] text-white font-sans overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <header className="relative flex items-center justify-between px-6 py-5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          <span className="font-bold text-white/90 tracking-tight">BoldMind</span>
        </div>
        {step !== 'done' && (
          <div className="flex items-center gap-3">
            <div className="w-40 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-400 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs text-white/40 tabular-nums">{progress}%</span>
          </div>
        )}
      </header>

      {/* ─── STEP: Role Selection ─────────────────────────────────────────── */}
      {step === 'role' && (
        <main className="relative max-w-2xl mx-auto px-4 py-14">
          <div className="text-center mb-10">
            <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-3">Step 1 of 3</p>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">
              Who are you in<br />
              <span className="text-amber-400">this hustle?</span>
            </h1>
            <p className="text-white/50 text-base">
              Pick the one that fits best — you can always change this later.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ROLES.map(role => {
              const isSelected = state.role === role.key;
              return (
                <button
                  key={role.key}
                  onClick={() => setState(s => ({ ...s, role: role.key }))}
                  className={`
                    relative text-left p-5 rounded-2xl border transition-all duration-200 group
                    ${isSelected
                      ? `${role.border} ${role.selectedBg} shadow-lg shadow-white/5`
                      : 'border-white/8 bg-white/3 hover:border-white/20 hover:bg-white/5'
                    }
                  `}
                >
                  {isSelected && (
                    <div className="absolute top-3 right-3 w-5 h-5 bg-white/10 rounded-full flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-white rounded-full" />
                    </div>
                  )}
                  <span className="text-3xl mb-3 block">{role.icon}</span>
                  <h3 className="font-bold text-lg text-white mb-0.5">{role.label}</h3>
                  <p className="text-white/50 text-sm mb-3">{role.sub}</p>
                  <div className="space-y-1">
                    {role.perks.map(p => (
                      <div key={p} className="flex items-center gap-1.5">
                        <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${role.color}`} />
                        <span className="text-white/40 text-xs">{p}</span>
                      </div>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => state.role && setStep('preferences')}
              disabled={!state.role}
              className={`
                px-8 py-3.5 rounded-xl font-semibold text-base transition-all duration-200
                ${state.role
                  ? 'bg-amber-400 text-black hover:bg-amber-300 shadow-lg shadow-amber-400/20'
                  : 'bg-white/8 text-white/25 cursor-not-allowed'
                }
              `}
            >
              Continue →
            </button>
          </div>
        </main>
      )}

      {/* ─── STEP: Product Preferences ───────────────────────────────────── */}
      {step === 'preferences' && (
        <main className="relative max-w-2xl mx-auto px-4 py-14">
          <div className="text-center mb-10">
            <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-3">Step 2 of 3</p>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">
              Which tools do you<br />
              <span className="text-amber-400">want to explore?</span>
            </h1>
            <p className="text-white/50 text-sm">
              {currentRole && (
                <span>
                  We highlighted the best picks for{' '}
                  <span className="text-white/70">{currentRole.label}s</span> like you. Pick as many as you want.
                </span>
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {PRODUCTS.map(product => {
              const isSelected = state.preferences.includes(product.key);
              const isSuggested = suggestedProducts.some(p => p.key === product.key);

              return (
                <button
                  key={product.key}
                  onClick={() => togglePreference(product.key)}
                  className={`
                    relative p-4 rounded-xl border text-left transition-all duration-150
                    ${isSelected
                      ? 'border-amber-400/60 bg-amber-400/10 shadow-sm shadow-amber-400/10'
                      : isSuggested
                        ? 'border-white/15 bg-white/5 hover:border-white/25'
                        : 'border-white/6 bg-white/2 hover:border-white/15 opacity-60'
                    }
                  `}
                >
                  {isSuggested && !isSelected && (
                    <div className="absolute -top-1.5 -right-1.5">
                      <span className="text-[9px] bg-amber-400/20 text-amber-300 border border-amber-400/30 px-1.5 py-0.5 rounded-full font-medium">
                        For you
                      </span>
                    </div>
                  )}
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-4 h-4 bg-amber-400/20 rounded-full flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 4l2 2 4-4" stroke="#FFC800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                  <span className="text-2xl mb-2 block">{product.icon}</span>
                  <p className="font-semibold text-white text-sm leading-tight">{product.label}</p>
                  <p className="text-white/40 text-[11px] mt-0.5 leading-tight">{product.sub}</p>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={() => setStep('role')}
              className="text-white/40 text-sm hover:text-white/70 transition-colors"
            >
              ← Back
            </button>
            <button
              onClick={() => setStep('maturity')}
              className="px-8 py-3.5 rounded-xl font-semibold text-base bg-amber-400 text-black hover:bg-amber-300 shadow-lg shadow-amber-400/20 transition-all duration-200"
            >
              Continue →
            </button>
          </div>

          {state.preferences.length === 0 && (
            <p className="text-center text-white/30 text-xs mt-4">
              You can skip this — we'll show you everything
            </p>
          )}
        </main>
      )}

      {/* ─── STEP: Digital Maturity ──────────────────────────────────────── */}
      {step === 'maturity' && (
        <main className="relative max-w-xl mx-auto px-4 py-14">
          <div className="text-center mb-10">
            <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-3">Step 3 of 3</p>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">
              How tech-savvy<br />
              <span className="text-amber-400">are you?</span>
            </h1>
            <p className="text-white/50 text-sm">
              We'll adjust the experience to match your comfort level.
            </p>
          </div>

          <div className="space-y-3">
            {MATURITY_LEVELS.map(level => {
              const isSelected = state.digitalMaturity === level.key;
              return (
                <button
                  key={level.key}
                  onClick={() => setState(s => ({ ...s, digitalMaturity: level.key }))}
                  className={`
                    w-full text-left p-5 rounded-2xl border transition-all duration-200
                    ${isSelected
                      ? 'border-amber-400/60 bg-amber-400/10'
                      : 'border-white/8 bg-white/3 hover:border-white/20 hover:bg-white/5'
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl mt-0.5">{level.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-white">{level.label}</h3>
                        {isSelected && (
                          <div className="w-5 h-5 bg-amber-400/20 rounded-full flex items-center justify-center">
                            <div className="w-2.5 h-2.5 bg-amber-400 rounded-full" />
                          </div>
                        )}
                      </div>
                      <p className="text-white/50 text-sm mt-0.5">{level.sub}</p>
                      {isSelected && (
                        <p className="text-amber-300/70 text-xs mt-2 flex items-center gap-1.5">
                          <span>✦</span> {level.hint}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={() => setStep('preferences')}
              className="text-white/40 text-sm hover:text-white/70 transition-colors"
            >
              ← Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={!state.digitalMaturity || isSubmitting}
              className={`
                px-8 py-3.5 rounded-xl font-semibold text-base transition-all duration-200
                ${state.digitalMaturity && !isSubmitting
                  ? 'bg-amber-400 text-black hover:bg-amber-300 shadow-lg shadow-amber-400/20'
                  : 'bg-white/8 text-white/25 cursor-not-allowed'
                }
              `}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  Setting up{dots}
                </span>
              ) : (
                'Launch My Dashboard →'
              )}
            </button>
          </div>
        </main>
      )}

      {/* ─── STEP: Done ──────────────────────────────────────────────────── */}
      {step === 'done' && (
        <main className="relative max-w-xl mx-auto px-4 py-20 text-center">
          <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-amber-400/15 border border-amber-400/30 animate-pulse">
            <span className="text-5xl">{currentRole?.icon ?? '🚀'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Welcome to{' '}
            <span className="text-amber-400">BoldMind</span>
            <span className="text-white/30">,</span>
            <br />
            <span className="text-white/80">{currentRole?.label}</span>!
          </h1>

          <p className="text-white/50 mb-10 text-base">
            Your workspace is ready. Taking you to your dashboard{dots}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-sm mx-auto">
            {state.preferences.slice(0, 4).map(prefKey => {
              const product = PRODUCTS.find(p => p.key === prefKey);
              if (!product) return null;
              return (
                <div
                  key={prefKey}
                  className="p-3 rounded-xl bg-white/4 border border-white/8 text-center"
                >
                  <span className="text-2xl block mb-1">{product.icon}</span>
                  <span className="text-white/60 text-xs">{product.label}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
              <div className="h-full bg-amber-400 rounded-full animate-[grow_2s_ease-out_forwards]" />
            </div>
          </div>

          <style>{`
            @keyframes grow {
              from { width: 0% }
              to { width: 100% }
            }
          `}</style>
        </main>
      )}
    </div>
  );
}