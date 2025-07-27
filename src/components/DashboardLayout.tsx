import {
  Home,
  LayoutDashboard,
  Settings,
  Users,
  BarChart3,
  Search,
  Bell,
  User,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components/ui/sidebar';

// 메뉴 아이템들
const items = [
  {
    title: '홈',
    url: '#',
    icon: Home,
  },
  {
    title: '대시보드',
    url: '#',
    icon: LayoutDashboard,
  },
  {
    title: '사용자',
    url: '#',
    icon: Users,
  },
  {
    title: '분석',
    url: '#',
    icon: BarChart3,
  },
  {
    title: '설정',
    url: '#',
    icon: Settings,
  },
];

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg'>
              <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
                <LayoutDashboard className='size-4' />
              </div>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-semibold'>Dashboard</span>
                <span className='truncate text-xs'>관리 시스템</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>메뉴</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <User />
              <span>사용자 프로필</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className='flex h-screen w-full'>
      <AppSidebar />
      <div className='flex flex-1 flex-col overflow-hidden'>
        {/* Header */}
        <header className='flex h-16 shrink-0 items-center gap-2 border-b px-4'>
          <SidebarTrigger className='-ml-1' />
          <div className='flex flex-1 items-center gap-2'>
            <div className='flex-1'>
              <div className='relative max-w-md'>
                <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
                <Input
                  type='search'
                  placeholder='검색...'
                  className='pl-8'
                  aria-label='검색'
                />
              </div>
            </div>
            <Button variant='outline' size='icon'>
              <Bell className='h-4 w-4' />
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className='flex-1 overflow-auto p-4'>
          {children || (
            <div className='space-y-4'>
              <div className='rounded-lg border bg-card text-card-foreground shadow-sm p-6'>
                <h1 className='text-3xl font-bold'>대시보드</h1>
                <p className='text-muted-foreground'>
                  관리 시스템에 오신 것을 환영합니다.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
