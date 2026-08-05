import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36';

const cssUrl =
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap';

const families = ['Playfair Display', 'Poppins'];
const outDir = join(process.cwd(), 'public', 'fonts');
mkdirSync(outDir, { recursive: true });

const res = await fetch(cssUrl, { headers: { 'User-Agent': UA } });
const css = await res.text();

// Split into @font-face blocks
const blocks = css.split('@font-face').slice(1);
const seen = new Set();

for (const block of blocks) {
  if (!block.includes('/* latin */')) continue;
  const familyMatch = block.match(/font-family:\s*'([^']+)'/);
  if (!familyMatch || !families.includes(familyMatch[1])) continue;
  const weightMatch = block.match(/font-weight:\s*(\d+)/);
  const styleMatch = block.match(/font-style:\s*(\w+)/);
  const urlMatch = block.match(/url\((\S+?)\)/);
  if (!urlMatch) continue;

  const family = familyMatch[1].toLowerCase().replace(/\s+/g, '-');
  const weight = weightMatch ? weightMatch[1] : '400';
  const style = styleMatch ? styleMatch[1] : 'normal';
  const fontUrl = urlMatch[1].replace(/"/g, '');
  const key = `${family}-${weight}-${style}`;
  if (seen.has(key)) continue;
  seen.add(key);

  const fileRes = await fetch(fontUrl);
  const buffer = Buffer.from(await fileRes.arrayBuffer());
  const filename = `${family}-${weight}-${style}.woff2`;
  writeFileSync(join(outDir, filename), buffer);
  console.log(`OK ${filename} (${buffer.length} bytes)`);
}

console.log('Done. Files:');
for (const f of Object.values(seen)) console.log(' -', f);
