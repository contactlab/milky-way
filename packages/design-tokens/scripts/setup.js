const path = require('path');
const shell = require('shelljs');

// --- directories
const ROOT_DIR = path.resolve(__dirname, '../');
const ILLUSTRATIONS_GZIPED_DIR = path.resolve(
  ROOT_DIR,
  'lib',
  'illustrations',
  'min'
);

// --- cleaner
function formattingList(files) {
  return files.length
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

// --- program
(function run() {
  clean([ILLUSTRATIONS_GZIPED_DIR]);
  shell.exit(0);
})();
