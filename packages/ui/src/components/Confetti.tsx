// @boldmind/ui/components/Confetti.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  color: string;
  shape: 'circle' | 'square' | 'triangle' | 'star';
  duration: number;
}

interface ConfettiProps {
  count?: number;
  colors?: string[];
  shapes?: Array<'circle' | 'square' | 'triangle' | 'star'>;
  duration?: number;
  onComplete?: () => void;
}

export function Confetti({
  count = 100,
  colors = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444'],
  shapes = ['circle', 'square', 'triangle', 'star'],
  duration = 3000,
  onComplete,
}: ConfettiProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  const [isActive, setIsActive] = useState(true);
  
  useEffect(() => {
    // Create confetti pieces
    const newPieces: ConfettiPiece[] = [];
    
    for (let i = 0; i < count; i++) {
      newPieces.push({
        id: i,
        x: Math.random() * 100,
        y: -10,
        rotation: Math.random() * 360,
        scale: Math.random() * 0.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        duration: Math.random() * 1000 + 2000,
      });
    }
    
    setPieces(newPieces);
    
    // Auto-cleanup after duration
    const timer = setTimeout(() => {
      setIsActive(false);
      onComplete?.();
    }, duration);
    
    return () => clearTimeout(timer);
  }, [count, colors, shapes, duration, onComplete]);
  
  // Render shape
  const renderShape = (shape: ConfettiPiece['shape'], color: string) => {
    const size = 12;
    
    switch (shape) {
      case 'circle':
        return (
          <div
            className="rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
            }}
          />
        );
      case 'square':
        return (
          <div
            className="rounded"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
            }}
          />
        );
      case 'triangle':
        return (
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size/2}px solid transparent`,
              borderRight: `${size/2}px solid transparent`,
              borderBottom: `${size}px solid ${color}`,
            }}
          />
        );
      case 'star':
        return (
          <div className="text-2xl leading-none" style={{ color }}>
            ★
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <AnimatePresence>
      {isActive && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {pieces.map((piece) => (
            <motion.div
              key={piece.id}
              className="absolute"
              initial={{
                x: `${piece.x}vw`,
                y: `${piece.y}vh`,
                rotate: 0,
                scale: piece.scale,
                opacity: 1,
              }}
              animate={{
                x: `${piece.x + (Math.random() - 0.5) * 50}vw`,
                y: '100vh',
                rotate: piece.rotation + 360,
                scale: piece.scale,
                opacity: 0,
              }}
              transition={{
                duration: piece.duration / 1000,
                ease: 'easeOut',
              }}
              style={{
                left: 0,
                top: 0,
              }}
            >
              {renderShape(piece.shape, piece.color)}
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}