/* eslint-disable react-refresh/only-export-components */
import SamplePage from "@/pages/SamplePage"
import { LayoutDashboard, Settings, Users, BarChart3, SwatchBook } from "lucide-react"

// 대시보드 기본 페이지 컴포넌트
const DashboardPage = () => (
  <div className="space-y-6">
    <div className="bg-card p-6 rounded-lg border">
      <h1 className="text-2xl font-bold text-foreground">대시보드</h1>
      <p className="text-muted-foreground mt-2">여기가 메인 콘텐츠 영역입니다.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-card p-4 rounded-lg border hover:shadow-md transition-shadow">
        <h3 className="font-semibold text-foreground">카드 1</h3>
        <p className="text-sm text-muted-foreground mt-1">첫 번째 카드</p>
      </div>
      <div className="bg-card p-4 rounded-lg border hover:shadow-md transition-shadow">
        <h3 className="font-semibold text-foreground">카드 2</h3>
        <p className="text-sm text-muted-foreground mt-1">두 번째 카드</p>
      </div>
      <div className="bg-card p-4 rounded-lg border hover:shadow-md transition-shadow">
        <h3 className="font-semibold text-foreground">카드 3</h3>
        <p className="text-sm text-muted-foreground mt-1">세 번째 카드</p>
      </div>
    </div>
  </div>
)

const UsersPage = () => (
  <div className="space-y-6">
    <div className="bg-card p-6 rounded-lg border">
      <h1 className="text-2xl font-bold text-foreground">사용자 관리</h1>
      <p className="text-muted-foreground mt-2">사용자 목록과 권한을 관리합니다.</p>
    </div>
  </div>
)

const AnalyticsPage = () => (
  <div className="space-y-6">
    <div className="bg-card p-6 rounded-lg border">
      <h1 className="text-2xl font-bold text-foreground">분석</h1>
      <p className="text-muted-foreground mt-2">데이터 분석과 통계를 확인합니다.</p>
    </div>
  </div>
)

const SettingsPage = () => (
  <div className="space-y-6">
    <div className="bg-card p-6 rounded-lg border">
      <h1 className="text-2xl font-bold text-foreground">설정</h1>
      <p className="text-muted-foreground mt-2">시스템 설정을 관리합니다.</p>
    </div>
  </div>
)

// 라우트 정의
export const routes = [
  {
    path: "/dashboard",
    element: <DashboardPage />,
    label: "대시보드",
    icon: LayoutDashboard,
  },
  {
    path: "/users",
    element: <UsersPage />,
    label: "사용자",
    icon: Users,
    children: [
      { path: "/users/all", label: "전체 사용자" },
      { path: "/users/roles", label: "권한 관리" },
    ],
  },
  {
    path: "/analytics",
    element: <AnalyticsPage />,
    label: "분석",
    icon: BarChart3,
    children: [
      { path: "/analytics/overview", label: "개요" },
      { path: "/analytics/stats", label: "통계" },
      { path: "/analytics/activity", label: "활동 로그" },
    ],
  },
  {
    path: "/settings",
    element: <SettingsPage />,
    label: "설정",
    icon: Settings,
  },
  {
    path: "/sample",
    element: <SamplePage />,
    label: "샘플페이지",
    icon: SwatchBook,
  },
]
