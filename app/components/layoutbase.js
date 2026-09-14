import { Suspense } from 'react';
import Sidebar from './header';
import NavLinks from './nav-links';

function SidebarFallback() {
  return (
    <aside className="w-48 flex-shrink-0 border-r border-[var(--border)] bg-[var(--background)]">
      <NavLinks />
    </aside>
  );
}

export default function LayoutBase({ children }) {
  return (
    <div className="min-h-screen flex bg-[var(--background)]">
      <Suspense fallback={<SidebarFallback />}>
        <Sidebar />
      </Suspense>
      <main className="flex-grow min-w-0">{children}</main>
    </div>
  );
}
