import * as Sentry from "@sentry/react"
import { RouterProvider } from "react-router-dom"
import routerComponent from "@/routes"

Sentry.init({
  dsn: "https://2229882f92834d9ea40999fcab5af966@o403043.ingest.us.sentry.io/5265121",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
})

function App() {
  const router = routerComponent()
  return (
    <>
      <RouterProvider router={router} />

      {/* {process.env.NODE_ENV === "development" && ( */}
      <button
        className="absolute right-4 bottom-4 rounded bg-amber-600 px-3 py-2 text-white hover:bg-amber-700 active:bg-amber-800"
        onClick={() => {
          throw new Error("테스트 에러 발생")
        }}
      >
        Sentry Test
      </button>
      {/* )} */}
    </>
  )
}

export default App
