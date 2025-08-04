import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

export function AnimationDemo() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-8">
      <h1 className="mb-8 text-center font-bold text-3xl">tw-animate-css 활용 예제</h1>

      {/* 1. Accordion 애니메이션 (accordion-down/up) */}
      <section>
        <h2 className="mb-4 font-semibold text-2xl">1. Accordion 애니메이션</h2>
        <Accordion className="w-full" collapsible type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>accordion-down/up 애니메이션이란?</AccordionTrigger>
            <AccordionContent>
              tw-animate-css의 accordion-down/up 클래스를 사용하여 부드러운 높이 변화 애니메이션을
              제공합니다. Radix UI의 data-state 속성과 연동되어 자동으로 작동합니다.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>어떻게 작동하나요?</AccordionTrigger>
            <AccordionContent>
              data-[state=open]:animate-accordion-down과 data-[state=closed]:animate-accordion-up
              클래스가 상태 변화에 따라 자동으로 적용됩니다.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>다른 예제도 있나요?</AccordionTrigger>
            <AccordionContent>
              네! 아래에서 Dialog, 커스텀 애니메이션 등 다양한 예제를 확인하실 수 있습니다.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* 2. Dialog 애니메이션 (fade-in, zoom-in) */}
      <section>
        <h2 className="mb-4 font-semibold text-2xl">2. Dialog 애니메이션</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Dialog 열기 (fade-in + zoom-in)</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>애니메이션 Dialog</DialogTitle>
              <DialogDescription>
                이 Dialog는 tw-animate-css의 fade-in과 zoom-in 애니메이션을 사용합니다. 부드럽게
                나타나고 사라지는 효과를 확인해보세요!
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <p className="text-muted-foreground text-sm">
                Dialog 컴포넌트는 다음 애니메이션 클래스들을 사용합니다:
              </p>
              <ul className="ml-4 space-y-1 text-sm">
                <li>• data-[state=open]:animate-in</li>
                <li>• data-[state=open]:fade-in-0</li>
                <li>• data-[state=open]:zoom-in-95</li>
                <li>• data-[state=closed]:animate-out</li>
                <li>• data-[state=closed]:fade-out-0</li>
                <li>• data-[state=closed]:zoom-out-95</li>
              </ul>
            </div>
          </DialogContent>
        </Dialog>
      </section>

      {/* 3. 커스텀 Enter/Exit 애니메이션 */}
      <section>
        <h2 className="mb-4 font-semibold text-2xl">3. 커스텀 Enter/Exit 애니메이션</h2>
        <div className="space-y-4">
          <Button onClick={() => setIsVisible(!isVisible)} variant="outline">
            {isVisible ? "숨기기" : "보이기"} (slide + fade)
          </Button>

          {isVisible && (
            <div className="slide-in-from-left-8 fade-in-0 animate-in rounded-lg border border-blue-200 bg-blue-50 p-6 duration-500">
              <h3 className="mb-2 font-semibold text-blue-900">왼쪽에서 슬라이드 + 페이드인!</h3>
              <p className="text-blue-800">
                이 박스는 다음 클래스들을 사용합니다:
                <br />
                <code className="rounded bg-blue-100 px-2 py-1 text-sm">
                  animate-in slide-in-from-left-8 fade-in-0 duration-500
                </code>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 4. 다양한 애니메이션 효과들 */}
      <section>
        <h2 className="mb-4 font-semibold text-2xl">4. 다양한 애니메이션 효과</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Zoom 효과 */}
          <div className="zoom-in-50 fade-in-0 animate-in rounded-lg border border-green-200 bg-green-50 p-4 delay-100 duration-700">
            <h4 className="mb-2 font-semibold text-green-900">Zoom In 효과</h4>
            <p className="text-green-800 text-sm">zoom-in-50 + fade-in + delay-100</p>
          </div>

          {/* Slide from top */}
          <div className="slide-in-from-top-4 fade-in-0 animate-in rounded-lg border border-purple-200 bg-purple-50 p-4 delay-200 duration-700">
            <h4 className="mb-2 font-semibold text-purple-900">Top Slide 효과</h4>
            <p className="text-purple-800 text-sm">slide-in-from-top-4 + fade-in + delay-200</p>
          </div>

          {/* Slide from right */}
          <div className="slide-in-from-right-8 fade-in-0 animate-in rounded-lg border border-orange-200 bg-orange-50 p-4 delay-300 duration-700">
            <h4 className="mb-2 font-semibold text-orange-900">Right Slide 효과</h4>
            <p className="text-orange-800 text-sm">slide-in-from-right-8 + fade-in + delay-300</p>
          </div>

          {/* Spin 효과 */}
          <div className="spin-in-6 fade-in-0 animate-in rounded-lg border border-pink-200 bg-pink-50 p-4 delay-400 duration-700">
            <h4 className="mb-2 font-semibold text-pink-900">Spin 효과</h4>
            <p className="text-pink-800 text-sm">spin-in-6 + fade-in + delay-400</p>
          </div>
        </div>
      </section>

      {/* 5. 코드 예제 */}
      <section>
        <h2 className="mb-4 font-semibold text-2xl">5. 주요 클래스들</h2>
        <div className="space-y-4 rounded-lg bg-gray-50 p-6">
          <div>
            <h4 className="mb-2 font-semibold">기본 애니메이션 클래스:</h4>
            <ul className="space-y-1 font-mono text-sm">
              <li>
                • <code>animate-in</code> / <code>animate-out</code> - 기본 enter/exit
              </li>
              <li>
                • <code>fade-in</code> / <code>fade-out</code> - 투명도 변화
              </li>
              <li>
                • <code>zoom-in-95</code> / <code>zoom-out-105</code> - 크기 변화
              </li>
              <li>
                • <code>slide-in-from-top-4</code> - 위에서 슬라이드
              </li>
              <li>
                • <code>slide-in-from-left-8</code> - 왼쪽에서 슬라이드
              </li>
              <li>
                • <code>spin-in-6</code> - 회전하며 나타남
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">타이밍 제어:</h4>
            <ul className="space-y-1 font-mono text-sm">
              <li>
                • <code>duration-300</code> - 애니메이션 지속시간
              </li>
              <li>
                • <code>delay-150</code> - 애니메이션 지연
              </li>
              <li>
                • <code>ease-in-out</code> - 타이밍 함수
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">shadcn/ui 전용:</h4>
            <ul className="space-y-1 font-mono text-sm">
              <li>
                • <code>animate-accordion-down</code> - 아코디언 펼치기
              </li>
              <li>
                • <code>animate-accordion-up</code> - 아코디언 접기
              </li>
              <li>
                • <code>animate-collapsible-down</code> - 접이식 컨텐츠 펼치기
              </li>
              <li>
                • <code>animate-collapsible-up</code> - 접이식 컨텐츠 접기
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-semibold text-2xl">6. 버튼 예제</h2>
        <p className="text-muted-foreground text-sm">
          tw-animate-css를 사용하여 버튼에 다양한 애니메이션 효과를 적용할 수 있습니다. 아래 버튼을
          클릭해보세요!
        </p>
        <div className="mt-4">
          <Button
            className="fade-in-0 animate-in duration-300 hover:scale-105"
            color="primary"
            onClick={() => alert("버튼 클릭!")}
          >
            클릭해보세요!
          </Button>
        </div>
        <div className="mt-4">
          <Button
            className="fade-in-0 animate-in duration-300 hover:scale-105"
            color="secondary"
            onClick={() => alert("버튼 클릭!")}
          >
            클릭해보세요!
          </Button>
        </div>
      </section>
    </div>
  )
}
