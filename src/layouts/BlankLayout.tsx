import { Outlet } from "react-router-dom"

export default function BlankLayout() {
  return (
    <main className="@container/main flex flex-1 flex-col">
      <Outlet />
    </main>
  )
}
