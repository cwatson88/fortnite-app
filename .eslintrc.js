module.exports = {
    extends: ["airbnb-base","plugin:react/recommended"],
    plugins: [ "react"],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "es6":     true,
        "browser": true,
        "node":    true
    },
    rules: {
        "max-len": [1, 120, 2, {ignoreComments: true}]
      }
};