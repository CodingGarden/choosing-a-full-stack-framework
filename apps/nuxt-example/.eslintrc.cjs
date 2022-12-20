module.exports = {
  root: true,
  extends: [
    '@nuxtjs/eslint-config-typescript',
    '@vue/eslint-config-airbnb-with-typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    'import/no-extraneous-dependencies': 0,
  }
};
