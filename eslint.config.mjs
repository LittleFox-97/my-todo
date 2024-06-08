// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    typescript: true,
    vue: false,
    jsonc: true,
    svelte: false,
    astro: false,
  },
  {
    files: ['src/**/*.ts'],
    rules: {
      'no-console': 'warn',
      'curly': ['error', 'all'],
      'style/brace-style': ['error', '1tbs'],
      'complexity': ['warn', 8],
      'import/no-unused-modules': 'warn',
    },
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  },
)
