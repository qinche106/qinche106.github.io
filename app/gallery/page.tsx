import type { Metadata } from 'next';
import { PageIntro } from '@/components/page-intro';
import { internalPath } from '@/lib/paths';
import { galleryItems } from '@/lib/site-data';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Absent-Minded Moments · Efficient Intelligence Group',
  description: 'Landscape photographs from Iceland, Norway, Switzerland, Sweden, the United States, and Svalbard.',
};

export default function GalleryPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Gallery"
        title="ABSENT-MINDED MOMENTS"
      />
      <section className="gallery-grid section-shell">
        {galleryItems.map((item) => (
          <figure key={item.image}>
            <img src={internalPath(item.image)} alt={item.alt} loading="lazy" />
            {item.caption && <figcaption>{item.caption}</figcaption>}
          </figure>
        ))}
      </section>
    </main>
  );
}
