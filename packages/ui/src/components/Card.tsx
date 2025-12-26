import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`bg-gradient-to-br from-[#1a3a5c] to-primary p-8 rounded-2xl border-2 border-accent/20 hover:border-accent transition-all hover:scale-105 ${className}`}>{children}</div>;
};

export default Card;