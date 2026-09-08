import type { Metadata } from 'next';
import { internalPath } from '@/lib/paths';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Qinyu Chen · Efficient Intelligence Group',
  description: 'Principal investigator of the Efficient Intelligence Group and Assistant Professor at Leiden University.',
  openGraph: { images: [] },
  twitter: { card: 'summary', images: [] },
};

const background = [
  ['2024 — present', 'Assistant Professor', 'Leiden University'],
  ['2022 — 2024', 'Postdoctoral Researcher', 'University of Zurich & ETH Zurich'],
  ['2016 — 2021', 'PhD, Electronic Science and Technology', 'Nanjing University'],
];

const awards = [
  ['2025', 'Best Poster Award · EdgeAI4Robots Workshop, IROS'],
  ['2024', 'NWO Veni Talent Programme'],
  ['2024', 'NSATC Best Paper Award · Honorable Mention'],
  ['2023', 'SNSF BRIDGE Fellowship'],
];

export default function QinyuChenPage() {
  return (
    <main className="pi-profile section-shell">
      <a className="back-link" href={internalPath('/people')}>← Back to people</a>
      <section className="pi-profile-hero">
        <img src={internalPath('/images/qinyu-chen.jpg')} alt="Portrait of Qinyu Chen" />
        <div>
          <p className="page-label">Principal investigator</p>
          <h1>Qinyu Chen</h1>
          <p className="pi-title">Assistant Professor · Leiden University</p>
          <p className="pi-bio">Qinyu Chen combines neuroscience, computer science, and microelectronics to develop compact, energy-efficient intelligent systems. Her research connects algorithms and circuits for healthcare, extended reality, robotics, and embedded generative AI.</p>
          <div className="person-links">
            <a href="mailto:q.chen@liacs.leidenuniv.nl">Email</a>
            <a href="https://scholar.google.com/citations?hl=en&user=enuSO2YAAAAJ" target="_blank" rel="noreferrer">Google Scholar</a>
            <a href="https://www.universiteitleiden.nl/en/staffmembers/qinyu-chen" target="_blank" rel="noreferrer">Leiden profile</a>
          </div>
        </div>
      </section>

      <section className="pi-profile-section">
        <h2>Research interests</h2>
        <div className="profile-keywords">
          {['Circuit design', 'Brain-inspired AI', 'Bio-signal processing', 'Embedded large language models', 'Event-based vision', 'Edge intelligence'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="pi-profile-section profile-two-column">
        <div>
          <h2>Selected background</h2>
          <div className="profile-timeline">{background.map(([year, role, place]) => <article key={`${year}-${role}`}><time>{year}</time><div><strong>{role}</strong><p>{place}</p></div></article>)}</div>
        </div>
        <div>
          <h2>Selected recognition</h2>
          <div className="recognition-list">{awards.map(([year, award]) => <p key={award}><time>{year}</time><span>{award}</span></p>)}</div>
        </div>
      </section>
    </main>
  );
}
