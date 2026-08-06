import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptRoot = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptRoot, '..');
const sourceRoot = resolve(repoRoot, '../../workroom/texts');
const routeRoot = resolve(repoRoot, 'src/pages/texts');

const essays = [
  ['attention', 'attention-essay.html', 'main'],
  ['cognitive', 'cognitive-essay.html', 'main'],
  ['contrast', 'contrast-essay.html', 'container'],
  ['gestalt', 'gestalt-perception.html', 'main'],
  ['sequence', 'sequence-essay.html', 'main'],
];

function extract(source, mode) {
  if (mode === 'main') {
    const start = source.indexOf('<main>');
    const end = source.indexOf('</main>', start);
    if (start < 0 || end < 0) throw new Error('Canonical <main> body not found.');
    return source.slice(start + '<main>'.length, end);
  }

  const marker = '<div class="container">';
  const start = source.indexOf(marker);
  const bodyEnd = source.lastIndexOf('</body>');
  if (start < 0 || bodyEnd < 0) throw new Error('Canonical contrast container not found.');
  let body = source.slice(start + marker.length, bodyEnd).trim();
  const finalClose = body.lastIndexOf('</div>');
  if (finalClose >= 0) body = body.slice(0, finalClose).trim();
  return body;
}

function normalise(body) {
  return body
    .replace(/\r\n?/g, '\n')
    .replace(/[ \t]+$/gm, '')
    .replace(
      /<div class="essay-header">[\s\S]*?<p class="subtitle">[\s\S]*?<\/p>\s*<\/div>/,
      '',
    )
    .replace(
      /<div class="section-header"(?: id="([^"]+)")?>\s*<span class="section-num">([^<]+)<\/span>\s*<h2>([\s\S]*?)<\/h2>\s*<\/div>/g,
      (_, id, number, title) => {
        const plainTitle = title
          .replace(/<br\s*\/?\s*>/g, ' ')
          .replace(/<\/?em>/g, '')
          .replace(/\s+/g, ' ')
          .trim();
        return `<h2${id ? ` id="${id}"` : ''}>${number}. ${plainTitle}</h2>`;
      },
    )
    .replace(/<div class="rule"><\/div>/g, '<hr />')
    .replace(/<div class="pull-quote">([\s\S]*?)<\/div>/g, '<blockquote>$1</blockquote>')
    .replace(/<div class="pullquote">([\s\S]*?)<\/div>/g, '<blockquote>$1</blockquote>')
    .replace(/<div class="closing">/g, '<footer class="essay-closing">')
    .replace(/<p class="closing-line">/g, '<p class="essay-signature">')
    .trim();
}

function replaceTextBody(route, body) {
  const marker = '<section class="text-content">';
  const start = route.indexOf(marker);
  const end = route.indexOf('</section>', start);
  if (start < 0 || end < 0) throw new Error('Live text-content section not found.');
  const indented = body.split('\n').map((line) => `      ${line}`).join('\n');
  return `${route.slice(0, start)}${marker}\n${indented}\n    ${route.slice(end)}`;
}

for (const [slug, sourceName, mode] of essays) {
  const sourcePath = resolve(sourceRoot, sourceName);
  const routePath = resolve(routeRoot, `${slug}.astro`);
  const [source, route] = await Promise.all([
    readFile(sourcePath, 'utf8'),
    readFile(routePath, 'utf8'),
  ]);
  const completeBody = normalise(extract(source, mode));
  await writeFile(routePath, replaceTextBody(route, completeBody));
  console.log(`${slug}: restored ${completeBody.split(/\s+/).length} source words`);
}
