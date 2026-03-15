// packages/ui/src/components/Card.tsx
import React from 'react';
import { cn } from '../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outline' | 'premium';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', padding = 'md', children, ...props }, ref) => {

    const variantStyles = {
      default: {
        backgroundColor: 'var(--product-background)',
        border: '1px solid var(--product-muted)',
        boxShadow: 'var(--shadow-xs)',
      },
      elevated: {
        backgroundColor: 'var(--product-background)',
        border: 'none',
        boxShadow: 'var(--shadow-lg)',
      },
      outline: {
        backgroundColor: 'transparent',
        border: '2px solid var(--product-primary)',
        boxShadow: 'none',
      },
      premium: {
        backgroundColor: 'var(--product-primary)',
        border: 'none',
        boxShadow: 'var(--shadow-lg)',
      },
    };

    const paddingStyles = {
      none: { padding: 0 },
      sm: { padding: '1rem' },
      md: { padding: '1.75rem' },
      lg: { padding: '2rem' },
    };

    const styles = {
      borderRadius: 'var(--radius-lg)',
      transition: 'all var(--transition-base)',
      ...variantStyles[variant],
      ...paddingStyles[padding],
    };

    return (
      <div
        ref={ref}
        className={cn(className)}
        style={styles}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Card subcomponents
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      marginBottom: '1rem'
    }}
    className={cn(className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    style={{
      fontSize: '1.25rem',
      fontWeight: 700,
      color: 'var(--product-primary)',
      margin: 0
    }}
    className={cn(className)}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    style={{
      fontSize: '0.9375rem',
      color: 'var(--neutral-500)',
      margin: 0
    }}
    className={cn(className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    style={{ paddingTop: '1rem' }}
    className={cn(className)}
    {...props}
  />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: '1rem',
      borderTop: '1px solid var(--product-muted)'
    }}
    className={cn(className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
};
