import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');
const modsPath = path.join(root, 'src', 'data', 'mods.json');

const siteUrl =
  process.env.VITE_SITE_URL ||
  process.env.SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://doki-doki-translate-company.vercel.app');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const mods = JSON.parse(fs.readFileSync(modsPath, 'utf8'));
const urls = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/mods', priority: '0.9', changefreq: 'weekly' },
  { path: '/equipe', priority: '0.7', changefreq: 'monthly' },
  { path: '/recrutamento', priority: '0.8', changefreq: 'monthly' },
  { path: '/tutoriais', priority: '0.8', changefreq: 'weekly' },
  ...mods.map((mod) => ({ path: `/mod/${mod.slug}`, priority: '0.8', changefreq: 'monthly' })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .map(
      ({ path: urlPath, priority, changefreq }) =>
        `  <url>\n    <loc>${siteUrl}${urlPath}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
    )
    .join('\n') +
  `\n</urlset>\n`;

const robots = `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
