import Link from 'next/link';

export function WeekHeader({ title }: { title: string }) {
  return (
    <>
      <Link
        href="/temas"
        className="mb-8 inline-flex items-center text-sm text-white/80 hover:text-white transition-colors"
      >
        ← Volver a temas
      </Link>
      <header>
        <h1 className="mb-6 text-4xl font-bold text-white">{title}</h1>
      </header>
    </>
  );
}

