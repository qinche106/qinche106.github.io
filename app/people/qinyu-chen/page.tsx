import type { Metadata } from 'next';
import { ProfileSocialLinks } from '@/components/profile-social-links';
import { internalPath } from '@/lib/paths';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Qinyu Chen · Efficient Intelligence Group',
  description: 'Principal investigator of the Efficient Intelligence Group and Assistant Professor at Leiden University.',
  openGraph: { images: [] },
  twitter: { card: 'summary', images: [] },
};

const degrees = [
  'PhD in Electronic Science and Technology, Nanjing University, China, 2021.',
  'Visiting PhD student, Institute of Neuroinformatics (INI), University of Zurich and ETH Zurich, Switzerland, 2019–2020.',
  'BEng in Communication Engineering, Shandong University, China, 2016.',
];

const positions = [
  'Assistant Professor, Leiden Institute of Advanced Computer Science (LIACS), Leiden University, the Netherlands, 2024–present.',
  'Postdoctoral Researcher, Institute of Neuroinformatics (INI), University of Zurich and ETH Zurich, Switzerland, 2022–2024.',
  'Lecturer, Institute of Photonic Chip, University of Shanghai for Science and Technology, China, 2021–2022.',
];

const service = [
  'Chair-Elect and Technical Program Committee member, Neural Systems and Applications Technical Committee (NSATC) of the IEEE Circuits and Systems Society, 2026–present.',
  'Program Committee member, The Neuro-Inspired Computational Elements (NICE) Conference, Heidelberg, Germany, 2025.',
  'Challenge Organizer, Event-based Eye-tracking in AR/VR, CVPR AI for Streaming Workshop, Seattle, USA, 2024.',
  'Technical Program Committee member, CVPR AI for Streaming Workshop, Seattle, USA, 2024.',
  'Technical Program Committee member, IEEE Standards Workshop on AI for Healthcare, Xi’an, China, 2024.',
  'Track Chair and Session Chair, IEEE International Symposium on Circuits and Systems (ISCAS), Singapore, 2024.',
  'Reviewer for TCAS-I, TCAS-II, TCAD, TVLSI, Nature, Nature Computational Science, and other journals.',
];

const talks = [
  'Tutorial, “Neuromorphic AI-Enhanced Eye-Tracking Technologies: Algorithms, Circuits, and Emerging Applications,” IEEE AICAS, Bordeaux, France, April 2025.',
  'Invited talk, “Ultra-Low-Power AI-Enabled Keyword Spotting Chips for Edge,” TSMC Open Innovation Platform Ecosystem Forum, Amsterdam, the Netherlands, November 2024.',
  'Invited panel discussion, Open Neuromorphic Session at the National Open Science Festival, Maastricht, the Netherlands, October 2024.',
  'Invited talk, “Event-based Eye Tracking System,” Neuromorphic Computing Netherlands 2024, Eindhoven, the Netherlands, September 2024.',
  'Invited talk, “Hardware-Software Co-Design towards Efficient Neuromorphic Computing,” City University of Hong Kong, Hong Kong, August 2023.',
  'Invited talk, “Energy-Efficient Neuromorphic AI on the Edge,” Nanjing University, Nanjing, China, July 2023.',
  'Invited talk, “Efficient Hardware Architecture Design for Neuromorphic Computing,” Leiden University, Leiden, the Netherlands, February 2023.',
  'Invited talk, “Hardware-Software Co-Design towards Efficient Neuromorphic Computing,” IEEE Swiss CAS/ED Women in CAS Symposium, Zurich, Switzerland, September 2022.',
];

const awards = [
  'Best Poster Award, EdgeAI4Robots Workshop at IROS, 2025.',
  'NWO Veni Talent Programme, 2024.',
  'Best Paper Award — Honorable Mention, IEEE Neural Systems and Applications Technical Committee, 2024.',
  'SNSF BRIDGE Fellowship, 2023.',
  'VAUZ Travel Grant, 2022.',
  'Outstanding Graduate, Nanjing University, 2021.',
  'Artificial Intelligence Industrial Talents Scholarship, Nanjing University, 2021.',
  'International Academic Visiting Scholarship, Nanjing University, 2020.',
  'First Prize, National Internet-of-Things Innovation and Entrepreneurship Competition for College Students, 2015.',
  'Global Youth Innovator Award, 48th CES International Consumer Electronics Show, 2015.',
];

function CvList({ items }: { items: string[] }) {
  return <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export default function QinyuChenPage() {
  return (
    <main className="pi-profile section-shell">
      <a className="back-link" href={internalPath('/people')}>← Back to Team</a>

      <section className="pi-profile-hero">
        <img src={internalPath('/images/qinyu-chen.jpg')} alt="Qinyu Chen" />
        <div>
          <h1>Qinyu Chen</h1>
          <p className="pi-title">Assistant Professor · Leiden University</p>
          <ProfileSocialLinks />
          <a className="leiden-profile-link" href="https://www.universiteitleiden.nl/en/staffmembers/qinyu-chen" target="_blank" rel="noreferrer">Leiden profile</a>
        </div>
      </section>

      <section className="cv-section">
        <h2>Biography</h2>
        <p>Qinyu Chen has been an Assistant Professor at the Leiden Institute of Advanced Computer Science (LIACS), Leiden University, the Netherlands, since 2024. She received her PhD in Electronic Science and Technology from Nanjing University in 2021, supervised by Prof. Li Li, and her BEng in Communication Engineering from Shandong University in 2016, supervised by Prof. Haixia Zhang.</p>
        <p>From 2019 to 2020, she was a visiting PhD student, and from 2022 to 2024, a postdoctoral researcher at the Sensors Group, Institute of Neuroinformatics, University of Zurich and ETH Zurich, working with Prof. Shih-Chii Liu and Prof. Tobi Delbruck.</p>
        <p>Her research integrates neuroscience, computer science, and electronics to develop compact, energy-efficient, neuro-inspired intelligent systems for applications in healthcare, extended reality, and robotics. She has published in journals and conferences including TCAS-I, TCAS-II, TVLSI, TBIOCAS, TCAD, TCASAI, ICRA, CVPR, ISCAS, BioCAS, and AICAS.</p>
        <p>Her contributions have been recognized with awards such as the 2022 BRIDGE Grant from the Swiss National Science Foundation (SNSF), the 2024 Dutch Research Council (NWO) Veni Talent Programme, and an Honorable Mention for the Best Paper Award from the IEEE Neural Systems and Applications Technical Committee (NSATC) in 2024.</p>
        <p>She also actively contributes to the research community, serving as Chair-Elect of the IEEE CAS Neural Systems and Applications Technical Committee, Track Chair of ISCAS (2024–2026), an organizer of IEEE WiCAS-YP (2025) and FPL (2025, 2026), an Associate Editor for ICRA (2025) and IROS (2026), and a Guest Editor of IEEE JETCAS (2026).</p>
      </section>

      <section className="cv-section">
        <h2>Research interests</h2>
        <ul className="profile-keywords">
          {['Circuit design', 'Brain-inspired AI', 'Bio-signal processing', 'Embedded large language models', 'Event-based vision', 'Edge intelligence'].map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="cv-section">
        <h2>Academic CV</h2>
        <h3>Education</h3>
        <CvList items={degrees} />
        <h3>Working experience</h3>
        <CvList items={positions} />
        <h3>Community service</h3>
        <CvList items={service} />
        <h3>Selected talks</h3>
        <CvList items={talks} />
        <h3>Selected scholarships and awards</h3>
        <CvList items={awards} />
      </section>
    </main>
  );
}
