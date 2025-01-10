import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '255 255 255',
		'--on-error': '0 0 0',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #80918a
		'--color-primary-50': '236 239 237', // #ecefed
		'--color-primary-100': '230 233 232', // #e6e9e8
		'--color-primary-200': '223 228 226', // #dfe4e2
		'--color-primary-300': '204 211 208', // #ccd3d0
		'--color-primary-400': '166 178 173', // #a6b2ad
		'--color-primary-500': '128 145 138', // #80918a
		'--color-primary-600': '115 131 124', // #73837c
		'--color-primary-700': '96 109 104', // #606d68
		'--color-primary-800': '77 87 83', // #4d5753
		'--color-primary-900': '63 71 68', // #3f4744
		// secondary | #44817c
		'--color-secondary-50': '227 236 235', // #e3eceb
		'--color-secondary-100': '218 230 229', // #dae6e5
		'--color-secondary-200': '208 224 222', // #d0e0de
		'--color-secondary-300': '180 205 203', // #b4cdcb
		'--color-secondary-400': '124 167 163', // #7ca7a3
		'--color-secondary-500': '68 129 124', // #44817c
		'--color-secondary-600': '61 116 112', // #3d7470
		'--color-secondary-700': '51 97 93', // #33615d
		'--color-secondary-800': '41 77 74', // #294d4a
		'--color-secondary-900': '33 63 61', // #213f3d
		// tertiary | #67AAAD
		'--color-tertiary-50': '232 242 243', // #e8f2f3
		'--color-tertiary-100': '225 238 239', // #e1eeef
		'--color-tertiary-200': '217 234 235', // #d9eaeb
		'--color-tertiary-300': '194 221 222', // #c2ddde
		'--color-tertiary-400': '149 196 198', // #95c4c6
		'--color-tertiary-500': '103 170 173', // #67AAAD
		'--color-tertiary-600': '93 153 156', // #5d999c
		'--color-tertiary-700': '77 128 130', // #4d8082
		'--color-tertiary-800': '62 102 104', // #3e6668
		'--color-tertiary-900': '50 83 85', // #325355
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #a25800
		'--color-warning-50': '241 230 217', // #f1e6d9
		'--color-warning-100': '236 222 204', // #ecdecc
		'--color-warning-200': '232 213 191', // #e8d5bf
		'--color-warning-300': '218 188 153', // #dabc99
		'--color-warning-400': '190 138 77', // #be8a4d
		'--color-warning-500': '162 88 0', // #a25800
		'--color-warning-600': '146 79 0', // #924f00
		'--color-warning-700': '122 66 0', // #7a4200
		'--color-warning-800': '97 53 0', // #613500
		'--color-warning-900': '79 43 0', // #4f2b00
		// error | #f81b2a
		'--color-error-50': '254 221 223', // #fedddf
		'--color-error-100': '254 209 212', // #fed1d4
		'--color-error-200': '253 198 202', // #fdc6ca
		'--color-error-300': '252 164 170', // #fca4aa
		'--color-error-400': '250 95 106', // #fa5f6a
		'--color-error-500': '248 27 42', // #f81b2a
		'--color-error-600': '223 24 38', // #df1826
		'--color-error-700': '186 20 32', // #ba1420
		'--color-error-800': '149 16 25', // #951019
		'--color-error-900': '122 13 21', // #7a0d15
		// surface | #278b60
		'--color-surface-50': '223 238 231', // #dfeee7
		'--color-surface-100': '212 232 223', // #d4e8df
		'--color-surface-200': '201 226 215', // #c9e2d7
		'--color-surface-300': '169 209 191', // #a9d1bf
		'--color-surface-400': '104 174 144', // #68ae90
		'--color-surface-500': '39 139 96', // #278b60
		'--color-surface-600': '35 125 86', // #237d56
		'--color-surface-700': '29 104 72', // #1d6848
		'--color-surface-800': '23 83 58', // #17533a
		'--color-surface-900': '19 68 47' // #13442f
	}
};
