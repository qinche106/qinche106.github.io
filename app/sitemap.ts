import type { MetadataRoute } from 'next';

const routes = ['', '/people', '/news', '/research', '/gallery', '/join-us', '/people/qinyu-chen', '/publications'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://www.qinyu-chen.com${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/news' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : route === '/research' || route === '/publications' ? 0.8 : 0.7,
  }));
}
