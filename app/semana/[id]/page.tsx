import { weeks } from "@/data/weeks";
import { weekContents } from "@/data/weekContent";
import { notFound } from "next/navigation";
import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";
import React from "react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

function formatText(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let currentList: React.ReactNode[] | null = null;
  let inCodeBlock = false;
  let codeBlockContent: string[] = [];

  lines.forEach((line, index) => {
    // Manejo de bloques de código
    if (line.trim().startsWith("```")) {
      if (inCodeBlock) {
        // Cerrar bloque de código
        if (codeBlockContent.length > 0) {
          const code = codeBlockContent.join("\n");
          elements.push(
            <CodeBlock
              key={`code-${index}`}
              language="text"
              code={code}
            />
          );
          codeBlockContent = [];
        }
        inCodeBlock = false;
      } else {
        // Abrir bloque de código
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      return;
    }

    // Cerrar lista actual si existe
    if (currentList && line.trim() !== "" && !/^(\d+\.|-\s)/.test(line)) {
      elements.push(
        <ul key={`list-${index}`} className="mb-4 space-y-2">
          {currentList}
        </ul>
      );
      currentList = null;
    }

    // Líneas vacías
    if (line.trim() === "") {
      if (currentList) {
        // Si hay una lista, cerrarla antes de añadir espacio
        elements.push(
          <ul key={`list-${index}`} className="mb-4 space-y-2">
            {currentList}
          </ul>
        );
        currentList = null;
      }
      elements.push(<br key={`br-${index}`} />);
      return;
    }

    // Formatear texto básico
    let formatted = line
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-zinc-900 dark:text-zinc-50">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');

    // Detectar código inline con backticks
    formatted = formatted.replace(/`([^`]+)`/g, '<code class="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">$1</code>');

    // Listas numeradas
    if (/^\d+\.\s/.test(line)) {
      if (!currentList) currentList = [];
      currentList.push(
        <li
          key={`li-${index}`}
          className="ml-4 text-zinc-700 dark:text-zinc-300"
          dangerouslySetInnerHTML={{ __html: formatted.replace(/^\d+\.\s/, "") }}
        />
      );
      return;
    }

    // Listas con guiones
    if (/^-\s/.test(line)) {
      if (!currentList) currentList = [];
      currentList.push(
        <li
          key={`li-${index}`}
          className="ml-4 text-zinc-700 dark:text-zinc-300"
          dangerouslySetInnerHTML={{ __html: formatted.replace(/^-\s/, "") }}
        />
      );
      return;
    }

    // Párrafos normales
    elements.push(
      <p
        key={`p-${index}`}
        className="mb-4 text-zinc-700 dark:text-zinc-300 leading-7"
        dangerouslySetInnerHTML={{ __html: formatted }}
      />
    );
  });

  // Cerrar lista si quedó abierta
  if (currentList) {
    elements.push(
      <ul key="list-final" className="mb-4 space-y-2">
        {currentList}
      </ul>
    );
  }

  return elements;
}

export default async function SemanaPage({ params }: PageProps) {
  const { id } = await params;
  const week = weeks.find((w) => w.id === id);

  if (!week) {
    notFound();
  }

  const weekContent = weekContents[id];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
        >
          ← Volver al inicio
        </Link>

        {weekContent ? (
          <article className="space-y-8">
            {/* Título principal */}
            <header>
              <h1 className="mb-6 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
                {weekContent.title}
              </h1>
            </header>

            {/* Resumen de la Semana */}
            <section className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                📚 Resumen de la Semana
              </h2>
              <div className="prose prose-zinc dark:prose-invert max-w-none">
                {formatText(weekContent.content.summary)}
              </div>
            </section>

            {/* Desarrollo del Tema */}
            <section className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                📖 Desarrollo del Tema
              </h2>
              <div className="space-y-8">
                {weekContent.content.development.sections.map((section, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                      {section.title}
                    </h3>
                    <div className="prose prose-zinc dark:prose-invert max-w-none">
                      {formatText(section.content)}
                    </div>
                    {index < weekContent.content.development.sections.length - 1 && (
                      <hr className="my-6 border-zinc-200 dark:border-zinc-800" />
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Ejemplos Prácticos */}
            {weekContent.content.examples && weekContent.content.examples.length > 0 && (
              <section className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                  🧪 Ejemplos Prácticos
                </h2>
                <div className="space-y-8">
                  {weekContent.content.examples.map((example, index) => (
                    <div key={index} className="space-y-3">
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        {index + 1}. {example.title}
                      </h3>
                      {example.description && (
                        <p className="text-zinc-700 dark:text-zinc-300">
                          {example.description}
                        </p>
                      )}
                      <CodeBlock language={example.language} code={example.code} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Diagramas */}
            {weekContent.content.diagrams && weekContent.content.diagrams.length > 0 && (
              <section className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                  📈 Diagramas
                </h2>
                <div className="space-y-6">
                  {weekContent.content.diagrams.map((diagram, index) => (
                    <div key={index} className="space-y-3">
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        {diagram.title}
                      </h3>
                      {diagram.description && (
                        <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-950">
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            {diagram.description}
                          </p>
                          <p className="mt-2 text-xs text-zinc-400 dark:text-zinc-500">
                            [Imagen del diagrama]
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Reflexión Personal */}
            {weekContent.content.reflection && (
              <section className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                  🧠 Reflexión Personal
                </h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none">
                  {formatText(weekContent.content.reflection)}
                </div>
              </section>
            )}
          </article>
        ) : (
          /* Vista por defecto si no hay contenido específico */
          <div className="rounded-lg border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              {week.title}
            </h1>
            <p className="mb-6 text-lg leading-7 text-zinc-600 dark:text-zinc-400">
              {week.description}
            </p>
            <div className="flex gap-3">
              {week.icons.map((icon, index) => (
                <div
                  key={index}
                  className="flex h-10 w-10 items-center justify-center rounded bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  <span className="text-base">{icon}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
