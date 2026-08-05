import {
  siteConfig,
  business as BUSINESS,
  MONEY_PAGE_SLUG,
} from '../config/site.config';

// Alias de compatibilidade: SITE.url é a URL canônica centralizada.
export const SITE = { ...siteConfig, url: siteConfig.siteUrl };

export { BUSINESS, MONEY_PAGE_SLUG };

export type WhatsAppMessageKey = keyof typeof BUSINESS.whatsapp.messages;

export function whatsappLink(key: string = 'avaliacao') {
  const msg =
    BUSINESS.whatsapp.messages[key as WhatsAppMessageKey] ??
    BUSINESS.whatsapp.messages.avaliacao;
  const base = `https://wa.me/${BUSINESS.whatsapp.number}`.replace(/\/+$/, '');
  return `${base}?text=${encodeURIComponent(msg)}`;
}