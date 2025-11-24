'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  language: string;
  code: string;
}

/**
 * CodeBlock component with syntax highlighting
 * Supports multiple programming languages
 */
export function CodeBlock({ language, code }: CodeBlockProps) {
  // Normalize language name for react-syntax-highlighter
  const normalizedLanguage = language.toLowerCase() === 'java' 
    ? 'java' 
    : language.toLowerCase() === 'javascript' 
    ? 'javascript'
    : language.toLowerCase() === 'typescript'
    ? 'typescript'
    : language.toLowerCase() === 'python'
    ? 'python'
    : language.toLowerCase() === 'html'
    ? 'html'
    : language.toLowerCase() === 'css'
    ? 'css'
    : language.toLowerCase() === 'json'
    ? 'json'
    : 'text';

  return (
    <div className="relative my-4 overflow-hidden rounded-lg border border-zinc-700/50 bg-zinc-950">
      <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/50 px-4 py-2">
        <span className="text-xs font-medium uppercase text-zinc-400">
          {language}
        </span>
      </div>
      <SyntaxHighlighter
        language={normalizedLanguage}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '1rem',
          background: 'transparent',
          fontSize: '0.875rem',
          lineHeight: '1.5',
        }}
        codeTagProps={{
          style: {
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
          },
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
