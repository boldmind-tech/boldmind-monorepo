import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

// This is a wrapper that works for both Next.js and other frameworks
// In Next.js apps, it will use next/link. In other apps, it will use a regular anchor.
export const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  // For client-side usage, we need to handle Next.js context
  if (typeof window !== 'undefined' && (window as any).__NEXT_DATA__) {
    // Dynamically import next/link only in Next.js context
    const NextLink = require('next/link').default;
    return (
      <NextLink href={href} {...props}>
        {children}
      </NextLink>
    );
  }
  
  // Fallback for non-Next.js apps or SSR
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};

export default Link;