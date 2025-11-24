import { weeks } from '@/data/weeks';
import { weekContents } from '@/data/weekContent';
import { notFound } from 'next/navigation';
import {
  WeekHeader,
  SummarySection,
  DevelopmentSection,
  ExamplesSection,
  DiagramsSection,
  ReflectionSection,
  DefaultWeekView,
} from '@/components/week';
import { ScrollToTopButton } from '@/components/ui';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SemanaPage({ params }: PageProps) {
  const { id } = await params;
  const week = weeks.find((w) => w.id === id);

  if (!week) {
    notFound();
  }

  const weekContent = weekContents[id];

  return (
    <div className="min-h-screen font-sans bg-transparent">
      <ScrollToTopButton />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {weekContent ? (
          <article className="space-y-8">
            <WeekHeader title={weekContent.title} />

            <SummarySection summary={weekContent.content.summary} />

            <DevelopmentSection sections={weekContent.content.development.sections} />

            <ExamplesSection examples={weekContent.content.examples} />

            <ReflectionSection reflection={weekContent.content.reflection} />
          </article>
        ) : (
          <DefaultWeekView week={week} />
        )}
      </main>
    </div>
  );
}
