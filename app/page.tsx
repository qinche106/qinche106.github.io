import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { internalPath } from '@/lib/paths';
import { newsItems, publications, researchAreas } from '@/lib/site-data';

export const dynamic = 'force-static';

export default function Home() {
  const featuredNews = newsItems.filter((item) => [
    'Two papers accepted at AICAS 2026',
    'OPERA project funded through the NWO–JST call',
    'SHAP-AAD accepted at ISCAS 2026',
  ].includes(item.title));

  return (
    <main>
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Leiden University · LIACS</p>
          <h1 id="hero-title">
            From efficient circuits<br />
            <em>to intelligent systems.</em>
          </h1>
          <p className="hero-intro">
            We unite algorithms, hardware, and neuroscience to build compact,
            energy-efficient intelligence for healthcare, extended reality,
            and robotics.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={internalPath('/research')}>
              Explore our research <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="text-link" href={internalPath('/people')}>
              Meet the group <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-meta" aria-label="Research focus and location">
            <span>Leiden, the Netherlands</span>
            <span>Algorithms ↔ Hardware</span>
          </div>
        </div>

        <figure className="hero-visual">
          <img
            src={internalPath('/images/hero-seminar.jpg')}
            alt="A research seminar with colleagues gathered around a presentation on event cameras"
          />
          <figcaption>
            <span>Inside EIG</span>
            <div>
              <strong>Ideas move further<br />in conversation.</strong>
              <small>Guest seminar · Leiden, 2026</small>
            </div>
          </figcaption>
        </figure>
      </section>

      <section className="research-preview" aria-labelledby="research-title">
        <div className="section-shell">
          <div className="section-heading">
            <p className="eyebrow eyebrow-light"><span /> What we investigate</p>
            <h2 id="research-title">Intelligence designed<br />around constraints.</h2>
            <p>
              Our research spans the full stack—from learning algorithms and
              neural architectures to embedded systems and silicon.
            </p>
          </div>

          <div className="research-grid">
            {researchAreas.map((area) => (
              <article className="research-card" key={area.title}>
                <span className="research-number">{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.summary}</p>
                <a href={internalPath(`/research#${area.slug}`)} aria-label={`Read more about ${area.title}`}>
                  Read focus <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-publications section-shell" aria-labelledby="selected-work-title">
        <div className="home-section-head">
          <div>
            <p className="eyebrow"><span /> Selected work</p>
            <h2 id="selected-work-title">Recent research,<br /><em>across the stack.</em></h2>
          </div>
          <a className="text-link" href={internalPath('/publications')}>All publications <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="home-publication-list">
          {publications.slice(0, 4).map((publication, index) => (
            <article key={publication.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <p>{publication.category} · {publication.year}</p>
                <h3>{publication.title}</h3>
              </div>
              <small>{publication.venue}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="group-pulse">
        <div className="section-shell group-pulse-grid">
          <div>
            <p className="eyebrow eyebrow-light"><span /> The group</p>
            <h2>Different disciplines.<br />One shared question.</h2>
          </div>
          <p>How can intelligence become more capable while using less energy, memory, data, and time?</p>
          <div className="group-stats">
            <span><strong>4</strong>PhD candidates</span>
            <span><strong>4</strong>Research themes</span>
            <span><strong>3</strong>Application domains</span>
          </div>
        </div>
      </section>

      <section className="home-news section-shell" aria-labelledby="latest-title">
        <div className="home-section-head">
          <div>
            <p className="eyebrow"><span /> Latest</p>
            <h2 id="latest-title">News from <em>the group.</em></h2>
          </div>
          <a className="text-link" href={internalPath('/news')}>View all news <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="home-news-grid">
          {featuredNews.map((item) => (
            <article className="news-card" key={item.title}>
              {item.image ? <img src={internalPath(item.image)} alt={item.imageAlt ?? ''} /> : <div className="news-card-placeholder" aria-hidden="true"><span>EIG</span></div>}
              <div className="news-card-body">
                <time>{item.date}</time>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-join section-shell">
        <p className="eyebrow eyebrow-light"><span /> Study with us</p>
        <div>
          <h2>Curious minds,<br /><em>welcome.</em></h2>
          <p>We offer research projects for MSc and BSc students across embedded AI, bio-signals, and event-based perception.</p>
          <a className="button button-light" href={internalPath('/join-us')}>Explore projects <ArrowRight size={17} aria-hidden="true" /></a>
        </div>
      </section>
    </main>
  );
}
