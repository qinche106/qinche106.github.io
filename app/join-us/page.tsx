import type { Metadata } from 'next';
import { ArrowRight, Mail } from 'lucide-react';
import { PageIntro } from '@/components/page-intro';
import { closedPhdCalls, ongoingProjects, site } from '@/lib/site-data';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Join us · Efficient Intelligence Group',
  description: 'Student projects and opportunities with the Efficient Intelligence Group at Leiden University.',
};

export default function JoinUsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Join us"
        title={<>Build what intelligence<br /><em>could become.</em></>}
        intro="We welcome motivated students and researchers who enjoy moving between algorithms, hardware, experiments, and real-world applications."
      />

      <section className="opportunity-section section-shell">
        <div className="opportunity-heading"><span>Open</span><div><h2>MSc & BSc research projects</h2><p>These themes are available on an ongoing basis. Specific scope is shaped around your background and interests.</p></div></div>
        <div className="project-grid">
          {ongoingProjects.map((project, index) => (
            <article key={project.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <a href={`mailto:${project.email}`}>{project.contact} <Mail size={14} aria-hidden="true" /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="visiting-section">
        <div className="section-shell">
          <p className="eyebrow eyebrow-light"><span /> Visiting & exchange</p>
          <div><h2>Bring a question.<br />Leave with new ones.</h2><p>Interested scholars and students are welcome to contact us about short research visits, exchange projects, and collaboration.</p><a className="button button-light" href={`mailto:${site.email}`}>Start a conversation <ArrowRight size={17} aria-hidden="true" /></a></div>
        </div>
      </section>

      <section className="closed-calls section-shell">
        <div className="section-label"><span>Archive</span><h2>Previous PhD calls</h2></div>
        <p className="closed-intro">The calls below are closed and retained for reference. Future funded positions will be announced here.</p>
        <div>
          {closedPhdCalls.map(([title, status]) => <article key={title}><h3>{title}</h3><span>{status}</span></article>)}
        </div>
      </section>
    </main>
  );
}
