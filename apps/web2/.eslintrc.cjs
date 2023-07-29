module.exports = {
  extends: ["@protowallet/eslint-config/react"],
  env: { browser: true, es2020: true },
  root: true,
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      rules: {
        "react/require-default-props": "off",
        "react/jsx-props-no-spreading": "off",
        "no-param-reassign": "off",
      },
    },
  ],
};
