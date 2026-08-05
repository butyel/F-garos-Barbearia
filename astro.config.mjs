// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Fonte única de URL: PUBLIC_SITE_URL é definida na Vercel quando o domínio
// oficial entrar em produção. Enquanto isso, usa o domínio temporário.
const siteUrl = (process.env.PUBLIC_SITE_URL || 'https://www.figarosbarbearia.com.br').replace(/\/+$/, '');
// Sitemap só é gerado quando a indexação está liberada (domínio oficial).
const allowIndexing = process.env.PUBLIC_ALLOW_INDEXING === 'true';

export default defineConfig({
  site: siteUrl,
  trailingSlash: 'always',
  compressHTML: true,
  integrations: allowIndexing
    ? [
        sitemap({
          filter: (page) => {
            const blocked = ['/admin/', '/politica-de-privacidade/', '/termos-de-uso/', '/404'];
            return !blocked.some((p) => page.includes(p));
          },
          changefreq: 'weekly',
          priority: 0.7,
        }),
      ]
    : [],
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
