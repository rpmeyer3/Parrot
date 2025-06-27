import js          from '@eslint/js'
import globals     from 'globals'
import reactHooks  from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),

  // ─── OVERRIDE FOR VITE CONFIG ─────────────────────────
  {
    files: ['vite.config.js', 'vite.config.ts', 'vite.config.mjs'],
    languageOptions: {
      env: {
        node:   true,
        es2021: true,
      },
      globals: {
        __dirname:  'readonly',
        __filename: 'readonly',
      },
    },
    rules: {
      'no-undef': 'off',
    },
  },

  // ─── STANDARD JS/JSX RULES ────────────────────────
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals:     globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType:  'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])