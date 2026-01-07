// packages/ui/src/components/SocialLinks.tsx
"use client";

import React, { useState } from 'react';

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
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
          color: isHovered ? '#FFC800' : '#6B7280',
          transition: 'color 0.2s',
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

export default SocialLinks;