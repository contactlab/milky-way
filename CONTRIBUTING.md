# How to Contribute

## Contribution Prerequisites

- You have Node installed at v14.16.0+ and NPM at v6.0.0+.
- You have gcc installed or are comfortable installing a compiler if needed. Some of our dependencies may require a compilation step. On OS X, the XCode Command Line Tools will cover this. On Ubuntu, `apt-get install build-essential` will install the required packages. Similar commands should work on other Linux distros. Windows will require some additional steps.
- You are familiar with Git.

## Development Workflow

After cloning the project, install the [@microsoft/rush][rush-url] package globally with `npm install -g @microsoft/rush`. Rush is necessary for efficiently managing the Milky-Way mono-repo. Then, run `rush update` to fetch the project dependencies. After that, you can run several commands:

- `rush typecheck` checks the TypeScript source code of all packages with the TSC compiler without emitting.
- `rush lint` check the source code of all packages with ESLint and Stylelint.
- `rush test` runs the complete test suite when is available in the packages.
- `rush prettier` for automatic code formatter.
- `rush rebuild` performs a full clean build. Rush invokes this script to build each project that is registered in `./rush.json`.
- `rush build` command is similar to `rush rebuild`, except that `rush build` performs an incremental build.
- `rush purge` command is used to delete temporary files created by Rush.

## NPM Publish Workflow
- Commit your changes with Git but don't push it on the `stable` branch before running the `rush change` command.
- `rush change` command asks a series of questions and then generates a `<branchname>-<timestamp>.json` file in the common folder. The `rush version --bump` command will consume these files and perform the proper version bumps.
- `rush version --bump` command will increase package versions based on their associated version policies.
- `rush publish -p -n [NPM_AUTH_TOKEN] --include-all` command will publish all the public packages that have version increased.

[rush-url]: https://rushjs.io/
