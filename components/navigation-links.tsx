'use client';

import { usePathname } from 'next/navigation';
import { navigationLinks } from '@/lib/navigation';
import { internalPath } from '@/lib/paths';

export function NavigationLinks() {
  const pathname = usePathname();

  return navigationLinks.map(([label, href]) => (
    <a href={internalPath(href)} key={href} aria-current={pathname === href ? 'page' : undefined}>
      {label}
    </a>
  ));
}
