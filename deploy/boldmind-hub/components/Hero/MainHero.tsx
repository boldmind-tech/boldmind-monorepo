// apps/web/boldmind-hub/components/Hero/MainHero.tsx
'use client';

import { motion } from 'framer-motion';

export default function MainHero() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#FFC800]/10 border border-[#FFC800]/30 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#FFC800] animate-pulse"></span>
          <span className="text-[#FFC800] font-semibold">Empowering 1M Nigerian Entrepreneurs by 2030</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          Building Systems That
          <span className="block text-[#FFC800]">Shift Nations</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
          BoldMind is a Nigerian tech ecosystem creating impact-driven products 
          that solve fundamental Nigerian problems through authentic media, 
          education, and technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#ecosystem"
            className="px-8 py-4 bg-[#FFC800] text-[#00143C] font-bold rounded-lg hover:bg-[#FFD700] transition-all"
          >
            Explore Our Ecosystem
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/2349138349271"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all"
          >
            Partner With Us
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}