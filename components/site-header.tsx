import { MobileNav } from '@/components/mobile-nav';
import { NavigationLinks } from '@/components/navigation-links';
import { internalPath } from '@/lib/paths';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="navigation-shell">
        <a className="brand" href={internalPath('/')} aria-label="Efficient Intelligence Group home">
          <img src={internalPath('/images/ein-logo.svg')} alt="" className="brand-logo" />
          <span className="brand-copy">
            <strong className="brand-name">Efficient Intelligence Group</strong>
            <span className="brand-institution">Leiden University</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <NavigationLinks />
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
