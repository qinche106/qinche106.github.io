import { ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site-data';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div className="footer-brand">
          <span className="brand-mark brand-mark-light" aria-hidden="true">EIG</span>
          <div>
            <strong>{site.name}</strong>
            <p>Efficient systems for intelligent interaction.</p>
          </div>
        </div>

        <div className="footer-column">
          <span>Explore</span>
          <a href="/research">Research</a>
          <a href="/people">People</a>
          <a href="/publications">Publications</a>
          <a href="/news">News</a>
        </div>

        <div className="footer-column">
          <span>Find us</span>
          {site.address.map((line) => <p key={line}>{line}</p>)}
        </div>

        <div className="footer-column">
          <span>Connect</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href="https://www.universiteitleiden.nl/en/science/computer-science" target="_blank" rel="noreferrer">
            LIACS <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="section-shell footer-bottom">
        <span>© {new Date().getFullYear()} Efficient Intelligence Group</span>
        <span>Leiden University · The Netherlands</span>
      </div>
    </footer>
  );
}
