import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight, Mail } from 'lucide-react';
import { internalPath } from '@/lib/paths';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Qinyu Chen · Efficient Intelligence Group',
  description: 'Principal investigator of the Efficient Intelligence Group and Assistant Professor at Leiden University.',
  openGraph: {
    title: 'Qinyu Chen · Efficient Intelligence Group',
    description: 'Principal investigator of the Efficient Intelligence Group at Leiden University.',
    images: [],
  },
  twitter: {
    card: 'summary',
    title: 'Qinyu Chen · Efficient Intelligence Group',
    description: 'Principal investigator of the Efficient Intelligence Group at Leiden University.',
    images: [],
  },
};

const experience = [
  ['2024 — present', 'Assistant Professor', 'Leiden Institute of Advanced Computer Science, Leiden University'],
  ['2022 — 2024', 'Postdoctoral Researcher', 'Institute of Neuroinformatics, University of Zurich & ETH Zurich'],
  ['2021 — 2022', 'Lecturer', 'Institute of Photonic Chip, University of Shanghai for Science and Technology'],
];

const education = [
  ['2016 — 2021', 'PhD, Electronic Science and Technology', 'Nanjing University'],
  ['2019 — 2020', 'Visiting PhD Student', 'Institute of Neuroinformatics, UZH–ETH Zurich'],
  ['2012 — 2016', 'BEng, Communication Engineering', 'Shandong University'],
];

const awards = [
  ['2025', 'Best Poster Award · EdgeAI4Robots Workshop, IROS'],
  ['2024', 'NWO Veni Talent Programme'],
  ['2024', 'NSATC Best Paper Award · Honorable Mention'],
  ['2023', 'SNSF BRIDGE Fellowship'],
];

const service = [
  'Chair-Elect, IEEE CASS Neural Systems and Applications Technical Committee',
  'Workshop/Tutorial Chair, FPL 2026',
  'Track Chair, ISCAS 2024–2026',
  'Associate Editor, IROS 2026 and ICRA 2025',
  'Organizer, IEEE WiCAS-YP 2025 and IROS Edge AI for Robotics Workshop 2025',
];

export default function QinyuChenPage() {
  return (
    <main className="pi-profile section-shell">
      <a className="back-link" href={internalPath('/people')}><ArrowLeft size={16} aria-hidden="true" /> Back to people</a>
      <section className="pi-profile-hero">
        <img src={internalPath('/images/qinyu-chen.jpg')} alt="Portrait of Qinyu Chen" />
        <div>
          <p className="eyebrow"><span /> Principal investigator</p>
          <h1>Qinyu Chen</h1>
          <p className="pi-title">Assistant Professor · Leiden Institute of Advanced Computer Science</p>
          <p className="pi-bio">Qinyu Chen combines neuroscience, computer science, and microelectronics to develop compact, energy-efficient, neuro-inspired intelligent systems. Her research connects algorithms and circuits for applications in healthcare, extended reality, robotics, and embedded generative AI.</p>
          <div className="person-links">
            <a href="mailto:q.chen@liacs.leidenuniv.nl"><Mail size={15} aria-hidden="true" /> Email</a>
            <a href="https://scholar.google.com/citations?hl=en&user=enuSO2YAAAAJ" target="_blank" rel="noreferrer">Google Scholar <ArrowUpRight size={15} aria-hidden="true" /></a>
            <a href="https://www.universiteitleiden.nl/en/staffmembers/qinyu-chen" target="_blank" rel="noreferrer">Leiden profile <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="pi-profile-section">
        <div className="section-label"><span>01</span><h2>Research interests</h2></div>
        <div className="profile-keywords">
          {['Circuit design', 'Brain-inspired AI', 'Bio-signal processing', 'Embedded large language models', 'Event-based vision', 'Edge intelligence'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="pi-profile-section profile-two-column">
        <div>
          <div className="section-label"><span>02</span><h2>Experience</h2></div>
          <div className="profile-timeline">{experience.map(([year, role, place]) => <article key={role}><time>{year}</time><div><strong>{role}</strong><p>{place}</p></div></article>)}</div>
        </div>
        <div>
          <div className="section-label"><span>03</span><h2>Education</h2></div>
          <div className="profile-timeline">{education.map(([year, degree, place]) => <article key={degree}><time>{year}</time><div><strong>{degree}</strong><p>{place}</p></div></article>)}</div>
        </div>
      </section>

      <section className="pi-profile-section profile-two-column">
        <div>
          <div className="section-label"><span>04</span><h2>Selected recognition</h2></div>
          <div className="recognition-list">{awards.map(([year, award]) => <p key={award}><time>{year}</time><span>{award}</span></p>)}</div>
        </div>
        <div>
          <div className="section-label"><span>05</span><h2>Academic service</h2></div>
          <ul className="service-list">{service.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>
    </main>
  );
}
