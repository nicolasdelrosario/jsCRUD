module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: ['eslint:recommended'],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	plugins: ['react-refresh'],
}
