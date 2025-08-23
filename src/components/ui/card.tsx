import { cn } from "@/lib/utils"

// import React, { useEffect, useRef, useState } from "react"

type CardProps = React.ComponentProps<"div"> & {
  enhanceA11y?: boolean
}

function Card({ className, enhanceA11y = false, ...props }: CardProps) {
  // const [isEnhanced, setIsEnhanced] = useState(false)
  // const cardRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   requestIdleCallback(() => {
  //     if (cardRef.current) {
  //       // 카드 크기에 따른 동적 스타일링
  //       const { width, height } = cardRef.current.getBoundingClientRect()
  //       const aspectRatio = width / height

  //       if (aspectRatio > 1.5) {
  //         cardRef.current.setAttribute("data-layout", "wide")
  //       } else if (aspectRatio < 0.7) {
  //         cardRef.current.setAttribute("data-layout", "tall")
  //       }

  //       setIsEnhanced(true)
  //     }
  //   })
  // }, [])

  // useEffect(() => {
  //   if (enhanceA11y && typeof window.requestIdleCallback === "function") {
  //     requestIdleCallback(() => {
  //       if (cardRef.current) {
  //         // 접근성 속성 추가
  //         const hasInteractiveContent = cardRef.current.querySelector(
  //           "button, a, input, select, textarea"
  //         )

  //         if (hasInteractiveContent) {
  //           cardRef.current.setAttribute("role", "region")
  //           cardRef.current.setAttribute("tabindex", "0")
  //         }

  //         const title = cardRef.current.querySelector('[data-slot="card-title"]')?.textContent
  //         if (title) {
  //           cardRef.current.setAttribute("aria-label", `카드: ${title}`)
  //         }
  //       }
  //     })
  //   }
  // }, [enhanceA11y])

  return (
    <div
      data-slot="card"
      // data-enhanced={isEnhanced}
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-4 md:gap-6 rounded-xl border py-4 md:py-6 shadow-sm",
        // isEnhanced && "transition-all duration-200",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1 md:gap-1.5 px-4 md:px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-4 md:[.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("px-4 md:px-6", className)} {...props} />
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center px-4 md:px-6 [.border-t]:pt-4 md:[.border-t]:pt-6",
        className
      )}
      {...props}
    />
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent }
