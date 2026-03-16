import React from 'react';
import { Shield, AlertTriangle, Map, BarChart3, Camera, Lock, Users, Zap } from 'lucide-react';

export default function SafeNaijaHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Shield className="w-10 h-10 text-green-400" />
            <div>
              <h1 className="text-2xl font-black">SAFE <span className="text-green-400">Naija</span></h1>
              <p className="text-xs text-gray-400">Security & Analytics For Everyone</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 font-bold hover:text-green-400">Station Login</button>
            <button className="px-6 py-2 bg-green-500 text-black rounded-lg font-bold hover:bg-green-400">
              Report Incident
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-sm font-bold mb-6">
              🇳🇬 AI-Powered Crime Intelligence
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Nigeria's First<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                AI Crime Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Report incidents, track cases, predict crime hotspots, and keep Nigeria safe with advanced AI analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-green-500 text-black rounded-lg text-lg font-black hover:bg-green-400 flex items-center justify-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Report Incident Now
              </button>
              <button className="px-8 py-4 border-2 border-green-500 rounded-lg text-lg font-bold hover:bg-green-500/10">
                View Crime Map
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '2,450+', label: 'Incidents Reported', icon: <AlertTriangle className="w-6 h-6" /> },
              { value: '87%', label: 'Resolution Rate', icon: <Shield className="w-6 h-6" /> },
              { value: '156', label: 'Police Stations', icon: <Users className="w-6 h-6" /> },
              { value: '24/7', label: 'AI Monitoring', icon: <Zap className="w-6 h-6" /> },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-2xl text-center">
                <div className="flex justify-center mb-3 text-green-400">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-black text-center mb-16">
          AI-Powered <span className="text-green-400">Security Features</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Map className="w-8 h-8" />,
              title: 'Real-Time Crime Map',
              description: 'See incidents across Nigeria in real-time. Heat maps show crime density by location.',
              color: 'blue',
            },
            {
              icon: <Camera className="w-8 h-8" />,
              title: 'Facial Recognition',
              description: 'AI analyzes CCTV footage to identify suspects and match against database.',
              color: 'purple',
            },
            {
              icon: <BarChart3 className="w-8 h-8" />,
              title: 'Predictive Analytics',
              description: 'Machine learning predicts crime hotspots before they happen.',
              color: 'green',
            },
            {
              icon: <AlertTriangle className="w-8 h-8" />,
              title: 'Instant Reporting',
              description: 'Report incidents in Pidgin, English, or via voice. AI transcribes automatically.',
              color: 'red',
            },
            {
              icon: <Lock className="w-8 h-8" />,
              title: 'End-to-End Encryption',
              description: 'Military-grade encryption protects all sensitive case data.',
              color: 'yellow',
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: 'Multi-Station Coordination',
              description: 'Connect all police stations for seamless case handoffs and collaboration.',
              color: 'pink',
            },
          ].map((feature) => (
            <div key={feature.title} className="group bg-white/5 backdrop-blur border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-green-500/50 transition">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-r from-green-900/20 to-blue-900/20 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-16">
            How <span className="text-green-400">SAFE Naija</span> Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Report Incident', desc: 'Citizens report via app/web. Voice, text, or photos.' },
              { step: '02', title: 'AI Analysis', desc: 'AI categorizes, assigns priority, suggests officers.' },
              { step: '03', title: 'Police Action', desc: 'Officers respond, update status, close cases.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-6xl font-black text-green-500/20 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-green-600 to-blue-600 p-12 rounded-3xl">
          <Shield className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-4xl font-black mb-6">
            Make Nigeria Safer Today
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join police stations across Nigeria using AI to fight crime
          </p>
          <button className="px-12 py-4 bg-white text-gray-900 rounded-lg text-xl font-black hover:bg-gray-100">
            Request Station Access
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-green-400" />
            <span className="text-2xl font-black">SAFE Naija</span>
          </div>
          <p className="text-gray-400 mb-8">Powered by BoldMind Technology</p>
          <div className="flex justify-center gap-8 text-gray-400">
            <a href="/privacy" className="hover:text-green-400">Privacy</a>
            <a href="/security" className="hover:text-green-400">Security</a>
            <a href="/contact" className="hover:text-green-400">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}