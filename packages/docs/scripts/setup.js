const path = require('path');
const shell = require('shelljs');

const SRC_DIR = path.resolve(
  __dirname,
  '../',
  'node_modules',
  '@contactlab',
  'design-tokens',
  'lib'
);
const TARGET_DIR = path.resolve(__dirname, '../', 'catalog', 'static', 'lib');

// --- Helpers
function formattingList(files) {
  if (!Array.isArray(files)) {
    shell.exit(1);
    return;
  }

  return files.length >= 1
    ? files.join('\n').toString()
    : 'Specifies a list of file to delete.';
}

// --- Cleaner
function clean(targets) {
  if (!Array.isArray(targets)) {
    shell.exit(1);
    return;
  }

  shell.echo('Clean project...');
  shell.echo(formattingList(targets));
  shell.rm('-r', targets);
}

// --- Copy
function copy(from, target) {
  if (typeof from !== 'string' && typeof target !== 'string') {
    shell.exit(1);
    return;
  }

  shell.echo('Copy from...');
  shell.echo(`Source: ${SRC_DIR.toString()}`);
  shell.echo(`Target: ${TARGET_DIR.toString()}`);
  shell.cp('-r', from, target);
}

// --- Program
(function run() {
  clean([TARGET_DIR]);
  copy(SRC_DIR, TARGET_DIR);
  shell.exit(0);
})();
