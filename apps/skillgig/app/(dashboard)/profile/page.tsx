'use client';

import { useState } from 'react';
import { User, Save, Briefcase, MapPin, Globe } from 'lucide-react';

export default function SkillGigProfile() {
  const [form, setForm] = useState({ displayName: '', bio: '', skills: '', location: '', portfolio: '' });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // TODO: call PATCH /user/profile
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-black">My Profile</h1>
        <p className="text-white/40 text-sm mt-1">Showcase your skills to potential clients</p>
      </div>

      {/* Avatar */}
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-2xl bg-[#7c3aed]/20 flex items-center justify-center">
          <User size={32} className="text-[#7c3aed]" />
        </div>
        <div>
          <button className="text-sm text-[#7c3aed] font-bold">Upload Photo</button>
          <p className="text-xs text-white/40 mt-1">JPG or PNG, max 2MB</p>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-4">
        {[
          { key: 'displayName', label: 'Display Name', icon: User, placeholder: 'Your professional name' },
          { key: 'location', label: 'Location', icon: MapPin, placeholder: 'e.g. Lagos, Nigeria' },
          { key: 'portfolio', label: 'Portfolio URL', icon: Globe, placeholder: 'https://yourportfolio.com' },
        ].map(field => (
          <div key={field.key}>
            <label className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1.5 block">{field.label}</label>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus-within:border-[#7c3aed] transition-colors">
              <field.icon size={16} className="text-white/30 flex-shrink-0" />
              <input
                value={(form as any)[field.key]}
                onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                placeholder={field.placeholder}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-white/20"
              />
            </div>
          </div>
        ))}

        <div>
          <label className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1.5 block">Bio</label>
          <textarea
            value={form.bio}
            onChange={e => setForm(f => ({ ...f, bio: e.target.value }))}
            placeholder="Tell clients about yourself and your skills..."
            rows={4}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none placeholder:text-white/20 focus:border-[#7c3aed] transition-colors resize-none"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1.5 block">Skills (comma-separated)</label>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus-within:border-[#7c3aed] transition-colors">
            <Briefcase size={16} className="text-white/30 flex-shrink-0" />
            <input
              value={form.skills}
              onChange={e => setForm(f => ({ ...f, skills: e.target.value }))}
              placeholder="e.g. React, Logo Design, Content Writing"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-white/20"
            />
          </div>
        </div>

        <button
          onClick={handleSave}
          className="w-full flex items-center justify-center gap-2 bg-[#7c3aed] text-white px-4 py-3 rounded-xl font-bold text-sm hover:bg-[#6d28d9] transition-colors"
        >
          {saved ? '✓ Saved!' : <><Save size={16} /> Save Profile</>}
        </button>
      </div>
    </div>
  );
}
