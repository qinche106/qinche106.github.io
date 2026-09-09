import { MobileNav } from '@/components/mobile-nav';
import { internalPath } from '@/lib/paths';

const links = [
  ['Home', '/'],
  ['Team', '/people'],
  ['News', '/news'],
  ['Research', '/research'],
  ['Gallery', '/gallery'],
  ['Join us', '/join-us'],
];

export function SiteHeader() {
  return (
    <>
      <header className="site-header">
        <div className="navigation-shell">
          <nav className="desktop-nav" aria-label="Primary navigation">
            {links.map(([label, href]) => <a href={internalPath(href)} key={href}>{label}</a>)}
          </nav>
          <MobileNav />
        </div>
      </header>
      <div className="site-masthead">
        <a className="brand" href={internalPath('/')} aria-label="Efficient Intelligence Group home">
          <img src={internalPath('/images/ein-logo.svg')} alt="" className="brand-logo" />
          <strong className="brand-name">Efficient Intelligence Group</strong>
        </a>
      </div>
    </>
  );
}
