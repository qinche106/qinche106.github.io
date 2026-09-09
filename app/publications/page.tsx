import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { PageIntro } from '@/components/page-intro';
import { PublicationList } from '@/components/publication-list';
import { publications } from '@/lib/site-data';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Publications · Efficient Intelligence Group',
  description: 'Selected publications from the Efficient Intelligence Group at Leiden University.',
};

export default function PublicationsPage() {
  return (
    <main>
      <PageIntro
        title="Selected publications"
        intro="Recent work across efficient AI, neuromorphic computing, physiological signals, and intelligent perception."
      />
      <section className="publications-section section-shell">
        <PublicationList publications={publications} />
        <aside className="scholar-callout">
          <p>This page presents selected work. For a complete and current record, visit the group leader’s Google Scholar profile.</p>
          <a href="https://scholar.google.com/citations?hl=en&user=enuSO2YAAAAJ" target="_blank" rel="noreferrer">
            Google Scholar <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </aside>
      </section>
    </main>
  );
}
