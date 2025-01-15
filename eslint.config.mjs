/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import nextPlugin from "@next/eslint-plugin-next"
import tseslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import tailwind from "eslint-plugin-tailwindcss"

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  {
    ignores: [".next"],
  },
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
    files: ["**/*.{mjs,ts,tsx}"],
  },

  ...tailwind.configs["flat/recommended"],
  {
    settings: {
      tailwindcss: {
        callees: ["cn"],
      },
    },
  },

  {
    plugins: {
      "@typescript-eslint": tseslint,
    },

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "tsconfig.json",
      },
    },

    rules: {
      ...tseslint.configs["recommended-type-checked"].rules,
      ...tseslint.configs["stylistic-type-checked"].rules,

      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "off",
      "tailwindcss/no-custom-classname": "off",
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",

      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],

      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      "@typescript-eslint/require-await": "off",

      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
]

export default eslintConfig
