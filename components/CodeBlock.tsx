interface CodeBlockProps {
  language: string;
  code: string;
}

export default function CodeBlock({ language, code }: CodeBlockProps) {
  return (
    <div className="relative my-4 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
      <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-4 py-2">
        <span className="text-xs font-medium uppercase text-zinc-400">
          {language}
        </span>
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="font-mono text-sm leading-relaxed text-zinc-100 whitespace-pre">
          {code.trim()}
        </code>
      </pre>
    </div>
  );
}

