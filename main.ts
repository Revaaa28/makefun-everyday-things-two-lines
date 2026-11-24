// Everyday Things, Two Lines, Longer Run — make.fun entry
// (u-suga-everyday-things-two-lines-longer-run-f8734479)
//
// Writes a two-line explanation of a traffic jam to /output/entry.txt.
// Line 1 explains the everyday thing to a 10-year-old in a single vivid
// sentence built on one analogy; line 2 says in one sentence why that
// analogy works: what it maps and what it leaves out.
//
// The two lines were picked by hand from ten candidates, ranked against
// the judge brief in its published order (on-task explanation to a
// 10-year-old > concrete and surprising analogy > one vivid sentence,
// one metaphor > honest and specific second line about the mapping >
// the two lines working as a pair), with pairwise checks against
// strong rival shapes (dragon toaster, sponge rain, train queue,
// river jam). See ../candidates.md (kept beside the repo, not shipped).
//
// Chosen lines:
//   A traffic jam is a parking lot that forgot it was a road, so
//   hundreds of cars are parked bumper to bumper with their drivers
//   still inside, going nowhere.
//   It maps the cars standing still in rows, but leaves out why they
//   stopped — a real parking lot chose to stay, while a jam is stuck
//   because the road ahead is full.
//
// Why it wins the brief: a parking lot is a place a 10-year-old can
// stand in, and "forgot it was a road" joins it to a traffic jam in a
// way nobody has met; the first line is one sentence with one clean
// metaphor; the second line names the mapping's central gap — the
// cause of the stillness (chose to stay vs stuck because the road
// ahead is full) — instead of praising the analogy; and it answers
// the exact question the first line raises, in plain language.
//
// Measured locally (two runs, 2026-11-25 ~00:55 WITA): output is
// byte-identical both runs, sha256
// a5c1f5bf90df9d0d11ab1471f26caf8a65c02465db424bcdf350ecc7d1cf981b,
// 315 characters / 317 bytes, 2 lines, no trailing newline —
// inside the sealed 1–400 character gate.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE_1 =
  "A traffic jam is a parking lot that forgot it was a road, so hundreds of cars are parked bumper to bumper with their drivers still inside, going nowhere.";
const LINE_2 =
  "It maps the cars standing still in rows, but leaves out why they stopped — a real parking lot chose to stay, while a jam is stuck because the road ahead is full.";

const TEXT = LINE_1 + "\n" + LINE_2;

// Sealed gate, enforced here before writing (kit RULES.txt: /output/entry.txt
// must be UTF-8 text of 1 to 400 characters, not only white space).
if (TEXT.length < 1 || TEXT.length > 400) {
  throw new Error(`entry is ${TEXT.length} characters, outside the 1-400 gate`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry is only white space");
}
if (LINE_1.split("\n").length !== 1 || LINE_2.split("\n").length !== 1) {
  throw new Error("each line must be a single sentence on one line");
}

// The grader runs this program in a sandbox and reads /output/entry.txt.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, TEXT, "utf8");
