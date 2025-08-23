import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Frame,
  GalleryVerticalEnd,
  Map,
  Settings2,
  SquareTerminal,
} from "lucide-react"

// This is sample data.
const data = {
  user: {
    name: "Duk",
    role: "최고관리자",
    email: "iduk@openflower.io",
    avatar: "https://avatars.githubusercontent.com/u/234324?v=4",
  },
  teams: [
    {
      name: "오픈플라워",
      logo: GalleryVerticalEnd,
      plan: "프로",
    },
    {
      name: "오픈플라워 엔터프라이즈",
      logo: Map,
      plan: "스타트업",
    },
    {
      name: "오픈플라워 커뮤니티",
      logo: AudioWaveform,
      plan: "무료",
    },
  ],
  navMain: [
    {
      title: "대시보드",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "기록",
          url: "#",
        },
        {
          title: "즐겨찾기",
          url: "#",
        },
        {
          title: "설정",
          url: "#",
        },
      ],
    },
    {
      title: "AI",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "AI 대시보드",
          url: "#",
        },
        {
          title: "AI 설정",
          url: "#",
        },
      ],
    },
    {
      title: "문서",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "문서 대시보드",
          url: "#",
        },
        {
          title: "문서 설정",
          url: "#",
        },
      ],
    },
    {
      title: "디자인 시스템",
      url: "#",
      icon: Frame,
      items: [
        {
          title: "컴포넌트",
          url: "#",
        },
        {
          title: "스타일 가이드",
          url: "#",
        },
      ],
    },
    {
      title: "설정",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "프로필",
          url: "#",
        },
        {
          title: "계정 설정",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "A Mock Project",
      url: "#",
      icon: SquareTerminal,
    },
    {
      name: "B Mock Project",
      url: "#",
      icon: Bot,
    },
    {
      name: "C Mock Project",
      url: "#",
      icon: BookOpen,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
