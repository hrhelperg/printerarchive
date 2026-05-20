import type { ContentBlock } from "@/lib/content/types";

type FigureBlock = Extract<ContentBlock, { kind: "figure" }>;

export interface FigureGroupBlock {
  kind: "figure-group";
  figures: FigureBlock[];
}

export type ProcessedBlock = ContentBlock | FigureGroupBlock;

/**
 * Collapse runs of ≥ minGroupSize adjacent `figure` blocks into a single
 * `figure-group` synthetic block. Non-figure blocks and shorter runs pass
 * through unchanged. Pure — no side effects, no dependencies.
 */
export function groupAdjacentFigures(
  blocks: ContentBlock[],
  minGroupSize = 2,
): ProcessedBlock[] {
  const out: ProcessedBlock[] = [];
  let i = 0;
  while (i < blocks.length) {
    if (blocks[i].kind === "figure") {
      const run: FigureBlock[] = [];
      while (i < blocks.length && blocks[i].kind === "figure") {
        run.push(blocks[i] as FigureBlock);
        i++;
      }
      if (run.length >= minGroupSize) {
        out.push({ kind: "figure-group", figures: run });
      } else {
        out.push(...run);
      }
    } else {
      out.push(blocks[i]);
      i++;
    }
  }
  return out;
}
