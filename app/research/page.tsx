import type { Metadata } from 'next';
import { PageIntro } from '@/components/page-intro';
import { internalPath } from '@/lib/paths';
import { researchAreas } from '@/lib/site-data';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Research · Efficient Intelligence Group',
  description: 'Research in low-power edge AI, neuromorphic sensing and computing, and efficient bio-signal processing systems.',
};

export default function ResearchPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Research"
        title="Research"
        intro="We study efficient intelligence across algorithms, architectures, circuits, and embedded systems."
      />

      <div className="research-detail-list section-shell">
        {researchAreas.map((area) => (
          <section className="research-detail" id={area.slug} key={area.slug}>
            <div>
              <p className="research-label">{area.label}</p>
              <h2>{area.title}</h2>
              <p className="research-summary">{area.summary}</p>
              <p>{area.body}</p>
              <ul className="method-list">
                {area.methods.map((method) => <li key={method}>{method}</li>)}
              </ul>
              <p className="application"><strong>Applications:</strong> {area.applications}</p>
            </div>
            <figure>
              <img src={internalPath(area.image)} alt={area.imageAlt} />
              {area.slug === 'neuromorphic-computing' && <figcaption>From architecture to measured silicon.</figcaption>}
            </figure>
          </section>
        ))}
      </div>

      <section className="research-links section-shell">
        <h2>Publications</h2>
        <p>Browse selected papers from the group or view the complete record on Google Scholar.</p>
        <div className="simple-links">
          <a className="button button-primary" href={internalPath('/publications')}>Selected publications</a>
          <a className="text-link" href="https://scholar.google.com/citations?hl=en&user=enuSO2YAAAAJ" target="_blank" rel="noreferrer">Google Scholar</a>
        </div>
      </section>
    </main>
  );
}
