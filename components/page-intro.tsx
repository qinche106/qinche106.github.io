export function PageIntro({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
}) {
  return (
    <section className="page-intro section-shell">
      <p className="eyebrow"><span /> {eyebrow}</p>
      <div className="page-intro-grid">
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}
