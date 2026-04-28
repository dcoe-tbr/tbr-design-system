'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Overview' },
  { href: '/colors', label: 'Color' },
  { href: '/typography', label: 'Typography' },
  { href: '/components', label: 'Components' },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="site-nav" aria-label="Primary">
      <Link href="/" className="site-nav__brand">
        The Brand Report <span className="site-nav__brand-mark">/ Design</span>
      </Link>
      <div className="site-nav__links">
        {links.map((link) => {
          const isActive =
            link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className="site-nav__link"
              aria-current={isActive ? 'page' : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
