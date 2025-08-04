// import { SquareTerminal, Bot, BookOpen, Frame, Settings2 } from "lucide-react"
import { createHashRouter } from "react-router-dom"
import BlankLayout from "@/layouts/BlankLayout"
import DefaultLayout from "@/layouts/DefaultLayout"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"

export default function routerComponent() {
  return createHashRouter([
    {
      element: <BlankLayout />,
      children: [
        {
          path: "*",
          element: <NotFound />,
        },
        {
          path: "/login",
          element: <div>Login Page</div>,
        },
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
