import type { Metadata } from 'next';
import { internalPath } from '@/lib/paths';
import { researchAreas, site } from '@/lib/site-data';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About · Efficient Intelligence Group',
  description: 'The Efficient Intelligence Group at Leiden University studies energy-efficient algorithms, circuits, architectures, and embedded systems.',
};

export default function AboutPage() {
  return (
    <main className="about-page academic-about section-shell">
      <header className="academic-page-heading">
        <h1>Efficient Intelligence Group</h1>
      </header>

      <p>
        The Efficient Intelligence Group, led by{' '}
        <a className="institution-link" href={internalPath('/people/qinyu-chen')}>Qinyu Chen</a>,
        is based at the Leiden Institute of Advanced Computer Science (LIACS), Leiden University.
        We study energy-efficient intelligent systems across algorithms, architectures,
        circuits, and embedded platforms. Our research connects computer science, electronics,
        and neuroscience, with applications in healthcare, extended reality, and robotics.
      </p>

      <section className="academic-section" aria-labelledby="about-research-title">
        <h2 id="about-research-title">Research areas</h2>
        <div className="about-research-list">
          {researchAreas.map((area) => (
            <section key={area.slug} aria-labelledby={`about-${area.slug}`}>
              <h3 id={`about-${area.slug}`}>
                <a className="institution-link" href={internalPath(`/research#${area.slug}`)}>{area.title}</a>
              </h3>
              <p>{area.body}</p>
              <p><strong>Topics:</strong> {area.methods.join(', ')}.</p>
              <p><strong>Applications:</strong> {area.applications}.</p>
            </section>
          ))}
        </div>
      </section>

      <section className="academic-section" aria-labelledby="about-approach-title">
        <h2 id="about-approach-title">Research approach</h2>
        <p>
          We develop compact models and adaptive algorithms together with the architectures,
          circuits, and dataflows that implement them. This hardware–software co-design
          addresses latency, energy, memory, and compute constraints on embedded devices,
          using custom processors, FPGA acceleration, and efficient dataflows.
        </p>
        <p>
          Sparsity is a recurring theme in our work. We investigate how processing changes
          and relevant information can reduce unnecessary computation in language models,
          event-based sensing, spiking algorithms, and physiological signal processing.
        </p>
      </section>

      <section className="academic-section" aria-labelledby="about-contact-title">
        <h2 id="about-contact-title">Affiliation and contact</h2>
        <p>
          We are part of the{' '}
          <a className="institution-link" href="https://liacs.leidenuniv.nl/" target="_blank" rel="noreferrer">
            Leiden Institute of Advanced Computer Science
          </a>{' '}
          at Leiden University, the Netherlands.
        </p>
        <address>{site.address.join(', ')}</address>
        <p><a className="institution-link" href={`mailto:${site.email}`}>{site.email}</a></p>
        <p>
          Further information is available on our{' '}
          <a className="institution-link" href={internalPath('/research')}>Research</a>,{' '}
          <a className="institution-link" href={internalPath('/people')}>Team</a>, and{' '}
          <a className="institution-link" href={internalPath('/join-us')}>Join us</a> pages.
        </p>
      </section>
    </main>
  );
}
