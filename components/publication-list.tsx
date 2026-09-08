'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Publication } from '@/lib/site-data';

const filters = ['All', 'Embedded AI', 'Neuromorphic', 'Bio-signals', 'Perception'] as const;

export function PublicationList({ publications }: { publications: Publication[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>('All');
  const visible = active === 'All' ? publications : publications.filter((item) => item.category === active);

  return (
    <div>
      <div className="publication-filters" aria-label="Filter publications by research area">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className="publication-filter"
            aria-pressed={active === filter}
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="publication-list" aria-live="polite">
        {visible.map((publication) => (
          <article className="publication-row" key={publication.title}>
            <span className="publication-year">{publication.year}</span>
            <div className="publication-main">
              <div className="publication-meta">
                <span>{publication.category}</span>
                <span>{publication.venue}</span>
              </div>
              <h2>{publication.title}</h2>
              {publication.note && <p className="publication-note">{publication.note}</p>}
            </div>
            {publication.url ? (
              <a className="publication-link" href={publication.url} target="_blank" rel="noreferrer" aria-label={`Open ${publication.title}`}>
                <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            ) : <span className="publication-link publication-link-muted" aria-hidden="true">—</span>}
          </article>
        ))}
      </div>
    </div>
  );
}
