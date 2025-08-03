import BlankLayout from "@/layouts/BlankLayout"
import DefaultLayout from "@/layouts/DefaultLayout"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"
// import { SquareTerminal, Bot, BookOpen, Frame, Settings2 } from "lucide-react"
import { createHashRouter } from "react-router-dom"

// default 레이아웃
// export const routes = [
//   {
//     path: "/",
//     element: <Home />,
//     label: "대시보드",
//     icon: SquareTerminal,
//     children: [
//       { path: "/records", label: "기록" },
//       { path: "/favorites", label: "즐겨찾기" },
//       { path: "/settings", label: "설정" },
//     ],
//   },
//   {
//     path: "/ai",
//     label: "AI",
//     icon: Bot,
//     children: [
//       { path: "/ai/dashboard", label: "AI 대시보드" },
//       { path: "/ai/settings", label: "AI 설정" },
//     ],
//   },
//   {
//     path: "/docs",
//     label: "문서",
//     icon: BookOpen,
//     children: [
//       { path: "/docs/dashboard", label: "문서 대시보드" },
//       { path: "/docs/settings", label: "문서 설정" },
//     ],
//   },
//   {
//     path: "/design-system",
//     label: "디자인 시스템",
//     icon: Frame,
//     children: [
//       { path: "/design-system/components", label: "컴포넌트" },
//       { path: "/design-system/style-guide", label: "스타일 가이드" },
//     ],
//   },
//   {
//     path: "/settings",
//     label: "설정",
//     icon: Settings2,
//     children: [
//       { path: "/settings/profile", label: "프로필" },
//       { path: "/settings/account", label: "계정 설정" },
//     ],
//   },
// ]

export default function routerComponent() {
  return createHashRouter([
    {
      element: <BlankLayout />,
      children: [
        {
          path: "*",
          element: <NotFound />,
        },
        // {
        //   path: "/login",
        //   element: <div>Login Page</div>,
        // },
      ],
    },
    {
      element: <DefaultLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
          id: "home",
          children: [
            {
              id: "records",
              path: "/records",
              element: <div>Records Page</div>,
            },
            {
              id: "favorites",
              path: "/favorites",
              element: <div>Favorites Page</div>,
            },
            {
              id: "settings",
              path: "/settings",
              element: <div>Settings Page</div>,
            },
          ],
        },
        {
          path: "/ai",
          children: [
            {
              id: "ai-dashboard",
              path: "/ai/dashboard",
              element: <div>AI Dashboard Page</div>,
            },
            {
              id: "ai-settings",
              path: "/ai/settings",
              element: <div>AI Settings Page</div>,
            },
          ],
        },
        {
          path: "/docs",
          children: [
            {
              id: "docs-dashboard",
              path: "/docs/dashboard",
              element: <div>Docs Dashboard Page</div>,
            },
            {
              id: "docs-settings",
              path: "/docs/settings",
              element: <div>Docs Settings Page</div>,
            },
          ],
        },
        {
          path: "/design-system",

          children: [
            {
              id: "design-system-components",
              path: "/design-system/components",
              element: <div>Design System Components Page</div>,
            },
            {
              id: "design-system-style-guide",
              path: "/design-system/style-guide",
              element: <div>Design System Style Guide Page</div>,
            },
          ],
        },
        {
          path: "/settings",
          children: [
            {
              id: "settings-profile",
              path: "/settings/profile",
              element: <div>Settings Profile Page</div>,
            },
            {
              id: "settings-account",
              path: "/settings/account",
              element: <div>Settings Account Page</div>,
            },
          ],
        },
      ],
    },
  ])
}
