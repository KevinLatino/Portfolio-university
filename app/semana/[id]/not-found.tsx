import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
            Semana no encontrada
          </h1>
          <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
            La semana que buscas no existe.
          </p>
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-zinc-900 px-6 py-3 text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  );
}

