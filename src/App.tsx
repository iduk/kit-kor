import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashboardLayout from "./components/DashboardLayout"
import { routes } from "./routes"

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          {routes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  )
}

export default App
