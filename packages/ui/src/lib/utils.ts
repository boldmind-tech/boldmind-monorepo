// packages/ui/src/lib/utils.ts - UPDATE THIS FILE
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-NG', {
    dateStyle: 'medium',
  }).format(d);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

let styleAdded = false;
export function addSpinnerAnimation() {
  if (typeof window !== 'undefined' && !styleAdded) {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
    styleAdded = true;
  }
}

// Product detection utilities - IMPROVED VERSION
export function getProductFromPath(path: string): string {
  const products = ['amebogist', 'educenter', 'planai', 'boldmind-os', 'naija-fither', 'emailscraper-pro', 'safe-ai'];
  
  for (const product of products) {
    if (path.includes(`/${product}`) || path.startsWith(product)) {
      return product;
    }
  }
  
  return 'boldmind-hub';
}

// IMPROVED DETECTION: Check both DOMAIN and PATH
// In utils.ts, update the detectCurrentProduct function:

export function detectCurrentProduct(): string {
  if (typeof window === 'undefined') return 'boldmind-hub';
  
  const hostname = window.location.hostname;
  const pathname = window.location.pathname;
  
  console.log('Detection debug:', { hostname, pathname });
  
  // First check by domain (more reliable for subdomains)
  const domainProductMap: Record<string, string> = {
    'boldmind.ng': 'boldmind-hub',
    'www.boldmind.ng': 'boldmind-hub',
    
    'amebogist.ng': 'amebogist',
    'www.amebogist.ng': 'amebogist',
    
    'educenter.com.ng': 'educenter',
    'www.educenter.com.ng': 'educenter',
    
    'os.boldmind.ng': 'boldmind-os',
    'planai.boldmind.ng': 'planai',
    'fit.boldmind.ng': 'naija-fither',
    'email.boldmind.ng': 'emailscraper-pro',
    'safe.boldmind.ng': 'safe-ai',
    
    // Local development
    'localhost': 'boldmind-hub',
  };
  
  // Check domain first
  if (domainProductMap[hostname]) {
    console.log('Domain match found:', hostname, '->', domainProductMap[hostname]);
    return domainProductMap[hostname];
  }
  
  // Check for localhost variations
  if (hostname.includes('localhost')) {
    console.log('Localhost detected, defaulting to boldmind-hub');
    return 'boldmind-hub';
  }
  
  // If no domain match, check path
  const pathProduct = getProductFromPath(pathname);
  if (pathProduct !== 'boldmind-hub') {
    console.log('Path match found:', pathname, '->', pathProduct);
    return pathProduct;
  }
  
  console.log('Defaulting to boldmind-hub');
  return 'boldmind-hub';
}

// This function is only for specific product themes (for SuperNavbar)
export function detectProductForTheme(): string {
  const detected = detectCurrentProduct();
  
  // If we're on a specific product domain/site, use that product's theme
  // Otherwise, default to boldmind-hub theme
  if (detected === 'boldmind-hub') {
    return 'boldmind-hub';
  }
  
  // For subdomains like os.boldmind.ng, use that product's theme
  return detected;
}
export function getProductThemeClass(product: string): string {
  // Convert product slug to CSS-safe class name
  return `theme-${product.replace(/-/g, '-')}`;
}


// Color utilities
export function getProductThemeColors(product: string) {
  const colors: Record<string, { primary: string; secondary: string; accent: string }> = {
    'boldmind-hub': {
      primary: '#00143C',
      secondary: '#FFC800',
      accent: '#2A4A6E',
    },
    'amebogist': {
      primary: '#00A859',
      secondary: '#FFC800',
      accent: '#007A3D',
    },
    'educenter': {
      primary: '#2A4A6E',
      secondary: '#FFFFFF',
      accent: '#1A3452',
    },
    'planai': {
      primary: '#9C27B0',
      secondary: '#FFFFFF',
      accent: '#7B1FA2',
    },
    'boldmind-os': {
      primary: '#E63946',
      secondary: '#FFC800',
      accent: '#B91C1C',
    },
    'naija-fither': {
      primary: '#FF4081',
      secondary: '#9C27B0',
      accent: '#E91E63',
    },
    'emailscraper-pro': {
      primary: '#2196F3',
      secondary: '#FFFFFF',
      accent: '#0D47A1',
    },
    'safe-ai': {
      primary: '#FF5722',
      secondary: '#FFFFFF',
      accent: '#D84315',
    },
  };
  
  return colors[product] || colors['boldmind-hub'];
}