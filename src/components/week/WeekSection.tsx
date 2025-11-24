import React from 'react';
import { LucideIcon } from 'lucide-react';
import { getBorderColorClass, getBackgroundColorClass } from '@/lib/color-utils';

interface WeekSectionProps {
  children: React.ReactNode;
  title: string;
  icon: LucideIcon;
  iconColor: string;
  borderColor: string;
}

export function WeekSection({
  children,
  title,
  icon: Icon,
  iconColor,
  borderColor,
}: WeekSectionProps) {
  return (
    <section className={`rounded-lg border-2 ${borderColor} bg-white/10 backdrop-blur-sm p-6`}>
      <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-white">
        <Icon className={`h-7 w-7 ${iconColor}`} />
        {title}
      </h2>
      {children}
    </section>
  );
}

interface ColoredSubsectionProps {
  children: React.ReactNode;
  title?: string;
  index: number;
}

export function ColoredSubsection({ children, title, index }: ColoredSubsectionProps) {
  const borderColor = getBorderColorClass(index);
  const bgColor = getBackgroundColorClass(index);

  return (
    <div className={`space-y-3 rounded-lg border-2 ${borderColor} ${bgColor} p-4`}>
      {title && <h3 className="text-xl font-semibold text-white">{title}</h3>}
      {children}
    </div>
  );
}

