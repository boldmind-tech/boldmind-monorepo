"use client";

import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function AdBanner() {
  return (
    <div className="w-full h-32 my-8 rounded-xl bg-gradient-to-r from-orange-400 to-red-500 overflow-hidden relative group shadow-lg">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />
      <div className="absolute inset-0 flex items-center justify-between px-8 text-white z-10">
        <div>
          <span className="bg-white/20 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest border border-white/30 mb-2 inline-block">
            Sponsored
          </span>
          <h3 className="text-2xl font-black italic tracking-tighter">BOOST YOUR APP IN NIGERIA!</h3>
          <p className="text-sm opacity-90 font-medium">Join 5,000+ creators using BoldMind OS.</p>
        </div>
        <Link 
          href="https://os.boldmind.ng" 
          className="bg-white text-orange-600 px-6 py-3 rounded-full font-bold shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
        >
          Get Started <ExternalLink className="h-4 w-4" />
        </Link>
      </div>
      <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
    </div>
  );
}
