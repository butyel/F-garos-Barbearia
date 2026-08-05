import { SITE } from '../data/site';

export interface SeoData {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}

export function buildUrl(path: string) {
  const clean = path === '/' || path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  return new URL(clean, SITE.url).toString();
}

export function buildTitle(title: string) {
  if (title === SITE.name || title.includes(SITE.name)) return title;
  return `${title} | ${SITE.name}`;
}
