module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb', 'plugin:react/recommended', 'eslint:recommended'],
    plugins: ['react', 'jsx-a11y'],
    env: {
      browser: true,
      commonjs: true,
      es6: true
    },
    extends: ['eslint:recommended', 'plugin:jsx-a11y/recommended'],
    parserOptions: {
      sourceType: 'module'
    },
    rules: {
      'jsx-a11y/href-no-hash': 0,
      'jsx-a11y/anchor-is-valid': 0,
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-console': 'off'
    }
  };
