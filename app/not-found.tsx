import { ArrowLeft } from 'lucide-react';
import { internalPath } from '@/lib/paths';

export default function NotFound() {
  return (
    <main className="not-found section-shell">
      <p className="page-label">404</p>
      <h1>Page not found</h1>
      <p>The page may have moved, or it may not exist yet.</p>
      <a className="button button-primary" href={internalPath('/')}><ArrowLeft size={16} aria-hidden="true" /> Return home</a>
    </main>
  );
}
