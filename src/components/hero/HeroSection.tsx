'use client';

import type { LiquidEtherProps } from '@/ui/LiquidEther';

import { LiquidBackgroundLayout } from '@/layout/liquid-background';

import { HeroContentSection } from './HeroContentSection';

interface HeroSectionProps {
  liquidConfig?: Partial<LiquidEtherProps>;
}

export function HeroSection({ liquidConfig }: HeroSectionProps) {
  return (
    <LiquidBackgroundLayout className="h-screen" liquidConfig={liquidConfig}>
      <HeroContentSection />
    </LiquidBackgroundLayout>
  );
}

