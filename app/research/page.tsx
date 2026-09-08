import type { Metadata } from 'next';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { PageIntro } from '@/components/page-intro';
import { internalPath } from '@/lib/paths';
import { researchAreas } from '@/lib/site-data';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Research · Efficient Intelligence Group',
  description: 'Explore our research in embedded AI, neuromorphic computing, bio-signal processing, and intelligent perception.',
};

export default function ResearchPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Research"
        title={<>A full-stack view of<br /><em>efficient intelligence.</em></>}
        intro="We work across algorithms, architectures, circuits, and systems. Constraints are not an afterthought—they shape the intelligence we design."
      />

      <nav className="research-index section-shell" aria-label="Research areas">
        {researchAreas.map((area) => (
          <a href={`#${area.slug}`} key={area.slug}>
            <span>{area.number}</span>{area.title}<ArrowDown size={15} aria-hidden="true" />
          </a>
        ))}
      </nav>

      <div className="research-detail-list section-shell">
        {researchAreas.map((area, index) => (
          <section className="research-detail" id={area.slug} key={area.slug}>
            <div className="research-detail-number">{area.number}</div>
            <div className="research-detail-heading">
              <p>{area.label}</p>
              <h2>{area.title}</h2>
              <p className="research-detail-summary">{area.summary}</p>
            </div>
            <div className="research-detail-body">
              <p>{area.body}</p>
              <div className="method-list">
                {area.methods.map((method) => <span key={method}>{method}</span>)}
              </div>
              <p className="application"><strong>Where it matters</strong>{area.applications}</p>
            </div>
            {index === 0 && (
              <figure className="research-detail-image">
                <img src={internalPath('/images/deltakws-chip.png')} alt="Keyword spotting chip and measurement platform" />
                <figcaption>From architecture to measured silicon.</figcaption>
              </figure>
            )}
          </section>
        ))}
      </div>

      <section className="cross-layer section-shell">
        <p className="eyebrow eyebrow-light"><span /> Our approach</p>
        <div>
          <h2>Algorithms <span>→</span> architectures <span>→</span> systems <span>→</span> impact.</h2>
          <a className="button button-light" href={internalPath('/publications')}>Read our work <ArrowRight size={17} aria-hidden="true" /></a>
        </div>
      </section>
    </main>
  );
}
