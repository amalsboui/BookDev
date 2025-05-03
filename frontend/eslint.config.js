import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,jsx,ts,tsx}"] },
  { 
    languageOptions: { 
      globals: { 
        ...globals.browser,
        React: "readonly" 
      } 
    },
    settings: {  
      react: {
        version: "18.3.1" 
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off"
    }
  },
  pluginReact.configs.flat.recommended
];