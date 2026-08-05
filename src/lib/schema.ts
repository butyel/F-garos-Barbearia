import { BUSINESS, SITE } from '../data/site';
import { buildUrl } from './seo';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function localBusiness() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Barbershop', 'LocalBusiness'],
    '@id': `${SITE.url}/#business`,
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: SITE.url,
    telephone: BUSINESS.phone,
    email: undefined,
    image: buildUrl('/images/figaros-barbearia-presidente-epitacio.webp'),
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.streetAddress,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    areaServed: BUSINESS.serviceArea,
    openingHoursSpecification: BUSINESS.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: h.hours.split(' - ')[0],
      closes: h.hours.split(' - ')[1],
    })),
    sameAs: [BUSINESS.instagram],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.rating.ratingValue,
      reviewCount: BUSINESS.rating.ratingCount,
      bestRating: BUSINESS.rating.bestRating,
      worstRating: BUSINESS.rating.worstRating,
    },
    founder: {
      '@type': 'Person',
      name: 'Wagner Pires',
      jobTitle: 'Barbeiro e Especialista em Prótese Capilar',
    },
  };
}

export function website() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: 'pt-BR',
    publisher: { '@id': `${SITE.url}/#business` },
  };
}

export function organization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: BUSINESS.name,
    url: SITE.url,
    logo: buildUrl('/favicon.svg'),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS.phone,
      contactType: 'customer service',
      areaServed: 'BR',
      availableLanguage: 'Portuguese',
    },
    sameAs: [BUSINESS.instagram],
  };
}

export function serviceSchema(slug: string, name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE.url}/${slug}/#service`,
    serviceType: name,
    name,
    description,
    url: buildUrl(`/${slug}/`),
    provider: { '@id': `${SITE.url}/#business` },
    areaServed: { '@type': 'City', name: 'Presidente Epitácio' },
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: buildUrl(`/${slug}/`) },
  };
}

export function breadcrumbs(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: buildUrl(item.path),
    })),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  path: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image ? buildUrl(article.image) : undefined,
    author: {
      '@type': 'Person',
      name: article.author || 'Wagner Pires',
      jobTitle: 'Barbeiro e Especialista em Prótese Capilar',
    },
    publisher: { '@id': `${SITE.url}/#business` },
    mainEntityOfPage: buildUrl(article.path),
    datePublished: article.publishedTime,
    dateModified: article.modifiedTime || article.publishedTime,
    inLanguage: 'pt-BR',
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function jsonLd(...blocks: object[]) {
  return blocks.map((block) => JSON.stringify(block));
}
