import type { Metadata } from 'next';
import { PageIntro } from '@/components/page-intro';
import { NewsEntry } from '@/components/news-entry';
import { newsItems } from '@/lib/site-data';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'News · Efficient Intelligence Group',
  description: 'Research news, awards, talks, and events from the Efficient Intelligence Group.',
};

export default function NewsPage() {
  return (
    <main>
      <PageIntro title="News" intro="Recent papers, talks, awards, and activities from the group." />
      <section className="news-list section-shell">
        {newsItems.map((item) => <NewsEntry item={item} showImages key={item.title} />)}
      </section>
    </main>
  );
}
