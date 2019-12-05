module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native",
        "import",
        "jsx-a11y"
    ],
    /**
     * "off" 或 0 - 关闭规则
     * "warn" 或 1 - 开启规则，使用警告级别的错误：warn
     * "error" 或 2 - 开启规则，使用错误级别的错误：error
     */
    // 规则配置
    "rules": {
        //
        // Possible Errors
        //
        // The following rules point out areas where you might have made mistakes.
        //
        "comma-dangle": [0, "always-multiline"], // disallow or enforce trailing commas
        "no-cond-assign": 2, // disallow assignment in conditional expressions
        "no-console": 0, // disallow use of console
        "no-constant-condition": 2, // disallow use of constant expressions in conditions
        "no-control-regex": 2, // disallow control characters in regular expressions
        "no-debugger": 1, // disallow use of debugger
        "no-dupe-args": 2, // disallow duplicate arguments in functions
        "no-dupe-keys": 2, // disallow duplicate keys when creating object literals
        "no-duplicate-case": 2, // disallow a duplicate case label.
        "no-empty": 2, // disallow empty block statements
        "no-empty-character-class": 2, // disallow the use of empty character classes in regular expressions
        "no-ex-assign": 2, // disallow assigning to the exception in a catch block
        "no-extra-boolean-cast": 2, // disallow double-negation boolean casts in a boolean context
        "no-extra-parens": [0, "all", { "conditionalAssign": false }], // disallow unnecessary parentheses
        "no-extra-semi": 2, // disallow unnecessary semicolons
        "no-func-assign": 2, // disallow overwriting functions written as function declarations
        "no-inner-declarations": 2, // disallow function or variable declarations in nested blocks
        "no-invalid-regexp": 2, // disallow invalid regular expression strings in the RegExp constructor
        "no-irregular-whitespace": 2, // disallow irregular whitespace outside of strings and comments
        "no-negated-in-lhs": 2, // disallow negation of the left operand of an in expression
        "no-obj-calls": 2, // disallow the use of object properties of the global object (Math and JSON) as functions
        "no-regex-spaces": 2, // disallow multiple spaces in a regular expression literal
        "no-sparse-arrays": 2, // disallow sparse arrays
        "no-unexpected-multiline": 2, // Avoid code that looks like two expressions but is actually one
        "no-unreachable": 2, // disallow unreachable statements after a return, throw, continue, or break statement
        "use-isnan": 2, // disallow comparisons with the value NaN
        "valid-jsdoc": 2, // Ensure JSDoc comments are valid
        "valid-typeof": 2, // Ensure that the results of typeof are compared against a valid string

        //
        // Best Practices
        //
        // These are rules designed to prevent you from making mistakes.
        // They either prescribe a better way of doing something or help you avoid footguns.
        //
        "block-scoped-var": 0, // treat var statements as if they were block scoped (off by default). 0: deep destructuring is not compatible https://github.com/eslint/eslint/issues/1863
        "capitalized-comments": [0, "never"], // disable capitalize first letter in comment.
        "complexity": 0, // specify the maximum cyclomatic complexity allowed in a program (off by default)
        "consistent-return": 2, // require return statements to either always or never specify values
        "curly": [2, "all"], // specify curly brace conventions for all control statements
        "default-case": 2, // require default case in switch statements (off by default)
        "dot-notation": 2, // encourages use of dot notation whenever possible
        "eqeqeq": 2, // require the use of === and !==
        "guard-for-in": 2, // make sure for-in loops have an if statement (off by default)
        "no-alert": 1, // disallow the use of alert, confirm, and prompt
        "no-caller": 2, // disallow use of arguments.caller or arguments.callee
        "no-div-regex": 2, // disallow division operators explicitly at beginning of regular expression (off by default)
        "no-else-return": 2, // disallow else after a return in an if (off by default)
        "no-labels": 2, // disallow use of labels for anything other then loops and switches
        "no-eq-null": 2, // disallow comparisons to null without a type-checking operator (off by default)
        "no-eval": 2, // disallow use of eval()
        "no-extend-native": 2, // disallow adding to native types
        "no-extra-bind": 0, // disallow unnecessary function binding
        "no-fallthrough": 2, // disallow fallthrough of case statements
        "no-floating-decimal": 2, // disallow the use of leading or trailing decimal points in numeric literals (off by default)
        "no-implied-eval": 2, // disallow use of eval()-like methods
        "no-iterator": 2, // disallow usage of __iterator__ property
        "no-lone-blocks": 2, // disallow unnecessary nested blocks
        "no-loop-func": 2, // disallow creation of functions within loops
        "no-multi-spaces": [2, { exceptions: { "VariableDeclarator": true } }], // disallow use of multiple spaces
        "no-multi-str": 0, // disallow use of multiline strings
        "no-native-reassign": 2, // disallow reassignments of native objects
        "no-new": 2, // disallow use of new operator when not part of the assignment or comparison
        "no-new-func": 2, // disallow use of new operator for Function object
        "no-new-wrappers": 2, // disallows creating new instances of String,Number, and Boolean
        "no-octal": 2, // disallow use of octal literals
        "no-octal-escape": 2, // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
        "no-param-reassign": 2, // disallow reassignment of function parameters (off by default)
        "no-process-env": 2, // disallow use of process.env (off by default)
        "no-proto": 2, // disallow usage of __proto__ property
        "no-redeclare": 2, // disallow declaring the same variable more then once
        "no-return-assign": 2, // disallow use of assignment in return statement
        "no-script-url": 2, // disallow use of javascript: urls.
        "no-self-compare": 2, // disallow comparisons where both sides are exactly the same (off by default)
        "no-sequences": 2, // disallow use of comma operator
        "no-throw-literal": 2, // restrict what can be thrown as an exception (off by default)
        "no-unused-expressions": 2, // disallow usage of expressions in statement position
        "no-void": 2, // disallow use of void operator (off by default)
        "no-warning-comments": [0, { "terms": ["todo", "fixme"], "location": "start" }], // disallow usage of configurable warning terms in comments": 2, // e.g.
        "no-with": 2, // disallow use of the with statement
        "radix": 2, // require use of the second argument for parseInt() (off by default)
        "vars-on-top": 0, // requires to declare all vars on top of their containing scope (off by default)
        "wrap-iife": 2, // require immediate function invocation to be wrapped in parentheses (off by default)
        "yoda": 2, // require or disallow Yoda conditions

        //
        // Strict Mode
        //
        // These rules relate to using strict mode.
        //
        "strict": 0, // controls location of Use Strict Directives. 0: required by `babel-eslint`

        //
        // Variables
        //
        // These rules have to do with variable declarations.
        //
        "no-catch-shadow": 2, // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
        "no-delete-var": 2, // disallow deletion of variables
        "no-label-var": 2, // disallow labels that share a name with a variable
        "no-shadow": 2, // disallow declaration of variables already declared in the outer scope
        "no-shadow-restricted-names": 2, // disallow shadowing of names such as arguments
        "no-undef": 2, // disallow use of undeclared variables unless mentioned in a /*global */ block
        "no-undef-init": 2, // disallow use of undefined when initializing variables
        "no-undefined": 0, // disallow use of undefined variable (off by default)
        "no-unused-vars": 2, // disallow declaration of variables that are not used in the code
        "no-use-before-define": [2, { "functions": false, "classes": false }], // disallow use of variables before they are defined

        //
        // Stylistic Issues
        //
        // These rules are purely matters of style and are quite subjective.
        //
        "array-bracket-spacing": [2, "never"], // enforce spacing inside array brackets
        "brace-style": [2, "1tbs", { "allowSingleLine": true }], // enforce one true brace style (off by default)
        "camelcase": [2, { properties: "never" }], // require camel case names
        "comma-spacing": [1, { "before": false, "after": true }], // enforce spacing before and after comma
        "comma-style": [1, "last"], // enforce one true comma style (off by default)
        "computed-property-spacing": [2, "never"], // require or disallow padding inside computed properties
        "consistent-this": [1, "_this"], // enforces consistent naming when capturing the current execution context (off by default)
        "eol-last": 2, // enforce newline at the end of file, with no multiple empty lines
        "func-names": 0, // require function expressions to have a name (off by default)
        "func-style": 0, // enforces use of function declarations or expressions (off by default)
        "function-paren-newline": [2, "consistent"], // enforces consistent line breaks inside parentheses of function parameters or arguments
        "indent": [2, 4], // this option sets a specific tab width for your code (off by default)
        "key-spacing": [0, { "align": "value", "mode": "minimum", "beforeColon": false, "afterColon": true }], // enforces spacing between keys and values in object literal properties
        "keyword-spacing": 0, // enforce spacing before and after keywords
        "linebreak-style": [2, "unix"], // disallow mixed 'LF' and 'CRLF' as linebreaks
        "max-nested-callbacks": [1, 3], // specify the maximum depth callbacks can be nested (off by default)
        "new-cap": [1, { newIsCap: true, capIsNew: false }], // require a capital letter for constructors
        "new-parens": 1, // disallow the omission of parentheses when invoking a constructor with no arguments
        "newline-after-var": 0, // allow/disallow an empty newline after var statement (off by default)
        "no-array-constructor": 1, // disallow use of the Array constructor
        "no-inline-comments": 0, // disallow comments inline after code (off by default)
        "no-lonely-if": 1, // disallow if as the only statement in an else block (off by default)
        "no-mixed-spaces-and-tabs": 1, // disallow mixed spaces and tabs for indentation
        "no-multiple-empty-lines": [2, { "max": 2 }], // disallow multiple empty lines (off by default)
        "no-nested-ternary": 0, // disallow nested ternary expressions (off by default)
        "no-new-object": 1, // disallow use of the Object constructor
        "no-spaced-func": 1, // disallow space between function identifier and application
        "no-ternary": 0, // disallow the use of ternary operators (off by default)
        "no-trailing-spaces": 2, // disallow trailing whitespace at the end of lines
        "no-underscore-dangle": [0, { "allowAfterThis": true }], // disallow dangling underscores in identifiers
        "object-curly-spacing": [2, "never"], // require or disallow padding inside curly braces()
        "object-curly-newline": [0, { "ObjectExpression": { "multiline": true, "minProperties": 2, "consistent": true }, "ImportDeclaration": "never", "ExportDeclaration": "never" }], // requires line breaks if there are line breaks inside properties or between properties
        "one-var": [1, "never"], // allow just one var statement per function (off by default)
        "operator-assignment": [1, "never"], // require assignment operator shorthand where possible or prohibit it entirely (off by default)
        "padded-blocks": [1, "never"], // enforce padding within blocks (off by default)
        "quote-props": [1, "as-needed"], // require quotes around object literal property names (off by default)
        "quotes": [2, "single"], // specify whether double or single quotes should be used
        "semi": [2, "always"], // require or disallow use of semicolons instead of ASI
        "semi-spacing": [1, { "before": false, "after": true }], // enforce spacing before and after semicolons
        "sort-vars": 0, // sort variables within the same declaration block (off by default)
        "sort-imports": 0, // This rule checks all import declarations and verifies that all imports are first sorted by the used member syntax and then alphabetically by the first member or alias name (off).
        "space-before-blocks": [1, "always"], // require or disallow space before blocks (off by default)
        "space-before-function-paren": [0, { "anonymous": "never", "named": "never" }], // require or disallow space before function opening parenthesis (off by default)
        "space-in-parens": [1, "never"], // require or disallow spaces inside parentheses (off by default)
        "space-infix-ops": [2], // require spaces around operators
        "space-unary-ops": [1, { "words": true, "nonwords": false }], // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
        "spaced-comment": [2], // require or disallow a space immediately following the // or /* in a comment
        "wrap-regex": 0, // require regex literals to be wrapped in parentheses (off by default)

        //
        // ECMAScript 6
        //
        // These rules are only relevant to ES6 environments.
        //
        "arrow-body-style": 2, // require braces in arrow function body
        "arrow-parens": 2, // require parens in arrow function arguments
        "arrow-spacing": 2, // require space before/after arrow function's arrow
        "constructor-super": 2, // verify calls of super() in constructors
        "generator-star-spacing": 2, // enforce spacing around the * in generator functions
        "no-class-assign": 2, // disallow modifying variables of class declarations
        "no-confusing-arrow": 2, // disallow arrow functions where they could be confused with comparisons
        "no-const-assign": 2, // disallow modifying variables that are declared using const
        "no-dupe-class-members": 2, // disallow duplicate name in class members
        "no-new-symbol": 2, // disallow use of the new operator with the Symbol object
        "no-this-before-super": 2, // disallow use of this/super before calling super() in constructors
        "no-useless-constructor": 2, // disallow unnecessary constructor
        "no-var": 2, // require let or const instead of var
        "object-shorthand": 0, // require method and property shorthand syntax for object literals
        "prefer-arrow-callback": 0, // NOT suggest using arrow functions as callbacks
        "prefer-const": 2, // suggest using const declaration for variables that are never modified after declared
        // "prefer-reflect": 2, // suggest using Reflect methods where applicable
        // "prefer-rest-params": 2, // suggest using the rest parameters instead of arguments
        // "prefer-spread": 2, // suggest using the spread operator instead of .apply()
        // "prefer-template": 2, // suggest using template literals instead of strings concatenation
        "require-yield": 2, // disallow generator functions that do not have yield
        "template-curly-spacing": 2, // enforce spacing around embedded expressions of template strings
        "yield-star-spacing": 2, // enforce spacing around the * in yield* expressions

        // eslint-plugin-import
        "import/newline-after-import": ["error", { "count": 1 }],
        "import/order": [
            "error",
            {
                "newlines-between": "always-and-inside-groups"
            }
        ],

        // React Plugin
        // The following rules are made available via `eslint-plugin-react`.

        "react/display-name": 0,
        "react/jsx-boolean-value": 0,
        "react/jsx-no-comment-textnodes": 1,
        "react/jsx-no-duplicate-props": 2,
        "react/jsx-no-undef": 2,
        "react/jsx-sort-props": 0,
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/no-did-mount-set-state": 1,
        "react/no-did-update-set-state": 1,
        "react/no-multi-comp": 0,
        "react/no-string-refs": 1,
        "react/no-unknown-property": 0,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 1,
        "react/self-closing-comp": 1,
        "react/wrap-multilines": 0,

        // React-Native Plugin
        // The following rules are made available via `eslint-plugin-react-native`

        "react-native/no-color-literals": 0,
        "react-native/no-unused-styles": 0,
        "react-native/no-inline-styles": 0,
        "react-native/split-platform-components": 2
    }
};
