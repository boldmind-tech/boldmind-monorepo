// packages/ui/src/components/SocialLinks.tsx
import React from 'react';

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex gap-6">
      {links.map((link, i) => (
        <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="text-neutral hover:text-accent transition-colors" aria-label={link.ariaLabel}>
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;