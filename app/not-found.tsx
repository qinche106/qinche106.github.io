import { ArrowLeft } from 'lucide-react';
import { internalPath } from '@/lib/paths';

export default function NotFound() {
  return (
    <main className="not-found section-shell">
      <p className="eyebrow"><span /> 404</p>
      <h1>This path is<br /><em>still unexplored.</em></h1>
      <p>The page may have moved, or it may not exist yet.</p>
      <a className="button button-primary" href={internalPath('/')}><ArrowLeft size={16} aria-hidden="true" /> Return home</a>
    </main>
  );
}
