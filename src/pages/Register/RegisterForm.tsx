import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { useForm } from "react-hook-form"
import z from "zod"

export default function RegisterForm({ className, ...props }: React.ComponentProps<"div">) {
  // TODO: 공통으로 묶는 방법
  const registerSchema = {
    email: z
      .string()
      .min(1, { message: "이메일을 입력하세요." })
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "유효한 이메일을 입력하세요." }),
    password: z.string().min(6, { message: "비밀번호는 최소 6자리 이상이어야 합니다." }),
    confirmPassword: z
      .string()
      .min(6, { message: "비밀번호 확인은 최소 6자리 이상이어야 합니다." }),
    name: z.string().min(2, { message: "이름은 최소 2자리 이상이어야 합니다." }),
    phone: z.string().min(10, { message: "핸드폰 번호는 최소 10자리 이상이어야 합니다." }),
    gender: z.enum(["male", "female"], { message: "성별을 선택하세요." }),
    signupSource: z.enum(["search", "social", "referral"], { message: "가입 경로를 선택하세요." }),
    occupation: z.enum(
      ["student", "worker", "housewife", "professional", "self-employed", "unemployed", "etc"],
      { message: "직업을 선택하세요." }
    ),
    terms: z.boolean().refine(val => val === true, { message: "약관에 동의해야 합니다." }),
    marketingTerms: z
      .boolean()
      .refine(val => val === true, { message: "마케팅 수신에 동의해야 합니다." }),
  }

  const registerFormSchema = z.object(registerSchema)
  type RegisterFormData = z.infer<typeof registerFormSchema>

  const { register, handleSubmit } = useForm<RegisterFormData>()

  const onSubmit = async (data: RegisterFormData) => {
    try {
      console.log("회원가입 데이터:", data)
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert("회원가입 성공!")
    } catch (error) {
      console.error("회원가입 실패:", error)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">회원가입</CardTitle>
          <CardDescription>회원 정보를 입력하고 가입을 완료하세요</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <Input type="email" {...register("email")} placeholder="이메일" />
                <Input type="password" {...register("password")} placeholder="비밀번호" />
                <Input
                  type="password"
                  {...register("confirmPassword")}
                  placeholder="비밀번호 확인"
                />
                <Input type="text" {...register("name")} placeholder="이름" />
                <Input type="tel" {...register("phone")} placeholder="핸드폰 번호" />

                {/* 성별 선택 */}

                <RadioGroup {...register("gender")} className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female" className="w-full">
                      여성
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male" className="w-full">
                      남성
                    </Label>
                  </div>
                </RadioGroup>

                {/* 가입 경로 선택 */}
                <Select {...register("signupSource")}>
                  <SelectTrigger>
                    <SelectValue placeholder="가입 경로" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="search">인터넷 검색</SelectItem>
                    <SelectItem value="social">소셜미디어</SelectItem>
                    <SelectItem value="referral">지인 소개</SelectItem>
                    <SelectItem value="other">기타</SelectItem>
                  </SelectContent>
                </Select>

                {/* 직업 선택 */}
                <Select {...register("occupation")}>
                  <SelectTrigger>
                    <SelectValue placeholder="직업" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">학생</SelectItem>
                    <SelectItem value="worker">직장인</SelectItem>
                    <SelectItem value="housewife">주부</SelectItem>
                    <SelectItem value="professional">전문직</SelectItem>
                    <SelectItem value="self-employed">자영업</SelectItem>
                    <SelectItem value="unemployed">무직</SelectItem>
                    <SelectItem value="etc">기타</SelectItem>
                  </SelectContent>
                </Select>

                <div>
                  {/* 일단 하드코딩 */}
                  <Textarea content="약관 내용" readOnly className="mb-2" />
                  <div className="flex items-center">
                    <Checkbox {...register("terms")} aria-label="약관 동의" />
                    <Label htmlFor="terms" className="ml-2">
                      약관에 동의합니다.
                    </Label>
                  </div>
                </div>

                <div>
                  <Textarea content="마케팅 수신 동의 내용" readOnly className="mb-2" />
                  <div className="flex items-center">
                    <Checkbox {...register("marketingTerms")} aria-label="마케팅 수신 동의" />
                    <Label htmlFor="marketingTerms" className="ml-2">
                      마케팅 수신에 동의합니다.
                    </Label>
                  </div>
                </div>

                <Button type="submit" title="회원가입">
                  회원가입
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
