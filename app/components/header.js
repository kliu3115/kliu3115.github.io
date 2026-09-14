'use client';

import { usePathname } from 'next/navigation';
import NavLinks from './nav-links';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-48 flex-shrink-0 border-r border-[var(--border)] bg-[var(--background)]">
      <NavLinks pathname={pathname} />
    </aside>
  );
}
