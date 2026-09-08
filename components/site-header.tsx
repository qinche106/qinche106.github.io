import { MobileNav } from '@/components/mobile-nav';
import { internalPath } from '@/lib/paths';

const links = [
  ['People', '/people'],
  ['News', '/news'],
  ['Research', '/research'],
  ['Gallery', '/gallery'],
  ['Join us', '/join-us'],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href={internalPath('/')} aria-label="Efficient Intelligence Group home">
        <span className="brand-mark" aria-hidden="true">EIN</span>
        <strong className="brand-name">Efficient Intelligence Group</strong>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => <a href={internalPath(href)} key={href}>{label}</a>)}
      </nav>

      <MobileNav />
    </header>
  );
}
