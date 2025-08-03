import { RouterProvider } from "react-router-dom"
import routerComponent from "@/routes"

function App() {
  const router = routerComponent()
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
