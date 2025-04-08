import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { files: ["**/*.{js,mjs,cjs,ts,vue}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{js,mjs,cjs,ts,vue}"], plugins: { js }, extends: ["js/recommended"],
    rules: {
    // 要求中缀运算符周围有空格
      "space-infix-ops": "error",
      // 禁止在对象字面量属性中键和值之间有空白
      "key-spacing": "error",
      // 禁止在函数括号内有空格
      "space-before-function-paren": ["error", {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
      }],
      // 强制使用一致的缩进，这里设置为 2 个空格
      "indent": ["error", 2] ,
      // 禁止行尾有多余的空格
      "no-trailing-spaces": "error"
    }
  },
  tseslint.configs.recommended,
  pluginVue.configs["flat/essential"],
  { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
]);