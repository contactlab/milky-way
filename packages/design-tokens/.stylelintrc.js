module.exports = {
  extends: '@giotramu/stylelint-config/dist/scss',
  defaultSeverity: 'error',
  rules: {
    'scss/operator-no-unspaced': null,
    'property-no-unknown': null,
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignoreProperties: ['width', 'height']
      }
    ],
    'font-family-no-duplicate-names': [
      true,
      {
        ignoreFontFamilyNames: ['monospace']
      }
    ],
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: ['appearance', 'tab-size']
      }
    ],
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: ['fit-content', 'tab-size']
      }
    ]
  }
};
