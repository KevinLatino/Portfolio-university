import { WeekSection } from './WeekSection';
import { Brain } from 'lucide-react';
import { formatText } from '@/lib/text-formatter';

interface ReflectionSectionProps {
  reflection?: string;
}

export function ReflectionSection({ reflection }: ReflectionSectionProps) {
  if (!reflection) {
    return null;
  }

  return (
    <WeekSection
      title="Reflexión Personal"
      icon={Brain}
      iconColor="text-[#434b59]"
      borderColor="border-[#434b59]"
    >
      <div className="prose prose-zinc dark:prose-invert max-w-none">
        {formatText(reflection)}
      </div>
    </WeekSection>
  );
}

