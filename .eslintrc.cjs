/* eslint-env node */
module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended-type-checked',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: true,
		tsconfigRootDir: __dirname,
	},
}
