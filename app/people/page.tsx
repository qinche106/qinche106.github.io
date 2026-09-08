import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { PageIntro } from '@/components/page-intro';
import { internalPath } from '@/lib/paths';
import { alumni, bscStudents, mscStudents, phdStudents } from '@/lib/site-data';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'People · Efficient Intelligence Group',
  description: 'Meet the researchers and students of the Efficient Intelligence Group at Leiden University.',
};

export default function PeoplePage() {
  return (
    <main>
      <PageIntro
        eyebrow="People"
        title={<>Many perspectives.<br /><em>Shared curiosity.</em></>}
        intro="Our group brings together researchers in computer science, microelectronics, machine learning, neuroscience, and human-centred systems."
      />

      <section className="people-section section-shell">
        <div className="section-label"><span>01</span><h2>Principal investigator</h2></div>
        <article className="pi-card">
          <img src={internalPath('/images/qinyu-chen.jpg')} alt="Portrait of Qinyu Chen" />
          <div>
            <p className="person-role">Assistant Professor · LIACS</p>
            <h3>Qinyu Chen</h3>
            <p>Qinyu leads the Efficient Intelligence Group. Her research combines neuroscience, computer science, and microelectronics to develop compact, energy-efficient intelligent systems for healthcare, extended reality, robotics, and generative AI.</p>
            <div className="person-links">
              <a href={internalPath('/people/qinyu-chen')}>Profile <ArrowUpRight size={15} aria-hidden="true" /></a>
              <a href="https://www.universiteitleiden.nl/en/staffmembers/qinyu-chen" target="_blank" rel="noreferrer">Leiden profile <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </div>
        </article>
      </section>

      <section className="people-section section-shell">
        <div className="section-label"><span>02</span><h2>PhD candidates</h2></div>
        <div className="phd-grid">
          {phdStudents.map((student) => (
            <article className="person-card" key={student.name}>
              <p className="person-role">PhD candidate · since {student.since}</p>
              <h3>{student.name}</h3>
              <p>{student.focus}</p>
              <small>{student.education}</small>
              {student.note && <small>{student.note}</small>}
              <a href={student.url} target="_blank" rel="noreferrer" aria-label={`${student.name}'s Leiden profile`}><ArrowUpRight size={18} aria-hidden="true" /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="people-section section-shell student-lists">
        <div className="student-list-block">
          <div className="section-label"><span>03</span><h2>MSc students</h2></div>
          <div>{mscStudents.map((name) => <p key={name}>{name}</p>)}</div>
        </div>
        <div className="student-list-block">
          <div className="section-label"><span>04</span><h2>BSc students</h2></div>
          <div>{bscStudents.map((name) => <p key={name}>{name}</p>)}</div>
        </div>
      </section>

      <section className="people-section alumni-section section-shell">
        <div className="section-label"><span>05</span><h2>Alumni</h2></div>
        <div className="alumni-list">
          {alumni.map(([name, next, year]) => (
            <div key={`${name}-${year}`}><strong>{name}</strong><span>{next}</span><time>{year}</time></div>
          ))}
        </div>
      </section>
    </main>
  );
}
