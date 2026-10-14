export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-primary py-12 text-white">
      <div className="mx-auto max-w-6xl px-4">
        {eyebrow && (
          <p className="text-sm font-bold uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 font-display text-5xl font-bold uppercase leading-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-lg text-white/85">{description}</p>
        )}
      </div>
    </section>
  );
}
