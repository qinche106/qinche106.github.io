import type { Metadata } from 'next';
import { PageIntro } from '@/components/page-intro';
import { ongoingProjects, site } from '@/lib/site-data';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Join us · Efficient Intelligence Group',
  description: 'Student projects and opportunities with the Efficient Intelligence Group at Leiden University.',
};

export default function JoinUsPage() {
  return (
    <main>
      <PageIntro
        title="Join us"
        intro="We welcome motivated students and researchers interested in efficient intelligent systems."
      />

      <section className="opportunity-section section-shell">
        <div className="simple-section-heading">
          <h2>MSc and BSc projects</h2>
          <p>Project scope is shaped around your background and interests. The themes below are available on an ongoing basis.</p>
        </div>
        <div className="project-grid">
          {ongoingProjects.map((project) => (
            <article key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <a href={`mailto:${project.email}`}>Contact {project.contact}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="visit-section">
        <div className="section-shell">
          <h2>Visiting and exchange</h2>
          <p>Interested scholars and students are welcome to contact us about research visits, exchange projects, and collaboration.</p>
          <a className="button button-light" href={`mailto:${site.email}`}>Contact the group</a>
        </div>
      </section>
    </main>
  );
}
