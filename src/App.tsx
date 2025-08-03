import { RouterProvider } from "react-router-dom"
import routerComponent from "@/routes"
import * as Sentry from "@sentry/react"

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

      {process.env.NODE_ENV === "development" && (
        <button
          className="absolute bottom-4 right-4 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white px-3 py-2 rounded"
          onClick={() => {
            throw new Error("테스트 에러 발생")
          }}
        >
          Sentry Test
        </button>
      )}
    </>
  )
}

export default App
