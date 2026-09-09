import type { Metadata } from 'next';
import { PageIntro } from '@/components/page-intro';
import { internalPath } from '@/lib/paths';
import { alumni, bscStudents, mscStudents, phdStudents } from '@/lib/site-data';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Team · Efficient Intelligence Group',
  description: 'Meet the researchers and students of the Efficient Intelligence Group at Leiden University.',
};

export default function PeoplePage() {
  return (
    <main>
      <PageIntro
        eyebrow="Team"
        title="Team"
        intro="We are a collaborative group working across artificial intelligence, embedded systems, and microelectronics."
      />

      <section className="people-section section-shell">
        <h2>Principal investigator</h2>
        <article className="pi-card">
          <img src={internalPath('/images/qinyu-chen.jpg')} alt="Portrait of Qinyu Chen" />
          <div>
            <h3><a href={internalPath('/people/qinyu-chen')}>Qinyu Chen</a></h3>
            <p className="person-role">Assistant Professor · Leiden University</p>
            <p>Qinyu leads the Efficient Intelligence Group. Her research connects algorithms and hardware for compact, energy-efficient intelligent systems.</p>
          </div>
        </article>
      </section>

      <section className="people-section section-shell">
        <h2>PhD candidates</h2>
        <div className="phd-grid">
          {phdStudents.map((student) => (
            <article className="person-card" key={student.name}>
              <img
                src={internalPath(student.image)}
                alt={`Portrait of ${student.name}`}
                style={{ objectPosition: student.imagePosition }}
                loading="lazy"
              />
              <div>
                <h3>{student.name}</h3>
                <p className="person-role">PhD candidate · since {student.since}</p>
                <p>{student.focus}</p>
                <small>{student.education}</small>
                {student.note && <small>{student.note}</small>}
                <a className="profile-link" href={student.url} target="_blank" rel="noreferrer">Leiden profile</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="people-section section-shell student-lists">
        <div className="student-list-block">
          <h2>MSc students</h2>
          <div>{mscStudents.map((name) => <p key={name}>{name}</p>)}</div>
        </div>
        <div className="student-list-block">
          <h2>BSc students</h2>
          <div>{bscStudents.map((name) => <p key={name}>{name}</p>)}</div>
        </div>
      </section>

      <section className="people-section section-shell alumni-section">
        <h2>Alumni</h2>
        <div className="alumni-list">
          {alumni.map(([name, next, year]) => (
            <div key={`${name}-${year}`}><strong>{name}</strong><span>{next}</span><time>{year}</time></div>
          ))}
        </div>
      </section>
    </main>
  );
}
