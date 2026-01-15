// @boldmind/ui/components/TypewriterEffect.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterEffectProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  loop?: boolean;
  showCursor?: boolean;
  cursorChar?: string;
  cursorBlinkSpeed?: number;
  className?: string;
  textClassName?: string;
  cursorClassName?: string;
  onComplete?: () => void;
}

export function TypewriterEffect({
  texts,
  speed = 100,
  deleteSpeed = 50,
  delay = 2000,
  loop = true,
  showCursor = true,
  cursorChar = '▋',
  cursorBlinkSpeed = 530,
  className = '',
  textClassName = '',
  cursorClassName = '',
  onComplete,
}: TypewriterEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  
  if (!texts || texts.length === 0) {
    return null;
  }
  // Cursor blink effect
  useEffect(() => {
    if (!showCursor) return;
    
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, cursorBlinkSpeed);
    
    return () => clearInterval(cursorInterval);
  }, [showCursor, cursorBlinkSpeed]);
  
  // Typewriter effect logic
  useEffect(() => {
    if (texts.length === 0) return;
    
    const currentFullText = texts[currentTextIndex];
    let timeout: NodeJS.Timeout;
    
    if (!isPaused) {
      if (!isDeleting && currentText.length < currentFullText.length) {
        // Typing mode
        timeout = setTimeout(() => {
          setCurrentText(currentFullText.substring(0, currentText.length + 1));
        }, speed);
      } else if (isDeleting && currentText.length > 0) {
        // Deleting mode
        timeout = setTimeout(() => {
          setCurrentText(currentFullText.substring(0, currentText.length - 1));
        }, deleteSpeed);
      } else if (!isDeleting && currentText.length === currentFullText.length) {
        // Pause at end of typing
        if (currentTextIndex === texts.length - 1 && !loop && onComplete) {
          onComplete();
        }
        
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      } else if (isDeleting && currentText.length === 0) {
        // Move to next text or loop
        setIsDeleting(false);
        setCurrentTextIndex((prev) => {
          const nextIndex = prev === texts.length - 1 ? 0 : prev + 1;
          return nextIndex;
        });
        
        // Add a small pause before starting next text
        timeout = setTimeout(() => {
          setIsPaused(false);
        }, 300);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentTextIndex,
    isDeleting,
    isPaused,
    texts,
    speed,
    deleteSpeed,
    delay,
    loop,
    onComplete,
  ]);
  
  // Pause/Resume functions for interaction
  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => setIsPaused(false), []);
  
  // Reset to specific text
  const resetToText = useCallback((index: number) => {
    if (index >= 0 && index < texts.length) {
      setCurrentTextIndex(index);
      setCurrentText('');
      setIsDeleting(false);
      setIsPaused(false);
    }
  }, [texts.length]);
  
  // Calculate typing progress (0 to 1)
const progress = texts && texts.length > 0 && texts[currentTextIndex]
  ? currentText.length / texts[currentTextIndex].length
  : 0;
  
  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className={`font-mono ${textClassName}`}>
        {currentText}
        
        {/* Special effects for certain characters */}
        <AnimatePresence>
          {currentText && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              key={currentText}
              className="inline-block"
            >
              {/* Add emoji effects based on text */}
              {currentText.includes('FUN') && ' 🎮'}
              {currentText.includes('EASY') && ' 😎'}
              {currentText.includes('MAGIC') && ' ✨'}
              {currentText.includes('Pay') && ' 💰'}
            </motion.span>
          )}
        </AnimatePresence>
      </span>
      
      {showCursor && (
        <motion.span
          animate={{ opacity: cursorVisible ? 1 : 0 }}
          transition={{ duration: 0.1 }}
          className={`ml-1 ${cursorClassName}`}
        >
          {cursorChar}
        </motion.span>
      )}
      
      {/* Progress indicator (optional) */}
      <motion.div
        className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress * 100}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}