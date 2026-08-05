// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://figaros-barbearia.vercel.app',
  trailingSlash: 'always',
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => {
        const blocked = ['/admin/', '/politica-de-privacidade/', '/termos-de-uso/'];
        return !blocked.some((p) => page.includes(p));
      },
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
