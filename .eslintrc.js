module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    extends: [
        'prettier',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
    ],
    rules: {
        'no-unused-vars': 0,
        'import/no-unresolved': 0,
        '@typescript-eslint/no-unused-vars': 2,
        '@typescript-eslint/no-var-requires': 0,
        'react/prop-types': 0,
        'react/jsx-uses-react': 0,
        'react/react-in-jsx-scope': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
