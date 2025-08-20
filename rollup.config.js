import {config, nodeResolve, terser, typescript} from '@vdegenne/rollup';

const plugins = [nodeResolve(), typescript(), terser()];

export default config([
	{
		input: './src/content.ts',
		output: {file: './content.js', format: 'es'},
		plugins,
	},
	{
		input: './src/background.ts',
		output: {file: './background.js', format: 'es'},
		plugins,
	},
]);
