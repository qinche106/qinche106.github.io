import { NewsImageCarousel } from '@/components/news-image-carousel';
import { ProfileSocialLinks } from '@/components/profile-social-links';
import { internalPath } from '@/lib/paths';
import { newsItems, researchAreas, site } from '@/lib/site-data';

export const dynamic = 'force-static';

const homepageTopics = researchAreas;

const carouselItems = newsItems.filter((item) => item.image);

export default function Home() {
  return (
    <main>
      <section className="home-profile section-shell" aria-labelledby="home-profile-name">
        <img className="home-profile-photo" src={internalPath('/images/qinyu-chen.jpg')} alt="Qinyu Chen" />
        <h1 id="home-profile-name">Qinyu Chen</h1>
        <ProfileSocialLinks />
      </section>

      <section className="home-overview section-shell" aria-labelledby="group-title">
        <div className="home-overview-copy">
          <h2 id="group-title">Efficient Intelligence Group</h2>
          <p>
            The Efficient Intelligence Group develops energy-efficient intelligent systems, from
            algorithms and circuits to systems, in the context of biosignal, audio, image, and large
            language model applications. The lab is headed by Qinyu Chen and is affiliated with the
            Leiden Institute of Advanced Computer Science (LIACS) at Leiden University.
          </p>
        </div>
        <NewsImageCarousel items={carouselItems} />
      </section>

      <section className="home-biography reading-column" aria-labelledby="biography-title">
        <h2 id="biography-title"><a href={internalPath('/people/qinyu-chen')}>Qinyu Chen</a></h2>
        <p>
          Qinyu Chen has been an Assistant Professor at the Leiden Institute of Advanced Computer Science
          (LIACS), Leiden University, the Netherlands, since 2024. She received her PhD in Electronic Science
          and Technology from Nanjing University in 2021, supervised by Prof. Li Li, and her BEng in
          Communication Engineering from Shandong University in 2016, supervised by Prof. Haixia Zhang.
        </p>
        <p>
          From 2019 to 2020, she was a visiting PhD student, and from 2022 to 2024, a postdoctoral researcher
          at the Sensors Group, Institute of Neuroinformatics, University of Zurich and ETH Zurich, working
          with Prof. Shih-Chii Liu and Prof. Tobi Delbruck.
        </p>
        <p>
          Her research integrates neuroscience, computer science, and electronics to develop compact,
          energy-efficient, neuro-inspired intelligent systems for applications in healthcare, extended
          reality, and robotics. She has published in journals and conferences including TCAS-I, TCAS-II,
          TVLSI, TBIOCAS, TCAD, TCASAI, ICRA, CVPR, ISCAS, BioCAS, and AICAS.
        </p>
        <p>
          Her contributions have been recognized with awards such as the 2022 BRIDGE Grant from the Swiss
          National Science Foundation (SNSF), the 2024 Dutch Research Council (NWO) Veni Talent Programme,
          and an Honorable Mention for the Best Paper Award from the IEEE Neural Systems and Applications
          Technical Committee (NSATC) in 2024.
        </p>
        <p>
          She also actively contributes to the research community, serving as Chair-Elect of the IEEE CAS
          Neural Systems and Applications Technical Committee, Track Chair of ISCAS (2024–2026), an organizer
          of IEEE WiCAS-YP (2025) and FPL (2025, 2026), an Associate Editor for ICRA (2025) and IROS (2026),
          and a Guest Editor of IEEE JETCAS (2026).
        </p>
      </section>

      <section className="home-topics section-shell" aria-labelledby="topics-title">
        <div className="home-section-heading">
          <h2 id="topics-title">Research Topics</h2>
          <p>The Efficient Intelligence Group engages in research activities on the following topics:</p>
        </div>
        <div className="topic-grid">
          {homepageTopics.map((topic) => (
            <article className="topic-card" key={topic.slug}>
              <a href={internalPath(`/research#${topic.slug}`)}>
                <img src={internalPath(topic.image)} alt={topic.imageAlt} />
                <h3>{topic.title}</h3>
              </a>
              <p className="topic-summary">{topic.summary}</p>
              <p>{topic.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="find-us section-shell" aria-labelledby="find-us-title">
        <h2 id="find-us-title">How to Find Us</h2>
        <div className="find-us-details">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>Office room BW.3.10</p>
          <address>{site.address.map((line) => <span key={line}>{line}</span>)}</address>
        </div>
      </section>
    </main>
  );
}
