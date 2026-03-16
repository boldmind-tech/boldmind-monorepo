import { cn } from '../lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

export function LoadingSpinner({ size = 'md', color = 'currentColor', className }: LoadingSpinnerProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={cn('inline-block', className)}>
      <div 
        className={cn('animate-spin rounded-full border-2 border-t-transparent', sizes[size])}
        style={{ 
          borderColor: `${color}20`,
          borderTopColor: color 
        }}
      />
    </div>
  );
}

export default LoadingSpinner;
