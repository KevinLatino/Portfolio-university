import { SECTION_COLOR_ARRAY } from '@/constants/colors';

/**
 * Get a color from the section color array by index (with rotation)
 * @param index - The index to get the color for
 * @returns The color hex value
 */
export function getSectionColor(index: number): string {
  return SECTION_COLOR_ARRAY[index % SECTION_COLOR_ARRAY.length];
}

/**
 * Get Tailwind border color class for a section
 * @param index - The index to get the color class for
 * @returns The Tailwind border color class
 */
export function getBorderColorClass(index: number): string {
  const colors = [
    'border-[#434b59]',
    'border-[#66428e74]',
    'border-[#267c6e5d]',
    'border-[#d5777764]',
  ];
  return colors[index % colors.length];
}

/**
 * Get Tailwind background color class for a section
 * @param index - The index to get the color class for
 * @returns The Tailwind background color class
 */
export function getBackgroundColorClass(index: number): string {
  const colors = [
    'bg-[#434b59]/20',
    'bg-[#66428e74]/20',
    'bg-[#267c6e5d]/20',
    'bg-[#d5777764]/20',
  ];
  return colors[index % colors.length];
}

/**
 * Get Tailwind icon color class for an icon
 * @param index - The index to get the color class for
 * @returns The Tailwind icon color class
 */
export function getIconColorClass(index: number): string {
  const colors = [
    'text-[#434b59]',
    'text-[#66428e74]',
    'text-[#267c6e5d]',
    'text-[#d5777764]',
  ];
  return colors[index % colors.length];
}

