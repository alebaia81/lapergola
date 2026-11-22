/**
 * Prepends Astro's configured BASE_URL to internal root-relative paths
 * so links work seamlessly both on GitHub Pages (/lapergola/) and custom domains (/).
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  if (path === '/' || path === '') {
    return `${base}/`;
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}
