module.exports = {
  extends: ['contactlab/typescript', 'prettier'],

  plugins: ['react'],

  rules: {
    // --- react
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  }
};
