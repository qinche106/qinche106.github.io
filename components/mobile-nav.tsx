import { Menu, X } from 'lucide-react';

const links = [
  ['Research', '/research'],
  ['People', '/people'],
  ['Publications', '/publications'],
  ['News', '/news'],
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
          {links.map(([label, href], index) => (
            <a href={href} key={href}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </details>
  );
}
