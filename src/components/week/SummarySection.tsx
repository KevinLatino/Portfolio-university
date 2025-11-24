import { WeekSection } from './WeekSection';
import { BookOpen } from 'lucide-react';
import { formatText } from '@/lib/text-formatter';

interface SummarySectionProps {
  summary: string;
}

export function SummarySection({ summary }: SummarySectionProps) {
  return (
    <WeekSection
      title="Resumen de la Semana"
      icon={BookOpen}
      iconColor="text-[#434b59]"
      borderColor="border-[#434b59]"
    >
      <div className="prose prose-zinc dark:prose-invert max-w-none">
        {formatText(summary)}
      </div>
    </WeekSection>
  );
}

