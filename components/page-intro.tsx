export function PageIntro({
  title,
  intro,
}: {
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="page-intro section-shell">
      <h1>{title}</h1>
      {intro && <p>{intro}</p>}
    </section>
  );
}
