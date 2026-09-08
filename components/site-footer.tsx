import { ArrowUpRight } from 'lucide-react';
import { internalPath } from '@/lib/paths';
import { site } from '@/lib/site-data';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div className="footer-brand">
          <span className="brand-mark brand-mark-light" aria-hidden="true">EIN</span>
          <div>
            <strong>{site.name}</strong>
            <p>Energy-efficient intelligence, from algorithms to hardware.</p>
          </div>
        </div>

        <div className="footer-column">
          <span>Explore</span>
          <a href={internalPath('/people')}>People</a>
          <a href={internalPath('/news')}>News</a>
          <a href={internalPath('/research')}>Research</a>
          <a href={internalPath('/gallery')}>Gallery</a>
        </div>

        <div className="footer-column">
          <span>Find us</span>
          {site.address.map((line) => <p key={line}>{line}</p>)}
        </div>

        <div className="footer-column">
          <span>Connect</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href="https://www.universiteitleiden.nl/en" target="_blank" rel="noreferrer">
            Leiden University <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="section-shell footer-bottom">
        <span>© {new Date().getFullYear()} Efficient Intelligence Group</span>
        <span>Leiden, the Netherlands</span>
      </div>
    </footer>
  );
}
