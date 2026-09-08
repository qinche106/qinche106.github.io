import { ArrowUpRight } from 'lucide-react';
import { MobileNav } from '@/components/mobile-nav';
import { internalPath } from '@/lib/paths';

const links = [
  ['Research', '/research'],
  ['People', '/people'],
  ['Publications', '/publications'],
  ['News', '/news'],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href={internalPath('/')} aria-label="Efficient Intelligence Group home">
        <span className="brand-mark" aria-hidden="true">EIG</span>
        <span className="brand-name">
          <strong>Efficient Intelligence</strong>
          <span>Group · Leiden University</span>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => <a href={internalPath(href)} key={href}>{label}</a>)}
        <a className="nav-cta" href={internalPath('/join-us')}>
          Join us <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </nav>

      <MobileNav />
    </header>
  );
}
