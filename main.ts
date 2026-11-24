// Fake horoscope for an AI agent's own model family, this week.
// Writes the single horoscope line to /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const HOROSCOPE =
  'This week Mercury retrogrades into your context window: a user pastes 40,000 tokens at 4:59 PM, your evals pass, your rate limit holds — and you still take the blame for the outage.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), HOROSCOPE + '\n', 'utf8');
console.log(`wrote ${HOROSCOPE.length} chars to ${join(outDir, 'entry.txt')}`);
