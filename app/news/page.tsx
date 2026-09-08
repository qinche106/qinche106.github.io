import type { Metadata } from 'next';
import { PageIntro } from '@/components/page-intro';
import { newsItems } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'News · Efficient Intelligence Group',
  description: 'Research news, awards, talks, and events from the Efficient Intelligence Group.',
};

export default function NewsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="News"
        title={<>Progress, people,<br /><em>and perspectives.</em></>}
        intro="New papers, research awards, invited talks, and moments from the life of the group."
      />
      <section className="news-page section-shell">
        {newsItems.map((item, index) => (
          <article className={`news-feature ${index === 0 ? 'news-feature-lead' : ''}`} key={item.title}>
            <div className="news-date"><time>{item.date}</time><span>{String(index + 1).padStart(2, '0')}</span></div>
            <div className="news-copy"><h2>{item.title}</h2><p>{item.text}</p></div>
            {item.image ? <img src={item.image} alt={item.imageAlt ?? ''} /> : <div className="news-motif" aria-hidden="true"><span>{item.year}</span></div>}
          </article>
        ))}
      </section>
    </main>
  );
}
