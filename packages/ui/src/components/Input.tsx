import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return <input className={`w-full px-4 py-3 bg-primary border-2 border-accent/20 rounded-lg text-neutral placeholder-neutral/50 focus:border-accent focus:outline-none ${className}`} {...props} />;
};

export default Input;