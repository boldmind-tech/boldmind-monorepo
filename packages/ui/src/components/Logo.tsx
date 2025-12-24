interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizeMap = {
  sm: 'w-8 h-8 text-xl',
  md: 'w-12 h-12 text-2xl',
  lg: 'w-16 h-16 text-4xl',
  xl: 'w-24 h-24 text-6xl'
}

export function Logo({ size = 'md', className = '' }: LogoProps) {
  return (
    <div className={`relative ${className}`}>
      <div className={`relative ${sizeMap[size]}`}>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFC107] to-[#FFCC00] animate-pulse-slow" />
        <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-[#0A1D37] via-[#1a3a5c] to-[#0A1D37] flex items-center justify-center border-2 border-[#FFC107]">
          <span className={`${sizeMap[size].split(' ')[2]} font-black text-[#FFC107] font-serif select-none`}>
            B
          </span>
        </div>
      </div>
    </div>
  )
}