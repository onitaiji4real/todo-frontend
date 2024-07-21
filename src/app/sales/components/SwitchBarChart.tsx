"use client";

import * as React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import sales_data from "../data/sales_data.json";

const chartConfig = {
  Electronics: {
    label: "Electronics",
    color: "hsl(var(--chart-1))",
  },
  Clothing: {
    label: "Clothing",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function SwitchBarChart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("Electronics");

  const total = React.useMemo(
    () => ({
      Electronics: sales_data.sales
        .filter((item) => item.category === "Electronics")
        .reduce((acc, curr) => acc + curr.sales_amount, 0),
      Clothing: sales_data.sales
        .filter((item) => item.category === "Clothing")
        .reduce((acc, curr) => acc + curr.sales_amount, 0),
    }),
    []
  );

  const filteredData = React.useMemo(
    () => sales_data.sales.filter((item) => item.category === activeChart),
    [activeChart]
  );

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Total Sales </CardTitle>
          <CardDescription>
            Showing total sales amount for the last 5 days.
            <br /> Include Electronics & Clothing
          </CardDescription>
        </div>
        <div className="flex">
          {["Electronics", "Clothing"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[chart].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
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
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <YAxis />
            <Tooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="sales_amount"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Legend />
            <Bar dataKey="sales_amount" fill={chartConfig[activeChart].color} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
