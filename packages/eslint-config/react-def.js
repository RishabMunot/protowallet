const readPkgUp = require('read-pkg-up');
const semver = require('semver');
const { rules, overrides } = require('./core');

let oldestSupportedReactVersion = '17.0.2';

// Get react version from package.json and used it in lint configuration
try {
  const pkg = readPkgUp.sync({ normalize: true });
  const allDeps = Object.assign(
    { react: oldestSupportedReactVersion },
    pkg.peerDependencies,
    pkg.devDependencies,
    pkg.dependencies
  );

  oldestSupportedReactVersion = semver
    .validRange(allDeps.react)
    .replace(/[>=<|]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .sort(semver.compare)[0];
} catch (error) {
  // ignore error
}

module.exports = {
  extends: ['react-app', 'react-app/jest', 'prettier'],
  plugins: ['react-hooks', 'import', 'prettier', 'simple-import-sort'],
  settings: {
    react: {
      version: oldestSupportedReactVersion,
    },
  },
  rules: Object.assign(rules, {
    'react/jsx-fragments': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  }),
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: Object.assign(overrides, {
        'react/jsx-filename-extension': [
          1,
          {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        ],
        'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
        'prettier/prettier': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'off',
      }),
    },
  ],
};
