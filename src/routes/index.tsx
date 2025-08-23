/* eslint-disable @typescript-eslint/no-explicit-any */
import BlankLayout from "@/layouts/BlankLayout"
import LoginPage from "@/pages/Login"
import RegisterPage from "@/pages/Register"
import { createBrowserRouter } from "react-router-dom"

// 경로 패턴
const pages = import.meta.glob("../pages/**/*.tsx")
const layouts = import.meta.glob("../layouts/**/*.tsx")

// lazyload: 지정한 맵에서 키로 꺼내 lazy 반환
const getLazy = (map: Record<string, () => Promise<any>>, key: string) => async () => {
  const mod = await map[key]()
  return { Component: mod.default }
}

export default function routerComponent() {
  return createBrowserRouter([
    {
      Component: BlankLayout,
      children: [
        {
          id: "login",
          path: "/login",
          Component: LoginPage,
        },
        {
          id: "register",
          path: "/register",
          Component: RegisterPage,
        },
      ],
    },
    {
      id: "home",
      path: "/",
      lazy: getLazy(layouts, "../layouts/DefaultLayout.tsx"),
      children: [
        {
          index: true,
          lazy: getLazy(pages, "../pages/Home.tsx"),
        },
        {
          id: "records",
          path: "records",
          lazy: getLazy(pages, "../pages/Records.tsx"),
        },
        {
          id: "favorites",
          path: "favorites",
          lazy: getLazy(pages, "../pages/Favorites.tsx"),
        },
        {
          id: "settings",
          path: "settings",
          lazy: getLazy(pages, "../pages/Settings.tsx"),
        },
        {
          path: "ai",
          children: [
            {
              id: "ai-dashboard",
              path: "dashboard",
              lazy: getLazy(pages, "../pages/AIDashboard.tsx"),
            },
            {
              id: "ai-settings",
              path: "settings",
              lazy: getLazy(pages, "../pages/AISettings.tsx"),
            },
          ],
        },
        {
          path: "docs",
          children: [
            {
              id: "docs-dashboard",
              path: "dashboard",
              lazy: getLazy(pages, "../pages/DocsDashboard.tsx"),
            },
            {
              id: "docs-settings",
              path: "settings",
              lazy: getLazy(pages, "../pages/DocsSettings.tsx"),
            },
          ],
        },
        {
          path: "design-system",
          children: [
            {
              id: "design-system-components",
              path: "components",
              lazy: getLazy(pages, "../pages/DesignSystemComponents.tsx"),
            },
            {
              id: "design-system-style-guide",
              path: "style-guide",
              lazy: getLazy(pages, "../pages/DesignSystemStyleGuide.tsx"),
            },
          ],
        },
        {
          path: "settings",
          children: [
            {
              id: "settings-profile",
              path: "profile",
              lazy: getLazy(pages, "../pages/SettingsProfile.tsx"),
            },
            {
              id: "settings-account",
              path: "account",
              lazy: getLazy(pages, "../pages/SettingsAccount.tsx"),
            },
          ],
        },
        {
          id: "not-found",
          path: "*",
          lazy: getLazy(pages, "../pages/NotFound.tsx"),
        },
      ],
    },
  ])
}
