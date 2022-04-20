module.exports = {
  "root": true,
  "env": {
    "node": true,
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
      },
    },
  },
  "rules": {
    "@typescript-eslint/no-empty-interface": 2,
    "@typescript-eslint/no-explicit-any": 0
  }
}