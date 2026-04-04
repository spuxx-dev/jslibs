import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import { defineConfig, globalIgnores } from 'eslint/config';

/** @type { import("eslint").Linter.Config[] } */
export default defineConfig([
  // JavaScript
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    plugins: {
      js,
    },
    extends: ['js/recommended'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      'no-console': 'error',
    },
  },
  // TypeScript
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^(_.*|error)$',
          argsIgnorePattern: '^(_.*|error)$',
          caughtErrorsIgnorePattern: '^(_.*|error)$',
        },
      ],
    },
  },
  // JSON
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },
  // Markdown
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/gfm',
    extends: ['markdown/recommended'],
    rules: {
      'markdown/no-missing-label-refs': 'off',
    },
  },
  // Excludes
  globalIgnores([
    '**/dist/**',
    '**/node_modules/**',
    '**/reports/**',
    '**/.astro/**',
    'typedoc/output/**',
  ]),
]);
