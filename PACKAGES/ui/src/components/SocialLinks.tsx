// PACKAGES/ui/src/components/SocialLinks.tsx
"use client";

import React, { useState } from 'react';

export interface SocialLink {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

export interface SocialLinksProps {
  links: SocialLink[];
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1.5rem',
  };

  return (
    <div style={containerStyle}>
      {links.map((link, index) => {
        const isHovered = hoveredIndex === index;
        const linkStyle: React.CSSProperties = {
          color: isHovered ? 'var(--product-accent)' : 'var(--neutral-500)',
          transition: 'color var(--transition-quick)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        };

        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            aria-label={link.ariaLabel}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {link.icon}
          </a>
        );
      })}
    </div>
  );
};