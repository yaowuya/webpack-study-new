module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: 'airbnb-base',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['off', 'windows'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-tabs': 'off',
		'no-console': 'off',
		'no-restricted-syntax': [
			'error',
			{
				selector: 'CallExpression[callee.object.name=\'console\'][callee.property.name!=/^(log|warn|error|info|trace)$/]',
				message: 'Unexpected property on console object was called',
			},
		],
	},
};
