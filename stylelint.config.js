module.exports = {
  extends: '@giotramu/stylelint-config',
  rules: {
    'declaration-no-important': null,
    'declaration-property-value-blacklist': null,
    'property-no-unknown': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['each', 'elevations', 'fonts'],
      },
    ],
  },
};
