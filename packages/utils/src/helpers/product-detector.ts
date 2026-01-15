import { BOLDMIND_PRODUCTS, Product } from '../constants/products';

export function detectCurrentProduct(): string {
  // Detect by hostname
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
  
  const productMap: Record<string, string> = {
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
  };
  
  return productMap[hostname] || 'boldmind-hub';
}

export function getProductTheme(productSlug: string): Product | undefined {
  return BOLDMIND_PRODUCTS.find(p => p.slug === productSlug);
}

export function injectProductAttributes() {
  if (typeof window === 'undefined') return;
  
  const product = detectCurrentProduct();
  const theme = localStorage.getItem('theme') || 'light';
  const dyslexia = localStorage.getItem('dyslexia') === 'true';
  
  const html = document.documentElement;
  html.setAttribute('data-product', product);
  html.setAttribute('data-theme', theme);
  html.setAttribute('data-dyslexia', dyslexia.toString());
}

export function switchTheme(theme: 'light' | 'dark' | 'auto') {
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
}

export function toggleDyslexiaMode(enabled: boolean) {
  localStorage.setItem('dyslexia', enabled.toString());
  document.documentElement.setAttribute('data-dyslexia', enabled.toString());
}