const fs = require('fs');
const path = require('path');

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

fs.mkdirSync(outDir, { recursive: true });
// The joke: "moist" is the most universally disliked word in English, so the entry is just that one unpopular word.
fs.writeFileSync(path.join(outDir, 'entry.txt'), 'moist\n');
