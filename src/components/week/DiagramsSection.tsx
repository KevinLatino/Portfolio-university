import { WeekSection } from './WeekSection';
import { TrendingUp } from 'lucide-react';
import { getBorderColorClass, getBackgroundColorClass } from '@/lib/color-utils';

interface Diagram {
  title: string;
  description?: string;
}

interface DiagramsSectionProps {
  diagrams?: Diagram[];
}

export function DiagramsSection({ diagrams }: DiagramsSectionProps) {
  if (!diagrams || diagrams.length === 0) {
    return null;
  }

  return (
    <WeekSection
      title="Diagramas"
      icon={TrendingUp}
      iconColor="text-[#d5777764]"
      borderColor="border-[#d5777764]"
    >
      <div className="space-y-6">
        {diagrams.map((diagram, index) => {
          const borderColor = getBorderColorClass(index);
          const bgColor = getBackgroundColorClass(index);

          return (
            <div key={index} className="space-y-3">
              <h3 className="text-lg font-semibold text-white">{diagram.title}</h3>
              {diagram.description && (
                <div className={`rounded-lg border-2 ${borderColor} ${bgColor} p-8 text-center`}>
                  <p className="text-sm text-white/90">{diagram.description}</p>
                  <p className="mt-2 text-xs text-white/70">[Imagen del diagrama]</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </WeekSection>
  );
}

