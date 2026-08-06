import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptRoot = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptRoot, '..');
const sourcePath = resolve(repoRoot, '../../workroom/texts/foundations.html');
const routeRoot = resolve(repoRoot, 'src/pages/manifesto/foundations');

const principles = [
  { slug: 'restraint', number: 'I.1', plate: 'E01-P03' },
  { slug: 'authority', number: 'I.2', plate: 'E01-P02' },
  { slug: 'pacing', number: 'I.3', plate: 'E01-P04' },
  { slug: 'silence', number: 'I.4', plate: 'E01-P05' },
];

function extractChapter(source, slug) {
  const opening = `<div class="chapter" id="${slug}">`;
  const start = source.indexOf(opening);
  if (start < 0) throw new Error(`Canonical ${slug} chapter not found.`);

  const divider = source.indexOf('<div class="chapter-divider"></div>', start);
  const application = source.indexOf('<!-- PART II', start);
  const end = divider >= 0 && (application < 0 || divider < application) ? divider : application;
  if (end < 0) throw new Error(`Canonical ${slug} chapter ending not found.`);

  let chapter = source.slice(start + opening.length, end).trim();
  const finalClose = chapter.lastIndexOf('</div>');
  if (finalClose >= 0) chapter = chapter.slice(0, finalClose).trim();
  return chapter;
}

function normalise(chapter) {
  return chapter
    .replace(/\r\n?/g, '\n')
    .replace(/[ \t]+$/gm, '')
    .replace(/<div class="chapter-header">[\s\S]*?<\/div>/, '')
    .replace(/<p class="m-prose">/g, '<p>')
    .replace(/<p class="m-line">/g, '<p class="foundation-line">')
    .replace(/<p class="m-statement">([\s\S]*?)<\/p>/g, '<blockquote>$1</blockquote>')
    .replace(/<div class="m-space"><\/div>/g, '<div class="foundation-pause" aria-hidden="true"></div>')
    .replace(/<div class="reflection">/g, '<aside class="foundation-reflection">')
    .replace(/<p class="reflection-label">[\s\S]*?<\/p>/g, '<h2>Reflection</h2>')
    .replace(/<p class="reflection-q">/g, '<p>')
    .replace(/<\/div>\s*$/, '</aside>')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function replaceContent(route, body, principle) {
  const marker = '<section class="principle-content">';
  const start = route.indexOf(marker);
  const end = route.indexOf('</section>', start);
  if (start < 0 || end < 0) throw new Error(`Live ${principle.slug} content section not found.`);

  const citation = [
    '<h2>Citation</h2>',
    `<p class="citation-text">This principle may be cited as: <strong>${principle.number} (${principle.slug[0].toUpperCase()}${principle.slug.slice(1)})</strong> or by plate reference <strong>${principle.plate}</strong>.</p>`,
  ].join('\n');
  const complete = `${body}\n\n${citation}`;
  const indented = complete.split('\n').map((line) => line ? `      ${line}` : '').join('\n');
  return `${route.slice(0, start)}${marker}\n${indented}\n    ${route.slice(end)}`;
}

const source = await readFile(sourcePath, 'utf8');

for (const principle of principles) {
  const routePath = resolve(routeRoot, `${principle.slug}.astro`);
  const route = await readFile(routePath, 'utf8');
  const body = normalise(extractChapter(source, principle.slug));
  await writeFile(routePath, replaceContent(route, body, principle));
  const words = body.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).length;
  console.log(`${principle.slug}: restored ${words} source words`);
}
