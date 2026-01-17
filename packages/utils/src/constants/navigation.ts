import { BOLDMIND_PRODUCTS, Product } from './products';

export interface NavigationItem {
  name: string;
  slug: string;
  href: string;
  category: string;
  status: string;
  icon: string;
  priority: number;
  external?: boolean;
}

export function getLiveProductsNavigation(): NavigationItem[] {
  return BOLDMIND_PRODUCTS
    .filter(product => product.status === 'LIVE')
    .map(product => ({
      name: product.name,
      slug: product.slug,
      href: product.links?.website || `/${product.slug}`,
      category: product.category,
      status: product.status,
      icon: product.icon,
      priority: product.priority
    }))
    .sort((a, b) => a.priority - b.priority);
}

export function getAllProductsNavigation(): NavigationItem[] {
  return BOLDMIND_PRODUCTS
    .map(product => ({
      name: product.name,
      slug: product.slug,
      href: product.links?.website || `/${product.slug}`,
      category: product.category,
      status: product.status,
      icon: product.icon,
      priority: product.priority
    }))
    .sort((a, b) => a.priority - b.priority);
}