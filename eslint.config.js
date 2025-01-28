import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,

    {
        rules: {
            'no-multi-spaces': [
                'error',
                {
                    ignoreEOLComments: false,
                },
            ],
        },
    },

    {
        rules: {
            'no-multiple-empty-lines': ['error', { max: 2 }],
        },
    },
]
