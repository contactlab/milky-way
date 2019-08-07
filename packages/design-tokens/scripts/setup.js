const path = require('path');
const shell = require('shelljs');

// --- Directories
const ROOT_DIR = path.resolve(__dirname, '../');
const TOKENS_DIR = path.resolve(ROOT_DIR, 'lib');
const ILLUSTRATIONS_GZIPED_DIR = path.resolve(
  ROOT_DIR,
  'lib',
  'illustrations',
  'min'
);

// --- Cleaner
function formattingList(files) {
  return files.length >= 1
    ? files.join('\n').toString()
    : 'Specifies a list of file to delete.';
}

function clean(targets) {
  if (!Array.isArray(targets)) {
    shell.exit(1);
    return;
  }

  shell.echo('Clean project...');
  shell.echo(formattingList(targets));
  shell.rm('-r', targets);
}

// --- Program
(function run() {
  clean([`${TOKENS_DIR}/styles/**/*.css`, ILLUSTRATIONS_GZIPED_DIR]);
  shell.exit(0);
})();
