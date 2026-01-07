// apps/web/boldmind-hub/components/Interactive/AnimatedLogo.tsx
'use client';

import { motion } from 'framer-motion';

export default function AnimatedLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, rotate: 5 }}
      className="relative"
    >
      {/* B Letter */}
      <div className="relative">
        <motion.div
          className="absolute bg-[#FFC800]"
          animate={{ height: ["0%", "100%"] }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <span className="text-6xl font-black text-[#00143C]">B</span>
      </div>
      
      {/* Dot animation */}
      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 bg-[#E63946] rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}