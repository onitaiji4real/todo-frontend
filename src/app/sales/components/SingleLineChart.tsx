"use client";

import { TrendingUp } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface SalesData {
  date: string;
  category: string;
  units_sold: number;
  sales_amount: number;
}

interface SingleLineChartProps {
  data: SalesData[];
  category: string;
}

export function SingleLineChart({ data, category }: SingleLineChartProps) {
  const chartConfig = {
    [category]: {
      label: category,
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  const filteredData = data
    .filter((item) => item.category === category)
    .map((item) => ({
      date: item.date,
      units_sold: item.units_sold,
    }));
  return (
    <Card className=" w-[47%]">
      <CardHeader>
        <CardTitle>{category}</CardTitle>
        <CardDescription>{filteredData[0].date.slice(0, 7)}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={filteredData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={true}
              tickMargin={8}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />
            <YAxis />
            <Tooltip content={<ChartTooltipContent hideLabel />} />
            <Line
              dataKey="units_sold"
              type="natural"
              stroke={chartConfig[category].color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          {`Showing total ${category} sold for the last 5 days`}
        </div>
      </CardFooter>
    </Card>
  );
}
