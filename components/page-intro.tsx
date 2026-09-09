export function PageIntro({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="page-intro section-shell">
      <p className="page-label">{eyebrow}</p>
      <h1>{title}</h1>
      {intro && <p>{intro}</p>}
    </section>
  );
}
