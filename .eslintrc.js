/* eslint-disable quotes */
module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'settings': {
		'react': {
			'version': 'detect',
		},
	},
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2020,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'react-hooks', 
		'simple-import-sort'
	],
	'rules': {
		'indent': [ 'error', 'tab', { SwitchCase: 1 } ],
		'quotes': [ 'error', 'single' ],
		'semi': [ 'error', 'always', {
			'omitLastInOneLineBlock': true
		} ],
		"react/prop-types": 0,
		'no-console': 'error',
		'object-curly-spacing': [ 'error', 'always' ],
		'array-bracket-spacing': [ 'error', 'always' ],
		'arrow-parens': [ 'error', 'as-needed' ],
		'react/prefer-stateless-function': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',

	}
};