module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    "plugins": [
        "vue"
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": true
            }
        ],
        "keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "curly": [
            "error",
            "all"
        ],
        "vue/html-indent": [
            "error", 4
        ],
        "comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline",
                "functions": "never"
            }
        ],
        "no-trailing-spaces": [
            "error"
        ],
        "no-useless-return": [
            "error"
        ],
        "no-else-return": [
            "error"
        ],
        "padded-blocks": [
            "error",
            "never"
        ],
        "vue/attributes-order": ["error", {
            "order": [
                "DEFINITION",
                "LIST_RENDERING",
                "CONDITIONALS",
                "RENDER_MODIFIERS",
                "GLOBAL",
                ["UNIQUE", "SLOT"],
                "TWO_WAY_BINDING",
                "OTHER_DIRECTIVES",
                "OTHER_ATTR",
                "EVENTS",
                "CONTENT"
            ],
            "alphabetical": false
        }],
        "vue/order-in-components": ["error", {
            "order": [
                "el",
                "name",
                "key",
                "parent",
                "functional",
                ["delimiters", "comments"],
                ["components", "directives", "filters"],
                "extends",
                "mixins",
                ["provide", "inject"],
                "ROUTER_GUARDS",
                "layout",
                "middleware",
                "validate",
                "scrollToTop",
                "transition",
                "loading",
                "inheritAttrs",
                "model",
                ["props", "propsData"],
                "emits",
                "setup",
                "asyncData",
                "data",
                "fetch",
                "head",
                "computed",
                "watch",
                "watchQuery",
                "LIFECYCLE_HOOKS",
                "methods",
                ["template", "render"],
                "renderError"
            ]
        }],
        "vue/component-tags-order": ["error", {
            "order": [ [ "script", "template" ], "style" ]
        }],
        "vue/no-lone-template": ["error", {
            "ignoreAccessible": false
        }],
        "vue/attribute-hyphenation": ["error", "always", {
            "ignore": []
        }],
        "vue/component-definition-name-casing": ["error", "PascalCase"],
        "vue/max-attributes-per-line": ["error", {
            "singleline": {
                "max": 1,
                "allowFirstLine": true
            },
            "multiline": {
                "max": 1,
                "allowFirstLine": false
            }
        }],
        "vue/multiline-html-element-content-newline": ["error", {
            "ignoreWhenEmpty": true,
            "ignores": ["pre", "textarea"],
            "allowEmptyLines": false
        }],
        "vue/mustache-interpolation-spacing": ["error", "always" ],
        "vue/no-multi-spaces": ["error", {
            "ignoreProperties": false
        }],
        "vue/no-spaces-around-equal-signs-in-attribute": ["error"],
        "vue/prop-name-casing": ["error", "snake_case"],
        "vue/v-bind-style": ["error", "shorthand"],
        "vue/v-on-style": ["error", "shorthand"],

    }
}
