import js from "@eslint/js"
import { globalIgnores } from "eslint/config"
import eslintConfigPrettier from "eslint-config-prettier"
import jsxA11y from "eslint-plugin-jsx-a11y"
import prettier from "eslint-plugin-prettier"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import globals from "globals"
import tseslint from "typescript-eslint"

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      eslintConfigPrettier,
    ],
    plugins: {
      react,
      "jsx-a11y": jsxA11y,
      prettier,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // Prettier 포맷팅 규칙
      "prettier/prettier": "warn",
      // React a11y 접근성 규칙들 (필수 규칙만 적용)
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/no-static-element-interactions": "warn", // 정적 요소에 대한 상호작용 규칙
      "jsx-a11y/click-events-have-key-events": "warn", // 클릭 이벤트가 있는 요소에 키보드 이벤트도 필요
      "jsx-a11y/no-noninteractive-element-interactions": "warn", // 비상호작용 요소에 이벤트 핸들러 사용 금지
      "jsx-a11y/label-has-associated-control": "warn", // label 요소와 관련된 컨트롤이 있어야 함

      // React 기본 규칙들
      "react/jsx-uses-react": "off", // React 17+ 자동 JSX 변환
      "react/react-in-jsx-scope": "off", // React 17+ 자동 JSX 변환
      "react/jsx-uses-vars": "error",
      "react/prop-types": "off", // TypeScript 사용시 불필요
      "react/display-name": "warn",

      // React Refresh 규칙 조정
      // "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
])
