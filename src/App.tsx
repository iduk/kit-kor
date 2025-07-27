import SimpleDashboardLayout from './components/SimpleDashboardLayout'

function App() {
  return (
    <SimpleDashboardLayout>
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
    </SimpleDashboardLayout>
  )
}

export default App
