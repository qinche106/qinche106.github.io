import { internalPath } from '@/lib/paths';
import { newsItems, researchAreas } from '@/lib/site-data';

export const dynamic = 'force-static';

export default function Home() {
  return (
    <main>
      <section className="home-hero section-shell">
        <div className="home-hero-copy">
          <p className="site-kicker">Leiden University</p>
          <h1>Efficient Intelligence Group</h1>
          <p className="home-lead">
            We develop compact and energy-efficient intelligent systems by connecting algorithms,
            hardware, and neuroscience.
          </p>
          <div className="simple-links">
            <a className="button button-primary" href={internalPath('/research')}>Our research</a>
            <a className="text-link" href={internalPath('/people')}>Meet the group</a>
          </div>
        </div>
        <figure className="home-hero-image">
          <img
            src={internalPath('/images/hero-seminar.jpg')}
            alt="Members of the Efficient Intelligence Group during a research seminar"
          />
        </figure>
      </section>

      <section className="home-section section-shell" aria-labelledby="home-research-title">
        <div className="simple-section-heading">
          <h2 id="home-research-title">Research</h2>
          <p>
            Our work spans efficient AI, neuromorphic computing, bio-signal processing,
            and intelligent perception.
          </p>
        </div>
        <div className="focus-grid">
          {researchAreas.map((area) => (
            <a className="focus-card" href={internalPath(`/research#${area.slug}`)} key={area.slug}>
              <h3>{area.title}</h3>
              <p>{area.summary}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="home-section section-shell" aria-labelledby="home-news-title">
        <div className="simple-section-heading heading-with-link">
          <div>
            <h2 id="home-news-title">Latest news</h2>
            <p>Recent papers, talks, awards, and group activities.</p>
          </div>
          <a className="text-link" href={internalPath('/news')}>All news</a>
        </div>
        <div className="news-list news-list-compact">
          {newsItems.slice(0, 3).map((item) => (
            <article key={item.title}>
              <time>{item.date}</time>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-contact">
        <div className="section-shell home-contact-inner">
          <div>
            <h2>Interested in working with us?</h2>
            <p>We welcome motivated students, visiting researchers, and new collaborations.</p>
          </div>
          <a className="button button-light" href={internalPath('/join-us')}>Join us</a>
        </div>
      </section>
    </main>
  );
}
