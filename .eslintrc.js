/*
| Developed by Starton
| Filename : .eslintrc.js
*/

module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'next',
		'next/core-web-vitals',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'react-hooks/exhaustive-deps': ['warn', {}],
		'react/no-children-prop': ['warn'],
		semi: ['error', 'never'],
		'comma-dangle': ['error', 'always-multiline'],
		'quote-props': ['error', 'as-needed'],
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'internal', 'object'],
			},
		],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
	},
}
