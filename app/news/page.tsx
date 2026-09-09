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
              {item.text && <p>{item.text}</p>}
              {item.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {item.links && (
                <div className="news-links">
                  {item.links.map((link) => (
                    <a href={link.href} key={link.href} target="_blank" rel="noreferrer">{link.label}</a>
                  ))}
                </div>
              )}
              {(item.image || item.additionalImages) && (
                <div className="news-images">
                  {item.image && <img src={internalPath(item.image)} alt={item.imageAlt ?? ''} loading="lazy" />}
                  {item.additionalImages?.map((image) => (
                    <img src={internalPath(image.image)} alt={image.alt} loading="lazy" key={image.image} />
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
