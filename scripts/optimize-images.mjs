import { existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const out = join(root, 'public', 'images');
mkdirSync(out, { recursive: true });

const tmp = process.env.TEMP;

async function convert(src, name, { width, quality = 80 }) {
  const base = sharp(src);
  if (width) base.resize(width);
  await base.clone().webp({ quality }).toFile(join(out, `${name}.webp`));
  await base.clone().avif({ quality }).toFile(join(out, `${name}.avif`));
  console.log(`OK ${name}.webp / .avif`);
}

// Hero (LCP) — 1200px, high quality
await sharp('02.jpeg')
  .resize(1200, 1500, { fit: 'cover' })
  .webp({ quality: 82 })
  .toFile(join(out, 'figaros-barbearia-presidente-epitacio.webp'));
await sharp('02.jpeg')
  .resize(1200, 1500, { fit: 'cover' })
  .avif({ quality: 80 })
  .toFile(join(out, 'figaros-barbearia-presidente-epitacio.avif'));
console.log('OK hero webp/avif');

// OG image 1200x630
const ogSvg = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a0a0a"/>
      <stop offset="1" stop-color="#1e1e1e"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <circle cx="600" cy="315" r="175" fill="#c9a84c"/>
  <text x="600" y="345" text-anchor="middle" font-family="Georgia,serif" font-size="260" font-weight="700" fill="#0a0a0a">F</text>
  <text x="600" y="150" text-anchor="middle" font-family="Georgia,serif" font-size="64" fill="#e8c96a" letter-spacing="2">FIGARO'S BARBEARIA</text>
  <text x="600" y="565" text-anchor="middle" font-family="Arial,sans-serif" font-size="34" fill="#f5f0e6">Prótese Capilar Masculina • Presidente Epitácio/SP</text>
  <text x="600" y="615" text-anchor="middle" font-family="Arial,sans-serif" font-size="24" fill="#b9b9b9">Avaliação gratuita • (18) 98118-8505</text>
</svg>
`);
await sharp(ogSvg).webp({ quality: 90 }).toFile(join(out, 'og-image.webp'));
console.log('OK og-image.webp');

await convert('Perfil.jpg', 'especialista-wagner-pires', { width: 900 });
await convert('01.jpg', 'resultado-protese-capilar-caso1', { width: 800 });
await convert('02.jpeg', 'resultado-protese-capilar-caso2', { width: 800 });

for (const [n, name] of [
  [2, 'resultado-protese-capilar-caso3'],
  [3, 'resultado-protese-capilar-caso4'],
  [4, 'resultado-protese-capilar-caso5'],
]) {
  const p = join(tmp, `landing_extract_${n}.jpeg`);
  if (existsSync(p)) await convert(p, name, { width: 800 });
}

console.log('Concluído.');
