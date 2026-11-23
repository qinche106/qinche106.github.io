import { NewsEntry } from '@/components/news-entry';
import { internalPath } from '@/lib/paths';
import { newsItems, researchAreas } from '@/lib/site-data';

export const dynamic = 'force-static';

export default function Home() {
  return (
    <main>
      <section className="group-hero" aria-label="Leiden University">
        <div className="group-hero-visual">
          <img src={internalPath('/images/leiden-academy-banner.png')} alt="Historic building and canal bridge in Leiden, in black and white" fetchPriority="high" />
        </div>
        <div className="group-hero-copy">
          <p className="hero-motto">Intelligence,<br />with less energy.</p>
        </div>
      </section>

      <section className="group-introduction section-shell" aria-labelledby="group-introduction-title">
        <h1 id="group-introduction-title">Efficient Intelligence Group</h1>
        <p>We study energy-efficient intelligent systems at the <a className="institution-link" href="https://liacs.leidenuniv.nl/" target="_blank" rel="noreferrer">Leiden Institute of Advanced Computer Science (LIACS), Leiden University</a>. Our research connects algorithms, architectures, and hardware, with a focus on low-power edge AI, neuromorphic sensing and computing, and bio-signal processing.</p>
        <p>PI: <a className="institution-link" href={internalPath('/people/qinyu-chen')}>Qinyu Chen</a>. Read more <a className="institution-link" href={internalPath('/about')}>about the group</a>.</p>
      </section>

      <section className="home-latest section-shell" aria-labelledby="latest-news-title">
        <div className="section-heading-row">
          <h2 id="latest-news-title">News</h2>
          <a className="text-link" href={internalPath('/news')}>All news</a>
        </div>
        <div className="home-news-list">
          {newsItems.slice(0, 4).map((item) => <NewsEntry item={item} headingLevel="h3" key={item.title} />)}
        </div>
      </section>

      <section className="home-research section-shell" aria-labelledby="topics-title">
        <div className="section-heading-row">
          <h2 id="topics-title">Research</h2>
          <a className="text-link" href={internalPath('/research')}>Research details</a>
        </div>
        <ul className="research-overview">
          {researchAreas.map((topic) => (
            <li key={topic.slug}>
              <a className="institution-link" href={internalPath(`/research#${topic.slug}`)}>{topic.title}</a>. {topic.summary}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
