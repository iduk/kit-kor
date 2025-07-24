import React, { useState } from 'react';
import {
  Home,
  LayoutDashboard,
  Settings,
  Users,
  BarChart3,
  ChevronDown,
  ChevronRight,
  User,
  X,
  Menu,
  Search,
  Bell,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '@/components/ui/breadcrumb';

const menuItems = [
  { icon: Home, label: '홈', href: '#' },
  {
    icon: LayoutDashboard,
    label: '대시보드',
    href: '#',
    children: [
      { label: '개요', href: '#overview' },
      { label: '통계', href: '#stats' },
      { label: '활동 로그', href: '#activity' },
    ],
  },
  {
    icon: Users,
    label: '사용자',
    href: '#',
    children: [
      { label: '전체 사용자', href: '#users/all' },
      { label: '권한 관리', href: '#users/roles' },
    ],
  },
  { icon: BarChart3, label: '분석', href: '#' },
  { icon: Settings, label: '설정', href: '#' },
];

interface SimpleDashboardLayoutProps {
  children?: React.ReactNode;
}

const SimpleDashboardLayout: React.FC<SimpleDashboardLayoutProps> = ({
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const handleMenuToggle = (label: string) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <div className='flex flex-row w-screen h-screen bg-background'>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className='fixed inset-0 z-40 lg:hidden'
          onClick={() => setSidebarOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setSidebarOpen(false);
            }
          }}
          role='button'
          tabIndex={0}
          aria-label='사이드바 닫기'
        >
          <div className='fixed inset-0 bg-black/50' />
        </div>
      )}

      {/* Sidebar: 데스크탑 + 모바일 */}
      {/* 데스크탑 */}
      <aside className='hidden lg:block fixed inset-y-0 left-0 z-30 w-64 h-screen bg-card border-r'>
        <div className='flex h-full flex-col'>
          {/* ...existing code... */}
          <div className='flex h-16 items-center justify-between px-4 border-b'>
            <div className='flex items-center space-x-2'>
              <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-primary'>
                <LayoutDashboard className='h-4 w-4 text-primary-foreground' />
              </div>
              <span className='text-lg font-semibold text-foreground'>
                Dashboard
              </span>
            </div>
          </div>
          {/* ...navigation/footer... */}
          <nav className='flex-1 space-y-1 p-4 overflow-y-auto'>
            {menuItems.map((item, index) => {
              const hasChildren = !!item.children;
              const isOpen = openMenus[item.label];
              return (
                <div key={item.label}>
                  <button
                    type={hasChildren ? 'button' : undefined}
                    onClick={
                      hasChildren
                        ? () => handleMenuToggle(item.label)
                        : undefined
                    }
                    className={`
                      flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors w-full text-left
                      ${
                        index === 1
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                      }
                    `}
                    aria-expanded={hasChildren ? isOpen : undefined}
                  >
                    <item.icon className='h-5 w-5' />
                    <span>{item.label}</span>
                    {hasChildren && (
                      <span className='ml-auto'>
                        {isOpen ? (
                          <ChevronDown className='h-4 w-4' />
                        ) : (
                          <ChevronRight className='h-4 w-4' />
                        )}
                      </span>
                    )}
                  </button>
                  {/* 하위 메뉴 */}
                  {hasChildren && isOpen && (
                    <ul className='ml-8 mt-1 space-y-1'>
                      {item.children.map(
                        (child: { label: string; href: string }) => (
                          <li key={child.label}>
                            <a
                              href={child.href}
                              className='block rounded px-2 py-1 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors'
                            >
                              {child.label}
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>
          <div className='border-t p-4'>
            <div className='flex items-center space-x-3'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-accent'>
                <User className='h-4 w-4 text-accent-foreground' />
              </div>
              <div>
                <p className='text-sm font-medium text-foreground'>사용자</p>
                <p className='text-xs text-muted-foreground'>
                  user@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* 모바일: 오버레이 + 사이드바 */}
      {sidebarOpen && (
        <aside className='fixed inset-y-0 left-0 z-50 w-64 h-full bg-card border-r shadow-lg lg:hidden animate-in slide-in-from-left duration-200'>
          <div className='flex h-full flex-col'>
            <div className='flex h-16 items-center justify-between px-4 border-b'>
              <div className='flex items-center space-x-2'>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-primary'>
                  <LayoutDashboard className='h-4 w-4 text-primary-foreground' />
                </div>
                <span className='text-lg font-semibold text-foreground'>
                  Dashboard
                </span>
              </div>
              <Button
                variant='ghost'
                size='sm'
                onClick={() => setSidebarOpen(false)}
              >
                <X className='h-4 w-4' />
              </Button>
            </div>
            <nav className='flex-1 space-y-1 p-4 overflow-y-auto'>
              {menuItems.map((item, index) => {
                const hasChildren = !!item.children;
                const isOpen = openMenus[item.label];
                return (
                  <div key={item.label}>
                    <button
                      type={hasChildren ? 'button' : undefined}
                      onClick={
                        hasChildren
                          ? () => handleMenuToggle(item.label)
                          : undefined
                      }
                      className={`
                        flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors w-full text-left
                        ${
                          index === 1
                            ? 'bg-primary text-primary-foreground'
                            : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                        }
                      `}
                      aria-expanded={hasChildren ? isOpen : undefined}
                    >
                      <item.icon className='h-5 w-5' />
                      <span>{item.label}</span>
                      {hasChildren && (
                        <span className='ml-auto'>
                          {isOpen ? (
                            <ChevronDown className='h-4 w-4' />
                          ) : (
                            <ChevronRight className='h-4 w-4' />
                          )}
                        </span>
                      )}
                    </button>
                    {/* 하위 메뉴 */}
                    {hasChildren && isOpen && (
                      <ul className='ml-8 mt-1 space-y-1'>
                        {item.children.map(
                          (child: { label: string; href: string }) => (
                            <li key={child.label}>
                              <a
                                href={child.href}
                                className='block rounded px-2 py-1 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors'
                              >
                                {child.label}
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </div>
                );
              })}
            </nav>
            <div className='border-t p-4'>
              <div className='flex items-center space-x-3'>
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-accent'>
                  <User className='h-4 w-4 text-accent-foreground' />
                </div>
                <div>
                  <p className='text-sm font-medium text-foreground'>사용자</p>
                  <p className='text-xs text-muted-foreground'>
                    user@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* Main content */}
      <div className='flex-1 w-full min-h-screen lg:ml-64 bg-background'>
        {/* Top bar */}
        <header className='flex h-16 items-center border-b bg-card px-4'>
          <div className='flex w-full items-center gap-4'>
            <Button
              variant='ghost'
              size='sm'
              className='lg:hidden'
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className='h-5 w-5' />
            </Button>

            <div className='flex flex-1 items-center gap-4'>
              <div className='relative flex-1'>
                <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
                <Input
                  type='search'
                  placeholder='검색...'
                  className='w-full pl-9'
                  aria-label='검색'
                />
              </div>
              <Button variant='outline' size='sm' className='shrink-0'>
                <Bell className='h-4 w-4' />
              </Button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className='flex-1 overflow-y-auto p-6'>
          {/* Breadcrumb */}
          <BreadcrumbList>
            <BreadcrumbItem>HOME</BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>

          {children || (
            <div className='space-y-6'>
              <div className='rounded-lg border bg-card p-6'>
                <h1 className='text-3xl font-bold text-foreground'>대시보드</h1>
                <p className='mt-2 text-muted-foreground'>
                  관리 시스템에 오신 것을 환영합니다.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default SimpleDashboardLayout;
