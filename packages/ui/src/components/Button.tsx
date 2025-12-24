import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

const variantStyles = {
  primary: 'bg-[#FFC107] text-[#0A1D37] hover:bg-[#FFCC00] hover:shadow-2xl hover:shadow-[#FFC107]/50',
  secondary: 'bg-[#1a3a5c] text-white hover:bg-[#2a4a6c] border-2 border-[#FFC107]/20 hover:border-[#FFC107]',
  outline: 'border-2 border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107] hover:text-[#0A1D37]'
}

const sizeStyles = {
  sm: 'px-6 py-2 text-sm',
  md: 'px-8 py-3 text-base',
  lg: 'px-10 py-4 text-lg'
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  return (
    <button
      className={`font-bold rounded-lg transition-all hover:scale-105 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}