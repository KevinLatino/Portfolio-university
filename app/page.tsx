import CardComponent from "@/components/CardComponent";
import { weeks } from "@/data/weeks";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
            Temas de Desarrollo Web
          </h1>
          <div className="mx-auto max-w-md">
            <input
              type="text"
              placeholder="Busca un tema..."
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-400 dark:focus:border-zinc-600 dark:focus:ring-zinc-600"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {weeks.map((week) => (
            <CardComponent
              key={week.id}
              route={week.route}
              title={week.title}
              description={week.description}
              icons={week.icons}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
