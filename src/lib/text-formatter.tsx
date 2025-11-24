import React from 'react';
import { CodeBlock } from '@/components/ui';

/**
 * Formats markdown-like text into React elements
 * Supports:
 * - Bold text (**text**)
 * - Italic text (*text*)
 * - Inline code (`code`)
 * - Code blocks (```)
 * - Numbered lists (1. item)
 * - Bullet lists (- item)
 * 
 * @param text - The text to format
 * @returns Array of React elements
 */
export function formatText(text: string): React.ReactNode[] {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: React.ReactNode[] | null = null;
  let inCodeBlock = false;
  let codeBlockContent: string[] = [];

  lines.forEach((line, index) => {
    // Handle code blocks
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        // Close code block
        if (codeBlockContent.length > 0) {
          const code = codeBlockContent.join('\n');
          elements.push(
            <CodeBlock
              key={`code-${index}`}
              language="text"
              code={code}
            />
          );
          codeBlockContent = [];
        }
        inCodeBlock = false;
      } else {
        // Open code block
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      return;
    }

    // Close current list if exists
    if (currentList && line.trim() !== '' && !/^(\d+\.|-\s)/.test(line)) {
      elements.push(
        <ul key={`list-${index}`} className="mb-4 space-y-2">
          {currentList}
        </ul>
      );
      currentList = null;
    }

    // Empty lines
    if (line.trim() === '') {
      if (currentList) {
        elements.push(
          <ul key={`list-${index}`} className="mb-4 space-y-2">
            {currentList}
          </ul>
        );
        currentList = null;
      }
      elements.push(<br key={`br-${index}`} />);
      return;
    }

    // Format basic text
    let formatted = line
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');

    // Detect inline code with backticks
    formatted = formatted.replace(
      /`([^`]+)`/g,
      '<code class="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-white">$1</code>'
    );

    // Numbered lists
    if (/^\d+\.\s/.test(line)) {
      if (!currentList) currentList = [];
      currentList.push(
        <li
          key={`li-${index}`}
          className="ml-4 text-white/90"
          dangerouslySetInnerHTML={{ __html: formatted.replace(/^\d+\.\s/, '') }}
        />
      );
      return;
    }

    // Bullet lists
    if (/^-\s/.test(line)) {
      if (!currentList) currentList = [];
      currentList.push(
        <li
          key={`li-${index}`}
          className="ml-4 text-white/90"
          dangerouslySetInnerHTML={{ __html: formatted.replace(/^-\s/, '') }}
        />
      );
      return;
    }

    // Regular paragraphs
    elements.push(
      <p
        key={`p-${index}`}
        className="mb-4 text-white/90 leading-7"
        dangerouslySetInnerHTML={{ __html: formatted }}
      />
    );
  });

  // Close list if still open
  if (currentList) {
    elements.push(
      <ul key="list-final" className="mb-4 space-y-2">
        {currentList}
      </ul>
    );
  }

  return elements;
}

