import { readdir, readFile } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../src/', import.meta.url));
const checkedExtensions = new Set(['.astro', '.css']);
const banned = [
  [/font-family:\s*'Courier New', monospace/g, 'Use var(--font-ui), not a literal fallback stack.'],
  [/var\(--font-nav\)/g, 'Use var(--font-ui).'],
  [/var\(--color-text\)/g, 'Use var(--color-ink).'],
  [/var\(--text-secondary\)/g, 'Use var(--color-reading-ink).'],
  [/var\(--text-tertiary\)/g, 'Use var(--color-muted).'],
  [/var\(--text\)/g, 'Use var(--color-ink).'],
  [/var\(--border\)/g, 'Use var(--color-border).'],
  [/rgba\(42,\s*42,\s*37,/g, 'Use a shared border or ink token.'],
];

async function files(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  }));
  return nested.flat();
}

const failures = [];
for (const path of await files(root)) {
  if (!checkedExtensions.has(extname(path))) continue;
  const source = await readFile(path, 'utf8');
  for (const [pattern, guidance] of banned) {
    pattern.lastIndex = 0;
    for (const match of source.matchAll(pattern)) {
      const line = source.slice(0, match.index).split('\n').length;
      failures.push(`${relative(root, path)}:${line} — ${guidance}`);
    }
  }
}

if (failures.length) {
  console.error(`Design-system check failed:\n${failures.join('\n')}`);
  process.exit(1);
}

console.log('Design-system check passed.');
