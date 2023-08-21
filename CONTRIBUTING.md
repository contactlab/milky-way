# How to Contribute

## Prerequisites

- Node v16 or higher
- NPM v8 or higher

## Development Workflow

After cloning the project, run `npm ci` to install dependencies: Milky-Way is a mono-repo and uses [NPM's `workspaces`](https://docs.npmjs.com/cli/v9/using-npm/workspaces) features.

After that, you can execute NPM commands with the `-ws` argument to run them on all workspaces or `-w PACKAGE_NAME` to run them only in specific packages.

There are some common commands, available for each package:

```sh
$ npm run check
```

checks the TypeScript source code with the TSC compiler without emitting;

```sh
$ npm run lint
```

checks the source code of all packages with ESLint (and Stylelint where available);

```sh
$ npm test
```

runs the test suite when is available in the packages.

```sh
$ npm run build
```

builds the packages.

Other commands only available in some packages can be [ran on all workspaces with the flag `--if-present`](https://docs.npmjs.com/cli/v9/using-npm/workspaces#ignoring-missing-scripts):

```sh
$ npm run start -ws --if-present
```

## Publish Workflow

- upgrade packages versions;
- add relative entries in packages `CHANGELOG`;
- run `npm publish` with `-ws` flag to publish all packages or `-w PACKAGE_NAME` to publish only specified packages.
