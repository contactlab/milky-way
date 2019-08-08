const path = require('path');
const shell = require('shelljs');

// --- Directories
const ROOT_DIR = path.resolve(__dirname, '../');
const CATALOG_DIST_DIR = path.resolve(ROOT_DIR, 'catalog', 'build');
const SRC_TOKEN_DIR = path.resolve(
  ROOT_DIR,
  'node_modules',
  '@contactlab',
  'ds-tokens',
  'lib'
);
const TARGET_TOKEN_DIR = path.resolve(ROOT_DIR, 'catalog', 'static', 'lib');

// --- Files
const GLOBAL_CSS = path.resolve(
  ROOT_DIR,
  'catalog',
  'static',
  'assets',
  'global.css'
);

// --- Helpers
function formattingList(files) {
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
  shell.echo(`Source: ${SRC_TOKEN_DIR.toString()}`);
  shell.echo(`Target: ${TARGET_TOKEN_DIR.toString()}`);
  shell.cp('-r', from, target);
}

// --- Program
(function run() {
  clean([GLOBAL_CSS, TARGET_TOKEN_DIR, CATALOG_DIST_DIR]);
  copy(SRC_TOKEN_DIR, TARGET_TOKEN_DIR);
  shell.exit(0);
})();
