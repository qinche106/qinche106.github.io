import { GraduationCap, Landmark, Mail } from 'lucide-react';

function LinkedInIcon({ size = 19 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="5" cy="5" r="2" />
      <path d="M3.2 9h3.6v12H3.2zM9.2 9h3.45v1.65h.05c.48-.91 1.65-1.87 3.4-1.87 3.64 0 4.31 2.4 4.31 5.51V21h-3.6v-5.95c0-1.42-.03-3.25-1.98-3.25-1.98 0-2.28 1.55-2.28 3.15V21h-3.6V9z" />
    </svg>
  );
}

const links = [
  { label: 'Email', href: 'mailto:q.chen@liacs.leidenuniv.nl', icon: Mail },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?hl=en&user=enuSO2YAAAAJ', icon: GraduationCap },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/qinyu-chen-852b18159/', icon: LinkedInIcon },
  { label: 'Leiden profile', href: 'https://www.universiteitleiden.nl/en/staffmembers/qinyu-chen', icon: Landmark },
];

export function ProfileSocialLinks() {
  return (
    <div className="profile-social-links" aria-label="Qinyu Chen links">
      {links.map(({ label, href, icon: Icon }) => (
        <a
          href={href}
          key={label}
          aria-label={label}
          title={label}
          {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
        >
          <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
