import type { Metadata } from 'next';
import { PageIntro } from '@/components/page-intro';
import { internalPath } from '@/lib/paths';
import { galleryItems } from '@/lib/site-data';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Gallery · Efficient Intelligence Group',
  description: 'Research activities, events, and group moments from the Efficient Intelligence Group.',
};

export default function GalleryPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Gallery"
        title="Gallery"
        intro="Research activities, talks, events, and moments from the group."
      />
      <section className="gallery-grid section-shell">
        {galleryItems.map((item) => (
          <figure key={item.image}>
            <img src={internalPath(item.image)} alt={item.alt} loading="lazy" />
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}
