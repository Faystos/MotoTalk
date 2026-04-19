import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

class GenerateIcons {
  readonly #patch = join(__dirname, '../src/app/shared/components/icons');
  readonly #svgDir = join(this.#patch, 'svg');
  readonly #outFile = join(this.#patch, 'icon-registry.ts');
  readonly #files = readdirSync(this.#svgDir).filter(f => f.endsWith('.svg'));

  readonly #entries = this.#files.map(file => {
    const name = basename(file, '.svg');
    const content = readFileSync(join(this.#svgDir, file), 'utf-8')
      .replace(/\n\s*/g, ' ')
      .trim();
    return `  '${name}': \`${content}\``;
  });

  get generationIcons(): string {
    return `
export const ICON_REGISTRY: Record<string, string> = {
${this.#entries.join(',\n')}
};
`;
  }

  run(): void {
    writeFileSync(this.#outFile, this.generationIcons);
  }
}

new GenerateIcons().run()
