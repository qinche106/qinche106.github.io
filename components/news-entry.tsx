import { internalPath } from '@/lib/paths';
import type { NewsItem } from '@/lib/site-data';

function NewsLinks({ links }: { links: NewsItem['links'] }) {
  return links?.map((link) => (
    <span key={link.href}>{' '}<a className="news-inline-link" href={link.href} target="_blank" rel="noreferrer">[{link.label}]</a></span>
  ));
}

export function NewsEntry({ item, headingLevel = 'h2', showImages = false }: {
  item: NewsItem;
  headingLevel?: 'h2' | 'h3';
  showImages?: boolean;
}) {
  const Heading = headingLevel;
  const papers = item.links?.filter((link) => /^paper$/i.test(link.label)) ?? [];
  const paper = papers.length === 1 ? papers[0] : undefined;
  const paragraphs = item.paragraphs ?? [];
  const linksForParagraph = (index: number) => item.links?.filter((link) => (link.paragraphIndex ?? paragraphs.length) === index);

  return (
    <article className="news-entry">
      <time>{item.date}</time>
      <div className="news-entry-content">
        <div className="news-entry-summary">
          <Heading className="news-entry-title">
            {paper ? <a href={paper.href} target="_blank" rel="noreferrer">{item.title}</a> : item.title}{/[.!?]$/.test(item.title) ? '' : '.'}
          </Heading>{' '}
          <span>{item.text}</span>
          <NewsLinks links={linksForParagraph(0)} />
        </div>
        {paragraphs.map((paragraph, index) => (
          <p key={paragraph}>{paragraph}<NewsLinks links={linksForParagraph(index + 1)} /></p>
        ))}
        {showImages && (item.image || item.additionalImages) && (
          <div className="news-images">
            {item.image && <img src={internalPath(item.image)} alt={item.imageAlt ?? ''} loading="lazy" />}
            {item.additionalImages?.map((image) => <img src={internalPath(image.image)} alt={image.alt} loading="lazy" key={image.image} />)}
          </div>
        )}
      </div>
    </article>
  );
}
