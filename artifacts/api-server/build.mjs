import { mkdir, rm } from 'node:fs/promises';
import { build } from 'esbuild';

const outdir = new URL('./dist/', import.meta.url);

await rm(outdir, { recursive: true, force: true });
await mkdir(outdir, { recursive: true });

// esbuild transpiles the TypeScript entry point directly; this build intentionally
// does not depend on JavaScript emitted by a separate `tsc` invocation.
await build({
  bundle: true,
  entryPoints: ['src/index.ts'],
  format: 'esm',
  outfile: 'dist/index.mjs',
  platform: 'node',
  sourcemap: true,
  target: 'node20',
});
