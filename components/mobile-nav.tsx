import { Menu, X } from 'lucide-react';
import { internalPath } from '@/lib/paths';

const links = [
  ['Home', '/'],
  ['Team', '/people'],
  ['News', '/news'],
  ['Research', '/research'],
  ['Gallery', '/gallery'],
  ['Join us', '/join-us'],
];

export function MobileNav() {
  return (
    <details className="mobile-nav">
      <summary className="mobile-menu-button">
        <Menu className="menu-open-icon" size={19} aria-hidden="true" />
        <X className="menu-close-icon" size={19} aria-hidden="true" />
        <span>Menu</span>
      </summary>
      <div className="mobile-sheet">
        <p>Efficient Intelligence Group</p>
        <nav className="mobile-sheet-nav" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a href={internalPath(href)} key={href}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </details>
  );
}
