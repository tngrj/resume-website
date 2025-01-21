import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { myCustomTheme } from './green-theme';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						'--tw-prose-headings': theme('colors.emerald.900'),
						'--tw-prose-invert-headings': theme('colors.emerald.100'),
						'--tw-prose-bold': theme('colors.emerald.900'),
						'--tw-prose-invert-bold': theme('colors.emerald.100'),
						'--tw-prose-counters': theme('colors.pink.600'),
						'--tw-prose-invert-counters': theme('colors.pink.600'),
						'--tw-prose-code': theme('colors.pink.600'),
						'--tw-prose-invert-code': theme('colors.pink.600'),
						code: {
							text: theme('colors.pink.600'),
							backgroundColor: theme('colors.gray.200'),
							borderRadius: theme('borderRadius.md'),
							padding: `${theme('spacing.1')} ${theme('spacing.1')}`
						}
					}
				}
			})
		}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [myCustomTheme]
			}
		})
	]
} satisfies Config;
