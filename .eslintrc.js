module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './vue.config.js',
      },
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: [2, 'never'], // 结尾不加分号
    'linebreak-style': ['off', 'windows'],
    'arrow-parens': 0,
    'array-callback-return': 0,
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
    'no-unused-expressions': 0,
    'consistent-return': 0,
    'no-plusplus': 0,
    'operator-assignment': 0,
    'no-undef': 0,
    'func-names': 0,
    radix: 0,
    'no-mixed-operators': 0,
  },
}
