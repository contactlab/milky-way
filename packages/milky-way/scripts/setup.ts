import * as shell from 'shelljs';

const FILE_TO_DELETE = ['styles/**/*.css', 'illustrations/min'];

// --- Cleaner
function __formattingList(files: string[]): string {
  return files.length >= 1
    ? files.join('\n').toString()
    : 'Specifies a list of file to delete.';
}

function clean(targets: string[]): void {
  shell.echo('Clean project...');
  shell.echo(__formattingList(targets));
  shell.rm('-r', targets);
}

// --- Program
(function run(): void {
  clean(FILE_TO_DELETE);
  shell.exit(0);
})();
