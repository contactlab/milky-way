module.exports = {
  presets: [
    [
      '@babel/typescript',
      {
        allExtensions: true,
        isTSX: true
      }
    ],
    [
      '@babel/env',
      {
        corejs: '3',
        modules: 'cjs',
        targets: {node: 'current'},
        useBuiltIns: 'entry'
      }
    ],
    '@babel/react'
  ]
};
