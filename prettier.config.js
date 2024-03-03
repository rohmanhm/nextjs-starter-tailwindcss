/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  singleQuote: true,
  semi: true,
  trailingComma: 'es5',
  importOrder: [
    '<BUILTIN_MODULES>', // Node.js built-in modules
    '',
    '^(^react$|@react|react)',
    '',
    '<THIRD_PARTY_MODULES>', // Imports not matched by other special words or groups.
    '',
    '^@/(.*)$',
    '',
    '<TYPES>', // Group all type-imports
    '',
    '^[.]', // Relative imports
  ],
  importOrderTypeScriptVersion: '5.0.0',
};
