import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  {
    files: ['**/*.{js,mjs,ts}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    ignores: ['src/**/*', 'App.js']
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended
]
