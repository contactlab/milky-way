const shell = require('shelljs');

const FILE_TO_DELETE = ['styles/**/*.css', 'illustrations/min'];

// --- Cleaner
function formattingList(files) {
  if (!Array.isArray(files)) {
    shell.exit(1);
    return;
  }

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
  clean(FILE_TO_DELETE);
  shell.exit(0);
})();
