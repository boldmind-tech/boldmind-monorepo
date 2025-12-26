// packages/ui/src/components/Button.tsx
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  const base = 'px-6 py-2 font-bold rounded-lg transition-all hover:scale-105';
  const variants = {
    primary: 'bg-accent text-primary hover:bg-yellow-400',
    secondary: 'border-2 border-accent text-accent hover:bg-accent hover:text-primary',
    ghost: 'text-accent hover:text-yellow-400',
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props}>{children}</button>;
};

export default Button;