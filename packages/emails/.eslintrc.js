module.exports = {
  root: true,

  plugins: ['react'],

  extends: ['contactlab/typescript', 'prettier/@typescript-eslint'],

  rules: {
    // --- TypeScript
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false
        },
        extendDefaults: true
      }
    ],

    // --- React
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  }
};
