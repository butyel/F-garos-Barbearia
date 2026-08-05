// ---------------------------------------------------------------------------
// FONTE ÚNICA DE CONFIGURAÇÃO DO SITE — FIGARO'S BARBEARIA
// Centraliza URL base, controle de indexação, NAP (NAP), redes sociais, horários,
// avaliações, geolocalização e dados de negócio.
//
// VARIÁVEIS DE AMBIENTE (definidas na Vercel / `.env`):
//   PUBLIC_SITE_URL        -> URL canônica oficial. Ex.: https://www.exemplo.com.br
//   PUBLIC_ALLOW_INDEXING  -> "true" libera indexação; qualquer outro valor mantém noindex.
//
// Enquanto PUBLIC_SITE_URL não for definida, o site usa o domínio Vercel e fica
// com meta robots "noindex, nofollow" para evitar indexação prematura.
// ---------------------------------------------------------------------------

const envSiteUrl = (import.meta.env.PUBLIC_SITE_URL as string | undefined)?.trim();
const envAllowIndexing = (import.meta.env.PUBLIC_ALLOW_INDEXING as string | undefined)?.trim();

const DEFAULT_SITE_URL = 'https://figaros-barbearia.vercel.app';

export const siteConfig = {
  name: "Figaro's Barbearia",
  legalName: "Figaro's Barbearia",
  shortName: "Figaro's",
  // URL canônica. Remove a barra final para garantir consistência.
  siteUrl: (envSiteUrl || DEFAULT_SITE_URL).replace(/\/+$/, ''),
  // Indexação controlada por variável de ambiente.
  allowIndexing: envAllowIndexing === 'true',
  locale: 'pt_BR',
  lang: 'pt-BR',
  ogImage: '/images/figaros-barbearia-presidente-epitacio.webp',
  description:
    'Prótese capilar masculina com resultado natural em Presidente Epitácio (SP). Avaliação gratuita, resultado em uma única sessão e manutenção mensal.',
};

export const business = {
  name: "Figaro's Barbearia",
  alternateName: ["Figaro's Barbearia Presidente Epitácio"],
  description:
    "Barbearia especializada em prótese capilar masculina em Presidente Epitácio (SP). Resultado natural em uma única sessão, sem cirurgia, com manutenção mensal e ambiente climatizado.",
  url: siteConfig.siteUrl,
  address: {
    streetAddress: 'R. Maceió, 1274',
    locality: 'Presidente Epitácio',
    region: 'SP',
    postalCode: '19470-000',
    country: 'BR',
  },
  geo: { lat: -21.6788753, lng: -51.5473779 },
  phone: '(18) 98118-8505',
  phoneInternational: '+5518981188505',
  whatsapp: {
    number: '5518981188505',
    messages: {
      home: "Olá! Encontrei a Figaro's pelo site e gostaria de saber mais sobre prótese capilar.",
      service: 'Olá! Gostaria de saber mais sobre o serviço de prótese capilar em Presidente Epitácio.',
      manutencao: 'Olá! Gostaria de saber mais sobre a manutenção de prótese capilar.',
      blog: "Olá! Li um artigo no blog da Figaro's e gostaria de tirar uma dúvida sobre prótese capilar.",
      avaliacao: 'Olá! Gostaria de agendar minha avaliação gratuita de prótese capilar.',
    },
  },
  instagram: 'https://www.instagram.com/figarosbarbeariape/',
  instagramHandle: '@figarosbarbeariape',
  hours: [
    {
      day: 'Segunda a Sábado',
      hours: '09:00 - 18:00',
      closed: false,
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    },
  ],
  rating: { ratingValue: '4.8', ratingCount: '114', bestRating: '5', worstRating: '1' },
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.534984562!2d-51.54737792483964!3d-21.67887538017473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9490a7793e9878d7%3A0x1cf7d15f4f4d68d!2sR.%20Macei%C3%B3%2C%201274%20-%20Centro%2C%20Pres.%20Epit%C3%A1cio%20-%20SP%2C%2019470-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr',
  speciality: 'Prótese Capilar Masculina',
  serviceArea: 'Presidente Epitácio (SP) e região',
};

export const MONEY_PAGE_SLUG = 'protese-capilar-presidente-epitacio';