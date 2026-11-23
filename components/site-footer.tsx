import { internalPath } from '@/lib/paths';
import { site } from '@/lib/site-data';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-content">
        <div>
          <strong>{site.name}</strong>
          <p>Leiden Institute of Advanced Computer Science · Leiden University</p>
          <address>{site.address.join(', ')} · Office BW.3.10</address>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
        <div className="footer-links">
          <nav aria-label="Footer navigation">
            <a href={internalPath('/about')}>About</a>
            <a href={internalPath('/people/qinyu-chen')}>Qinyu Chen</a>
            <a href={internalPath('/join-us')}>Join us</a>
          </nav>
          <p>© {new Date().getFullYear()} Efficient Intelligence Group</p>
        </div>
      </div>
    </footer>
  );
}
