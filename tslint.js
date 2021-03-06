const path = require('path');

module.exports = {
  "extends": [
    "tslint-config-airbnb",
    "tslint-react"
  ],
  "rulesDirectory": [
    path.join(path.dirname(require.resolve('vrsource-tslint-rules')), 'rules')
  ],
  "rules": {
    "prefer-literal": [
      true,
      "object", // 3.1
      "function", // 7.10
    ],
    "ban": [
      true,
      [
        "Object",
        "prototype",
        "Use functions directly on object instead."
      ] // 3.7
    ],
    "prefer-object-spread": true, // 3.8
    "no-multiline-string": true, // 6.2
    "only-arrow-functions": [
      true,
      "allow-named-functions" // 7.1
    ],
    "no-banned-terms": true, // 7.5
    "use-named-parameter": true, // 7.6
    "no-for-in-array": true, // 11.1
    "no-for-in": true, // 11.1
    "no-string-literal": true, // 12.1, 12.2
    "prefer-case-blocks": true, // 15.5
    "import-name": false,

    /////////////////////////
    // React
    /////////////////////////
    "variable-name": [true, "check-format", "allow-pascal-case"], // 4
    "jsx-boolean-value": false, // 9
    "jsx-curly-spacing": [true, "always"], // 8
    "jsx-no-multiline-js": false,
    "member-ordering": [ // 14
      true,
      {
        "order": [
          "static-field",
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "constructor",
          "static-method",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method"
        ]
      }
    ],
    "max-classes-per-file": [true, 1],
    "max-line-length": false,


    ////////////////////////
    // TSLint
    ///////////////////////
    "conditional-expression-parens": true,
    "adjacent-overload-signatures": true,
    "ban-types": [
      true,
      ["Object", "Use {} instead."],
      ["Array", "Use [] instead."],
      ["String", "Use string instead."],
      ["Number", "Use number instead."]
    ],
    "no-empty-interface": true,
    "no-import-side-effect": [true, {"ignore-module": "(\\.html|\\.css|\\.scss|babel-polyfill)$"}],
    "no-inferrable-types": [
      true,
      "ignore-params",
      "ignore-properties"
    ],
    "no-namespace": [
      true,
      "allow-declarations"
    ],
    "no-non-null-assertion": true,
    "no-reference": true,
    "no-var-requires": true,
    "prefer-for-of": true,
    "typedef-whitespace": [
      true,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      },
      {
        "call-signature": "onespace",
        "index-signature": "onespace",
        "parameter": "onespace",
        "property-declaration": "onespace",
        "variable-declaration": "onespace"
      }
    ],
    "unified-signatures": true,
    "forin": true,
    "import-blacklist": [
      true,
      "rxjs",
      "lodash"
    ],
    "no-arg": true,
    "no-bitwise": true,
    "no-conditional-assignment": true,
    "no-console": {
      "options": [true, "log"],
      "severity": "warning"
    },
    "no-debugger": {
      "options": [true],
      "severity": "warning"
    },
    "no-duplicate-super": true,
    "no-duplicate-variable": true,
    "no-empty": true,
    "no-shadowed-variable": true,
    "no-sparse-arrays": true,
    "no-unsafe-finally": true,
    "no-unused-expression": true,
    "restrict-plus-operands": true,
    "switch-default": true,
    "use-isnan": true,
    "linebreak-style": [true, "LF"],
    "no-require-imports": true,
    "arrow-return-shorthand": true,
    "import-spacing": true,
    "interface-name": [
      true,
      "never-prefix"
    ],
    "newline-before-return": true,
    "new-parens": true,
    "no-angle-bracket-type-assertion": true,
    "no-irregular-whitespace": true,
    "no-parameter-properties": true,
    "no-trailing-whitespace": true,
    "no-unnecessary-initializer": true,
    "no-unnecessary-qualifier": true,
    "number-literal-format": true,
    "one-line": true,
    "prefer-method-signature": true,
    "ter-indent": false,
    "indent": [true, "spaces", 2]
  }
}
