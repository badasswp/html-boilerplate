import fs from 'fs';
import path from 'path';
import eslintPluginPrettier from 'eslint-plugin-prettier';

const prettierConfig = JSON.parse(
	fs.readFileSync(path.resolve('./.prettierrc.json'), 'utf8')
);

export default [
	{
		ignores: ['node_modules', 'repo', 'build', 'dist']
	},
	{
		files: ['**/*.js', '**/*.ts'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module'
		},
		plugins: {
			prettier: eslintPluginPrettier
		},
		rules: {
			'prettier/prettier': ['error', prettierConfig],
			'no-unused-vars': 'warn'
		}
	}
];
