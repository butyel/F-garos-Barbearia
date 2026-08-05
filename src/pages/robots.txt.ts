import { siteConfig } from '../config/site.config';

// robots.txt dinâmico, controlado por variável de ambiente.
// Em desenvolvimento (*.vercel.app) NÃO bloqueia o crawl: permitimos que os robôs
// acessem a página para enxergarem o meta robots "noindex" — e omitimos o Sitemap.
// Quando PUBLIC_ALLOW_INDEXING="true" (domínio oficial), libera crawl e publica o Sitemap.
export function GET() {
  const lines: string[] = ['User-agent: *', 'Allow: /'];
  if (siteConfig.allowIndexing) {
    lines.push(`Sitemap: ${siteConfig.siteUrl}/sitemap-index.xml`);
  }
  return new Response(lines.join('\n\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}