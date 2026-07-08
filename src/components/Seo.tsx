import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '../lib/site';

type SeoProps = {
  title?: string;
  description?: string;
  canonicalPath?: string;
  image?: string;
  keywords?: string[];
  noindex?: boolean;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
};

const resolveUrl = (value?: string) => {
  if (!value) return undefined;
  if (/^https?:\/\//i.test(value)) return value;
  return new URL(value, SITE_URL).toString();
};

const buildCanonical = (pathname?: string) => {
  const path = pathname ?? '/';
  return new URL(path, SITE_URL).toString();
};

export const Seo: React.FC<SeoProps> = ({
  title,
  description = SITE_DESCRIPTION,
  canonicalPath,
  image = '/img/logo.png',
  keywords = [],
  noindex = false,
  structuredData,
}) => {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonical = buildCanonical(canonicalPath);
  const resolvedImage = resolveUrl(image);
  const robots = noindex ? 'noindex, nofollow' : 'index, follow';
  const schema = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="robots" content={robots} />
      <meta name="author" content="Kayque de Jesus" />
      <meta name="theme-color" content="#0b0c2a" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      {resolvedImage && <meta property="og:image" content={resolvedImage} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {resolvedImage && <meta name="twitter:image" content={resolvedImage} />}

      {schema.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};
