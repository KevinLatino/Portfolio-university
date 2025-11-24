import CardComponent from "@/components/CardComponent";
import { weeks } from "@/data/weeks";
import { ScrollToTopButton } from "@/components/ui";

export default function TemasPage() {
  return (
    <div className="min-h-screen font-sans bg-transparent">
      <ScrollToTopButton />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Temas de Desarrollo Web
          </h1>
          <div className="mx-auto max-w-md">
            <input
              type="text"
              placeholder="Busca un tema..."
              className="w-full rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 text-white placeholder-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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

