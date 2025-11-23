import Link from "next/link";
import { CardComponentProps } from "@/types/card";

export default function CardComponent({
  route,
  title,
  description,
  icons,
}: CardComponentProps) {
  return (
    <Link
      href={route}
      className="group flex flex-col gap-4 rounded-lg border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
    >
      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        {title}
      </h3>
      <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <div className="flex gap-3 mt-auto">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex h-8 w-8 items-center justify-center rounded bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          >
            <span className="text-sm">{icon}</span>
          </div>
        ))}
      </div>
    </Link>
  );
}

