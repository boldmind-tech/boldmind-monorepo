// apps/web/boldmind-hub/components/Interactive/FlywheelVisualization.tsx
'use client';

import { motion } from 'framer-motion';

// FlywheelStep componentpnpm add framer-motion
function FlywheelStep({ step, index }: { step: any; index: number }) {
  return (
    <motion.div
      className="absolute"
      style={{
        left: '50%',
        top: '50%',
        transform: `rotate(${index * 120}deg) translate(200px) rotate(-${index * 120}deg)`,
      }}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        delay: index * 2
      }}
    >
      <div className="relative">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-xl"
          style={{ backgroundColor: step.color }}
        >
          {step.icon}
        </div>
        <div className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 w-48">
          <h4 className="font-bold text-lg text-gray-800">{step.title}</h4>
          <p className="text-sm text-gray-600">{step.product}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function FlywheelVisualization() {
  const flywheelSteps = [
    {
      title: "Awareness",
      product: "AmeboGist.ng",
      description: "Building mass audience through authentic media",
      color: "#FFC800",
      icon: "👥"
    },
    {
      title: "Education",
      product: "EduCenter.com.ng",
      description: "Converting audience through structured knowledge",
      color: "#00A859",
      icon: "🎓"
    },
    {
      title: "Enablement",
      product: "PlanAI & Products",
      description: "Providing high-leverage tools for ambitious users",
      color: "#E63946",
      icon: "⚡"
    }
  ];

  return (
    <div className="relative h-[500px] flex items-center justify-center">
      {/* Rotating border */}
      <motion.div 
        className="absolute w-[400px] h-[400px] rounded-full border-4 border-dashed border-[#FFC800]/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Center logo */}
      <div className="absolute w-32 h-32 bg-gradient-to-br from-[#00143C] to-[#2A4A6E] rounded-full flex items-center justify-center shadow-2xl">
        <div className="text-center">
          <div className="text-3xl">🌀</div>
          <div className="text-white text-sm font-bold mt-2">BoldMind</div>
        </div>
      </div>
      
      {/* Steps */}
      {flywheelSteps.map((step, index) => (
        <FlywheelStep key={index} step={step} index={index} />
      ))}
      
      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ transform: 'rotate(-90deg)' }}>
        <circle
          cx="50%"
          cy="50%"
          r="180"
          fill="none"
          stroke="#FFC800"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}