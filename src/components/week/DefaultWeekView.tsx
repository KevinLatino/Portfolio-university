import * as LucideIcons from 'lucide-react';
import { getIconColorClass } from '@/lib/color-utils';
import { WeekTopic } from '@/types/card';

interface DefaultWeekViewProps {
  week: WeekTopic;
}

export function DefaultWeekView({ week }: DefaultWeekViewProps) {
  return (
    <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm p-8">
      <h1 className="mb-4 text-3xl font-bold text-white">{week.title}</h1>
      <p className="mb-6 text-lg leading-7 text-white/90">{week.description}</p>
      <div className="flex gap-3">
        {week.icons.map((iconName, index) => {
          const IconComponent = (LucideIcons as any)[iconName] as React.ComponentType<{
            className?: string;
          }>;
          const iconColor = getIconColorClass(index);
          
          return IconComponent ? (
            <div
              key={index}
              className="flex h-10 w-10 items-center justify-center rounded bg-white/10"
            >
              <IconComponent className={`h-5 w-5 ${iconColor}`} />
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}

