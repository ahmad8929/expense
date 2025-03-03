// eslint.config.js
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  js.configs.recommended, // Recommended JavaScript rules
  react.configs.recommended, // Recommended React rules
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser // Use browser globals (window, document, etc.)
    },
    plugins: {
      react, // Correct way to add plugins in Flat Config
      "react-hooks": reactHooks
    },
    rules: {
      "no-console": "warn",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error", // Enforce hooks rules
      "react-hooks/exhaustive-deps": "warn" // Check deps in useEffect
    }
  }
];
