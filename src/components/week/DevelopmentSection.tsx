import { WeekSection, ColoredSubsection } from './WeekSection';
import { BookOpen } from 'lucide-react';
import { formatText } from '@/lib/text-formatter';

interface DevelopmentSection {
  title: string;
  content: string;
}

interface DevelopmentSectionProps {
  sections: DevelopmentSection[];
}

export function DevelopmentSection({ sections }: DevelopmentSectionProps) {
  return (
    <WeekSection
      title="Desarrollo del Tema"
      icon={BookOpen}
      iconColor="text-[#66428e74]"
      borderColor="border-[#66428e74]"
    >
      <div className="space-y-8">
        {sections.map((section, index) => (
          <ColoredSubsection key={index} index={index} title={section.title}>
            <div className="prose prose-zinc dark:prose-invert max-w-none">
              {formatText(section.content)}
            </div>
          </ColoredSubsection>
        ))}
      </div>
    </WeekSection>
  );
}

