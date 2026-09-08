import type { Metadata } from 'next';
import { PageIntro } from '@/components/page-intro';
import { internalPath } from '@/lib/paths';
import { newsItems } from '@/lib/site-data';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'News · Efficient Intelligence Group',
  description: 'Research news, awards, talks, and events from the Efficient Intelligence Group.',
};

export default function NewsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="News"
        title="News"
        intro="Recent papers, talks, awards, and activities from the group."
      />
      <section className="news-list section-shell">
        {newsItems.map((item) => (
          <article key={item.title}>
            <time>{item.date}</time>
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              {item.image && <img src={internalPath(item.image)} alt={item.imageAlt ?? ''} loading="lazy" />}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
