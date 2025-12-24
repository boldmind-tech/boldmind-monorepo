import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  hover?: boolean
  className?: string
}

export function Card({ children, hover = true, className = '' }: CardProps) {
  return (
    <div
      className={`
        bg-gradient-to-br from-[#1a3a5c] to-[#0A1D37] 
        p-8 rounded-2xl border-2 border-[#FFC107]/20 
        ${hover ? 'hover:border-[#FFC107] hover:scale-105 hover:shadow-2xl hover:shadow-[#FFC107]/20 transition-all' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}