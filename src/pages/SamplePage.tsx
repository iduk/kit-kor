import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Bell,
  Calendar as CalendarIcon,
  ChevronDown,
  Download,
  Edit,
  Heart,
  Mail,
  Phone,
  Plus,
  Search,
  Settings,
  Star,
  Trash,
  Upload,
  User,
} from "lucide-react"
import { useState } from "react"

export default function SamplePage() {
  const [progress, setProgress] = useState(33)
  const [sliderValue, setSliderValue] = useState([33])
  const [date, setDate] = useState<Date | undefined>(new Date())

  // 샘플 테이블 데이터
  const tableData = [
    { id: 1, name: "김철수", email: "kim@example.com", role: "관리자", status: "활성" },
    { id: 2, name: "이영희", email: "lee@example.com", role: "사용자", status: "활성" },
    { id: 3, name: "박민수", email: "park@example.com", role: "사용자", status: "비활성" },
    { id: 4, name: "정수진", email: "jung@example.com", role: "편집자", status: "활성" },
  ]

  return (
    <div className="space-y-8 p-6">
      <div className="text-center">
        <h1 className="mb-2 font-bold text-4xl">shadcn/ui 컴포넌트 쇼케이스</h1>
        <p className="text-lg text-muted-foreground">
          모든 shadcn/ui 컴포넌트를 한 번에 확인해보세요
        </p>
      </div>

      {/* 버튼 섹션 */}
      <Card>
        <CardHeader>
          <CardTitle>버튼 (Buttons)</CardTitle>
          <CardDescription>다양한 스타일의 버튼 컴포넌트</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button>기본 버튼</Button>
            <Button variant="secondary">보조 버튼</Button>
            <Button variant="outline">아웃라인</Button>
            <Button variant="ghost">고스트</Button>
            <Button variant="link">링크</Button>
            <Button variant="destructive">삭제</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button size="sm">작은 버튼</Button>
            <Button size="default">기본 크기</Button>
            <Button size="lg">큰 버튼</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button disabled>비활성 버튼</Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              아이콘 포함
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 폼 컴포넌트 섹션 */}
      <Card>
        <CardHeader>
          <CardTitle>폼 컴포넌트 (Form Components)</CardTitle>
          <CardDescription>입력 필드 및 폼 요소들</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" placeholder="이메일을 입력하세요" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">비밀번호</Label>
              <Input id="password" placeholder="비밀번호를 입력하세요" type="password" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">메시지</Label>
            <Textarea id="message" placeholder="메시지를 입력하세요" />
          </div>

          <div className="space-y-2">
            <Label>선택 옵션</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="옵션을 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">옵션 1</SelectItem>
                <SelectItem value="option2">옵션 2</SelectItem>
                <SelectItem value="option3">옵션 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">이용약관에 동의합니다</Label>
            </div>

            <RadioGroup defaultValue="option1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem id="r1" value="option1" />
                <Label htmlFor="r1">옵션 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem id="r2" value="option2" />
                <Label htmlFor="r2">옵션 2</Label>
              </div>
            </RadioGroup>

            <div className="flex items-center space-x-2">
              <Switch id="notifications" />
              <Label htmlFor="notifications">알림 받기</Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 슬라이더 및 프로그레스 섹션 */}
      <Card>
        <CardHeader>
          <CardTitle>슬라이더 & 프로그레스</CardTitle>
          <CardDescription>값 조절 및 진행 상태 표시</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>볼륨: {sliderValue[0]}%</Label>
            <Slider
              className="w-full"
              max={100}
              onValueChange={setSliderValue}
              step={1}
              value={sliderValue}
            />
          </div>

          <div className="space-y-2">
            <Label>진행률: {progress}%</Label>
            <Progress className="w-full" value={progress} />
            <div className="flex gap-2">
              <Button onClick={() => setProgress(Math.max(0, progress - 10))} size="sm">
                -10%
              </Button>
              <Button onClick={() => setProgress(Math.min(100, progress + 10))} size="sm">
                +10%
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 배지 섹션 */}
      <Card>
        <CardHeader>
          <CardTitle>배지 (Badges)</CardTitle>
          <CardDescription>상태 및 라벨 표시</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge>기본</Badge>
            <Badge variant="secondary">보조</Badge>
            <Badge variant="outline">아웃라인</Badge>
            <Badge variant="destructive">경고</Badge>
            <Badge className="bg-green-500">성공</Badge>
            <Badge className="bg-yellow-500">대기</Badge>
          </div>
        </CardContent>
      </Card>

      {/* 테이블 섹션 */}
      <Card>
        <CardHeader>
          <CardTitle>테이블 (Table)</CardTitle>
          <CardDescription>데이터 표시용 테이블</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>사용자 목록</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>이름</TableHead>
                <TableHead>이메일</TableHead>
                <TableHead>역할</TableHead>
                <TableHead>상태</TableHead>
                <TableHead className="text-right">액션</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map(user => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === "활성" ? "default" : "secondary"}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button size="sm" variant="ghost">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* 탭 섹션 */}
      <Card>
        <CardHeader>
          <CardTitle>탭 (Tabs)</CardTitle>
          <CardDescription>콘텐츠 구분을 위한 탭</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs className="w-full" defaultValue="tab1">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="tab1">프로필</TabsTrigger>
              <TabsTrigger value="tab2">설정</TabsTrigger>
              <TabsTrigger value="tab3">알림</TabsTrigger>
            </TabsList>
            <TabsContent className="space-y-4" value="tab1">
              <h3 className="font-semibold text-lg">프로필 정보</h3>
              <p className="text-muted-foreground">
                사용자의 기본 프로필 정보를 관리할 수 있습니다.
              </p>
            </TabsContent>
            <TabsContent className="space-y-4" value="tab2">
              <h3 className="font-semibold text-lg">시스템 설정</h3>
              <p className="text-muted-foreground">
                애플리케이션의 각종 설정을 변경할 수 있습니다.
              </p>
            </TabsContent>
            <TabsContent className="space-y-4" value="tab3">
              <h3 className="font-semibold text-lg">알림 설정</h3>
              <p className="text-muted-foreground">받고 싶은 알림의 종류를 선택할 수 있습니다.</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* 다이얼로그 및 팝오버 섹션 */}
      <Card>
        <CardHeader>
          <CardTitle>다이얼로그 & 팝오버</CardTitle>
          <CardDescription>모달 및 오버레이 컴포넌트</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">사이드 시트 열기</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>사이드 시트</SheetTitle>
                  <SheetDescription>사이드에서 나타나는 시트 컴포넌트입니다.</SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <p>여기에 시트 내용이 들어갑니다.</p>
                </div>
              </SheetContent>
            </Sheet>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">삭제 확인</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>정말 삭제하시겠습니까?</AlertDialogTitle>
                  <AlertDialogDescription>
                    이 작업은 되돌릴 수 없습니다. 데이터가 영구적으로 삭제됩니다.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>취소</AlertDialogCancel>
                  <AlertDialogAction>삭제</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  날짜 선택
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar initialFocus mode="single" onSelect={setDate} selected={date} />
              </PopoverContent>
            </Popover>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  메뉴
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>내 계정</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  프로필
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  설정
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">로그아웃</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>

      {/* 검색 명령어 섹션 */}
      <Card>
        <CardHeader>
          <CardTitle>명령어 팔레트 (Command)</CardTitle>
          <CardDescription>검색 가능한 명령어 인터페이스</CardDescription>
        </CardHeader>
        <CardContent>
          <Command className="rounded-lg border">
            <CommandInput placeholder="명령어를 검색하세요..." />
            <CommandList>
              <CommandEmpty>결과가 없습니다.</CommandEmpty>
              <CommandGroup heading="제안">
                <CommandItem>
                  <Search className="mr-2 h-4 w-4" />
                  <span>검색</span>
                </CommandItem>
                <CommandItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>설정</span>
                </CommandItem>
                <CommandItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>프로필</span>
                </CommandItem>
              </CommandGroup>
              <CommandGroup heading="액션">
                <CommandItem>
                  <Download className="mr-2 h-4 w-4" />
                  <span>다운로드</span>
                </CommandItem>
                <CommandItem>
                  <Upload className="mr-2 h-4 w-4" />
                  <span>업로드</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CardContent>
      </Card>

      {/* 카드 갤러리 섹션 */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              즐겨찾기
            </CardTitle>
            <CardDescription>자주 사용하는 항목들</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              즐겨찾기로 등록된 항목들을 빠르게 접근할 수 있습니다.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" size="sm">
              <Heart className="mr-2 h-4 w-4" />
              추가하기
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-blue-500" />
              알림
            </CardTitle>
            <CardDescription>최근 알림 내역</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">새로운 알림이 3개 있습니다.</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" size="sm" variant="outline">
              모두 보기
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-green-500" />
              메시지
            </CardTitle>
            <CardDescription>읽지 않은 메시지</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">새로운 메시지가 5개 도착했습니다.</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" size="sm" variant="secondary">
              <Phone className="mr-2 h-4 w-4" />
              답장하기
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
