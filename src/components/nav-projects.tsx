import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { ChevronUp, Folder, Forward, type LucideIcon, MoreHorizontal, Trash2 } from "lucide-react"
import React, { useState } from "react"

export function NavProjects({
  projects,
}: {
  projects: {
    name: string
    url: string
    icon: LucideIcon
  }[]
}) {
  const { isMobile } = useSidebar()
  const [showAll, setShowAll] = useState(false)

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>프로젝트</SidebarGroupLabel>
      <SidebarMenu>
        {projects.length === 0 ? (
          <SidebarMenuItem>
            <SidebarMenuButton className="text-sidebar-foreground/70">
              <span>프로젝트가 없습니다.</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ) : (
          <>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href={projects[0].url}>
                  {React.createElement(projects[0].icon)}
                  <span>{projects[0].name}</span>
                </a>
              </SidebarMenuButton>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuAction showOnHover>
                    <MoreHorizontal />
                    <span className="sr-only">More</span>
                  </SidebarMenuAction>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align={isMobile ? "end" : "start"}
                  className="w-48 rounded-lg"
                  side={isMobile ? "bottom" : "right"}
                >
                  <DropdownMenuItem>
                    <Folder className="text-muted-foreground" />
                    <span>프로젝트 보기</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Forward className="text-muted-foreground" />
                    <span>프로젝트 공유</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Trash2 className="text-muted-foreground" />
                    <span>프로젝트 삭제</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
            {projects.length > 1 && (
              <>
                {!showAll && (
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      className="text-sidebar-foreground/70"
                      onClick={() => setShowAll(true)}
                    >
                      <MoreHorizontal className="text-sidebar-foreground/70" />
                      <span>더보기</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )}
                {showAll && (
                  <>
                    {projects.slice(1).map(item => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton asChild>
                          <a className="flex items-center gap-2" href={item.url}>
                            <item.icon />
                            <span>{item.name}</span>
                          </a>
                        </SidebarMenuButton>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <SidebarMenuAction showOnHover>
                              <MoreHorizontal />
                              <span className="sr-only">More</span>
                            </SidebarMenuAction>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align={isMobile ? "end" : "start"}
                            className="w-48 rounded-lg"
                            side={isMobile ? "bottom" : "right"}
                          >
                            <DropdownMenuItem>
                              <Folder className="text-muted-foreground" />
                              <span>프로젝트 보기</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Forward className="text-muted-foreground" />
                              <span>프로젝트 공유</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Trash2 className="text-muted-foreground" />
                              <span>프로젝트 삭제</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </SidebarMenuItem>
                    ))}
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        className="text-sidebar-foreground/70"
                        onClick={() => setShowAll(false)}
                      >
                        <ChevronUp className="text-sidebar-foreground/70" />
                        <span>접기</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </>
                )}
              </>
            )}
          </>
        )}
      </SidebarMenu>
    </SidebarGroup>
  )
}
