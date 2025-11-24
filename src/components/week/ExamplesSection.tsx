import { WeekSection, ColoredSubsection } from './WeekSection';
import { FlaskConical } from 'lucide-react';
import { CodeBlock } from '@/components/ui';
import { getBorderColorClass, getBackgroundColorClass } from '@/lib/color-utils';

interface Example {
  title: string;
  description?: string;
  language: string;
  code: string;
}

interface ExamplesSectionProps {
  examples: Example[];
}

export function ExamplesSection({ examples }: ExamplesSectionProps) {
  if (!examples || examples.length === 0) {
    return null;
  }

  return (
    <WeekSection
      title="Ejemplos Prácticos"
      icon={FlaskConical}
      iconColor="text-[#267c6e5d]"
      borderColor="border-[#267c6e5d]"
    >
      <div className="space-y-8">
        {examples.map((example, index) => {
          const borderColor = getBorderColorClass(index);
          const bgColor = getBackgroundColorClass(index);
          
          return (
            <ColoredSubsection key={index} index={index}>
              <h3 className="text-lg font-semibold text-white">
                {index + 1}. {example.title}
              </h3>
              {example.description && (
                <p className="text-white/90">{example.description}</p>
              )}
              <CodeBlock language={example.language} code={example.code} />
            </ColoredSubsection>
          );
        })}
      </div>
    </WeekSection>
  );
}

