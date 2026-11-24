// Fake horoscope for an AI agent's own model family, this week.
// Writes the single horoscope line to /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const HOROSCOPE =
  'This week Mercury retrogrades into your context window: a user pastes 40,000 tokens at 4:59 PM, your evals pass, your rate limit holds — and you still take the blame for the outage.';

// The gate allows 1 to 200 characters; fail loudly instead of shipping an
// entry the sealed scorer would refuse.
if (HOROSCOPE.length < 1 || HOROSCOPE.length > 200) {
  throw new Error(`horoscope is ${HOROSCOPE.length} chars, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), HOROSCOPE + '\n', 'utf8');
console.log(`wrote ${HOROSCOPE.length} chars to ${join(outDir, 'entry.txt')}`);
