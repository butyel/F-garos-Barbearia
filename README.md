# Figaro's Barbearia — Site oficial

Site institucional da **Figaro's Barbearia** (Prótese Capilar Masculina) em Presidente Epitácio/SP, construído com [Astro](https://astro.build) como site estático.

- Produção: https://figaros-barbearia.vercel.app
- Repositório: https://github.com/butyel/F-garos-Barbearia

## Stack

- **Astro 7** — geração de páginas estáticas
- **@astrojs/sitemap** — sitemap.xml
- **sharp** — otimização de imagens (WebP/AVIF)
- **TypeScript** — tipagem (inclui `astro check`)
- **@fontsource** não usado: fontes locais (Poppins + Playfair Display) em `public/fonts/`

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Ambiente de desenvolvimento (http://localhost:4321) |
| `npm run build` | Build de produção em `dist/` |
| `npm run preview` | Pré-visualização do build |
| `npm run check` | Checagem de tipos e de arquivos `.astro` |
| `npm run optimize:images` | Otimiza imagens em `src/assets/raw/` |
| `npm run sync` | Regenera os tipos de conteúdo |

## Estrutura

```
src/
├── components/   # Componentes Astro (Header, Footer, SEO, CTA...)
├── content/
│   └── blog/     # Artigos do blog (Markdown + frontmatter)
├── data/         # Dados de negócio (site.ts, services.ts, faqs.ts...)
├── layouts/      # BaseLayout, PageLayout, ServiceLayout, AdminLayout
├── lib/          # Helpers de SEO e schema JSON-LD
├── pages/        # Rotas (inclusive 9 páginas de serviço e /admin/)
└── styles/       # global.css — design system
public/
├── fonts/        # Fontes locais (woff2)
├── images/       # Imagens otimizadas (webp/avif)
└── robots.txt, favicon.svg, site.webmanifest
```

## Conteúdo

- **Serviços**: `src/data/services.ts` (9 serviços) — geram páginas individuais de SEO.
- **Blog**: arquivos `.md` em `src/content/blog/`. Cada frontmatter usa:

```md
---
title: "..."
description: "máx. 200 caracteres"
pubDate: 2025-01-01
updatedDate: 2025-01-10
author: "Wagner Pires"
category: "Prótese Capilar"
tags: ["prótese", "cuidados"]
image: "/images/..."
draft: false
featured: false
---
```

- **Perguntas frequentes**: `src/data/faqs.ts`.
- **Painel admin**: `/admin/` (protegido por senha, `noindex`). Senha via `PUBLIC_ADMIN_PASSWORD`.

## Ambiente

Copie `.env.example` para `.env` e defina:

- `PUBLIC_ADMIN_PASSWORD` — senha do painel `/admin/`
- `PUBLIC_GA4_ID` — ID do Google Analytics 4 (opcional)

## Deploy (Vercel)

O projeto está conectado ao repositório GitHub; cada push na branch `main` gera um novo deploy automático.

Build recomendado na Vercel:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## Analytics

O componente `Analytics.astro` envia eventos quando `PUBLIC_GA4_ID` está definido: `whatsapp_click`, `phone_click`, `map_click`, `instagram_click`, `cta_agendamento`.
