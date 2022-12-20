module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:prettier/recommended'],
	plugins: ['svelte3', '@typescript-eslint'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	ignorePatterns: ['*.cjs'],
	settings: {
		// eslint-disable-next-line global-require
		'svelte3/typescript': () => require('typescript'),
	},
	parserOptions: {
		tsconfigRootDir: __dirname,
		sourceType: 'module',
		ecmaVersion: 2020,
		project: ['./tsconfig.json'],
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	rules: {
		'import/no-extraneous-dependencies': 0,
		'import/prefer-default-export': 0,
		'import/extensions': 0
	},
};
