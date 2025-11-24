'use client';

import Link from "next/link";
import { CardComponentProps } from "@/types/card";
import { UI_COLORS } from "@/constants/colors";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

export default function CardComponent({
  route,
  title,
  description,
  icons,
}: CardComponentProps) {
  return (
    <Link href={route} className="block">
      <motion.article
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        className={`flex flex-col rounded-2xl border p-4 w-72 h-72 mx-auto`}
        style={{
          borderColor: UI_COLORS.CARD_BORDER,
          backgroundColor: UI_COLORS.CARD_BACKGROUND,
        }}
      >
        <header
          className="font-bold text-lg mb-0"
          style={{ color: UI_COLORS.CARD_TITLE }}
        >
          {title}
        </header>
        <hr
          className="h-px my-2.5 border-none"
          style={{ backgroundColor: UI_COLORS.CARD_BORDER }}
        />
        <section className="text-base font-sans flex-1 flex flex-col" style={{ color: UI_COLORS.WHITE }}>
          <p className="flex-1 leading-6">{description}</p>
          <div
            className="flex justify-start items-center my-2 rounded-xl gap-2 py-2 px-3"
            style={{ backgroundColor: UI_COLORS.CARD_BACKGROUND }}
          >
            {icons.map((iconName, index) => {
              const IconComponent = (LucideIcons as any)[iconName] as React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
              return IconComponent ? (
                <IconComponent 
                  key={index}
                  className="h-5 w-5"
                  style={{ color: UI_COLORS.ICON_COLOR }}
                />
              ) : null;
            })}
          </div>
        </section>
      </motion.article>
    </Link>
  );
}

