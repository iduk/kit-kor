import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

const data = [
  {
    name: "Jan",
    revenue: Math.floor(Math.random() * 3000) + 1000,
    profit: Math.floor(Math.random() * 2000) + 500,
    expenses: Math.floor(Math.random() * 1500) + 300,
  },
  {
    name: "Feb",
    revenue: Math.floor(Math.random() * 3000) + 1000,
    profit: Math.floor(Math.random() * 2000) + 500,
    expenses: Math.floor(Math.random() * 1500) + 300,
  },
  {
    name: "Mar",
    revenue: Math.floor(Math.random() * 3000) + 1000,
    profit: Math.floor(Math.random() * 2000) + 500,
    expenses: Math.floor(Math.random() * 1500) + 300,
  },
  {
    name: "Apr",
    revenue: Math.floor(Math.random() * 3000) + 1000,
    profit: Math.floor(Math.random() * 2000) + 500,
    expenses: Math.floor(Math.random() * 1500) + 300,
  },
  {
    name: "May",
    revenue: Math.floor(Math.random() * 3000) + 1000,
    profit: Math.floor(Math.random() * 2000) + 500,
    expenses: Math.floor(Math.random() * 1500) + 300,
  },
  {
    name: "Jun",
    revenue: Math.floor(Math.random() * 3000) + 1000,
    profit: Math.floor(Math.random() * 2000) + 500,
    expenses: Math.floor(Math.random() * 1500) + 300,
  },
  {
    name: "Jul",
    revenue: Math.floor(Math.random() * 3000) + 1000,
    profit: Math.floor(Math.random() * 2000) + 500,
    expenses: Math.floor(Math.random() * 1500) + 300,
  },
  {
    name: "Aug",
    revenue: Math.floor(Math.random() * 3000) + 1000,
    profit: Math.floor(Math.random() * 2000) + 500,
    expenses: Math.floor(Math.random() * 1500) + 300,
  },
  {
    name: "Sep",
    revenue: Math.floor(Math.random() * 3000) + 1000,
    profit: Math.floor(Math.random() * 2000) + 500,
    expenses: Math.floor(Math.random() * 1500) + 300,
  },
  {
    name: "Oct",
    revenue: Math.floor(Math.random() * 3000) + 1000,
    profit: Math.floor(Math.random() * 2000) + 500,
    expenses: Math.floor(Math.random() * 1500) + 300,
  },
  {
    name: "Nov",
    revenue: Math.floor(Math.random() * 3000) + 1000,
    profit: Math.floor(Math.random() * 2000) + 500,
    expenses: Math.floor(Math.random() * 1500) + 300,
  },
  {
    name: "Dec",
    revenue: Math.floor(Math.random() * 3000) + 1000,
    profit: Math.floor(Math.random() * 2000) + 500,
    expenses: Math.floor(Math.random() * 1500) + 300,
  },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
  profit: {
    label: "Profit",
    color: "var(--chart-2)",
  },
  expenses: {
    label: "Expenses",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function Overview() {
  return (
    <ChartContainer config={chartConfig} className="h-[350px] w-full">
      <BarChart data={data} barCategoryGap={8}>
        {/* 축/그리드 색도 토큰으로 통일 */}
        <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />

        <XAxis
          dataKey="name"
          tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v: number) => `$${v}`}
        />

        {/* ChartTooltip */}
        <ChartTooltip content={<ChartTooltipContent />} />

        {/* Multiple Bars */}
        <Bar dataKey="revenue" radius={[4, 4, 0, 0]} fill="var(--chart-1)" name="Revenue" />
        <Bar dataKey="profit" radius={[4, 4, 0, 0]} fill="var(--chart-2)" name="Profit" />
        <Bar dataKey="expenses" radius={[4, 4, 0, 0]} fill="var(--chart-3)" name="Expenses" />
      </BarChart>
    </ChartContainer>
  )
}
