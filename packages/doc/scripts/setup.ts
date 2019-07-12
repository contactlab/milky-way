import * as path from 'path';
import * as shell from 'shelljs';

const SRC_DIR = path.resolve(
  __dirname,
  '../',
  'node_modules',
  '@contactlab',
  'dada',
  'lib'
);
const TARGET_DIR = path.resolve(__dirname, '../', 'catalog', 'lib');

// --- Helpers
function __formattingList(files: string[]): string {
  return Array.isArray(files) && files.length >= 1
    ? files.join('\n').toString()
    : 'Specifies what to delete';
}

// --- Cleaner
function clean(targets: string[]): void {
  shell.echo('Clean project...');
  shell.echo(__formattingList(targets));
  shell.rm('-r', targets);
}

// --- Copy
function copy(from: string, target: string): void {
  shell.echo('Copy from...');
  shell.echo('Source: ' + SRC_DIR.toString());
  shell.echo('Target: ' + TARGET_DIR.toString());
  shell.cp('-r', from, target);
}

// --- Program
(function run(): void {
  clean([TARGET_DIR]);
  copy(SRC_DIR, TARGET_DIR);
  shell.exit(0);
})();
